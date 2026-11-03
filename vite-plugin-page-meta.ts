import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

/**
 * Link previews (WhatsApp, LinkedIn, Facebook, X, Slack…) read the raw HTML and
 * never run JavaScript, so the per-page `head()` meta set by TanStack Router is
 * invisible to them. After each build this plugin writes a copy of index.html
 * for every route with that page's title, description and thumbnail baked in.
 *
 * Source of truth stays in each route's `head()`; thumbnails live in public/og/<slug>.jpg.
 */

const SITE_URL = "https://royaventure.com";
const SITE_NAME = "Roya Ventures";
const DEFAULT_IMAGE = "home";

type PageMeta = { route: string; title: string; description: string; ogTitle: string; ogDescription: string };

const STR = String.raw`"((?:[^"\\]|\\.)*)"`;

function pick(src: string, re: RegExp): string | undefined {
  const m = src.match(re);
  return m ? (JSON.parse(`"${m[1]}"`) as string) : undefined;
}

function readRoutes(routesDir: string): PageMeta[] {
  const pages: PageMeta[] = [];
  for (const file of fs.readdirSync(routesDir)) {
    if (!file.endsWith(".tsx") || file.startsWith("__")) continue;
    const src = fs.readFileSync(path.join(routesDir, file), "utf8");
    const route = src.match(/createFileRoute\("([^"]+)"\)/)?.[1];
    if (!route || route.includes("$")) continue;
    const head = src.match(/head:\s*\(\)\s*=>\s*\(\{([\s\S]*?)\n\s{2}\}\),/)?.[1] ?? "";
    const title = pick(head, new RegExp(String.raw`title:\s*` + STR)) ?? SITE_NAME;
    const description =
      pick(head, new RegExp(String.raw`name:\s*"description",\s*content:\s*` + STR)) ?? "";
    pages.push({
      route,
      title,
      description,
      ogTitle: pick(head, new RegExp(String.raw`property:\s*"og:title",\s*content:\s*` + STR)) ?? title,
      ogDescription:
        pick(head, new RegExp(String.raw`property:\s*"og:description",\s*content:\s*` + STR)) ??
        description,
    });
  }
  return pages;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// "/" -> "home", "/services/" -> "services", "/services/it-services" -> "services-it-services"
const slugOf = (route: string) =>
  route.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";

function renderHead(page: PageMeta, outDir: string): string {
  const pathName = page.route === "/" ? "/" : page.route.replace(/\/$/, "");
  const url = SITE_URL + pathName;
  const slug = fs.existsSync(path.join(outDir, "og", `${slugOf(page.route)}.jpg`))
    ? slugOf(page.route)
    : DEFAULT_IMAGE;
  const image = `${SITE_URL}/og/${slug}.jpg`;
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(page.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(page.ogDescription)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(page.ogDescription)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join("\n    ");
}

export function pageMeta(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "page-meta",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const templatePath = path.join(outDir, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, "utf8");
      const pages = readRoutes(path.resolve(config.root, "src/routes"));

      for (const page of pages) {
        const html = template.replace(/<title>[\s\S]*?<\/title>/, renderHead(page, outDir));
        if (page.route === "/") {
          fs.writeFileSync(templatePath, html);
          continue;
        }
        // Write both /about.html and /about/index.html so either static-host convention works.
        const rel = page.route.replace(/^\/|\/$/g, "");
        fs.mkdirSync(path.join(outDir, rel), { recursive: true });
        fs.writeFileSync(path.join(outDir, rel, "index.html"), html);
        fs.writeFileSync(path.join(outDir, `${rel}.html`), html);
      }
      config.logger.info(`[page-meta] wrote link-preview HTML for ${pages.length} pages`);
    },
  };
}

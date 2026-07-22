import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Quote } from "lucide-react";
import heroClients from "@/assets/hero-clients.jpg";
import featureImage from "@/assets/svc-datacenter.jpg";

// Auto-import all 32 client logo asset pointers
const logoModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/clients*.jpg.asset.json",
  { eager: true },
);
const CLIENT_LOGOS = Object.entries(logoModules)
  .map(([path, mod]) => {
    const n = Number(path.match(/clients(\d+)\.jpg/)?.[1] ?? 0);
    return { n, url: mod.default.url };
  })
  .sort((a, b) => a.n - b.n);

// Global Luxury Brands — official logos
const luxuryModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/luxury/*.png.asset.json",
  { eager: true },
);
const LUXURY_LOGOS = Object.entries(luxuryModules)
  .map(([path, mod]) => {
    const name = path.match(/luxury\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Premium Fashion — official logos
const fashionModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/fashion/*.png.asset.json",
  { eager: true },
);
const FASHION_LOGOS = Object.entries(fashionModules)
  .map(([path, mod]) => {
    const name = path.match(/fashion\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Beauty & Cosmetics — official logos
const beautyModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/beauty/*.png.asset.json",
  { eager: true },
);
const BEAUTY_LOGOS = Object.entries(beautyModules)
  .map(([path, mod]) => {
    const name = path.match(/beauty\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Fragrance & Lifestyle — official logos
const fragranceModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/fragrance/*.png.asset.json",
  { eager: true },
);
const FRAGRANCE_LOGOS = Object.entries(fragranceModules)
  .map(([path, mod]) => {
    const name = path.match(/fragrance\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Hospitality & Restaurants — official logos
const hospitalityModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/hospitality/*.png.asset.json",
  { eager: true },
);
const HOSPITALITY_LOGOS = Object.entries(hospitalityModules)
  .map(([path, mod]) => {
    const name = path.match(/hospitality\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Corporate Clients — official logos
const corporateModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/corporate/*.png.asset.json",
  { eager: true },
);
const CORPORATE_LOGOS = Object.entries(corporateModules)
  .map(([path, mod]) => {
    const name = path.match(/corporate\/(.+)\.png\.asset\.json$/)?.[1] ?? "";
    return { name, url: mod.default.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));



export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Roya Ventures" },
      { name: "description", content: "A confidential roster of clients across five continents — from listed multinationals to founder-led enterprises and sovereign institutions." },
      { property: "og:title", content: "Clients — Roya Ventures" },
      { property: "og:description", content: "Trusted by leaders across industries and geographies." },
    ],
  }),
  component: ClientsPage,
});

const TESTIMONIALS = [
  {
    quote: "Roya brought a level of strategic clarity and discretion that few firms can match. They became an extension of our leadership team during a defining moment for the company.",
    name: "Chief Executive Officer",
    org: "Listed Industrial Group",
  },
  {
    quote: "Their counsel through the transaction was steady, candid and consistently aligned with our long-term interest. We would not have closed without them.",
    name: "Chair of the Board",
    org: "Family-Owned Conglomerate",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Uncompromising Discretion",
    body: "Strict confidentiality on every engagement — the foundation of leader-to-leader trust.",
  },
  {
    title: "Integrated Expertise",
    body: "From electrical to data centers and networking — one team, end-to-end accountability.",
  },
  {
    title: "Global Reach, Local Insight",
    body: "Forty markets, embedded regional knowledge — fluent across jurisdictions and cultures.",
  },
  {
    title: "Engineering-Grade Rigor",
    body: "Measurable standards for uptime, performance and cost — delivered on schedule, on budget.",
  },
];

// Client categories — assign logo numbers (1-32) to each category as they become available.
// Leave `logoIds` empty to render a "coming soon" placeholder for that category.
const CLIENT_CATEGORIES: { name: string; logoIds: number[]; logos?: { name: string; url: string }[] }[] = [
  { name: "Global Luxury Brands", logoIds: [], logos: LUXURY_LOGOS },
  { name: "Premium Fashion", logoIds: [], logos: FASHION_LOGOS },
  { name: "Beauty & Cosmetics", logoIds: [], logos: BEAUTY_LOGOS },
  { name: "Fragrance & Lifestyle", logoIds: [], logos: FRAGRANCE_LOGOS },
  { name: "Hospitality & Restaurants", logoIds: [], logos: HOSPITALITY_LOGOS },
  { name: "Corporate Clients", logoIds: [], logos: CORPORATE_LOGOS },
];


function ClientsPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our clients"
        title={<>A confidential roster of <span className="text-[var(--gold)]">global leaders</span>.</>}
        subtitle="From founder-led enterprises to listed multinationals and sovereign institutions, leaders entrust us with the moments that matter most."
        image={heroClients}
        height="compact"
      />

      {/* Why Choose Roya Ventures — split layout with editorial collage */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

        <div className="container-px mx-auto">
          <div className="grid gap-14 lg:gap-20 lg:grid-cols-12 items-center">
            {/* LEFT — Heading + concise principles list */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="gold-rule">Why choose Roya Ventures</p>
                <h2 className="heading-lg mt-5 text-[var(--navy)]">
                  The qualities that <em className="not-italic text-[var(--gold)]">define our practice.</em>
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed font-light text-muted-foreground max-w-xl">
                  Four commitments that shape every mandate — and the standard we hold ourselves to.
                </p>
                <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
              </Reveal>

              <ul className="mt-10 space-y-5">
                {DIFFERENTIATORS.map((d, i) => (
                  <Reveal key={d.title} delay={i * 0.05}>
                    <li
                      data-cursor="hover"
                      className="group relative flex items-start gap-5 pb-5 border-b border-[color-mix(in_oklab,var(--navy)_10%,transparent)] last:border-0 last:pb-0"
                    >
                      <div className="shrink-0 relative">
                        <div className="absolute inset-0 rounded-xl bg-[var(--gold)]/15 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative h-12 w-12 rounded-xl border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-white flex items-center justify-center transition-all duration-500 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10">
                          <span className="font-display text-[15px] font-semibold tracking-[0.05em] text-[var(--gold)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <h3 className="font-display text-lg leading-tight text-[var(--navy)]">
                          {d.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted-foreground">
                          {d.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* RIGHT — Single premium hero image */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="relative mx-auto w-full max-w-[600px]">
                  {/* Decorative backdrops */}
                  <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 h-60 w-60 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_18%,transparent),transparent_70%)] pointer-events-none" />

                  {/* Layered frame accent */}
                  <div className="absolute -top-4 -right-4 h-full w-full rounded-[2rem] border border-[var(--gold)]/25 pointer-events-none" />
                  <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-[color-mix(in_oklab,var(--navy)_18%,transparent)] pointer-events-none" />

                  {/* Image card */}
                  <div
                    data-cursor="hover"
                    className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5 shadow-[0_40px_100px_-30px_color-mix(in_oklab,var(--navy)_55%,transparent)] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_50px_120px_-30px_color-mix(in_oklab,var(--navy)_65%,transparent)]"
                  >
                    <div className="relative aspect-[4/5]">
                      <img
                        src={featureImage}
                        alt="Premium infrastructure expertise — Roya Ventures"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                      />
                      {/* Subtle navy gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/55 via-transparent to-transparent" />
                      {/* Bottom caption */}
                      <div className="absolute inset-x-0 bottom-0 p-8">
                        <div className="h-px w-10 bg-[var(--gold)] mb-3 transition-all duration-500 group-hover:w-16" />
                        <p className="font-display text-[11px] tracking-[0.28em] uppercase text-[var(--gold)]">
                          Infrastructure · Engineering
                        </p>
                        <p className="mt-1.5 font-display text-white text-xl leading-tight">
                          Mission-critical environments, delivered with precision.
                        </p>
                      </div>
                      {/* Gold corner accent */}
                      <div className="absolute top-6 right-6 h-12 w-12 border-t border-r border-[var(--gold)]/60 rounded-tr-lg" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>


        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      </section>

      {/* Premium categorized logo showcase */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="A Selection"
            title={<>A selection of <em className="not-italic text-[var(--gold)]">those we have served.</em></>}
            description="With permission, a selection of those we have served. Many engagements remain confidential. A representative sample of public-facing relationships is shown below."
          />

          <div className="mt-20 space-y-24">
            {CLIENT_CATEGORIES.map((category, catIndex) => {
              const categoryLogos = category.logos
                ? category.logos.map((l, i) => ({ key: l.name, url: l.url, alt: `${category.name} — ${l.name}`, i }))
                : CLIENT_LOGOS.filter((l) => category.logoIds.includes(l.n)).map((l, i) => ({
                    key: String(l.n),
                    url: l.url,
                    alt: `${category.name} client ${l.n}`,
                    i,
                  }));
              return (
                <Reveal key={category.name} delay={catIndex * 0.05}>
                  <div>
                    {/* Category heading */}
                    <div className="mb-10 flex flex-col items-center text-center">
                      <p className="font-display text-[11px] tracking-[0.32em] uppercase text-[var(--gold)]">
                        {String(catIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-3xl md:text-4xl text-[var(--navy)] tracking-[-0.01em] font-semibold">
                        {category.name}
                      </h3>
                      <div className="mt-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[color-mix(in_oklab,var(--gold)_40%,transparent)]" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
                        <span className="h-px w-8 bg-[color-mix(in_oklab,var(--gold)_40%,transparent)]" />
                      </div>
                    </div>

                    {/* Logo grid */}
                    {categoryLogos.length > 0 ? (
                      <div className="flex flex-wrap justify-center gap-5">
                        {categoryLogos.map((logo) => (
                          <Reveal
                            key={logo.key}
                            delay={(logo.i % 12) * 0.025}
                            className="w-[calc(50%-10px)] sm:w-[calc(33.333%-13.333px)] md:w-[calc(25%-15px)] lg:w-[calc(16.666%-16.666px)]"
                          >
                            <div
                              data-cursor="hover"
                              className="group relative aspect-square rounded-2xl bg-white border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex items-center justify-center p-3 sm:p-4 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-elegant)] overflow-hidden"
                            >
                              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                              <img
                                src={logo.url}
                                alt={logo.alt}
                                loading="lazy"
                                className="relative max-h-[88%] max-w-[92%] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                              />
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-[color-mix(in_oklab,var(--navy)_18%,transparent)] bg-white/50 py-16 px-6 text-center">
                        <p className="font-display text-sm tracking-[0.14em] uppercase text-[var(--navy)]/60">
                          Logos coming soon
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground italic max-w-md mx-auto">
                          Client logos for this category will be added in a future update.
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials — premium quote cards */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In their words"
            title={<>What our clients <em className="not-italic text-[var(--gold)]">say.</em></>}
            align="center"
          />
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="group relative overflow-hidden rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] p-10 md:p-14 h-full transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                  <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)] opacity-50" />
                  <Quote className="h-12 w-12 text-[var(--gold)]" strokeWidth={1.25} />
                  <blockquote className="mt-8 font-display text-xl md:text-2xl leading-[1.45] text-[var(--navy)] font-light tracking-[-0.015em]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-10 pt-8 border-t border-[color-mix(in_oklab,var(--navy)_10%,transparent)] flex items-center gap-4">
                    <div className="h-px w-8 bg-[var(--gold)]" />
                    <div>
                      <p className="font-semibold text-[var(--navy)]">{t.name}</p>
                      <p className="text-sm text-muted-foreground tracking-wide">{t.org}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Confidential by design"
        title="Speak with us about your mandate."
        description="Every conversation begins under confidentiality. Tell us what's at stake — we will respond personally."
        floating
      />
    </SiteLayout>
  );
}

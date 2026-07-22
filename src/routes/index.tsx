import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Cable, Cpu, Network, ShieldCheck, Flame, Code2, Activity, Zap, Server, Radio, Siren, KeyRound, MonitorPlay, ScanBarcode, ScanEye, HardDrive } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageServiceCard } from "@/components/site/ImageServiceCard";
import { StatGrid } from "@/components/site/StatGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { BrandEvolution } from "@/components/site/BrandEvolution";

import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/services-data";
import heroTech2 from "@/assets/hero-tech-2.jpg";
import heroKafd from "@/assets/hero/KAFD.jpg.asset.json";
import heroKafdResized from "@/assets/hero/KAFD-Resized.jpg.asset.json";
import heroKingdom from "@/assets/hero/Kingdom-Center.jpg.asset.json";
import heroKingdom2 from "@/assets/hero/Kingdom-Center_2.jpg.asset.json";
import heroRiyadh from "@/assets/hero/Riyadh_Skyline.jpg.asset.json";
import svcDatacenter from "@/assets/svc-datacenter.jpg";
import svcNetworking from "@/assets/svc-networking.jpg";
import svcFiber from "@/assets/svc-fiber.jpg";
import svcEms from "@/assets/svc-ems.jpg";
import svcSurveillance from "@/assets/svc-surveillance.jpg";
import svcFirefighting from "@/assets/svc-firefighting.jpg";
import svcElectrical from "@/assets/svc-electrical.jpg";
import svcIt from "@/assets/svc-it.jpg";
import team1 from "@/assets/team/Saudagar_Raza_CEO.png.asset.json";
import team2 from "@/assets/team/Khazi_Zafar_Chief_Strategic_Planning.jpeg.asset.json";
import team3 from "@/assets/team/Soudagar_Naveed_Procurement_Sales1.png.asset.json";
import team4 from "@/assets/team/Anas_COO.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roya Ventures — Technology Infrastructure & Engineering" },
      { name: "description", content: "Roya Ventures designs, builds and supports technology infrastructure — data centers, networks, security, electrical and IT systems for modern enterprise." },
      { property: "og:title", content: "Roya Ventures — Technology Infrastructure & Engineering" },
      { property: "og:description", content: "Data centers, networks, surveillance, electrical, fire protection and IT — engineered end to end." },
    ],
  }),
  component: HomePage,
});

const HERO_SLIDES = [
  { src: heroKafd.url, alt: "KAFD Riyadh skyline at dusk" },
  { src: heroKafdResized.url, alt: "King Abdullah Financial District towers at twilight" },
  { src: heroKingdom.url, alt: "Kingdom Centre tower rising above Riyadh" },
  { src: heroKingdom2.url, alt: "Kingdom Centre illuminated against the evening sky" },
  { src: heroRiyadh.url, alt: "Riyadh skyline panorama at sunset" },
];

// Featured services on the homepage — first six from the master list
const HOME_SERVICES = SERVICES.slice(0, 6);

const CAPABILITIES = [
  { icon: Network, name: "End-to-End Project Execution", desc: "From design through commissioning — one accountable partner across every discipline." },
  { icon: ShieldCheck, name: "Certified Professionals", desc: "Senior engineers with international certifications and decades of on-site delivery." },
  { icon: Activity, name: "Quality Assurance", desc: "Documented QA/QC processes, factory testing and full commissioning acceptance." },
  { icon: Cpu, name: "Innovative Engineering", desc: "Modern, standards-based designs — resilient, efficient and future-ready by intent." },
  { icon: Server, name: "Scalable Infrastructure", desc: "Systems architected to grow with your business — modular, upgradable, non-disruptive." },
  { icon: HardDrive, name: "Long-Term Support", desc: "AMCs, 24/7 monitoring and lifecycle maintenance that keep systems performing." },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

const TEAM_PREVIEW = [
  { img: team1.url, name: "Raza Saudagar", role: "Chief Executive" },
  { img: team2.url, name: "Khazi Zafar", role: "Chief Strategic & Planning" },
  { img: team4.url, name: "Anas Saudagar", role: "Chief of Operations" },
  { img: team3.url, name: "Saudagar Naveed", role: "Procurement & Sales" },
];

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      {/* Hero — full-bleed slider */}
      <section className="relative isolate min-h-[100vh] overflow-hidden bg-noise text-white flex items-end">
        <HeroSlider images={HERO_SLIDES} />

        {/* Layered overlays — lighter so imagery breathes through */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--navy-deep)]/72 via-[var(--navy-deep)]/45 to-[color-mix(in_oklab,var(--emerald-deep)_70%,var(--navy-deep))]/65" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/35 to-transparent" />

        {/* Decorative shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full border border-[var(--gold)]/12 float-shape" />
          <div className="absolute top-1/4 -right-20 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/08" />
          <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_45%,transparent),transparent_65%)] blur-2xl" />
          <div className="absolute right-12 top-24 hidden md:block h-[60%] w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
        </div>

        <div className="container-px mx-auto w-full pb-32 pt-44 md:pb-44 md:pt-52 relative">
          <div className="max-w-5xl">
            <p className="gold-rule reveal-soft" style={{ animationDelay: "0.05s" }}>
              Roya Ventures
            </p>
            <h1 className="heading-xl mt-8 text-white reveal" style={{ animationDelay: "0.15s" }}>
              Technology infrastructure, <span className="text-[var(--gold)]">engineered end to end.</span>
            </h1>
            <p
              className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-white/90 reveal font-light"
              style={{ animationDelay: "0.3s" }}
            >
              From data centers and enterprise networks to surveillance, electrical and IT systems —
              we design, build and support the systems that keep modern enterprises running.
            </p>
            <div
              className="mt-12 flex flex-wrap gap-5 reveal"
              style={{ animationDelay: "0.45s" }}
            >
              <Link to="/services" className="btn-primary btn-on-dark" data-cursor="hover">
                Explore our services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline-light btn-on-dark" data-cursor="hover">
                Request a consultation
              </Link>
            </div>
          </div>

          <div className="mt-20 hidden md:flex items-end justify-between gap-8 reveal-soft" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-4 text-white/65 text-xs tracking-[0.3em] uppercase">
              <span className="gold-divider" />
              <span>Infrastructure · Networks · Security · IT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Evolution — Spidernet is now Roya Ventures */}
      <BrandEvolution />





      {/* Introduction — The Firm */}
      <section id="firm" className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_18%,transparent),transparent_65%)] blur-3xl" />

        <div className="container-px mx-auto">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <p className="gold-rule">The Firm</p>
                <h2 className="heading-lg mt-8 leading-[1.05]">
                  One partner for the technology systems that <em className="not-italic text-[var(--gold)]">power your business.</em>
                </h2>
                <div className="mt-10 hairline max-w-[10rem]" />
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { k: "8+", v: "Years" },
                    { k: "400+", v: "Projects" },
                    { k: "11", v: "Practices" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="font-display text-3xl font-semibold text-[var(--navy)] tracking-[-0.03em]">{s.k}</div>
                      <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <Reveal delay={0.1}>
                <p className="text-xl md:text-2xl leading-[1.55] text-[var(--navy)] font-light text-left md:text-justify hyphens-auto">
                  Roya Ventures is a multidisciplinary technology and engineering solutions firm —
                  delivering data centers, networks, security, electrical and IT infrastructure
                  under a single, accountable mandate.
                </p>
                <p className="mt-8 text-base md:text-[17px] leading-[1.85] text-muted-foreground text-left md:text-justify hyphens-auto">
                  We work with enterprises, retailers, public institutions and developers to plan,
                  deploy and operate the physical and digital systems modern operations depend on.
                  Every engagement is delivered by senior engineers with full ownership of the
                  outcome — from initial design through commissioning and long-term support.
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/about" className="btn-ghost" data-cursor="hover">About the firm <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/team" className="btn-ghost" data-cursor="hover">Meet our people <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — editorial capability index */}
      <WhatWeDo />



      {/* Full-width feature image with floating quote panel */}
      <section className="relative isolate overflow-hidden">
        <div className="relative md:h-[80vh] w-full py-16 md:py-0">
          <img
            src={heroTech2}
            alt="Engineered data center infrastructure"
            loading="lazy"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/70 md:via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/40 md:to-transparent" />
          <div className="container-px mx-auto h-full relative flex items-center">
            <Reveal className="max-w-2xl">
              <p className="gold-rule text-[var(--gold)]">Engineering discipline</p>
              <p className="mt-6 md:mt-8 font-display text-xl sm:text-2xl md:text-5xl font-light leading-[1.25] md:leading-[1.15] tracking-[-0.025em] text-white">
                "We measure success in uptime, response time and the silence of systems that just
                work — long after our engineers have left the site."
              </p>
              <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5">
                <div className="h-px w-12 md:w-16 bg-[var(--gold)] shrink-0" />
                <p className="text-xs sm:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase text-white/70">The Roya Ventures Standard</p>
              </div>
            </Reveal>
          </div>
        </div>

      </section>

      {/* Capabilities — dark plaque, editorial capability manifesto */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
        <div className="container-px mx-auto">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-noise text-white shadow-[0_50px_120px_-40px_rgba(14,36,64,0.55)]"
            style={{ background: "linear-gradient(135deg, #0E2440 0%, #18314E 55%, #0F3A30 100%)" }}
          >
            {/* Ambient glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_65%)] blur-2xl" />
              <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_55%,transparent),transparent_65%)] blur-3xl" />
              <div className="absolute inset-0 opacity-[0.08] bg-grid-soft" />
              <div className="absolute top-10 right-10 h-40 w-40 rounded-full border border-[var(--gold)]/20" />
              <div className="absolute top-16 right-16 h-28 w-28 rounded-full border border-[var(--gold)]/10" />
            </div>
            {/* Gold hairline corner accents */}
            <span aria-hidden className="absolute top-6 left-6 h-6 w-6 border-t border-l border-[var(--gold)]/70" />
            <span aria-hidden className="absolute top-6 right-6 h-6 w-6 border-t border-r border-[var(--gold)]/70" />
            <span aria-hidden className="absolute bottom-6 left-6 h-6 w-6 border-b border-l border-[var(--gold)]/70" />
            <span aria-hidden className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-[var(--gold)]/70" />

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 p-8 md:p-14 lg:p-20">
              {/* Left — manifesto */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                <Reveal>
                  <p className="gold-rule text-[var(--gold)]">Capabilities</p>
                  <h2 className="heading-lg mt-8 text-white leading-[1.05]">
                    Why enterprises choose <em className="not-italic text-[var(--gold)]">Roya Ventures.</em>
                  </h2>
                  <div className="mt-8 h-px w-16 bg-[var(--gold)]" />
                  <p className="mt-8 text-[17px] leading-[1.85] text-white/75 font-light">
                    Beyond the disciplines we practice, our value is in how we execute — with senior
                    ownership, engineering rigour and a long-term commitment to the systems we deliver.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {["Senior-led", "Standards-driven", "Vendor-neutral", "Lifecycle support"].map((t) => (
                      <span key={t} className="text-[11px] tracking-[0.22em] uppercase px-3.5 py-2 rounded-full border border-[var(--gold)]/30 bg-white/[0.03] text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right — capability list */}
              <div className="lg:col-span-7 lg:self-center lg:pt-10">

                <ul className="grid gap-3 sm:grid-cols-2">
                  {CAPABILITIES.map(({ icon: Icon, name, desc }, i) => (
                    <Reveal key={name} delay={(i % 4) * 0.05}>
                      <li
                        className="group relative h-full rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--gold)]/50 hover:bg-white/[0.06]"
                        data-cursor="hover"
                      >
                        <span aria-hidden className="absolute left-0 top-5 bottom-5 w-[2px] bg-[var(--gold)] scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100 rounded-r" />
                        <div className="flex items-start gap-4">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/[0.06] text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] group-hover:rotate-[-4deg]">
                            <Icon className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2">
                              <span className="font-display text-[11px] tracking-[0.2em] text-[var(--gold)]/80">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-[15px] font-semibold text-white tracking-tight leading-snug">{name}</h3>
                            </div>
                            <p className="mt-2 text-[13px] leading-[1.7] text-white/65 font-light">{desc}</p>
                          </div>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — premium dark navy band */}
      <section
        className="relative section-y overflow-hidden text-white bg-noise"
        style={{
          background:
            "linear-gradient(135deg, #0E2440 0%, #18314E 45%, #0F3A30 100%)",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full border border-[var(--gold)]/15 float-shape" />
          <div className="absolute -bottom-32 -right-24 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/10" />
        </div>

        <div className="container-px mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionHeading
              eyebrow="By the numbers"
              title={<>Infrastructure delivered with <em className="not-italic text-[var(--gold)]">measurable rigour.</em></>}
              description="A track record built across data centers, enterprise networks and mission-critical systems."
              invert
            />
          </div>
          <StatGrid
            invert
            stats={[
              { value: "15", suffix: "+", label: "Years of engineering practice" },
              { value: "400", suffix: "+", label: "Projects delivered" },
              { value: "99.99", suffix: "%", label: "Average system uptime" },
              { value: "24", suffix: "/7", label: "Support and monitoring" },
            ]}
          />
        </div>
      </section>

      {/* Our People — premium executive cards */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-70" />
        <div className="container-px mx-auto">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end mb-20">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Our people"
                title={<>Senior engineers, architects and <em className="not-italic text-[var(--gold)]">technology specialists.</em></>}
                description="Roya Ventures is built around hands-on practitioners with decades of experience across infrastructure, networks and IT."
              />
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/team" className="btn-ghost" data-cursor="hover">Meet the team <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_PREVIEW.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="group relative h-full rounded-[1.25rem] overflow-hidden bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-700 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2" data-cursor="hover">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--navy)]">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-[var(--navy)] to-[var(--navy-deep)]">
                        <span className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[var(--gold)]/90 transition-transform duration-[1600ms] ease-out group-hover:scale-110">
                          {getInitials(p.name)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-[var(--navy-deep)]/10 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                  </div>
                  <div className="relative p-7 md:p-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] font-semibold">{p.role}</p>
                    <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-[var(--navy)] tracking-[-0.02em] leading-tight">{p.name}</h3>
                    <div className="mt-5 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Plan your next project"
        title="Tell us about the systems you need to build, secure or support."
      />

      <PartnersMarquee />
    </SiteLayout>
  );
}

// ============================================================
// What We Do — editorial capability index
//
// A compact, magazine-style two-column module: a large featured
// image on the left (which swaps as the active service changes),
// and a slim, numbered index of all 11 practices on the right.
// Rows are icon-led with a gold underline that animates on hover
// and drives the featured image / caption on the left.
// Collapses to a single-column list on mobile.
// ============================================================

const CAPABILITY_ICONS: Record<string, typeof Zap> = {
  "electrical-contracts": Zap,
  "data-center-setup": Server,
  "networking": Network,
  "ethernet-fiber-cabling": Cable,
  "fire-fighting": Flame,
  "ems-access-control": ShieldCheck,
  "surveillance-system": ScanEye,
  "digital-signage-footfall": MonitorPlay,
  "pos-hardware-software": ScanBarcode,
  "website-development-amcs": Code2,
  "it-services": HardDrive,
};

function WhatWeDo() {
  const items = SERVICES.slice(0, 6).map((s, i) => ({
    ...s,
    n: String(i + 1).padStart(2, "0"),
    Icon: CAPABILITY_ICONS[s.slug] ?? Cpu,
  }));
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
      {/* branded decorative backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft opacity-[0.35]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_65%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_18%,transparent),transparent_65%)] blur-3xl" />

      <div className="container-px mx-auto">
        {/* Editorial header row */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end mb-10 md:mb-14">
          <div className="md:col-span-8">
            <p className="eyebrow text-[var(--gold)]">What we do</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-light tracking-[-0.025em] leading-[1.05] text-[var(--navy)]">
              End-to-end engineering, technology and{" "}
              <em className="not-italic text-[var(--gold)]">infrastructure</em>{" "}
              — delivered as one practice.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right" />

        </div>

        {/* Two-column editorial: feature image ↔ capability index */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
          {/* LEFT — featured image / editorial caption */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              {/* Gold hairline corner accents */}
              <span aria-hidden className="absolute -top-3 -left-3 h-7 w-7 border-t border-l border-[var(--gold)]/70" />
              <span aria-hidden className="absolute -bottom-3 -right-3 h-7 w-7 border-b border-r border-[var(--gold)]/70" />

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-[1.25rem] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-elegant)] aspect-[4/5] bg-[var(--navy)]">
                {items.map((it, i) => (
                  <img
                    key={it.slug}
                    src={it.image}
                    alt={it.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={[
                      "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out",
                      i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
                    ].join(" ")}
                  />
                ))}
                {/* navy wash for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/25 to-transparent" />
                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--gold)] font-display text-2xl md:text-3xl font-light tracking-tight">
                      {current.n}
                    </span>
                    <span className="h-px flex-1 bg-[var(--gold)]/60" />
                    <span className="text-[10px] tracking-[0.28em] uppercase text-white/70">Practice</span>
                  </div>
                  <h3
                    key={`title-${current.slug}`}
                    className="mt-4 font-display text-2xl md:text-[28px] font-semibold text-white tracking-[-0.02em] leading-tight animate-fade-in"
                  >
                    {current.title}
                  </h3>
                  <p
                    key={`desc-${current.slug}`}
                    className="mt-3 text-[13px] md:text-sm leading-relaxed text-white/80 max-w-md animate-fade-in"
                  >
                    {current.short}
                  </p>
                </div>
              </div>

              {/* Footnote strip */}
              <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--navy)]/55">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span>Hover the index — the story updates</span>
              </div>
            </div>
          </div>

          {/* RIGHT — numbered capability index */}
          <div className="lg:col-span-7">
            <ul
              className="relative divide-y divide-[color-mix(in_oklab,var(--navy)_10%,transparent)] border-y border-[color-mix(in_oklab,var(--navy)_10%,transparent)]"
              onMouseLeave={() => setActive(0)}
            >
              {items.map((it, i) => {
                const isActive = i === active;
                return (
                  <li key={it.slug}>
                    <Link
                      to="/services"
                      data-cursor="hover"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group relative flex items-center gap-4 md:gap-6 py-4 md:py-[18px] px-1 md:px-3 transition-colors"
                    >
                      {/* Left gold rail on active */}
                      <span
                        aria-hidden
                        className={[
                          "absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--gold)] origin-top transition-transform duration-500",
                          isActive ? "scale-y-100" : "scale-y-0",
                        ].join(" ")}
                      />
                      {/* Number */}
                      <span
                        className={[
                          "font-display text-lg md:text-xl tracking-tight w-9 md:w-11 shrink-0 transition-colors duration-300",
                          isActive ? "text-[var(--gold)]" : "text-[var(--navy)]/35",
                        ].join(" ")}
                      >
                        {it.n}
                      </span>
                      {/* Icon chip */}
                      <span
                        className={[
                          "grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border shrink-0 transition-all duration-500",
                          isActive
                            ? "bg-[var(--navy)] border-[var(--gold)] text-[var(--gold)]"
                            : "bg-white border-[color-mix(in_oklab,var(--navy)_12%,transparent)] text-[var(--navy)] group-hover:border-[var(--gold)]/60",
                        ].join(" ")}
                      >
                        <it.Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                      </span>
                      {/* Title + subtitle */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3">
                          <h3
                            className={[
                              "font-display text-[17px] md:text-[19px] font-semibold tracking-[-0.01em] leading-tight transition-colors duration-300",
                              isActive ? "text-[var(--navy)]" : "text-[var(--navy)]/85 group-hover:text-[var(--navy)]",
                            ].join(" ")}
                          >
                            {it.title}
                          </h3>
                        </div>
                        <p className="mt-1 hidden md:block text-[13px] leading-snug text-muted-foreground truncate">
                          {it.short}
                        </p>
                      </div>
                      {/* Arrow / underline indicator */}
                      <span
                        aria-hidden
                        className={[
                          "hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] transition-all duration-500",
                          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
                        ].join(" ")}
                      >
                        <span className="h-px w-8 bg-[var(--gold)]" />
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-center justify-between gap-6">
              <p className="text-[13px] text-muted-foreground max-w-sm">
                A single accountable partner for the systems that keep modern
                organisations powered, connected and secure.
              </p>
              <Link to="/services" className="btn-ghost shrink-0" data-cursor="hover">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



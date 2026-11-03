import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Reveal } from "@/components/site/Reveal";
import {
  Target,
  Eye,
  Ear,
  PencilRuler,
  Wrench,
  ShieldCheck,
  TrendingUp,
  Headset,
  Quote,
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import aboutMission from "@/assets/our-mission.png";
import aboutVision from "@/assets/about-vision.jpg";
import featureLeadership from "@/assets/feature-leadership.jpg";
import ceoPortrait from "@/assets/ceo-raza-saudagar.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Roya Ventures" },
      {
        name: "description",
        content:
          "Discover the people, principles and history behind Roya Ventures, an international corporate advisory firm built around enduring counsel.",
      },
      { property: "og:title", content: "About Roya Ventures" },
      {
        property: "og:description",
        content: "An international advisory firm built around enduring counsel.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Ear,
    title: "Listen & Understand",
    text: "We start by asking the right questions. What’s working? What isn’t? Where are the bottlenecks and operational challenges? We take the time to understand your business, identify the root causes, and uncover opportunities for improvement.",
  },
  {
    icon: PencilRuler,
    title: "Design with Purpose",
    text: "We develop tailored solutions aligned with your operational needs, business objectives, future growth plans, and budget. Every design is practical, scalable, and built around how your business actually operates.",
  },
  {
    icon: Wrench,
    title: "Build It Right",
    text: "We believe in doing things right the first time. No shortcuts. No disconnected, piecemeal solutions. We integrate every component into a cohesive system, with proper cabling, configuration, and implementation.",
  },
  {
    icon: ShieldCheck,
    title: "Test & Validate",
    text: "Before handover, we rigorously test every component and integration to ensure everything performs as intended. We validate functionality, reliability, and readiness under real-world operating conditions.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    text: "As your business evolves, your infrastructure should evolve with it. We help you expand locations, increase capacity, and optimize performance through flexible, scalable solutions designed to support growth without disruption.",
  },
  {
    icon: Headset,
    title: "Support for the Long Term",
    text: "Our commitment doesn’t end at installation. We provide ongoing monitoring, maintenance, upgrades, and responsive technical support to keep your systems reliable, secure, and performing at their best.",
  },
];

function AboutPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Who We <span className="text-[var(--gold)]">Are</span>
          </>
        }
        subtitle=" We solve infrastructure problems by thinking in systems. Serving enterprise and retail clients across Saudi Arabia and internationally with integrated IT, security, and network solutions."
        image={heroAbout}
      />

      {/* Overview — asymmetric editorial split */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">Company Overview</p>
              <h2 className="heading-sub-lg mt-6">
                Trusted Enterprise Infrastructure and Tech Solutions Partner in{" "}
                <em className="not-italic text-[var(--gold)]">KSA & International</em>
              </h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-7">
            <p className="lg:mt-16 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Roya Ventures is a Saudi Arabia-based technology and engineering company with 8+ years
              of delivering mission-critical infrastructure for enterprises, institutions, and
              developers. We handle everything from initial design to long-term support. So you
              never have to chase multiple vendors for answers.
            </p>
            {/* <p className="text-base text-muted-foreground leading-relaxed">
              Our partners have led mandates across more than forty markets, advising on
              transactions and programmes that have shaped industries. The firm remains independent
              by design, ensuring every recommendation is made in the singular interest of the
              client.
            </p> */}
          </Reveal>
        </div>
      </section>

      {/* Full-width leadership image with floating panel */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[55vh] md:h-[70vh] w-full">
          <img
            src={featureLeadership}
            alt="Executive leadership team in discussion"
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/30 to-transparent" />
        </div>
        {/* Floating panel that overlaps */}
        <div className="container-px mx-auto relative -mt-32 md:-mt-44 mb-24 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-elegant)] p-7 sm:p-10 md:p-14">
              <p className="gold-rule">About Us — Roya Ventures</p>
              <p className="mt-7 font-display text-base md:text-lg font-light leading-[1.7] tracking-[-0.02em] text-[var(--navy)]">
                Roya Ventures is a MISA‑registered international advisory and integration firm
                bridging Saudi Arabia and India through technology, infrastructure, and strategic
                investment. Built on decades of counsel and execution excellence, we combine
                senior‑level insight with hands‑on delivery across enterprise systems, ELV, data
                centers, and smart‑market solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-elegant)] p-7 sm:p-10 md:p-14">
              <p className="gold-rule">Our Philosophy</p>
              <p className="mt-7 font-display text-base md:text-lg font-light leading-[1.7] tracking-[-0.02em] text-[var(--navy)]">
                Our philosophy is simple — measured counsel, not deliverables. We believe in
                partnerships that endure, solutions that scale, and ventures that reflect the
                highest standards of quality and compliance. Roya Ventures continues the legacy of
                SpiderNet, maintaining the same technology, personnel, and standards while expanding
                into premium‑first ventures that define the next era of integrated innovation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message from the CEO — portrait + quote split */}
      <section className="section-y relative isolate overflow-hidden bg-[var(--stone)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_8%,transparent),transparent_60%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full border border-[var(--gold)]/25"
        />
        <div className="container-px mx-auto grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-2xl border border-[var(--gold)]/40 -z-10" />
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <img
                  src={ceoPortrait}
                  alt="Raza Saudagar, Chief Executive Officer of Roya Ventures"
                  width={1254}
                  height={1254}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-[1800ms] hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="gold-rule">Message from the CEO</p>
            <Quote
              aria-hidden
              strokeWidth={1}
              className="mt-10 h-14 w-14 text-[var(--gold)] rotate-180"
            />
            <blockquote className="mt-6 font-display text-xl md:text-2xl font-light leading-[1.5] tracking-[-0.02em] text-[var(--navy)]">
              At Roya Ventures, our mission is to transform how technology and business converge
              across borders. We stand for precision, trust, and long‑term value — empowering
              organizations to build with confidence and lead with clarity.
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--gold)]" />
              <div>
                <p className="font-display text-xl text-[var(--navy)]">Raza Saudagar</p>
                <p className="mt-1 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  CEO, Roya Ventures
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision — premium image-content split */}
      <section
        className="section-y relative overflow-hidden"
        style={{ background: "var(--grad-ivory)" }}
      >
        <div className="container-px mx-auto space-y-28 md:space-y-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img
                    src={aboutMission}
                    alt="Strategic review"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-[var(--gold)]">Our Mission</p>
              </div>
              <h3 className="heading-lg mt-7">
                Building Infrastructure That Lasts
                {/* <em className="not-italic text-[var(--gold)]">consequential decisions.</em> */}
              </h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                To deliver integrated infrastructure and technology solutions that support Saudi
                Arabia's modernization and enable ambitious enterprises to operate without limits.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal delay={0.1} className="lg:col-span-6 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img
                    src={aboutVision}
                    alt="Modern boardroom interior"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-[var(--gold)]">Our Expertise</p>
              </div>
              <h3 className="heading-lg mt-7">
                What We <em className="not-italic text-[var(--gold)]">Actually Do</em>
              </h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                We build and maintain integrated infrastructure systems that enable enterprise and
                retail operations to scale reliably. Whether it's IT infrastructure, IP
                surveillance, networking, or data centre solutions, we handle complete deployments
                across single or multiple locations, then provide long-term support so your systems
                keep working. Systems that work. Infrastructure that lasts.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — premium image-led card grid */}
      <section
        className="section-y relative overflow-hidden"
        style={{ background: "var(--grad-ivory)" }}
      >
        <div className="absolute inset-0 -z-10 bg-radial-gold opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full border border-[var(--gold)]/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_15%,transparent),transparent_65%)] blur-3xl"
        />
        <div className="container-px mx-auto relative">
          <SectionHeading
            // eyebrow="Core values"
            title={<>Our Approach</>}
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <div
                  className="group relative h-full rounded-[1.25rem] bg-white border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/60 overflow-hidden"
                  data-cursor="hover"
                >
                  {/* Corner gold glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />

                  {/* Decorative visual header */}
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy)] to-[color-mix(in_oklab,var(--emerald-deep)_70%,var(--navy-deep))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_60%)]" />
                    <div className="absolute inset-0 bg-noise opacity-50" />
                    {/* Faint grid pattern */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #ffffff22 1px, transparent 1px), linear-gradient(to bottom, #ffffff22 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* Floating gold ring */}
                    <div
                      aria-hidden
                      className="absolute -top-10 -left-10 h-40 w-40 rounded-full border border-[var(--gold)]/25"
                    />
                    {/* Large watermark icon */}
                    <Icon
                      aria-hidden
                      strokeWidth={0.7}
                      className="absolute -right-6 -bottom-10 h-52 w-52 text-[var(--gold)]/20 transition-transform duration-[1200ms] group-hover:scale-110 group-hover:-rotate-3"
                    />
                    {/* Number marker + label */}
                    <div className="absolute top-6 left-7 flex items-center gap-3">
                      <span className="font-display text-xs tracking-[0.4em] uppercase text-[var(--gold)]/90">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-[var(--gold)]/60" />
                    </div>
                    {/* Title overlaid on the visual */}
                    <h3 className="absolute bottom-6 left-7 right-28 font-display text-2xl font-light tracking-tight text-white">
                      {title}
                    </h3>
                    {/* Gold hairline at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="relative p-9 md:p-10">
                    {/* Floating icon chip overlapping the header */}
                    <div className="absolute -top-9 right-8 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border border-[var(--gold)]/45 bg-white text-[var(--emerald-deep)] shadow-[var(--shadow-elegant)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-white group-hover:border-[var(--gold)] group-hover:-rotate-6">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <p className="text-muted-foreground leading-[1.85] text-[15px]">{text}</p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
                      <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--navy)]/55">
                        Principle
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin a conversation"
        title="Ready to Build Infrastructure that Actually Works?
"
      />

      <PartnersMarquee />
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Flame,
  Droplets,
  BellRing,
  Lightbulb,
  Gauge,
  Building2,
  Factory,
  Landmark,
  Store,
  HeartPulse,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import heroFire from "@/assets/svc-firefighting.jpg";
import fireSuppression from "@/assets/fire/fire-suppression.jpg";
import fireSprinkler from "@/assets/fire/fire-sprinkler.jpg";
import fireAlarm from "@/assets/fire/fire-alarm.jpg";
import fireExit from "@/assets/fire/fire-exit.jpg";
import firePump from "@/assets/fire/fire-pump.jpg";
import fireEngineer from "@/assets/fire/fire-engineer.jpg";
import fireHose from "@/assets/fire/fire-hose.jpg";
import logoChalhoub from "@/assets/clients/corporate/chalhoub.png";
import logoSephora from "@/assets/clients/corporate/sephora-2.png";
import logoDominos from "@/assets/clients/hospitality/dominos.png";
import shotRetail from "@/assets/projects/chalhoub-retail/prada.png";
import shotStore from "@/assets/projects/sephora/Sephora_Olaya.png";
import shotSite from "@/assets/projects/nesma/nesma-crew.png";

export const Route = createFileRoute("/services/fire-fighting")({
  head: () => ({
    meta: [
      { title: "Fire Fighting Contractor in Saudi Arabia — Roya Ventures" },
      {
        name: "description",
        content:
          "Fire fighting contractor in Saudi Arabia — suppression systems, sprinklers, fire alarms, emergency lighting, pumps and hydrants installed to Saudi Civil Defence standards.",
      },
      {
        property: "og:title",
        content: "Fire Fighting Contractor in Saudi Arabia — Roya Ventures",
      },
      {
        property: "og:description",
        content:
          "Install and maintain fire fighting systems that meet Saudi Civil Defence standards, delivered by certified engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FireFightingPage,
});

const TRUST = [
  "10+ Years in the Field",
  "Certified Engineers",
  "All Project Sizes",
  "Saudi Arabia & Beyond",
];

const OFFERINGS = [
  {
    icon: Flame,
    title: "Fire Suppression Systems (Gas & Chemical)",
    text: "We provide clean agent and CO2 suppression systems that extinguish fires fast without destroying what's inside.",
    image: fireSuppression,
  },
  {
    icon: Droplets,
    title: "Sprinkler Systems",
    text: "We build hydraulically calculated sprinkler layouts, supply the right components and install systems that activate when required.",
    image: fireSprinkler,
  },
  {
    icon: BellRing,
    title: "Fire Alarm & Detection Systems",
    text: "We develop addressable fire alarm systems that identify exactly where a fire or smoke is occurring.",
    image: fireAlarm,
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting & Exit Signs",
    text: "We install emergency lighting and exit signage systems that activate automatically and guide people safely out of the building.",
    image: fireExit,
  },
  {
    icon: Gauge,
    title: "Fire Fighting Pumps & Hydrants",
    text: "We design, supply, and install fire pump sets and hydrant systems sized correctly for your building's fire load.",
    image: firePump,
  },
];

const WHY = [
  { title: "10+ Years of Industry Success" },
  { title: "Quality Control, Security & Compliance Assurance" },
  { title: "Certified Engineers" },
  { title: "Advanced Technologies Used" },
  { title: "Reporting and Support" },
];

const PROCESS: [string, string][] = [
  [
    "Risk Assessment & Design",
    "We produce a detailed fire protection design that meets Saudi Civil Defence requirements and actually suits your facility.",
  ],
  [
    "Authority Approval",
    "We handle the design submission and approval process with the relevant authorities.",
  ],
  [
    "Supply & Installation",
    "We supply equipment from approved manufacturers and install every component to specification.",
  ],
  [
    "Testing & Commissioning",
    "Every system is tested before handover, and we check everything works exactly as designed.",
  ],
  [
    "We Stay Available",
    "We offer Annual Maintenance Contracts that include scheduled inspections, testing, component checks, and certification renewals.",
  ],
];

const INDUSTRIES = [
  { icon: Building2, title: "Corporate Offices" },
  { icon: Factory, title: "Industrial & Manufacturing" },
  { icon: Landmark, title: "Government & Public Sectors" },
  { icon: Store, title: "Retail Chains & Shopping Malls" },
  { icon: HeartPulse, title: "Healthcare" },
];

const FAQS: [string, string][] = [
  [
    "Do you handle the Civil Defence approval process?",
    "Yes. We prepare and submit the required documentation for Saudi Civil Defence approval as part of our standard project process.",
  ],
  [
    "Can you assess an existing fire system?",
    "Yes. We inspect existing systems, identify gaps, non-compliances, and maintenance issues, and give you a clear report on what needs attention and why.",
  ],
  [
    "How often does a fire system need to be maintained?",
    "Saudi Civil Defence requires annual inspection and testing.",
  ],
  [
    "Do you work on existing buildings or only new builds?",
    "Both. We upgrade and expand fire protection systems in occupied buildings.",
  ],
  [
    "What happens if our system fails a Civil Defence inspection?",
    "We work with you to identify exactly what failed and why, and we rectify it quickly.",
  ],
  [
    "What happens after I book a call?",
    "Once you book a call, we'll schedule an appointment and offer a free consultation.",
  ],
];

function FireFightingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Fire fighting"
        title={
          <>
            Fire Fighting Contractor in <span className="text-[var(--gold)]">Saudi Arabia</span>
          </>
        }
        subtitle="As a fire-fighting solutions provider, we help businesses install and maintain fire fighting systems that meet Saudi Civil Defence standards."
        image={heroFire}
        height="compact"
      >
        <Link to="/contact" className="btn-primary btn-on-dark">
          Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TRUST.map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.05] backdrop-blur-sm px-4 py-3 text-sm text-white/85"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={1.6} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
            <Reveal>
              <p className="gold-rule">Overview</p>
              <h2 className="heading-sub-lg mt-6">Fire Fighting Contractor Overview</h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-[17px] leading-[1.85] text-muted-foreground lg:pt-6">
                If you're seeing failed safety inspections, it's usually because of non-compliant
                fire suppression systems. What you want is guaranteed code compliance, safety and
                protecting your assets. Here's how you get it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="section-y bg-[var(--stone)] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_70%)]"
        />
        <div className="container-px mx-auto relative">
          <SectionHeading
            eyebrow="Services breakdown"
            title={<>What We Offer</>}
            description="Our custom fire fighting services deliver tailored solutions that align perfectly with your unique business requirements."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.07} className="h-full">
                <article
                  className="group relative h-full min-h-[20rem] md:min-h-[22rem] overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]"
                  data-cursor="hover"
                >
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--navy)_92%,transparent)] via-[color-mix(in_oklab,var(--navy)_45%,transparent)] to-[color-mix(in_oklab,var(--navy)_12%,transparent)]" />
                  <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--navy)_45%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute right-6 top-6 font-display text-xs tracking-[0.35em] text-white/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--gold)]/45 bg-[color-mix(in_oklab,var(--gold)_14%,transparent)] text-[var(--gold)] backdrop-blur-sm transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      <o.icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                      {o.title}
                    </h3>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
                      <p className="overflow-hidden text-[15px] leading-[1.7] text-white/85">
                        {o.text}
                      </p>
                    </div>
                    <div className="mt-6 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[var(--gold)]/45" />
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Fire Fighting Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section
        className="relative section-y overflow-hidden bg-noise text-white"
        style={{ background: "linear-gradient(135deg, #0B1F36 0%, #0E2440 45%, #0F3A30 100%)" }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Why us"
            title={<>Why Clients Choose Roya Ventures as Their Fire Fighting Vendor?</>}
            description="Here's what makes us different."
            invert
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 items-start">
            {/* Visual column */}
            <Reveal>
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-elegant)]">
                  <img
                    src={fireEngineer}
                    alt="Certified engineer inspecting a fire protection system"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-[20rem] md:h-[25rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--navy)_85%,transparent)] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[var(--gold)]">
                      10+
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/70">
                      Years in the field
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { src: fireHose, alt: "Fire hose reel cabinet and extinguisher station" },
                    { src: fireSprinkler, alt: "Sprinkler heads and red sprinkler pipework" },
                  ].map((im) => (
                    <div
                      key={im.alt}
                      className="group relative overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={im.src}
                        alt={im.alt}
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="h-32 md:h-[9.5rem] w-full object-cover opacity-85 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[var(--gold)]/45" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Feature cards */}
            <div className="space-y-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div
                    className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-sm p-6 md:p-7 transition-all duration-500 hover:bg-white/[0.08] hover:border-[var(--gold)]/45 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
                    data-cursor="hover"
                  >
                    <div
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-semibold leading-snug text-white">
                        {w.title}
                      </h3>
                      <div className="mt-4 h-px w-10 bg-[var(--gold)]/70 transition-all duration-500 group-hover:w-20" />
                    </div>
                    <span className="shrink-0 font-display text-2xl md:text-3xl font-semibold tracking-tight text-transparent [-webkit-text-stroke:1.5px_var(--gold)] opacity-50 transition-all duration-500 group-hover:opacity-100">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/contact" className="btn-primary btn-on-dark">
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Our process"
            title={<>Process of How We Work</>}
            description="We deliver fire protection solutions addressed in a precise sequence for measurable outcomes."
          />
          <div className="mt-14 relative mx-auto max-w-7xl">
            <div
              aria-hidden
              className="absolute left-[1.4rem] top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-[1.4rem] lg:bottom-auto lg:h-px lg:w-auto bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--gold)_60%,transparent)_12%,color-mix(in_oklab,var(--gold)_60%,transparent)_88%,transparent)] lg:bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent)_10%,color-mix(in_oklab,var(--gold)_60%,transparent)_90%,transparent)]"
            />
            <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-5 items-start">
              {PROCESS.map(([title, text], i) => {
                const isActive = activeStep === i;
                return (
                  <Reveal key={title} delay={i * 0.08} as="li">
                    <div
                      className="group relative"
                      data-cursor="hover"
                      onMouseEnter={() => setActiveStep(i)}
                      onMouseLeave={() => setActiveStep(null)}
                      onClick={() => setActiveStep(isActive ? null : i)}
                    >
                      <div className="absolute left-0 top-1 lg:static lg:mx-auto lg:mb-6 lg:flex lg:justify-center">
                        <div
                          className={`relative grid h-11 w-11 place-items-center rounded-full border font-display text-xs tracking-[0.08em] shadow-[0_10px_28px_-14px_color-mix(in_oklab,var(--gold)_80%,transparent)] transition-all duration-500 ${
                            isActive
                              ? "bg-[var(--gold)] text-[var(--navy)] scale-110 border-[var(--gold)]"
                              : "border-[var(--gold)]/50 bg-[var(--ivory)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] group-hover:scale-110"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                          <span
                            aria-hidden
                            className={`pointer-events-none absolute inset-0 rounded-full ring-1 ring-[var(--gold)]/35 scale-100 transition-all duration-700 ${
                              isActive
                                ? "scale-[1.55] opacity-100"
                                : "opacity-0 group-hover:scale-[1.55] group-hover:opacity-100"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="pl-[4.25rem] lg:pl-0">
                        <div
                          className={`relative overflow-hidden rounded-2xl border bg-card/85 backdrop-blur-sm p-6 shadow-[var(--shadow-card)] transition-all duration-500 ${
                            isActive
                              ? "border-[var(--gold)]/45 shadow-[var(--shadow-elegant)]"
                              : "border-[color-mix(in_oklab,var(--navy)_9%,transparent)] group-hover:border-[var(--gold)]/45"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[6rem] font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_color-mix(in_oklab,var(--gold)_45%,transparent)] transition-all duration-700 ${
                              isActive ? "opacity-25" : "opacity-[0.14] group-hover:opacity-25"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div
                            className={`h-px bg-[var(--gold)] transition-all duration-500 ${
                              isActive ? "w-16" : "w-8 group-hover:w-16"
                            }`}
                          />
                          <h3 className="mt-4 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--navy)] lg:flex lg:min-h-[3.4rem] lg:items-start">
                            {title}
                          </h3>
                          <div
                            className={`grid transition-all duration-500 ease-out ${
                              isActive
                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <p className="overflow-hidden text-[14px] leading-[1.7] text-muted-foreground">
                              {text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y bg-[var(--stone)] bg-blueprint">
        <div className="container-px mx-auto">
          <SectionHeading eyebrow="Sectors" title={<>Industries We Serve</>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.title} delay={(i % 3) * 0.07}>
                  <div
                    className="group flex h-full items-center gap-5 rounded-2xl bg-card p-7 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-elegant)]"
                    data-cursor="hover"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--gold)]/35 text-[var(--gold)] transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-[var(--navy)]">
                      {ind.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted across the region */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <p className="gold-rule">Track record</p>
              <h2 className="heading-lg mt-6">Trusted Across the Region</h2>
              <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-muted-foreground">
                For over 10+ years, enterprises and institutions across Saudi Arabia have trusted
                Roya Ventures to power their operations.
              </p>
              <div className="mt-8 gold-divider" />
              <Reveal>
                <div className="mt-16 grid grid-cols-3 gap-5">
                  {[logoChalhoub, logoSephora, logoDominos].map((logo, i) => (
                    <div
                      key={i}
                      className="grid place-items-center rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40"
                    >
                      <img
                        src={logo}
                        alt="Client logo"
                        className="h-10 md:h-12 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-gradient-to-br from-white to-[var(--stone)] p-9 shadow-[var(--shadow-card)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
                <p className="gold-rule">Project highlight</p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-[var(--navy)]">
                  Retail Chain, Riyadh
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
                  Full fire-alarm, sprinkler, emergency lighting across 12 branches. Delivered on
                  time.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[shotRetail, shotStore, shotSite].map((img, i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-xl border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/45 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <img
                        src={img}
                        alt="Completed infrastructure project"
                        loading="lazy"
                        className="h-20 sm:h-24 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <Link to="/projects" className="btn-primary mt-7 inline-flex">
                  See More Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y bg-[var(--stone)] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_70%)]"
        />
        <div className="container-px mx-auto relative">
          <SectionHeading eyebrow="FAQs" title={<>Frequently asked questions</>} />
          <div className="mt-14 mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
              {FAQS.map(([q, a], i) => (
                <AccordionItem
                  key={q}
                  value={`item-${i}`}
                  className="group relative overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-[color-mix(in_oklab,var(--card)_92%,transparent)] backdrop-blur-sm shadow-[var(--shadow-card)] transition-all duration-500 hover:border-[var(--gold)]/45 hover:shadow-[var(--shadow-elegant)] data-[state=open]:border-[var(--gold)]/50 data-[state=open]:shadow-[var(--shadow-elegant)]"
                  data-cursor="hover"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[state=open]:opacity-100"
                  />
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="group/trigger flex flex-1 items-center gap-4 md:gap-6 px-5 md:px-8 py-6 text-left cursor-pointer">
                      <span className="hidden sm:block font-display text-2xl md:text-3xl font-semibold tracking-tight text-transparent [-webkit-text-stroke:1.5px_var(--gold)] opacity-45 transition-all duration-500 group-hover:opacity-80 group-data-[state=open]:opacity-100">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-base md:text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--navy)]">
                        {q}
                      </span>
                      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)]/10 group-data-[state=open]:bg-[var(--gold)] group-data-[state=open]:text-[var(--navy)] group-data-[state=open]:rotate-180">
                        <Plus className="h-4 w-4 transition-opacity duration-300 group-data-[state=open]:opacity-0" />
                        <Minus className="absolute h-4 w-4 opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
                      </span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="px-5 md:px-8 pb-7 pt-0">
                    <div className="gold-divider mb-5" />
                    <p className="text-[15px] md:text-base leading-[1.8] text-muted-foreground sm:pl-[3.25rem]">
                      {a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[var(--ivory)] py-20 md:py-28">
        <div className="container-px mx-auto">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] ring-1 ring-[var(--gold)]/25 shadow-[0_50px_120px_-30px_color-mix(in_oklab,var(--navy)_55%,transparent)]">
            <div className="relative isolate overflow-hidden bg-noise text-center">
              <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
              <div className="px-8 md:px-14 py-16 md:py-20">
                <p className="gold-rule-center">Next step</p>
                <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-white">
                  Fire Fighting Starts with the Right Partner
                </h2>
                <p className="mt-5 mx-auto max-w-xl text-white/75 text-base md:text-lg leading-relaxed font-light">
                  Roya Ventures helps organisations design, install, and maintain fire fighting
                  services for long-term business value.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link to="/contact" className="btn-primary btn-on-dark">
                    Book a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

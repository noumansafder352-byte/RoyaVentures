import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Monitor,
  ScanLine,
  CreditCard,
  Store,
  UtensilsCrossed,
  Cloud,
  Building2,
  Scissors,
  ShoppingCart,
  Coffee,
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
import heroPos from "@/assets/svc-pos.jpg";
import posTerminals from "@/assets/pos/pos-terminals.jpg";
import posKiosk from "@/assets/pos/pos-kiosk.jpg";
import posPayment from "@/assets/pos/pos-payment.jpg";
import posRetailSoftware from "@/assets/pos/pos-retail-software.jpg";
import posRestaurant from "@/assets/pos/pos-restaurant.jpg";
import posCloud from "@/assets/pos/pos-cloud.jpg";
import posEngineer from "@/assets/pos/pos-engineer.jpg";
import logoChalhoub from "@/assets/clients/corporate/chalhoub.png";
import logoSephora from "@/assets/clients/corporate/sephora-2.png";
import logoNesma from "@/assets/clients/corporate/nesma-telecom.png";
import shotCafe1 from "@/assets/projects/cafe/cafe-new-3.png";
import shotCafe2 from "@/assets/projects/cafe/cafe-new-4.png";
import shotCafe3 from "@/assets/projects/cafe/cafe-new-5.png";

export const Route = createFileRoute("/services/pos-hardware-software")({
  head: () => ({
    meta: [
      { title: "POS Hardware and Software Services in Saudi Arabia — Roya Ventures" },
      {
        name: "description",
        content:
          "POS hardware and software company in Saudi Arabia — terminals, self-checkout kiosks, payment terminals, retail and F&B POS software, and multi-branch cloud POS.",
      },
      {
        property: "og:title",
        content: "POS Hardware and Software Services in Saudi Arabia — Roya Ventures",
      },
      {
        property: "og:description",
        content:
          "Fast, reliable and perfectly integrated POS ecosystems — supplied, configured, installed and supported across Saudi Arabia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/pos-hardware-software" }],
  }),
  component: PosServicePage,
});

const TRUST = [
  "10+ Years in the Field",
  "Certified Engineers",
  "All Project Sizes",
  "Saudi Arabia & Beyond",
];

const OFFERINGS = [
  {
    icon: Monitor,
    title: "POS Terminals & Touchscreens",
    text: "We supply and configure POS touchscreens sized and specified for your counter environment.",
    image: posTerminals,
  },
  {
    icon: ScanLine,
    title: "Self-Checkout Kiosks",
    text: "We provide self-checkout kiosks that are easy for customers to use and easy for your team to manage.",
    image: posKiosk,
  },
  {
    icon: CreditCard,
    title: "Cash Drawers & Payment Terminals",
    text: "We supply and integrate cash drawers and payment terminals, including contactless and Saudi payment network compatibility.",
    image: posPayment,
  },
  {
    icon: Store,
    title: "Retail POS Software",
    text: "We configure retail POS platforms that handle sales, returns, discounts, and end-of-day reporting.",
    image: posRetailSoftware,
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants, F&B POS Software",
    text: "We set up POS systems that handle table management, kitchen display integration, modifier options and timed orders.",
    image: posRestaurant,
  },
  {
    icon: Cloud,
    title: "Multi-Branch & Cloud POS",
    text: "We configure cloud-based POS systems that give you centralised visibility across all your branches, like sales, inventory and staff performance.",
    image: posCloud,
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
    "Understand Your Operation",
    "We start by understanding how many cashiers and products you have and how you handle returns and discounts. We map your operation before we recommend anything.",
  ],
  [
    "Supply & Configure Hardware",
    "We supply, set up, and test every hardware component before it arrives at your site.",
  ],
  [
    "Install & Configure Software",
    "Our certified engineers install and configure your POS software.",
  ],
  [
    "Data Migration",
    "If you're moving from an existing system, we handle the migration of your product data, customer records and previous sales data.",
  ],
  ["We Stay Available", "We offer 24/7 full support and track performance."],
  [
    "Team Training",
    "We train your cashiers, supervisors and managers separately so everyone knows what they need to know.",
  ],
];

const INDUSTRIES = [
  { icon: Store, title: "Retail Chains & Shopping Malls" },
  { icon: Scissors, title: "Salons & Service Businesses" },
  { icon: ShoppingCart, title: "Supermarkets & Grocery" },
  { icon: Coffee, title: "Restaurants & Cafe" },
  { icon: HeartPulse, title: "Hotels & Healthcare" },
];

const FAQS: [string, string][] = [
  [
    "Can you migrate data from our existing POS system?",
    "Yes. We handle the migration of your product catalogue, pricing, customer data, and historical sales records.",
  ],
  [
    "Do your payment terminals support MADA and contactless payments?",
    "Yes. We configure payment terminals compatible with MADA, SADAD, Visa, Mastercard, Apple Pay, and contactless payments.",
  ],
  [
    "Can we manage multiple branches from one place?",
    "Yes. Cloud POS platforms give you centralised control and real-time reporting across all your locations.",
  ],
  [
    "What if something breaks during trading hours?",
    "We provide support during business hours and priority response for critical issues.",
  ],
  [
    "Do you provide training for new staff after go-live?",
    "Yes. We provide training and documentation to onboard new cashiers and managers onto your POS system.",
  ],
  [
    "What happens after I book a call?",
    "Once you book a call, we'll schedule an appointment and offer a free consultation.",
  ],
];

function PosServicePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="POS hardware & software"
        title={
          <>
            Hardware and Software (POS) Services in{" "}
            <span className="text-[var(--gold)]">Saudi Arabia</span>
          </>
        }
        subtitle="We deliver hardware and software services in Saudi Arabia designed for high performance and a smooth user experience."
        image={heroPos}
        height="compact"
      >
        <Link to="/contact" className="btn-primary btn-on-dark">
          Talk to Our Team <ArrowRight className="h-4 w-4" />
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
              <h2 className="heading-sub-lg mt-6">Hardware and Software Services (POS) Overview</h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-[17px] leading-[1.85] text-muted-foreground lg:pt-6">
                If you're seeing constant system crashes, it's usually because of outdated equipment
                and un-optimized softwares. What you want is a fast, reliable and perfectly
                integrated IT ecosystem that keeps your business running without any interruptions.
                Here's how you get it at Roya Ventures.
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
            description="Our hardware and software services company offers complete POS solutions."
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
              Book a Free POS Assessment <ArrowRight className="h-4 w-4" />
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
            title={<>Why Clients Choose Roya Ventures as Their Footfall Counting Provider?</>}
            description="Here's what makes us different."
            invert
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-elegant)]">
                  <img
                    src={posEngineer}
                    alt="Certified engineer configuring a POS terminal at a retail counter"
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
                    { src: posKiosk, alt: "Self-checkout kiosk in a modern supermarket" },
                    { src: posCloud, alt: "Multi-branch cloud POS reporting dashboard" },
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
            description="Best hardware and software services both start with a proper plan. Here's our process."
          />
          <div className="mt-14 relative mx-auto max-w-7xl">
            <div
              aria-hidden
              className="absolute left-[1.4rem] top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-[1.4rem] lg:bottom-auto lg:h-px lg:w-auto bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--gold)_60%,transparent)_12%,color-mix(in_oklab,var(--gold)_60%,transparent)_88%,transparent)] lg:bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent)_10%,color-mix(in_oklab,var(--gold)_60%,transparent)_90%,transparent)]"
            />
            <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-5 items-start">
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
          <SectionHeading eyebrow="Sectors" title={<>Various Industries We Worked With</>} />
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
                  {[logoChalhoub, logoSephora, logoNesma].map((logo, i) => (
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
                  Restaurant Chain, Riyadh
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
                  Full POS rollout across 9 branches. Delivered on time.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[shotCafe1, shotCafe2, shotCafe3].map((img, i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-xl border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/45 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <img
                        src={img}
                        alt="Completed POS deployment project"
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
                  Ready For a POS That Works?
                </h2>
                <p className="mt-5 mx-auto max-w-xl text-white/75 text-base md:text-lg leading-relaxed font-light">
                  Schedule a complimentary consultation to explore solutions and a development
                  roadmap.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link to="/contact" className="btn-primary btn-on-dark">
                    Request a Consultation <ArrowRight className="h-4 w-4" />
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

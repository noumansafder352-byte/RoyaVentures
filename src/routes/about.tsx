import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Gem, Users, Globe2, Scale, Lightbulb, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import featureLeadership from "@/assets/feature-leadership.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Roya Ventures" },
      { name: "description", content: "Discover the people, principles and history behind Roya Ventures, an international corporate advisory firm built around enduring counsel." },
      { property: "og:title", content: "About Roya Ventures" },
      { property: "og:description", content: "An international advisory firm built around enduring counsel." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Scale, title: "Integrity", text: "Every recommendation is grounded in evidence and bound by an unwavering ethical standard." },
  { icon: Gem, title: "Excellence", text: "We commit to craftsmanship in the work — from analysis to delivery — without compromise." },
  { icon: Users, title: "Partnership", text: "We operate alongside our clients, not above them, with shared accountability for the outcome." },
  { icon: Lightbulb, title: "Insight", text: "Original perspective drawn from a rare blend of operating, advisory and capital expertise." },
  { icon: Globe2, title: "Global Outlook", text: "A multinational team that thinks in cross-border systems and local realities at once." },
  { icon: Award, title: "Discretion", text: "Confidentiality is the foundation of our practice. Trust is the only currency that compounds." },
];


function AboutPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="About the firm"
        title={<>Counsel measured in <span className="text-[var(--gold)]">decades</span>, not deliverables.</>}
        subtitle="Roya Ventures is an international advisory firm built around senior partners and an enduring commitment to the leaders we serve."
        image={heroAbout}
      />

      {/* Overview — asymmetric editorial split */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">Company overview</p>
              <h2 className="heading-lg mt-6">A house of advisors, operators and <em className="not-italic text-[var(--gold)]">capital specialists.</em></h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-7">
            <p className="text-xl leading-[1.7] text-[var(--navy)]/85 font-light">
              For more than 8 Years, Roya Ventures has worked alongside boards, founders and
              institutional investors to address the questions that define long-term value.

            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our partners have led mandates across more than forty markets, advising on transactions
              and programmes that have shaped industries. The firm remains independent by design,
              ensuring every recommendation is made in the singular interest of the client.
            </p>
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
        <div className="container-px mx-auto relative -mt-32 md:-mt-44 mb-24">
          <Reveal>
            <div className="max-w-2xl ml-0 rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-elegant)] p-10 md:p-14">
              <p className="gold-rule">Leadership philosophy</p>
              <p className="mt-7 font-display text-2xl md:text-3xl font-light leading-[1.3] tracking-[-0.02em] text-[var(--navy)]">
                "We are a partnership of practitioners — people who have built, bought, sold and
                rebuilt the institutions we now advise. Counsel earned, not consulted."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[var(--gold)]" />
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">A.H. Hart, Managing Partner</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision — premium image-content split */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto space-y-28 md:space-y-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img src={aboutMission} alt="Strategic review" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105" />
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
              <h3 className="heading-lg mt-7">To equip leaders with the clarity to make <em className="not-italic text-[var(--gold)]">consequential decisions.</em></h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                We exist to translate complexity into conviction — distilling market dynamics,
                organisational realities and strategic ambitions into decisions our clients can
                make with confidence and conscience.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal delay={0.1} className="lg:col-span-6 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img src={aboutVision} alt="Modern boardroom interior" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105" />
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-[var(--gold)]">Our Vision</p>
              </div>
              <h3 className="heading-lg mt-7">To be the most trusted advisory partner for <em className="not-italic text-[var(--gold)]">ambitious enterprises worldwide.</em></h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                A firm defined by the calibre of its people, the discretion of its practice and the
                enduring success of the institutions it serves — a steady hand for leaders building
                companies that matter.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — premium image-led card grid */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="absolute inset-0 -z-10 bg-radial-gold opacity-60" />
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_15%,transparent),transparent_65%)] blur-3xl" />
        <div className="container-px mx-auto relative">
          <SectionHeading
            eyebrow="Core values"
            title={<>Six principles. <em className="not-italic text-[var(--gold)]">One standard.</em></>}
            description="The values that anchor every engagement, every conversation and every recommendation."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <div
                  className="group relative h-full rounded-[1.25rem] bg-white border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/60 overflow-hidden"
                  data-cursor="hover"
                >
                  {/* Corner gold glow on hover */}
                  <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
                    <div aria-hidden className="absolute -top-10 -left-10 h-40 w-40 rounded-full border border-[var(--gold)]/25" />
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
                    <h3 className="absolute bottom-6 left-7 right-7 font-display text-2xl font-light tracking-tight text-white">
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
        title="Partner with a firm that takes the long view."
      />

      <PartnersMarquee />
    </SiteLayout>
  );
}

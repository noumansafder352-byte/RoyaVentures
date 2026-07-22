import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageServiceCard } from "@/components/site/ImageServiceCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { SERVICES } from "@/lib/services-data";
import heroServices from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Roya Ventures" },
      { name: "description", content: "Roya Ventures' technology and engineering services — electrical, data centers, networking, fiber, fire protection, surveillance, EMS, signage, POS, web and IT." },
      { property: "og:title", content: "Services — Roya Ventures" },
      { property: "og:description", content: "Eleven specialised practices for modern technology infrastructure." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our services"
        title={<>Eleven disciplines. <span className="text-[var(--gold)]">One engineering standard.</span></>}
        subtitle="A coordinated set of technology and engineering capabilities — designed, deployed and supported by senior practitioners under a single mandate."
        image={heroServices}
        height="compact"
      />

      {/* Services grid — image-led, consistent ratio */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>Every system your operation depends on, <em className="not-italic text-[var(--gold)]">engineered as one.</em></>}
            description="From the cabling in your walls to the software on your screens — each practice connects, so the whole works."
          />

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ImageServiceCard
                  image={s.image}
                  title={s.title}
                  description={s.description}
                  index={i}
                  size="tall"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model — dark layered band */}
      <section
        className="relative section-y overflow-hidden bg-noise text-white"
        style={{ background: "linear-gradient(135deg, #0B1F36 0%, #0E2440 45%, #0F3A30 100%)" }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full border border-[var(--gold)]/12 float-shape -z-10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full border border-[var(--gold)]/10 -z-10" />



        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="How we work"
            title={<>A disciplined approach <em className="not-italic text-[var(--gold)]">to every project.</em></>}
            description="Four phases. One accountable lead engineer. Systems that endure long after handover."
            invert
          />
          <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Survey", "On-site assessment, requirements capture and architecture options grounded in your operational reality."],
              ["02", "Design", "Detailed engineering — BoQ, drawings, schedules and integration plan signed off before a single cable is pulled."],
              ["03", "Deliver", "Installation and commissioning by senior engineers, with progress reporting and rigorous quality controls."],
              ["04", "Support", "AMCs, monitoring and 24/7 response — keeping every system you depend on running at standard."],
            ].map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-9 transition-all duration-500 hover:bg-white/[0.07] hover:border-[var(--gold)]/40 hover:-translate-y-1" data-cursor="hover">
                  <p className="font-display text-6xl font-light text-[var(--gold)]/90 tracking-[-0.04em]">{num}</p>
                  <div className="mt-6 gold-divider" />
                  <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{title}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />

      <CtaBanner
        eyebrow="Define your project"
        title="Tell us what you need to build, secure or support."
        showSecondary={false}
        floating
      />
    </SiteLayout>
  );
}

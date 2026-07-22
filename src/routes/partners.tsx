import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-clients.jpg";
import avayaLogo from "@/assets/partners/core/avaya.png.asset.json";
import ciscoLogo from "@/assets/partners/core/cisco.png.asset.json";
import hikvisionLogo from "@/assets/partners/core/hikvision.png.asset.json";
import nexenLogo from "@/assets/partners/core/nexen.png.asset.json";
import prestigeLogo from "@/assets/partners/core/prestige.png.asset.json";
import entry2exitLogo from "@/assets/partners/software/entry2exit.png.asset.json";
import fadelLogo from "@/assets/partners/software/fadel.png.asset.json";
import odooLogo from "@/assets/partners/software/odoo.png.asset.json";
import sapaadLogo from "@/assets/partners/software/sapaad.png.asset.json";
import coramLogo from "@/assets/partners/ai-video/coram.png.asset.json";
import trassirLogo from "@/assets/partners/ai-video/trassir.png.asset.json";
import vizo361Logo from "@/assets/partners/ai-video/vizo361.png.asset.json";
import windroLogo from "@/assets/partners/smart-screens/windro.png.asset.json";
import zhsunycoLogo from "@/assets/partners/smart-screens/zhsunyco.png.asset.json";


export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Roya Ventures" },
      { name: "description", content: "Roya Ventures' strategic technology partnerships — delivering innovative, reliable, and future-ready engineering and digital infrastructure solutions." },
      { property: "og:title", content: "Partners — Roya Ventures" },
      { property: "og:description", content: "Strategic technology partnerships that power world-class infrastructure." },
    ],
  }),
  component: PartnersPage,
});

type PartnerLogo = { name: string; url: string };
const CORE_TECH_LOGOS: PartnerLogo[] = [
  { name: "Avaya", url: avayaLogo.url },
  { name: "Cisco", url: ciscoLogo.url },
  { name: "Hikvision", url: hikvisionLogo.url },
  { name: "Nexen Strategy", url: nexenLogo.url },
  { name: "Prestige Saudi Co. Ltd.", url: prestigeLogo.url },
];

const SOFTWARE_LOGOS: PartnerLogo[] = [
  { name: "Entry2Exit", url: entry2exitLogo.url },
  { name: "Fadel Software Solutions", url: fadelLogo.url },
  { name: "Odoo", url: odooLogo.url },
  { name: "Sapaad", url: sapaadLogo.url },
];

const AI_VIDEO_LOGOS: PartnerLogo[] = [
  { name: "Coram", url: coramLogo.url },
  { name: "Trassir", url: trassirLogo.url },
  { name: "Vizo361", url: vizo361Logo.url },
];

const SMART_SCREEN_LOGOS: PartnerLogo[] = [
  { name: "Windro", url: windroLogo.url },
  { name: "ZhSunyco", url: zhsunycoLogo.url },
];

const PARTNER_CATEGORIES: { name: string; logos?: PartnerLogo[] }[] = [
  { name: "Core Technology Partners", logos: CORE_TECH_LOGOS },
  { name: "Software Platforms", logos: SOFTWARE_LOGOS },
  { name: "AI Video Analytics", logos: AI_VIDEO_LOGOS },
  { name: "Smart Screens / Ink Displays", logos: SMART_SCREEN_LOGOS },
];


function PartnersPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our Network"
        title={<>Our <span className="text-[var(--gold)]">Partners</span></>}
        subtitle="A curated ecosystem of technology manufacturers and solution providers enabling world-class engineering and digital infrastructure."
        image={heroImage}
        height="compact"
        align="center"
      />

      {/* Introduction */}
      <section className="relative section-y overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
        <div className="container-px mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Strategic Partnerships"
              title={<>Building Strong <em className="not-italic text-[var(--gold)]">Technology Partnerships</em></>}
              description="Roya Ventures collaborates with globally recognized technology manufacturers and solution providers to deliver innovative, reliable, and future-ready engineering and digital infrastructure solutions. Our strategic partnerships enable us to implement world-class technologies while maintaining the highest standards of quality, performance, and customer satisfaction."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Partner categories — matches Clients page design */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Partner Ecosystem"
            title={<>The specialists who <em className="not-italic text-[var(--gold)]">power our delivery.</em></>}
            description="A structured view of our technology alliances. Official partner logos will be added as they are finalized."
          />

          <div className="mt-20 space-y-24">
            {PARTNER_CATEGORIES.map((category, catIndex) => {
              const categoryLogos = (category.logos ?? []).map((l, i) => ({
                key: l.name,
                url: l.url,
                alt: `${category.name} — ${l.name}`,
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
                          Partner logos for this category will be added in a future update.
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
    </SiteLayout>
  );
}

import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
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

type Logo = { name: string; url: string; href: string };

const CATEGORIES: { key: string; label: string; logos: Logo[] }[] = [
  {
    key: "core",
    label: "Core Technology Partners",
    logos: [
      { name: "Avaya", url: avayaLogo.url, href: "https://www.avaya.com/en/" },
      { name: "Cisco", url: ciscoLogo.url, href: "https://www.cisco.com/" },
      { name: "Hikvision", url: hikvisionLogo.url, href: "https://www.hikvision.com/sa/" },
      { name: "Nexen Strategy", url: nexenLogo.url, href: "https://nexenstrategy.com/" },
      { name: "DLI Saudi", url: prestigeLogo.url, href: "https://www.dlisaudi.com/" },
    ],
  },
  {
    key: "software",
    label: "Software Platforms",
    logos: [
      { name: "Entry2Exit", url: entry2exitLogo.url, href: "https://entry2exit.com/" },
      { name: "Fadelsoft", url: fadelLogo.url, href: "https://fadelsoft.com/" },
      { name: "Odoo", url: odooLogo.url, href: "https://www.odoo.com/" },
      { name: "Sapaad", url: sapaadLogo.url, href: "https://www.sapaad.com/" },
    ],
  },
  {
    key: "ai-video",
    label: "AI Video Analytics",
    logos: [
      { name: "Coram AI", url: coramLogo.url, href: "https://www.coram.ai/" },
      { name: "TRASSIR", url: trassirLogo.url, href: "https://trassir.com/" },
      { name: "Vizo361 AI", url: vizo361Logo.url, href: "https://vizo361.ai/" },
    ],
  },
  {
    key: "smart-screens",
    label: "Smart Screens / Ink Displays",
    logos: [
      { name: "Windro", url: windroLogo.url, href: "https://windro.cn/" },
      { name: "ZhSunyco", url: zhsunycoLogo.url, href: "https://www.zhsunyco.com/" },
    ],
  },
];

export function StrategicPartners() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const activeCategory = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];

  return (
    <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
      <div className="container-px mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Strategic Partnerships"
            title={<>Powered by <em className="not-italic text-[var(--gold)]">Global Technology Leaders</em></>}
            description="Roya Ventures partners with globally recognized technology manufacturers and solution providers to deliver innovative, reliable, and future-ready engineering, ELV, networking, security, and digital infrastructure solutions."
            align="center"
          />
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div
            className="flex gap-3 overflow-x-auto overflow-y-visible no-scrollbar max-w-full px-2 py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  data-cursor="hover"
                  className={[
                    "shrink-0 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300",
                    isActive
                      ? "bg-[var(--gold)] text-white shadow-[var(--shadow-elegant)] border border-[var(--gold)]"
                      : "bg-white text-[var(--navy)] border border-[color-mix(in_oklab,var(--navy)_20%,transparent)] hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-card)]",
                  ].join(" ")}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Logos row — fixed min height to prevent layout shift */}
        <div className="mt-12 min-h-[100px] sm:min-h-[120px]">
          <div
            key={activeCategory.key}
            className="overflow-x-auto overflow-y-visible no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex justify-center items-center gap-8 sm:gap-10 md:gap-12 px-4 py-2 min-w-max mx-auto">
              {activeCategory.logos.map((logo, i) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  style={{ animationDelay: `${i * 90}ms`, animationFillMode: "both" }}
                  className="animate-fade-in flex shrink-0 items-center justify-center h-[60px] sm:h-[72px] md:h-[84px] w-auto transition-all duration-300 hover:scale-105 hover:opacity-90"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    loading="lazy"
                    className="h-full w-auto max-w-[120px] sm:max-w-[145px] md:max-w-[170px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

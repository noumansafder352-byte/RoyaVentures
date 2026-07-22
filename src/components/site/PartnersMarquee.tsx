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

const PARTNERS = [
  { name: "Avaya", src: avayaLogo.url, href: "https://www.avaya.com/en/" },
  { name: "Cisco", src: ciscoLogo.url, href: "https://www.cisco.com/" },
  { name: "Hikvision", src: hikvisionLogo.url, href: "https://www.hikvision.com/sa/" },
  { name: "Nexen Strategy", src: nexenLogo.url, href: "https://nexenstrategy.com/" },
  { name: "DLI Saudi", src: prestigeLogo.url, href: "https://www.dlisaudi.com/" },
  { name: "Entry2Exit", src: entry2exitLogo.url, href: "https://entry2exit.com/" },
  { name: "Fadelsoft", src: fadelLogo.url, href: "https://fadelsoft.com/" },
  { name: "Odoo", src: odooLogo.url, href: "https://www.odoo.com/" },
  { name: "Sapaad", src: sapaadLogo.url, href: "https://www.sapaad.com/" },
  { name: "Coram AI", src: coramLogo.url, href: "https://www.coram.ai/" },
  { name: "TRASSIR", src: trassirLogo.url, href: "https://trassir.com/" },
  { name: "Vizo361 AI", src: vizo361Logo.url, href: "https://vizo361.ai/" },
  { name: "Windro", src: windroLogo.url, href: "https://windro.cn/" },
  { name: "ZhSunyco", src: zhsunycoLogo.url, href: "https://www.zhsunyco.com/" },
];

export function PartnersMarquee() {
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--grad-ivory)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
      <div className="container-px mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <SectionHeading
            eyebrow="Trusted Partners"
            title={<>Engineered alongside the world's leading <em className="not-italic text-[var(--gold)]">technology brands.</em></>}
            description="We design and deliver solutions using trusted enterprise vendors across infrastructure, networking, cybersecurity, IT, and digital technologies."
            align="center"
          />
        </div>
      </div>

      <div
        className="relative group"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max marquee-track items-center">
          {row.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              data-cursor="hover"
              className="mx-8 sm:mx-10 md:mx-12 flex h-[72px] md:h-[84px] shrink-0 items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="h-full w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[180px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

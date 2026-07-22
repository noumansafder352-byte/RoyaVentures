import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

import { Reveal } from "@/components/site/Reveal";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}
import heroTeam from "@/assets/hero-team.jpg";
import razaImg from "@/assets/team/Saudagar_Raza_CEO.png.asset.json";
import anasImg from "@/assets/team/Anas_COO.jpeg.asset.json";
import maqboolImg from "@/assets/team/Maqbool_Pasha_CFO.png.asset.json";
import naveedImg from "@/assets/team/Soudagar_Naveed_Procurement_Sales1.png.asset.json";
import suhailImg from "@/assets/team/Suhail_Team_Leader.png.asset.json";
import shuaibImg from "@/assets/team/Shoaib_Tech_Support_Remote.png.asset.json";
import imranImg from "@/assets/team/Imran_Tech_Support_Remote.png.asset.json";
import furkhanImg from "@/assets/team/Furkhan_Tech_Support.png.asset.json";
import faizanImg from "@/assets/team/Faizan_Khazi_Tech_Support.png.asset.json";
import mohsinImg from "@/assets/team/Mohsin_Sr_Tech_Support.png.asset.json";
import zafarImg from "@/assets/team/Khazi_Zafar_Chief_Strategic_Planning.jpeg.asset.json";
import zeeshanImg from "@/assets/team/Zeeshan_Tech_Support_Remote.png.asset.json";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Roya Ventures" },
      { name: "description", content: "Meet the leadership, strategy, operations and technical team behind Roya Ventures." },
      { property: "og:title", content: "Team — Roya Ventures" },
      { property: "og:description", content: "A senior team built around partnership and discretion." },
    ],
  }),
  component: TeamPage,
});

type Member = { img: string; name: string; role: string; bio?: string };

const CEO: Member = {
  img: razaImg.url,
  name: "Raza Saudagar",
  role: "CEO",
  bio: "Sets the strategic direction of Roya Ventures — steering the firm's engineering, technology and infrastructure practice with a founder's discipline and an operator's rigour.",
};

const STRATEGY_ADMIN: Member[] = [
  { img: zafarImg.url, name: "Khazi Zafar", role: "Chief Strategic & Planning", bio: "Leads strategic planning and business direction — aligning long-term objectives with operational execution across the group." },
  { img: "", name: "Sameena Khazi", role: "HR & Admin", bio: "Oversees people, culture and administrative operations — ensuring the firm runs with care, clarity and operational discipline." },
];

const OPERATIONS_FINANCE: Member[] = [
  { img: anasImg.url, name: "Anas Saudagar", role: "Chief of Operations", bio: "Directs delivery across the project portfolio — accountable for scope, schedule and quality on every engagement." },
  { img: maqboolImg.url, name: "Maqbool Pasha", role: "Chief Accountant", bio: "Oversees financial controls, reporting and accounting — safeguarding the firm's fiscal integrity and operational transparency." },
];

const PROCUREMENT_TECHNICAL: Member[] = [
  { img: naveedImg.url, name: "Saudagar Naveed", role: "Procurement & Sales", bio: "Bridges procurement, sales and client development — bringing technical depth to new opportunities and mandates." },
  { img: suhailImg.url, name: "Suhail Shaik", role: "Technical Lead", bio: "Leads the technical team on the ground — coordinating design, deployment and commissioning across projects." },
];

const TECHNICAL_SUPPORT: Member[] = [
  { img: shuaibImg.url, name: "Mohammed Shoeb", role: "Tech Support Remote", bio: "Provides remote technical support — resolving issues with precision and maintaining client uptime." },
  { img: imranImg.url, name: "Syed Abdul Razzak Imran", role: "Tech Support Remote", bio: "Delivers remote technical assistance — ensuring systems stay operational and clients receive timely support." },
  { img: zeeshanImg.url, name: "Zeeshan Islam", role: "Tech Support Remote", bio: "Supports clients and systems remotely — combining technical skill with responsive, clear communication." },
  { img: furkhanImg.url, name: "Khazi Furkhan", role: "Tech Support", bio: "Executes on-site technical support with a focus on quality workmanship and reliable, standards-based delivery." },
  { img: faizanImg.url, name: "Khazi Faizan", role: "Tech Support", bio: "Delivers hands-on technical support across IT and ELV systems — from installation through configuration and handover." },
  { img: mohsinImg.url, name: "Mohsin Mohammed", role: "Sr. Tech Support", bio: "Leads the technical support function — mentoring the team and ensuring complex issues are resolved efficiently." },
];


function TeamPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="The team"
        title={<>Senior counsel from <span className="text-[var(--gold)]">operators</span> who have led.</>}
        subtitle="A multinational partnership of strategists, financiers and former executives — united by a shared standard of craft."
        image={heroTeam}
        height="compact"
      />

      {/* Leadership — featured CEO */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Leadership"
            title={<>The <em className="not-italic text-[var(--gold)]">vision</em> that leads the firm.</>}
            description="Setting the strategic direction of Roya Ventures — with clarity, conviction and long-term intent."
            align="center"
          />

          <div className="mt-14 max-w-2xl mx-auto">
            <Reveal>
              <FeaturedCard member={CEO} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategy & Administration */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Strategy & Administration"
            title={<>Stewards of <em className="not-italic text-[var(--gold)]">direction</em> and culture.</>}
            description="The team that sets priorities, nurtures talent, and keeps the firm running with purpose."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:gap-7 md:grid-cols-2 max-w-[68rem] mx-auto">
            {STRATEGY_ADMIN.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Finance */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Operations & Finance"
            title={<>The discipline that <em className="not-italic text-[var(--gold)]">delivers</em> every mandate.</>}
            description="Accountable for project delivery, financial integrity and operational excellence on the ground."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:gap-7 md:grid-cols-2 max-w-[68rem] mx-auto">
            {OPERATIONS_FINANCE.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement & Technical Leadership */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_55%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Procurement & Technical Leadership"
            title={<>The bridge between <em className="not-italic text-[var(--gold)]">opportunity</em> and execution.</>}
            description="Technical leadership and commercial focus combined to source, scope and deliver complex engagements."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:gap-7 md:grid-cols-2 max-w-[68rem] mx-auto">
            {PROCUREMENT_TECHNICAL.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Team */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Technical Support Team"
            title={<>The engineers behind the <em className="not-italic text-[var(--gold)]">craft.</em></>}
            description="Precise, disciplined support — from remote assistance through on-site resolution and handover."
            align="center"
          />
          <div className="mt-14 max-w-[68rem] mx-auto">
            <TeamCarousel members={TECHNICAL_SUPPORT} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ---------- Premium member cards (non-CEO) ---------- */

function MemberCard({ member: p }: { member: Member }) {
  return (
    <article className="group relative h-full rounded-[20px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_55%,white)] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_1px_2px_rgba(24,49,78,0.04),0_8px_24px_-16px_rgba(24,49,78,0.18)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_6px_rgba(24,49,78,0.06),0_18px_44px_-24px_rgba(24,49,78,0.28)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
      {/* Gold accents */}
      <span aria-hidden className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-l border-t border-[var(--gold)]/70 rounded-tl-[6px]" />
      <span aria-hidden className="pointer-events-none absolute top-2.5 right-2.5 h-3.5 w-3.5 border-r border-t border-[var(--gold)]/70 rounded-tr-[6px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 left-2.5 h-3.5 w-3.5 border-l border-b border-[var(--gold)]/70 rounded-bl-[6px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-r border-b border-[var(--gold)]/70 rounded-br-[6px]" />
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_65%)] blur-2xl" />

      <div className="grid gap-0 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Placeholder (image area reserved for future portrait) */}
        <div className="p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-[14px] max-w-[9rem] mx-auto sm:max-w-none aspect-[4/5] bg-gradient-to-b from-[var(--navy)] to-[var(--navy-deep)] ring-1 ring-[color-mix(in_oklab,var(--navy)_12%,transparent)] shadow-[0_12px_28px_-16px_rgba(24,49,78,0.45)]">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_65%)]" />
            {p.img ? (
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[2.25rem] sm:text-[2.5rem] font-semibold tracking-[-0.02em] text-[var(--gold)]/90">
                  {getInitials(p.name)}
                </span>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[700ms] ease-out group-hover:scale-x-100" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-4 sm:p-5 sm:pl-2">
          <h3 className="font-display text-[1.15rem] sm:text-[1.25rem] leading-[1.15] font-semibold text-[var(--navy)] tracking-[-0.02em]">
            {p.name}
          </h3>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--gold)] transition-all duration-500 group-hover:w-10" />
            <p className="text-[10.5px] tracking-[0.22em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-3 text-[12px] sm:text-[13px] text-muted-foreground leading-[1.65]">
              {p.bio}
            </p>
          )}
        </div>

      </div>
    </article>
  );
}

function FeaturedCard({ member: p }: { member: Member }) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_55%,white)] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_2px_6px_rgba(24,49,78,0.06),0_30px_70px_-24px_rgba(24,49,78,0.28)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_4px_10px_rgba(24,49,78,0.08),0_44px_90px_-30px_rgba(24,49,78,0.4)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
      {/* Gold accents */}
      <span aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-l border-t border-[var(--gold)]/70 rounded-tl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-r border-t border-[var(--gold)]/70 rounded-tr-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-l border-b border-[var(--gold)]/70 rounded-bl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-r border-b border-[var(--gold)]/70 rounded-br-[8px]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl" />

      <div className="grid gap-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Placeholder (image area reserved for future portrait) */}
        <div className="p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[16px] max-w-[12rem] mx-auto md:max-w-none aspect-[4/5] bg-gradient-to-b from-[var(--navy)] to-[var(--navy-deep)] ring-1 ring-[color-mix(in_oklab,var(--navy)_12%,transparent)] shadow-[0_16px_32px_-18px_rgba(24,49,78,0.45)]">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)]" />
            {p.img ? (
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[3rem] md:text-[3.5rem] font-semibold tracking-[-0.02em] text-[var(--gold)]/90">
                  {getInitials(p.name)}
                </span>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[800ms] ease-out group-hover:scale-x-100" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-4 md:p-6 md:pl-2">
          <p className="gold-rule">Chief Executive</p>
          <h3 className="mt-4 font-display text-[1.35rem] md:text-[1.6rem] lg:text-[1.85rem] leading-[1.1] font-semibold text-[var(--navy)] tracking-[-0.02em]">
            {p.name}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
            <p className="text-[10.5px] tracking-[0.28em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-4 text-sm md:text-[14.5px] text-muted-foreground leading-[1.75] max-w-xl">
              {p.bio}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Premium carousel for sections with >2 members ---------- */

function TeamCarousel({ members }: { members: Member[] }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [autoplayRef.current],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden py-8 -my-4" ref={emblaRef}>
        <div className="flex -ml-5 md:-ml-7">
          {members.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="pl-5 md:pl-7 shrink-0 grow-0 basis-full md:basis-1/2"
            >
              <Reveal delay={(i % 3) * 0.07}>
                <MemberCard member={p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>


      {/* Dots */}
      {snaps.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-6 bg-[var(--gold)]"
                  : "w-2 bg-[color-mix(in_oklab,var(--navy)_25%,transparent)] hover:bg-[color-mix(in_oklab,var(--navy)_45%,transparent)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

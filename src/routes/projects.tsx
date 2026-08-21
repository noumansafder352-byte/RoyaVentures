import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { ProjectLightbox } from "@/components/site/ProjectLightbox";
import {
  MapPin,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Users,
  Wrench,
  BadgeCheck,
  Award,
  LifeBuoy,
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Server,
  ShoppingBag,
  Factory,
  Hotel,
} from "lucide-react";
import nesmaCrew from "@/assets/projects/nesma/nesma-crew.png";
import nesmaCrane from "@/assets/projects/nesma/nesma-crane.png";
import nesmaInspection from "@/assets/projects/nesma/nesma-inspection.png";
import nesmaStreet from "@/assets/projects/nesma/nesma-street.png";
import dominosHikvision from "@/assets/projects/dominos/dominos-hikvision.png";
import dominosCashier from "@/assets/projects/dominos/dominos-cashier.png";
import dominosCeiling from "@/assets/projects/dominos/dominos-ceiling.png";
import dominosLadder from "@/assets/projects/dominos/dominos-ladder.png";
import sephoraOlaya from "@/assets/projects/sephora/Sephora_Olaya.png";
import sephoraKingdom from "@/assets/projects/sephora/Sephohra_Kingdom.png";
import sephoraApWork from "@/assets/projects/sephora/Sephora_Store_AP_Work2.png";
import sephoraUWalk from "@/assets/projects/sephora/U_Walk_Sephora_CCTV_Work.png";
import sephoraMeetingRoom from "@/assets/projects/sephora/sephora-meeting-room.png";
import nujaimaChanel from "@/assets/projects/nujaima/chanel-cctv-lan.png";
import nujaimaDataCentre from "@/assets/projects/nujaima/data-centre.png";
import nujaimaCabling from "@/assets/projects/nujaima/network-cable-labeling.png";
import nujaimaSolitaire from "@/assets/projects/nujaima/chanel-solitaire.png";
import nujaimaRack1 from "@/assets/projects/nujaima/g1.png";
import nujaimaRack2 from "@/assets/projects/nujaima/g2.png";
import nujaimaRack3 from "@/assets/projects/nujaima/g3.png";
import chalhoubCabling from "@/assets/projects/chalhoub/cable-pulling.png";
import chalhoubDatacenter from "@/assets/projects/chalhoub/datacenter.png";
import chalhoubElv from "@/assets/projects/chalhoub/elv-system.png";
import chalhoubTesting from "@/assets/projects/chalhoub/testing.png";
import chRetailJimmy from "@/assets/projects/chalhoub-retail/jimmy-choo.png";
import chRetailPrada from "@/assets/projects/chalhoub-retail/prada.png";
import chRetailSwarovski from "@/assets/projects/chalhoub-retail/swarovski.png";
import chRetailTomFord from "@/assets/projects/chalhoub-retail/tom-ford.png";
import chRetailMichaelKors from "@/assets/projects/chalhoub-retail/michael-kors.png";
import chRetailFaces from "@/assets/projects/chalhoub-retail/faces.png";
import chRetailTumi from "@/assets/projects/chalhoub-retail/tumi.png";
import chRetailLoccitane from "@/assets/projects/chalhoub-retail/loccitane.png";
import chRetailLacoste from "@/assets/projects/chalhoub-retail/lacoste.png";
import chRetailLacoste2 from "@/assets/projects/chalhoub-retail/lacoste-2.png";
import chRetailLacoste3 from "@/assets/projects/chalhoub-retail/lacoste-3.png";
import chRetailSwarovskiStore from "@/assets/projects/chalhoub-retail/swarovski-store.png";
import chRetailLoccitane2 from "@/assets/projects/chalhoub-retail/loccitane-2.png";
import warehouseRacking from "@/assets/projects/warehouse/warehouse-racking.png";
import warehouseCctv from "@/assets/projects/warehouse/warehouse-cctv.png";
import warehouseDatacenter from "@/assets/projects/warehouse/warehouse-datacenter.png";
import warehouseCabling from "@/assets/projects/warehouse/warehouse-cabling.png";
import cafeBateel from "@/assets/projects/cafe/bateel-solitaire.png";
import cafeNew1 from "@/assets/projects/cafe/cafe-new-1.png";
import cafeNew2 from "@/assets/projects/cafe/cafe-new-2.png";
import cafeNew3 from "@/assets/projects/cafe/cafe-new-3.png";
import cafeNew4 from "@/assets/projects/cafe/cafe-new-4.png";
import cafeNew5 from "@/assets/projects/cafe/cafe-new-5.png";
import cafeNew6 from "@/assets/projects/cafe/cafe-new-6.png";

// Royalty-free placeholder imagery (Unsplash) — replace later with official project photos.
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_IMAGE = img("photo-1581091226825-a6a2a5aee158");

type Project = {
  company: string;
  overview: string;
  services: string[];
  category: string;
  location: string;
  status: "Completed" | "Successfully Delivered" | "On-Going";
  images: string[]; // at least 4; used for the visible gallery composition
  galleryImages?: string[]; // optional override for the Explore More lightbox
};

const PROJECTS: Project[] = [
  {
    company: "Retail Security & IT Infrastructure — Sephora KSA",
    overview:
      "Delivering end-to-end IT infrastructure, IP surveillance, structured cabling, wireless networking, and AV solutions for Sephora stores across Saudi Arabia, supporting new store rollouts, upgrades, expansion, and ongoing lifecycle maintenance. Project highlight: successfully supporting 43+ Sephora stores across Saudi Arabia, delivering enterprise IT infrastructure, surveillance, structured cabling, wireless networking, and AV solutions for new store launches, upgrades, and reliable day-to-day operations.",
    services: [
      "IP CCTV Surveillance",
      "Structured Cabling (Cat6 & Fiber)",
      "Enterprise Wi-Fi",
      "Network Infrastructure",
      "Audio-Visual Systems",
      "IT Infrastructure Deployment",
      "POS & Workstation Integration",
      "Server Rack & Cabinet Setup",
      "Preventive Maintenance",
      "Infrastructure Upgrades",
    ],
    category: "Retail IT & Security",
    location: "Across Saudi Arabia",
    status: "On-Going",
    images: [sephoraMeetingRoom, sephoraKingdom, sephoraApWork, sephoraUWalk],
    galleryImages: [sephoraMeetingRoom, sephoraOlaya, sephoraKingdom, sephoraApWork, sephoraUWalk],
  },
  {
    company: "Domino's Pizza CCTV System Upgrade",
    overview:
      "Upgraded the surveillance infrastructure across Domino's Pizza outlets in Saudi Arabia by replacing legacy analogue CCTV systems with modern IP-based surveillance solutions, enhancing security, monitoring, and operational reliability. Project highlight: successfully upgraded the CCTV infrastructure across Domino's Pizza stores throughout Saudi Arabia.",
    services: [
      "CCTV System Upgrade",
      "IP Surveillance Installation",
      "Cat 6 Cabling",
      "SADP Configuration Tool",
      "NVR Programming",
      "IP Camera Integration",
    ],
    category: "Retail Surveillance",
    location: "Kingdom of Saudi Arabia (KSA)",
    status: "Successfully Delivered",
    images: [dominosHikvision, dominosCeiling, dominosLadder, dominosCashier],
  },
  {
    company: "Enterprise Data Center & Retail IT Infrastructure — Al Nujaima Trading Co.",
    overview:
      "Designed and deployed enterprise data center and retail IT infrastructure for Al Nujaima Trading Co., supporting luxury retail brands including Étoile, Tod's, Chanel, Roger Vivier, and ETRO across Saudi Arabia. Successfully delivered secure, scalable, and centrally managed network infrastructure, enabling reliable connectivity and seamless operations across corporate and retail locations.",
    services: [
      "Data Center Infrastructure",
      "Server Cabinet & Rack Management",
      "Fiber Optic Backbone",
      "Structured Cabling",
      "UPS & Power Backup",
      "Retail Network Infrastructure",
      "IP Surveillance Systems",
    ],
    category: "Enterprise IT Infrastructure",
    location: "Riyadh, Saudi Arabia",
    status: "Completed",
    images: [nujaimaChanel, nujaimaDataCentre, nujaimaCabling, nujaimaSolitaire],
    galleryImages: [
      nujaimaChanel,
      nujaimaDataCentre,
      nujaimaCabling,
      nujaimaSolitaire,
      nujaimaRack1,
      nujaimaRack2,
      nujaimaRack3,
    ],
  },
  {
    company: "Enterprise ELV Infrastructure — Chalhoub Group",
    overview:
      "Delivered a comprehensive Enterprise ELV and ICT infrastructure solution for the Chalhoub Group, providing secure connectivity, enterprise networking, communication systems, and server infrastructure to support day-to-day business operations across its Riyadh office. Successfully implemented a scalable, high-performance environment by integrating networking, structured cabling, server rooms, digital signage, and security infrastructure into a unified enterprise solution.",
    services: [
      "Structured Cabling (Cat6 & Fiber)",
      "Enterprise Network Infrastructure",
      "MDF & IDF Server Rooms",
      "User Data & IP Telephony",
      "Physical Security Cabling",
      "UPS Installation & Commissioning",
      "Digital Signage",
      "Enterprise Wi-Fi Access Points",
    ],
    category: "Enterprise ELV & ICT",
    location: "Riyadh & Jeddah, Saudi Arabia",
    status: "Completed",

    images: [chalhoubDatacenter, chalhoubElv, chalhoubCabling, chalhoubTesting],
  },
  {
    company: "Retail IT Infrastructure — Chalhoub Group",
    overview:
      "Designed and deployed enterprise retail IT infrastructure for the Chalhoub Group, supporting luxury brands like  FACES, TANAGRA, TUMI and LOCCITANE, Tom Ford, Valentino, Jimmy Choo, Lacoste, Swarovski, Michael Kors, Make Up Forever, and Ghawali across Saudi Arabia. Successfully delivered secure, scalable, and enterprise-grade IT infrastructure to support nationwide retail operations, ensuring reliable connectivity and long-term operational performance.",
    services: [
      "IDF & IT Infrastructure",
      "Rack Installation & Management",
      "Fiber Optic Backbone",
      "Structured Cabling",
      "UPS & Power Backup",
      "Physical Surveillance Infrastructure",
      "IoT Device Installation",
    ],
    category: "Retail IT Infrastructure",
    location: "Across Saudi Arabia",
    status: "Completed",
    images: [chRetailSwarovski, chRetailTomFord, chRetailJimmy, chRetailPrada],
    galleryImages: [
      chRetailSwarovski,
      chRetailTomFord,
      chRetailJimmy,
      chRetailPrada,
      chRetailMichaelKors,
      chRetailFaces,
      chRetailTumi,
      chRetailLoccitane,
      chRetailLacoste,
      chRetailLacoste2,
      chRetailLacoste3,
      chRetailSwarovskiStore,
      chRetailLoccitane2,
    ],
  },
  {
    company: "Warehouse Surveillance & Network Upgrade — Domino's, Emirates & Chalhoub Group",
    overview:
      "Delivered a complete warehouse surveillance and enterprise network infrastructure solution for a shared logistics facility serving Domino's, Emirates, and Chalhoub Group, enhancing operational visibility, inventory management, and overall site security. Successfully implemented a reliable, high-performance network and surveillance environment to support day-to-day warehouse operations and future scalability.",
    services: [
      "Data Center Setup",
      "Network Cabinet Installation",
      "Rack & Cable Management",
      "PoE Switching Infrastructure",
      "Fiber Optic Backbone",
      "IP CCTV Surveillance",
      "Enterprise Wi-Fi Infrastructure",
    ],
    category: "Warehouse Surveillance & Networking",
    location: "Riyadh & Jeddah, Saudi Arabia",
    status: "Completed",
    images: [warehouseRacking, warehouseCctv, warehouseDatacenter, warehouseCabling],
  },
  {
    company: "Restaurant’s Security & IT Infrastructure -Bateel Café, Charcoza & Dominos",
    overview:
      "Delivered integrated security and IT infrastructure solutions for Bateel Café, Dominos and CHARCOZA, providing reliable surveillance, enterprise networking, and connectivity to support seamless day-to-day operations across multiple café and restaurants. Successfully implemented secure, scalable infrastructure while minimizing disruption to business operations and enhancing operational efficiency.",
    services: [
      "IP CCTV Surveillance",
      "Structured Cabling (Cat6)",
      "Network Infrastructure",
      "Enterprise Wi-Fi Deployment",
      "Network Cabinet Installation",
      "Audio/Video & Background Music Systems",
      "Testing, Commissioning & Technical Support",
    ],
    category: "Café Security & IT Infrastructure",
    location: "Riyadh, Saudi Arabia",
    status: "Completed",
    images: [cafeNew1, cafeBateel, cafeNew5, cafeNew3],
    galleryImages: [cafeBateel, cafeNew1, cafeNew2, cafeNew3, cafeNew4, cafeNew5, cafeNew6],
  },
  {
    company: "Nesma LED Lighting Project",
    overview:
      "Delivered a large-scale government LED street lighting upgrade across Jeddah, replacing conventional luminaires with energy-efficient LED systems to improve public infrastructure, energy efficiency, and long-term operational performance. Project highlight: 18,000+ LED luminaires successfully replaced across Jeddah.",
    services: [
      "LED Lighting Upgrade",
      "Electrical Infrastructure",
      "Street Lighting Installation",
      "Laser Measurement",
      "Flux Meter Testing",
      "GPS Site Tracking",
    ],
    category: "Government Infrastructure",
    location: "Jeddah, KSA",
    status: "Successfully Delivered",
    images: [nesmaStreet, nesmaCrane, nesmaCrew, nesmaInspection],
  },
];

const TRUST = [
  {
    icon: Users,
    title: "Experienced Engineering Team",
    text: "Senior practitioners leading every mandate — from survey to sign-off.",
  },
  {
    icon: Wrench,
    title: "Turnkey Project Delivery",
    text: "One accountable partner for design, supply, install and commissioning.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    text: "NFPA, civil-defence and international standards embedded in every phase.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    text: "Manufacturer-certified engineers across electrical, networking and security.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    text: "Rigorous QA/QC controls, test reports and full as-built documentation.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    text: "AMCs, monitoring and 24/7 response — well beyond project handover.",
  },
];

const INDUSTRIES = [
  { icon: Landmark, name: "Government" },
  { icon: Building2, name: "Commercial" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Server, name: "Data Centres" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Industrial" },
  { icon: Hotel, name: "Hospitality" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Roya Ventures" },
      {
        name: "description",
        content:
          "Selected engineering and technology projects delivered by Roya Ventures — electrical infrastructure, data centres, networking, surveillance and enterprise IT across diverse industries.",
      },
      { property: "og:title", content: "Projects — Roya Ventures" },
      {
        property: "og:description",
        content:
          "Proven delivery across every project — infrastructure, technology and integrated engineering solutions.",
      },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: ProjectsPage,
});

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">
      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
      {status}
    </span>
  );
}

/* --------- Unified premium gallery: 1 large + 2 stacked right + 1 full-width bottom --------- */
function Gallery({ project, onOpen }: { project: Project; onOpen: (index: number) => void }) {
  const [a, b, c, d] = project.images;
  const alt = (i: number) => `${project.company} — image ${i + 1}`;

  const tileBase =
    "group relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]";
  const imgBase =
    "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]";

  return (
    <div className="relative before:absolute before:-inset-3 md:before:-inset-4 before:rounded-[1.75rem] before:border before:border-[var(--gold)]/25 before:-z-10">
      <div className="grid gap-4 md:gap-5">
        {/* Top row: large hero + two stacked right */}
        <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-3 h-auto sm:h-[26rem] md:h-[30rem]">
          <button
            type="button"
            onClick={() => onOpen(0)}
            aria-label={`Open ${project.company} gallery`}
            className={`${tileBase} sm:col-span-2 sm:row-span-2 h-64 sm:h-full shadow-[var(--shadow-elegant)]`}
          >
            <img src={a} alt={alt(0)} loading="lazy" className={imgBase} />
          </button>
          <button
            type="button"
            onClick={() => onOpen(1)}
            aria-label={`Open ${project.company} gallery`}
            className={`${tileBase} h-40 sm:h-full`}
          >
            <img src={b} alt={alt(1)} loading="lazy" className={imgBase} />
          </button>
          <button
            type="button"
            onClick={() => onOpen(2)}
            aria-label={`Open ${project.company} gallery`}
            className={`${tileBase} h-40 sm:h-full`}
          >
            <img src={c} alt={alt(2)} loading="lazy" className={imgBase} />
          </button>
        </div>

        {/* Bottom: full-width image */}
        <button
          type="button"
          onClick={() => onOpen(3)}
          aria-label={`Open ${project.company} gallery`}
          className={`${tileBase} h-48 sm:h-56 md:h-64 w-full shadow-[var(--shadow-elegant)]`}
        >
          <img src={d} alt={alt(3)} loading="lazy" className={imgBase} />
        </button>
      </div>
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const visibleServices = project.services.slice(0, 4);
  const extraServices = project.services.slice(4);
  const hasExtraServices = extraServices.length > 0;

  const openAt = (i: number) => {
    setStartIndex(i);
    setOpen(true);
  };

  return (
    <div className="grid gap-10 lg:gap-16 items-center lg:grid-cols-12">
      {/* Gallery */}
      <Reveal className={["lg:col-span-7", reverse ? "lg:order-2" : ""].join(" ")}>
        <Gallery project={project} onOpen={openAt} />
      </Reveal>

      {/* Details */}
      <Reveal delay={0.1} className={["lg:col-span-5", reverse ? "lg:order-1" : ""].join(" ")}>
        <p className="gold-rule">
          Project {String(index + 1).padStart(2, "0")} · {project.category}
        </p>
        <h3 className="heading-md mt-6 text-[var(--navy)]">{project.company}</h3>
        <div className="mt-5 gold-divider" />
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
          {project.overview}
        </p>

        <div className="mt-8">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--navy)]/60 font-semibold">
            Services delivered
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {visibleServices.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[color-mix(in_oklab,var(--navy)_15%,transparent)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--navy)]/85"
              >
                {s}
              </span>
            ))}
          </div>

          {hasExtraServices && (
            <div
              className={[
                "overflow-hidden transition-all duration-300 ease-out",
                servicesExpanded ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0",
              ].join(" ")}
            >
              <div className="flex flex-wrap gap-2">
                {extraServices.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[color-mix(in_oklab,var(--navy)_15%,transparent)] bg-white px-3.5 py-1.5 text-xs font-medium text-[var(--navy)]/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasExtraServices && (
            <button
              type="button"
              onClick={() => setServicesExpanded((v) => !v)}
              className="group mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--gold)] transition-colors duration-300 hover:text-[var(--navy)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              {servicesExpanded ? "View Less" : "View More"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesExpanded ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--navy)]/75">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.75} />
            {project.location}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-9">
          <button
            type="button"
            onClick={() => openAt(0)}
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/60 bg-[var(--navy)] px-7 py-3 text-sm font-semibold tracking-[0.14em] uppercase text-white shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            data-cursor="hover"
          >
            Explore More
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </button>
        </div>
      </Reveal>

      <ProjectLightbox
        open={open}
        images={project.galleryImages ?? project.images}
        title={project.company}
        initialIndex={startIndex}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

const PROJECTS_INITIAL = 4;

function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_INITIAL);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const allVisible = visibleCount >= PROJECTS.length;

  const handleViewMore = () => {
    setVisibleCount(PROJECTS.length);
    window.setTimeout(() => {
      blockRefs.current[PROJECTS_INITIAL]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  const handleViewLess = () => {
    setVisibleCount(PROJECTS_INITIAL);
    window.setTimeout(() => {
      showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Selected work"
        title={<>Projects</>}
        subtitle="Delivering engineering excellence through complex infrastructure, technology and integrated solutions across diverse industries."
        image={HERO_IMAGE}
        height="compact"
      />

      {/* Introduction */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_18%,transparent),transparent_65%)] blur-3xl"
        />
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">Our track record</p>
              <h2 className="heading-sub-lg mt-6">
                Proven delivery{" "}
                <em className="not-italic text-[var(--gold)]">across every project.</em>
              </h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-7">
            <p className="text-base text-muted-foreground leading-relaxed">
              Every project reflects our commitment to quality, precision, safety and long-term
              client success.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              From electrical infrastructure and data centres to ELV systems and enterprise IT
              solutions, Roya Ventures delivers projects that create lasting value — engineered by
              senior practitioners, supported well beyond handover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section
        className="relative section-y overflow-hidden"
        style={{ background: "var(--grad-ivory)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"
        />
        <div className="container-px mx-auto" ref={showcaseRef}>
          <SectionHeading
            eyebrow="Featured projects"
            title={
              <>
                Engineering delivered{" "}
                <em className="not-italic text-[var(--gold)]">at every scale.</em>
              </>
            }
            description="A selection of mandates across infrastructure, technology and integrated systems."
          />
          <div className="mt-20 space-y-28 md:space-y-36">
            {PROJECTS.slice(0, visibleCount).map((project, i) => (
              <div
                key={project.company}
                ref={(el) => {
                  blockRefs.current[i] = el;
                }}
                className="scroll-mt-28 animate-fade-in"
              >
                <ProjectBlock project={project} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            {allVisible ? (
              <button type="button" onClick={handleViewLess} className="btn-primary group">
                View Less Projects
                <ArrowUp className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            ) : (
              <button type="button" onClick={handleViewMore} className="btn-primary group">
                View More Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Roya Ventures */}
      <section
        className="relative section-y overflow-hidden bg-noise text-white"
        style={{ background: "linear-gradient(135deg, #0B1F36 0%, #0E2440 45%, #0F3A30 100%)" }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full border border-[var(--gold)]/12 float-shape -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full border border-[var(--gold)]/10 -z-10"
        />

        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Why clients choose us"
            title={
              <>
                The reasons organisations{" "}
                <em className="not-italic text-[var(--gold)]">trust Roya Ventures.</em>
              </>
            }
            description="Six commitments that define how we work — and why clients return, project after project."
            invert
          />
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {TRUST.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.07}>
                <div
                  className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-[var(--gold)]/40 hover:-translate-y-1"
                  data-cursor="hover"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-white tracking-tight">{title}</h3>
                  <div className="mt-4 gold-divider" />
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Sectors we <em className="not-italic text-[var(--gold)]">serve.</em>
              </>
            }
            description="Deep experience across the industries where infrastructure and technology have to work — every hour of every day."
          />
          <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map(({ icon: Icon, name }, i) => (
              <Reveal key={name} delay={(i % 4) * 0.06}>
                <div
                  className="group relative h-full rounded-2xl bg-white border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-card)] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/60"
                  data-cursor="hover"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--emerald-deep)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-white group-hover:-rotate-6">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-base font-semibold tracking-tight text-[var(--navy)]">
                    {name}
                  </h3>
                  <div className="mt-4 mx-auto gold-divider" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Start your project"
        title="Let's build your next project."
        description="Tell us about the infrastructure, technology or integrated systems you need delivered. Our senior engineers will respond within one business day."
        floating
      />
    </SiteLayout>
  );
}

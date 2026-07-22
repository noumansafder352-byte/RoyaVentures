import svcElectrical from "@/assets/svc-electrical.jpg";
import svcDatacenter from "@/assets/svc-datacenter.jpg";
import svcNetworking from "@/assets/svc-networking.jpg";
import svcFiber from "@/assets/svc-fiber.jpg";
import svcFirefighting from "@/assets/svc-firefighting.jpg";
import svcEms from "@/assets/svc-ems.jpg";
import svcSurveillance from "@/assets/svc-surveillance.jpg";
import svcSignage from "@/assets/svc-signage.jpg";
import svcPos from "@/assets/svc-pos.jpg";
import svcWebdev from "@/assets/svc-webdev.jpg";
import svcIt from "@/assets/svc-it.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "electrical-contracts",
    title: "Electrical Contracts",
    short: "End-to-end electrical engineering for commercial and industrial projects.",
    description:
      "Design, installation and commissioning of LV/HV electrical systems — switchgear, panels, distribution and power management — engineered for reliability at scale.",
    image: svcElectrical,
  },
  {
    slug: "data-center-setup",
    title: "Data Center Setup",
    short: "Turnkey data center design, build and commissioning.",
    description:
      "Tier-grade data centers with precision cooling, structured power, rack deployment and full white-space integration for mission-critical infrastructure.",
    image: svcDatacenter,
  },
  {
    slug: "networking",
    title: "Networking",
    short: "Enterprise LAN, WAN, Wi-Fi and SD-WAN architectures.",
    description:
      "Resilient networks engineered around your business — from campus switching to multi-site SD-WAN, segmented and secured for modern enterprise workloads.",
    image: svcNetworking,
  },
  {
    slug: "ethernet-fiber-cabling",
    title: "Ethernet & Fiber Cabling",
    short: "Certified structured cabling — copper and fiber.",
    description:
      "Cat6/6A and OS2/OM4 fiber backbones installed and tested to international standards, with full link certification and as-built documentation.",
    image: svcFiber,
  },
  {
    slug: "fire-fighting",
    title: "Fire Fighting",
    short: "Active and passive fire protection systems.",
    description:
      "Hydrant networks, sprinkler systems, FM-200 and Novec clean-agent suppression — designed, supplied and commissioned to NFPA and civil-defence standards.",
    image: svcFirefighting,
  },
  {
    slug: "ems-access-control",
    title: "EMS System & Access Control",
    short: "Energy management and intelligent access control.",
    description:
      "BMS-integrated energy monitoring with biometric, card and mobile credential access — unified under a single, auditable operations dashboard.",
    image: svcEms,
  },
  {
    slug: "surveillance-system",
    title: "Surveillance System",
    short: "IP CCTV, analytics and command-centre integration.",
    description:
      "High-resolution IP surveillance with edge analytics, intelligent video search and 24/7 control-room integration for enterprises, retail and infrastructure.",
    image: svcSurveillance,
  },
  {
    slug: "digital-signage-footfall",
    title: "Digital Signage & Footfall System",
    short: "Video walls, displays and footfall analytics.",
    description:
      "Centrally managed digital signage networks paired with footfall and dwell-time analytics — turning physical spaces into measurable engagement channels.",
    image: svcSignage,
  },
  {
    slug: "pos-hardware-software",
    title: "POS Hardware & Software",
    short: "Point-of-sale terminals, peripherals and software.",
    description:
      "Retail and hospitality POS hardware, integrated payment terminals and back-office software — deployed, configured and supported nationwide.",
    image: svcPos,
  },
  {
    slug: "website-development-amcs",
    title: "Website Development & AMCs",
    short: "Custom websites with annual maintenance contracts.",
    description:
      "Modern, performant websites and web applications, backed by AMCs covering hosting, security patching, content updates and continuous improvement.",
    image: svcWebdev,
  },
  {
    slug: "it-services",
    title: "IT Services",
    short: "Managed IT, helpdesk and infrastructure support.",
    description:
      "End-user support, server and cloud administration, cybersecurity hardening and procurement — delivered as flexible managed-service engagements.",
    image: svcIt,
  },
];

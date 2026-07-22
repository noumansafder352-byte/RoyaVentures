import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/roya-logo-new.png.asset.json";
import visionLogo from "@/assets/vision-2030-v3.png.asset.json";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES = [
  "Electrical Contracts",
  "Data Center Setup",
  "Networking",
  "Ethernet & Fiber Cabling",
  "Fire Fighting",
  "EMS System & Access Control",
];


const PHONES = ["+966 509600042", "+966 50 287 9339"];
const EMAILS = ["info@royaventure.com"];


function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-6 bg-[var(--gold)] shrink-0" />
      <h4 className="eyebrow text-[var(--gold)] whitespace-nowrap">{children}</h4>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white/85 bg-noise">
      {/* Layered backdrop */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_65%,transparent),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-grid-soft" />
      <div aria-hidden className="pointer-events-none absolute -top-44 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full border border-[var(--gold)]/15" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 -z-10 h-[20rem] w-[20rem] rounded-full border border-[var(--gold)]/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/10" />

      {/* Top gold hairline */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

      <div className="container-px mx-auto relative">
        {/* Main grid */}
        <div className="grid gap-12 md:gap-x-10 lg:gap-x-16 xl:gap-x-20 md:grid-cols-2 lg:grid-cols-12 pt-16 pb-12">
          {/* Brand column — logos + description */}
          <div className="lg:col-span-4">

            <div className="inline-flex items-center gap-5 md:gap-6 rounded-2xl bg-white/95 px-5 py-3.5 shadow-lg ring-1 ring-white/20">
              <img
                src={logo.url}
                alt="Roya Ventures"
                className="h-12 md:h-14 lg:h-16 w-auto"
                loading="lazy"
              />
              <span aria-hidden className="h-10 md:h-12 w-px bg-[var(--navy)]/15" />
              <img
                src={visionLogo.url}
                alt="Saudi Vision 2030"
                className="h-12 md:h-14 lg:h-16 w-auto"
                loading="lazy"
              />
            </div>
            <p className="mt-7 text-[14.5px] leading-[1.85] text-white/70 font-light max-w-md">
              A multidisciplinary technology and engineering firm — delivering data centers,
              networks, security and IT under a single accountable mandate.
            </p>

            <div className="mt-8 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-500 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:-translate-y-0.5"
                  data-cursor="hover"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">

            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3.5 text-sm">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    to={q.to}
                    className="group inline-flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition-colors"
                    data-cursor="hover"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-3" />
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (single column) */}
          <div className="lg:col-span-3">



            <ColumnHeading>Services</ColumnHeading>
            <ul className="space-y-3.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span
                    className="group inline-flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition-colors cursor-default"
                    data-cursor="hover"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-3" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">

            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">Address</div>
                  <div className="text-white/85 leading-relaxed">
                    Al Nasiriah Street, West Naseem Dist, Riyadh, KSA<br />
                    <span className="text-white/55 text-xs">CR: 1010674528</span>
                  </div>

                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">Phone</div>
                  <div className="space-y-1">
                    {PHONES.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^+\d]/g, "")}`}
                        className="block text-white/85 hover:text-[var(--gold)] transition-colors"
                        data-cursor="hover"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5 min-w-0 flex-1">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">Email</div>
                  <div className="space-y-1">
                    {EMAILS.map((e) => (
                      <a
                        key={e}
                        href={`mailto:${e}`}
                        className="block whitespace-nowrap text-[13px] text-white/85 hover:text-[var(--gold)] transition-colors"
                        data-cursor="hover"
                      >
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div aria-hidden className="hairline opacity-30" />

        <div className="py-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[0.18em] text-white/55">
            © {new Date().getFullYear()} ROYA VENTURES — ALL RIGHTS RESERVED
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/70 hover:text-[var(--gold)] transition-colors"
            aria-label="Back to top"
            data-cursor="hover"
          >
            Back to top
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 group-hover:border-[var(--gold)] transition-all duration-500 group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

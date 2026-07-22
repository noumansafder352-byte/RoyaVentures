import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/roya-logo.png.asset.json";

const NETWORK_LINKS = [
  { to: "/clients", label: "Clients" },
  { to: "/partners", label: "Partners" },
] as const;

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { type: "dropdown" as const, label: "Our Network", links: NETWORK_LINKS },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header({ transparentOverHero = false }: { transparentOverHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
  const networkRef = useRef<HTMLDivElement>(null);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setNetworkOpen(false);
    setMobileNetworkOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (networkRef.current && !networkRef.current.contains(e.target as Node)) {
        setNetworkOpen(false);
      }
    };
    if (networkOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [networkOpen]);

  const solid = scrolled || !transparentOverHero || open;

  const isNetworkActive = location.pathname === "/clients" || location.pathname === "/partners";

  const navBaseClasses =
    "group relative whitespace-nowrap px-2 xl:px-3.5 py-2 text-[12px] xl:text-[13px] font-medium tracking-[0.16em] transition-all duration-500 ease-out";
  const underlineClasses =
    "pointer-events-none absolute left-1/2 -bottom-0.5 h-px -translate-x-1/2 bg-[var(--gold)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const underlineGlowClasses =
    "pointer-events-none absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-[var(--gold)]/30 blur-[2px] transition-all duration-700 ease-out group-hover:w-12";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-[var(--navy)]/95 backdrop-blur-md shadow-[0_1px_0_color-mix(in_oklab,var(--gold)_18%,transparent)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-px mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Roya Ventures — home" data-cursor="hover">
          <img
            src={logo.url}
            alt="Roya Ventures"
            width={240}
            height={64}
            className="h-12 w-auto md:h-14 lg:h-16 brightness-0 invert transition-transform duration-500"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center justify-center gap-0">
          {NAV.map((item) => {
            if ("type" in item) {
              const active = isNetworkActive;
              return (
                <div
                  key={item.label}
                  ref={networkRef}
                  className="relative"
                  onMouseEnter={() => setNetworkOpen(true)}
                  onMouseLeave={() => setNetworkOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={networkOpen}
                    aria-haspopup="menu"
                    onClick={() => setNetworkOpen((v) => !v)}
                    className={[
                      navBaseClasses,
                      "inline-flex items-center gap-1.5",
                      active ? "text-[var(--gold)]" : "text-white/80 hover:text-[var(--gold)]",
                    ].join(" ")}
                    data-cursor="hover"
                  >
                    <span className="relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-px">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={[
                        "h-3 w-3 transition-transform duration-300",
                        networkOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                    <span
                      aria-hidden
                      className={[underlineClasses, active ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"].join(" ")}
                    />
                    <span aria-hidden className={underlineGlowClasses} />
                  </button>

                  <div
                    className={[
                      "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      networkOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none",
                    ].join(" ")}
                  >
                    <div
                      role="menu"
                      className="min-w-[14rem] rounded-xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[var(--navy-deep)]/95 backdrop-blur-md shadow-[0_20px_50px_-18px_color-mix(in_oklab,var(--navy)_55%,transparent)] overflow-hidden"
                    >
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
                      <div className="py-1.5">
                        {item.links.map((link) => {
                          const linkActive = location.pathname === link.to;
                          return (
                            <Link
                              key={link.to}
                              to={link.to}
                              role="menuitem"
                              className={[
                                "block w-full whitespace-nowrap px-5 py-3 text-left text-[12px] font-medium tracking-[0.18em] transition-colors duration-300",
                                linkActive
                                  ? "text-[var(--gold)] bg-white/5"
                                  : "text-white/85 hover:text-[var(--gold)] hover:bg-white/5",
                              ].join(" ")}
                              data-cursor="hover"
                            >
                              {link.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{ fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif" }}
                className={[
                  navBaseClasses,
                  active ? "text-[var(--gold)]" : "text-white/80 hover:text-[var(--gold)]",
                ].join(" ")}
                data-cursor="hover"
              >
                <span className="relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-px">
                  {item.label}
                </span>
                <span
                  aria-hidden
                  className={[underlineClasses, active ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"].join(" ")}
                />
                <span aria-hidden className={underlineGlowClasses} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex justify-end">
          <Link
            to="/contact"
            className="btn-primary btn-on-dark !py-2.5 !px-6 text-[12px] tracking-[0.18em] font-semibold shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--gold)_55%,transparent)] hover:shadow-[0_14px_36px_-10px_color-mix(in_oklab,var(--gold)_70%,transparent)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden col-start-3 text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-[var(--navy-deep)]",
          open ? "max-h-[90vh] opacity-100 border-t border-white/10" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container-px mx-auto py-6 flex flex-col gap-1">
          {NAV.map((item) => {
            if ("type" in item) {
              const active = isNetworkActive;
              return (
                <div key={item.label} className="flex flex-col border-b border-white/5 last:border-0">
                  <button
                    type="button"
                    aria-expanded={mobileNetworkOpen}
                    aria-haspopup="menu"
                    onClick={() => setMobileNetworkOpen((v) => !v)}
                    className={[
                      "w-full flex items-center justify-between py-3 text-[13px] font-medium tracking-[0.2em] transition-colors",
                      active ? "text-[var(--gold)]" : "text-white/85",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={[
                        "h-4 w-4 transition-transform duration-300",
                        mobileNetworkOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                  <div
                    className={[
                      "overflow-hidden transition-[max-height,opacity] duration-300",
                      mobileNetworkOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                  >
                    <div className="flex flex-col pl-4 pb-2">
                      {item.links.map((link) => {
                        const linkActive = location.pathname === link.to;
                        return (
                          <Link
                            key={link.to}
                            to={link.to}
                              className={[
                                "py-2.5 text-[12px] font-medium tracking-[0.18em] border-b border-white/5 last:border-0",
                              linkActive ? "text-[var(--gold)]" : "text-white/75 hover:text-[var(--gold)]",
                            ].join(" ")}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{ fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif" }}
                className={[
                  "py-3 text-[13px] font-medium tracking-[0.2em] border-b border-white/5",
                  active ? "text-[var(--gold)]" : "text-white/85",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary btn-on-dark mt-6 justify-center">Get in Touch</Link>
        </nav>
      </div>
    </header>
  );
}

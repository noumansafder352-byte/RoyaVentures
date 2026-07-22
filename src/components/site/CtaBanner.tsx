import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  eyebrow = "Begin the conversation",
  title = "Let's architect what comes next.",
  description = "From boardroom strategy to enterprise execution, our partners are ready to help you move with conviction.",
  showSecondary = true,
  floating = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  showSecondary?: boolean;
  floating?: boolean;
}) {
  const inner = (
    <div className="relative isolate overflow-hidden bg-noise">
      {/* Layered backdrop */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_70%,transparent),transparent_65%)]" />

      {/* Decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-[20rem] w-[20rem] rounded-full border border-[var(--gold)]/15 float-shape" />
        <div className="absolute -bottom-20 -left-20 h-[16rem] w-[16rem] rounded-full border border-[var(--gold)]/10" />
        <div className="absolute left-1/3 top-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
      </div>

      <div className={floating ? "px-8 md:px-14 lg:px-16 py-14 md:py-16 relative" : "container-px mx-auto py-16 md:py-20 relative"}>
        <div className={["grid items-center gap-10", showSecondary ? "lg:grid-cols-[1.4fr_1fr] lg:gap-16" : "lg:grid-cols-[1.6fr_auto] lg:gap-16"].join(" ")}>
          <div>
            <p className="gold-rule">{eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-white max-w-2xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-white/75 text-base md:text-lg leading-relaxed font-light">
              {description}
            </p>
          </div>
          <div className="flex lg:justify-end gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary btn-on-dark">
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            {showSecondary && (
              <Link to="/services" className="btn-outline-light btn-on-dark">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (!floating) {
    return <section>{inner}</section>;
  }

  return (
    <section className="relative bg-[var(--ivory)] py-20 md:py-28">
      <div className="container-px mx-auto">
        <div className="relative mx-auto max-w-6xl">
          {/* Decorative outer corner accents */}
          <div aria-hidden className="absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-[var(--gold)]/60 rounded-tl-[1.75rem] pointer-events-none" />
          <div aria-hidden className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-[var(--gold)]/60 rounded-br-[1.75rem] pointer-events-none" />
          <div aria-hidden className="absolute -top-4 -right-4 h-full w-full rounded-[2rem] border border-[var(--gold)]/15 pointer-events-none" />

          {/* Floating card */}
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-[var(--gold)]/25 shadow-[0_50px_120px_-30px_color-mix(in_oklab,var(--navy)_55%,transparent)]">
            {inner}
          </div>
        </div>
      </div>
    </section>
  );
}

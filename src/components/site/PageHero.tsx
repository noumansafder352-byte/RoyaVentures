import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "left",
  children,
  height = "tall",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  children?: ReactNode;
  height?: "tall" | "compact";
}) {
  return (
    <section
      className={[
        "relative isolate overflow-hidden text-white bg-noise",
        height === "tall" ? "min-h-[100vh]" : "min-h-[70vh]",
        "flex items-end",
      ].join(" ")}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover hero-zoom"
          width={1920}
          height={1080}
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--navy-deep)]/72 via-[var(--navy-deep)]/45 to-[color-mix(in_oklab,var(--emerald-deep)_70%,var(--navy-deep))]/65" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/35 to-transparent" />

      {/* Decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full border border-[var(--gold)]/15 float-shape" />
        <div className="absolute top-1/4 -right-20 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/10" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_50%,transparent),transparent_65%)] blur-2xl" />
        {/* faint diagonal accent line */}
        <div className="absolute right-12 top-24 hidden md:block h-[60%] w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
      </div>

      <div className="container-px mx-auto w-full pb-24 pt-44 md:pb-36 md:pt-52 relative">
        <div className={["max-w-5xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}>
          <p
            className={[
              "gold-rule reveal-soft",
              align === "center" ? "before:left-1/2 before:-translate-x-[calc(100%+1rem)]" : "",
            ].join(" ")}
            style={{ animationDelay: "0.05s" }}
          >
            {eyebrow}
          </p>
          <h1
            className="heading-xl mt-8 text-white reveal"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 reveal font-light"
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={[
                "mt-12 flex flex-wrap gap-5 reveal",
                align === "center" ? "justify-center" : "",
              ].join(" ")}
              style={{ animationDelay: "0.45s" }}
            >
              {children}
            </div>
          )}
        </div>

        {/* Bottom meta row */}
        <div className="mt-20 hidden md:flex items-end gap-8 reveal-soft" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-center gap-4 text-white/55 text-xs tracking-[0.3em] uppercase">
            <span className="gold-divider" />
            <span>Technology · Infrastructure · Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}

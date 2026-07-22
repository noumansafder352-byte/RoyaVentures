import { ArrowRight } from "lucide-react";

export function ImageServiceCard({
  image,
  title,
  description,
  index,
  size = "default",
}: {
  image: string;
  title: string;
  description: string;
  index?: number;
  size?: "default" | "tall" | "wide" | "banner";
}) {
  const aspect =
    size === "tall"
      ? "aspect-[5/6]"
      : size === "wide"
      ? "aspect-[16/8]"
      : size === "banner"
      ? "aspect-[32/9]"
      : "aspect-[1/1]";

  return (
    <article
      className={[
        "group relative h-full overflow-hidden rounded-2xl bg-[var(--navy-deep)] cursor-pointer",
        "shadow-[var(--shadow-card)] transition-all duration-700 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1.5",
      ].join(" ")}
      data-cursor="hover"
    >
      {/* Image */}
      <div className={["relative w-full overflow-hidden h-full", aspect].join(" ")}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        {/* Overlay base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/55 to-transparent" />
        {/* Hover deepen */}
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--navy-deep)_55%,transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        {/* Top gold accent */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
        {typeof index === "number" && (
          <p className="font-display text-xs tracking-[0.35em] text-[var(--gold)]/90 mb-3">
            {String(index + 1).padStart(2, "0")} · Practice
          </p>
        )}
        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--gold)]">
          {title}
        </h3>

        {/* Description: collapsed by default, expands on hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
          <p className="overflow-hidden text-white/85 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/85">
            Discover
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

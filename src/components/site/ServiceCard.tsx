import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card p-9 md:p-11 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40">
      {/* Decorative gold corner */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* Top edge gold line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {typeof index === "number" && (
        <span className="absolute right-7 top-7 font-display text-xs tracking-[0.35em] text-[var(--navy)]/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="relative grid h-16 w-16 place-items-center rounded-xl border border-[var(--gold)]/35 bg-gradient-to-br from-[color-mix(in_oklab,var(--gold)_12%,transparent)] to-transparent text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] group-hover:border-[var(--gold)] group-hover:shadow-[0_12px_30px_-12px_color-mix(in_oklab,var(--gold)_70%,transparent)]">
        <Icon className="h-7 w-7" strokeWidth={1.4} />
      </div>

      <h3 className="heading-md mt-9 text-[var(--navy)]">{title}</h3>
      <p className="mt-5 text-[15px] md:text-base text-muted-foreground leading-[1.75]">{description}</p>

      <div className="mt-9 flex items-center gap-3">
        <div className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--navy)]/50 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Learn more
        </span>
      </div>
    </article>
  );
}

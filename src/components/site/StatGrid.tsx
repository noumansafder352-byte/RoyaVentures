export function StatGrid({
  stats,
  invert = false,
}: {
  stats: { value: string; label: string; suffix?: string }[];
  invert?: boolean;
}) {
  return (
    <div
      className={[
        "grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden",
        invert
          ? "border border-[var(--gold)]/25 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]"
          : "border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-gradient-to-br from-white to-[var(--stone)] shadow-[var(--shadow-card)]",
      ].join(" ")}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={[
            "relative p-6 sm:p-8 md:p-12 group transition-colors duration-500",
            i > 0 ? "md:border-l" : "",
            i >= 2 ? "border-t md:border-t-0" : "",
            i === 1 ? "border-l md:border-l" : "",
            i === 3 ? "border-l" : "",
            invert ? "border-white/10 hover:bg-white/[0.04]" : "border-[color-mix(in_oklab,var(--navy)_8%,transparent)] hover:bg-white",
          ].join(" ")}
        >
          <div className="absolute left-6 sm:left-8 md:left-12 top-6 sm:top-8 md:top-10 gold-divider opacity-60" />
          <div className={["font-display flex items-baseline gap-1 text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold tracking-[-0.04em] mt-8 sm:mt-10 break-words", invert ? "text-white" : "text-[var(--navy)]"].join(" ")}>
            <span>{s.value}</span>
            {s.suffix && <span className="text-[var(--gold)]">{s.suffix}</span>}
          </div>
          <p className={["mt-3 sm:mt-4 text-xs sm:text-sm tracking-wide leading-relaxed", invert ? "text-white/65" : "text-muted-foreground"].join(" ")}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

import { SectionHeading } from "@/components/site/SectionHeading";

const CLIENT_LOGOS = Array.from({ length: 40 }, (_, i) => ({
  n: i + 1,
  url: `/clients/clients${i + 1}.png`,
}));

export function ClientsMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--grad-ivory)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent"
      />

      <div className="container-px mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionHeading
            eyebrow="Trusted Clients"
            title={
              <>
                Organizations that{" "}
                <em className="not-italic text-[var(--gold)]">
                  trust our craft.
                </em>
              </>
            }
            description="A representative selection of public-facing relationships across enterprise, retail, hospitality and institutional sectors."
            align="center"
          />
        </div>
      </div>

      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max marquee-track">
          {row.map((logo, i) => (
            <div
              key={`${logo.n}-${i}`}
              className="mx-4 flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-white px-5 py-3 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
              data-cursor="hover"
            >
              <img
                src={logo.url}
                alt={`Client ${logo.n}`}
                loading="lazy"
                className="h-auto max-h-20 w-auto max-w-[88%] object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
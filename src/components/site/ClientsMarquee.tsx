import { SectionHeading } from "@/components/site/SectionHeading";

// const logoModules = import.meta.glob("../../assets/clients/clients*.{jpg,jpeg,png}", {
//   eager: true,
//   query: "?url",
//   import: "default",
// });

// const CLIENT_LOGOS = Object.entries(logoModules)
//   .map(([path, url]) => {
//     const match = path.match(/clients(\d+)\.(jpg|jpeg|png)$/i);

//     return {
//       n: Number(match?.[1] ?? 0),
//       url: url as string,
//     };
//   })
//   .sort((a, b) => a.n - b.n);

const logoModules = import.meta.glob("../../assets/clients/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const CLIENT_LOGOS = Object.entries(logoModules)
  .map(([path, url]) => {
    const fileName = path.split("/").pop() ?? "";
    const name = fileName.replace(/\.(jpg|jpeg|png)$/i, "");

    return {
      name,
      url: url as string,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export function ClientsMarquee() {
  // const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
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
        <div className="mx-auto max-w-3xl text-center mb-14">
          <SectionHeading
            eyebrow="Trusted Clients"
            title={
              <>
                Organizations that{" "}
                <em className="not-italic text-[var(--gold)]">trust our craft.</em>
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
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max marquee-track">
          {row.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="mx-4 flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-white shadow-[var(--shadow-card)] px-5 py-3 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
              data-cursor="hover"
            >
              <img
                src={p.url}
                alt={p.name}
                loading="lazy"
                className="max-h-20 max-w-[88%] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={["max-w-3xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}>
      {eyebrow && (
        <p className={["gold-rule", align === "center" ? "before:left-1/2 before:-translate-x-[calc(100%+1rem)]" : ""].join(" ")}>
          {eyebrow}
        </p>
      )}
      <h2 className={["heading-lg mt-6", invert ? "text-white" : ""].join(" ")}>{title}</h2>
      {description && (
        <p className={["mt-6 text-lg md:text-xl leading-relaxed font-light", invert ? "text-white/75" : "text-muted-foreground"].join(" ")}>
          {description}
        </p>
      )}
      <div className={["mt-8 gold-divider", align === "center" ? "block mx-auto" : ""].join(" ")} />
    </div>
  );
}

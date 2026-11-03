import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  maxWidth = "max-w-3xl",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  maxWidth?: string;
}) {
  return (
    <div className={[maxWidth, align === "center" ? "mx-auto text-center" : ""].join(" ")}>
      {eyebrow && (
        <p className={align === "center" ? "gold-rule-center" : "gold-rule"}>
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

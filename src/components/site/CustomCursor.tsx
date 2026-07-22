import { useEffect, useRef, useState } from "react";

/**
 * Premium two-layer cursor — golden dot + lagging glowing ring.
 * Hidden until the first pointer movement so nothing sits in the
 * top-left corner on initial paint. Disabled on touch / reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let first = true;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (first) {
        ringX = mouseX;
        ringY = mouseY;
        first = false;
        setVisible(true);
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest(
        "a, button, input, textarea, select, [role=button], [data-cursor='hover']",
      );
      setHovering(Boolean(target));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={[
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border",
          "transition-[width,height,background-color,border-color,opacity,box-shadow] duration-300 ease-out",
          visible ? "opacity-100" : "opacity-0",
          hovering
            ? "h-14 w-14 border-[var(--gold)]/85 bg-[color-mix(in_oklab,var(--gold)_14%,transparent)] shadow-[0_0_28px_color-mix(in_oklab,var(--gold)_45%,transparent)]"
            : "h-9 w-9 border-[var(--gold)]/60 bg-transparent shadow-[0_0_18px_color-mix(in_oklab,var(--gold)_25%,transparent)]",
        ].join(" ")}
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className={[
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[var(--gold)] transition-[width,height,opacity] duration-200",
          visible ? (hovering ? "opacity-60" : "opacity-95") : "opacity-0",
          hovering ? "h-1 w-1" : "h-1.5 w-1.5",
          "shadow-[0_0_12px_color-mix(in_oklab,var(--gold)_70%,transparent)]",
        ].join(" ")}
        style={{ willChange: "transform" }}
      />
    </>
  );
}

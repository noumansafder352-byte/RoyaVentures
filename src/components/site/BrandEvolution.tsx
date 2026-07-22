import { useEffect, useRef, useState } from "react";
import spidernetLogo from "@/assets/brand/spidernet-logo.png.asset.json";
import royaLogo from "@/assets/brand/roya-ventures-logo.png.asset.json";

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

const EASE = "cubic-bezier(0.2,0.8,0.2,1)";

export function BrandEvolution() {
  const { ref, shown } = useInView<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      aria-label="Company evolution announcement"
      className="relative isolate overflow-hidden py-24 md:py-32 lg:py-36"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s ${EASE}, transform 1s ${EASE}`,
      }}
    >
      <style>{`
        @keyframes be-grid-drift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 120px 80px, 80px 120px; }
        }
        @keyframes be-orb-a { 0%,100%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(28px,-18px,0) scale(1.05)} }
        @keyframes be-orb-b { 0%,100%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(-26px,22px,0) scale(1.07)} }

        /* Flowing color-morphing light band (red → gold → emerald) */
        @keyframes be-flow-h {
          0%   { background-position: -60% 0; }
          100% { background-position: 160% 0; }
        }
        @keyframes be-flow-v {
          0%   { background-position: 0 -60%; }
          100% { background-position: 0 160%; }
        }
        /* Comet particle traveling along the rail — starts at origin,
           stops at the second (destination) marker, pauses, then fades. */
        @keyframes be-comet-h {
          0%   { left: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          70%  { left: 100%; opacity: 1; }
          80%  { left: 100%; opacity: 0; }
          100% { left: 0%;   opacity: 0; }
        }
        @keyframes be-comet-v {
          0%   { top: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          70%  { top: 100%; opacity: 1; }
          80%  { top: 100%; opacity: 0; }
          100% { top: 0%;   opacity: 0; }
        }
        /* Glass centerpiece: shimmer + soft pulse */
        @keyframes be-glass-pulse {
          0%,100% { box-shadow:
            0 20px 60px -22px color-mix(in oklab, var(--navy-deep) 45%, transparent),
            0 8px 26px -10px color-mix(in oklab, var(--gold) 40%, transparent),
            inset 0 1px 0 color-mix(in oklab, #fff 85%, transparent); }
          50%     { box-shadow:
            0 24px 70px -22px color-mix(in oklab, var(--navy-deep) 55%, transparent),
            0 10px 34px -10px color-mix(in oklab, var(--gold) 60%, transparent),
            inset 0 1px 0 color-mix(in oklab, #fff 95%, transparent); }
        }
        @keyframes be-shimmer {
          0%   { transform: translateX(-140%) skewX(-20deg); }
          100% { transform: translateX(240%) skewX(-20deg); }
        }
        @keyframes be-ring-rotate     { to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes be-ring-rotate-rev { to { transform: translate(-50%, -50%) rotate(-360deg); } }
        @keyframes be-halo { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.9;transform:scale(1.06)} }
        @keyframes be-dot-pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%     { transform: scale(1.6); opacity: .55; }
        }

        .be-bg-grid {
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px);
          background-size: 64px 64px, 64px 64px;
          mask-image: radial-gradient(ellipse at center, black 35%, transparent 82%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 35%, transparent 82%);
          animation: be-grid-drift 45s linear infinite;
        }
        .be-orb-a { animation: be-orb-a 22s ease-in-out infinite; }
        .be-orb-b { animation: be-orb-b 26s ease-in-out infinite; }
        .be-halo  { animation: be-halo 4.8s ease-in-out infinite; }

        /* Hairline base rail */
        .be-rail-h {
          background: linear-gradient(90deg,
            transparent 0%,
            color-mix(in oklab, var(--navy-deep) 22%, transparent) 14%,
            color-mix(in oklab, var(--navy-deep) 30%, transparent) 50%,
            color-mix(in oklab, var(--navy-deep) 22%, transparent) 86%,
            transparent 100%);
        }
        .be-rail-v {
          background: linear-gradient(180deg,
            transparent 0%,
            color-mix(in oklab, var(--navy-deep) 22%, transparent) 14%,
            color-mix(in oklab, var(--navy-deep) 30%, transparent) 50%,
            color-mix(in oklab, var(--navy-deep) 22%, transparent) 86%,
            transparent 100%);
        }

        /* Flowing morphing color band */
        .be-flow-h {
          background: linear-gradient(90deg,
            transparent 0%,
            color-mix(in oklab, #C8102E 55%, transparent) 22%,
            color-mix(in oklab, var(--gold) 85%, transparent) 44%,
            #ffffff 50%,
            color-mix(in oklab, var(--gold) 85%, transparent) 56%,
            color-mix(in oklab, var(--emerald-deep) 70%, transparent) 78%,
            transparent 100%);
          background-size: 220% 100%;
          filter: blur(0.6px);
          animation: be-flow-h 6.5s cubic-bezier(0.65,0,0.35,1) infinite;
          mix-blend-mode: screen;
        }
        .be-flow-v {
          background: linear-gradient(180deg,
            transparent 0%,
            color-mix(in oklab, #C8102E 55%, transparent) 22%,
            color-mix(in oklab, var(--gold) 85%, transparent) 44%,
            #ffffff 50%,
            color-mix(in oklab, var(--gold) 85%, transparent) 56%,
            color-mix(in oklab, var(--emerald-deep) 70%, transparent) 78%,
            transparent 100%);
          background-size: 100% 220%;
          filter: blur(0.6px);
          animation: be-flow-v 6.5s cubic-bezier(0.65,0,0.35,1) infinite;
          mix-blend-mode: screen;
        }

        /* Comet particle */
        .be-comet {
          width: 9px; height: 9px; border-radius: 9999px;
          background: radial-gradient(circle, #fff 0%, color-mix(in oklab, var(--gold) 90%, transparent) 50%, transparent 75%);
          box-shadow:
            0 0 10px color-mix(in oklab, var(--gold) 90%, transparent),
            0 0 24px color-mix(in oklab, var(--gold) 60%, transparent),
            0 0 40px color-mix(in oklab, var(--gold) 35%, transparent);
        }
        .be-comet-h { top: 50%; margin-top: -4.5px; animation: be-comet-h 6.5s cubic-bezier(0.5,0,0.5,1) infinite; }
        .be-comet-v { left: 50%; margin-left: -4.5px; animation: be-comet-v 6.5s cubic-bezier(0.5,0,0.5,1) infinite; }

        /* Origin & destination endpoints on the rail */
        .be-endpoint {
          width: 10px; height: 10px; border-radius: 9999px;
          box-shadow: 0 0 0 4px color-mix(in oklab, #fff 90%, transparent),
                      0 0 14px color-mix(in oklab, var(--gold) 55%, transparent);
        }
        .be-endpoint-a { background: color-mix(in oklab, #C8102E 85%, #fff); animation: be-dot-pulse 3.2s ease-in-out infinite; }
        .be-endpoint-b { background: var(--emerald-deep); animation: be-dot-pulse 3.2s ease-in-out infinite 1.6s; }

        /* Glass centerpiece */
        .be-glass {
          position: relative;
          background: linear-gradient(135deg,
            color-mix(in oklab, #fff 82%, transparent) 0%,
            color-mix(in oklab, #fff 55%, transparent) 100%);
          border: 1px solid color-mix(in oklab, #fff 70%, transparent);
          backdrop-filter: blur(18px) saturate(150%);
          animation: be-glass-pulse 5s ease-in-out infinite;
          overflow: hidden;
        }
        .be-glass::before {
          content: ""; position: absolute; inset: 0;
          border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg,
            color-mix(in oklab, var(--gold) 80%, transparent),
            transparent 45%,
            color-mix(in oklab, var(--emerald-deep) 65%, transparent));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }
        .be-glass-shimmer {
          position: absolute; top: 0; bottom: 0; width: 45%;
          background: linear-gradient(90deg, transparent, color-mix(in oklab, #fff 90%, transparent), transparent);
          animation: be-shimmer 4.8s ease-in-out infinite;
          pointer-events: none;
        }
        .be-ring {
          position: absolute; top: 50%; left: 50%;
          border-radius: 9999px; pointer-events: none;
        }
        .be-ring-outer { width: 260px; height: 260px; border: 1px dashed color-mix(in oklab, var(--gold) 45%, transparent); animation: be-ring-rotate 26s linear infinite; }
        .be-ring-inner { width: 190px; height: 190px; border: 1px dotted color-mix(in oklab, var(--emerald-deep) 45%, transparent); animation: be-ring-rotate-rev 20s linear infinite; }

        /* Soft ground shadow beneath each logo (no card) */
        .be-pedestal {
          position: absolute; left: 50%; bottom: -18px;
          width: 78%; height: 22px; transform: translateX(-50%);
          background: radial-gradient(ellipse at center,
            color-mix(in oklab, var(--navy-deep) 22%, transparent) 0%,
            transparent 70%);
          filter: blur(6px);
          pointer-events: none;
        }
        .be-logo { transition: transform 600ms ${EASE}, filter 600ms ${EASE}; }
        .be-logo-past  { filter: grayscale(0.2) brightness(0.98); }
        .be-logo-past:hover  { transform: translateY(-2px) scale(1.03); filter: grayscale(0) brightness(1.04) drop-shadow(0 12px 26px color-mix(in oklab, #C8102E 25%, transparent)); }
        .be-logo-new:hover   { transform: translateY(-2px) scale(1.03); filter: brightness(1.05) drop-shadow(0 16px 36px color-mix(in oklab, var(--gold) 55%, transparent)); }


        @media (prefers-reduced-motion: reduce) {
          .be-orb-a, .be-orb-b, .be-halo, .be-bg-grid,
          .be-flow-h, .be-flow-v, .be-comet-h, .be-comet-v,
          .be-glass, .be-glass-shimmer, .be-ring-outer, .be-ring-inner,
          .be-endpoint-a, .be-endpoint-b { animation: none !important; }
        }
      `}</style>

      {/* Premium background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--navy-deep) 3%, #fff) 0%, #fff 45%, color-mix(in oklab, var(--gold) 4%, #fff) 100%)",
        }}
      />
      <div aria-hidden className="be-bg-grid absolute inset-0 -z-20 opacity-70" />
      <div
        aria-hidden
        className="be-orb-a pointer-events-none absolute -top-40 -left-20 -z-10 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--emerald-deep) 18%, transparent), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="be-orb-b pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-6 -z-10 hidden md:block">
        <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[var(--gold)]/40" />
        <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[var(--gold)]/40" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[var(--gold)]/40" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[var(--gold)]/40" />
      </div>

      <div className="container-px mx-auto">
        {/* Section heading */}
        <div
          className="mx-auto max-w-4xl text-center pb-16 md:pb-20"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 900ms ${EASE} 200ms, transform 900ms ${EASE} 200ms`,
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--navy-deep)] leading-[1.15]">
            A New Identity. <em className="not-italic text-[var(--gold)]">The Same Vision.</em>
          </h2>
        </div>

        {/* Unified brand evolution composition */}
        <div className="mx-auto max-w-6xl">
          {/* Desktop / tablet: horizontal single composition — mirrors mobile */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-between lg:gap-10">
            {/* Spidernet */}
            <div
              className="relative shrink-0"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0)" : "translateX(-36px)",
                transition: `opacity 900ms ${EASE} 380ms, transform 900ms ${EASE} 380ms`,
              }}
            >
              <img
                src={spidernetLogo.url}
                alt="SpiderNet — former company logo"
                className="be-logo be-logo-past h-20 w-auto max-w-[260px] object-contain lg:h-24"
                loading="lazy"
              />
              <span aria-hidden className="be-pedestal" />
            </div>

            {/* Connector rail with centered glass badge (mirrors mobile) */}
            <div className="relative mx-6 h-14 flex-1 lg:mx-10">
              {/* Rail + flow + endpoints + comets all live on a 1px line at vertical center */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2">
                <span className="be-rail-h absolute inset-0" />
                <span className="be-flow-h absolute -inset-y-[3px] inset-x-0" />
                <span
                  className="be-endpoint absolute top-1/2 -translate-y-1/2"
                  style={{ left: "-5px", background: "color-mix(in oklab, #C8102E 85%, #fff)" }}
                />
                <span
                  className="be-endpoint absolute top-1/2 -translate-y-1/2"
                  style={{ right: "-5px", background: "var(--emerald-deep)" }}
                />
                <span className="be-comet be-comet-h absolute" />
                <span
                  className="be-comet be-comet-h absolute"
                  style={{ animationDelay: "3.25s" }}
                />
              </div>
              {/* Centerpiece badge on the same axis as the line */}
              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.9)",
                  transition: `opacity 800ms ${EASE} 700ms, transform 800ms ${EASE} 700ms`,
                }}
              >
                <div className="be-glass relative flex items-center gap-2 rounded-full px-5 py-2.5 whitespace-nowrap lg:px-6 lg:py-3">
                  <span className="be-glass-shimmer" />
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "color-mix(in oklab, #C8102E 85%, #fff)" }}
                  />
                  <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[var(--navy-deep)]">
                    Brand Evolution
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--emerald-deep)" }}
                  />
                </div>
              </div>
            </div>


            {/* Roya Ventures */}
            <div
              className="relative shrink-0"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0)" : "translateX(36px)",
                transition: `opacity 900ms ${EASE} 900ms, transform 900ms ${EASE} 900ms`,
              }}
            >
              <span
                aria-hidden
                className="be-halo pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 32%, transparent), transparent 65%)" }}
              />
              <img
                src={royaLogo.url}
                alt="Roya Ventures — new company logo"
                className="be-logo be-logo-new h-20 w-auto max-w-[280px] object-contain lg:h-24"
                loading="lazy"
              />
              <span aria-hidden className="be-pedestal" />
            </div>
          </div>


          {/* Mobile: vertical single composition */}
          <div className="relative flex flex-col items-center lg:hidden">
            <div
              className="relative"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(-16px)",
                transition: `opacity 800ms ${EASE} 380ms, transform 800ms ${EASE} 380ms`,
              }}
            >
              <img
                src={spidernetLogo.url}
                alt="SpiderNet — former company logo"
                className="be-logo be-logo-past h-16 w-auto max-w-[220px] object-contain"
                loading="lazy"
              />
              <span aria-hidden className="be-pedestal" />
            </div>

            <div className="relative my-10 h-40 w-px">
              <span className="be-rail-v absolute inset-0" />
              <span className="be-flow-v absolute -inset-x-[3px] inset-y-0" />
              <span
                className="be-endpoint absolute left-1/2 -translate-x-1/2"
                style={{ top: "-5px", background: "color-mix(in oklab, #C8102E 85%, #fff)" }}
              />
              <span
                className="be-endpoint absolute left-1/2 -translate-x-1/2"
                style={{ bottom: "-5px", background: "var(--emerald-deep)" }}
              />
              <span className="be-comet be-comet-v absolute" />
              <span
                className="be-comet be-comet-v absolute"
                style={{ animationDelay: "3.25s" }}
              />
              {/* Centerpiece badge on the line */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="be-glass relative flex items-center gap-2 rounded-full px-4 py-2 whitespace-nowrap">
                  <span className="be-glass-shimmer" />
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "color-mix(in oklab, #C8102E 85%, #fff)" }}
                  />
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--navy-deep)]">
                    Brand Evolution
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--emerald-deep)" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="relative"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 900ms ${EASE} 900ms, transform 900ms ${EASE} 900ms`,
              }}
            >
              <span
                aria-hidden
                className="be-halo pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 32%, transparent), transparent 65%)" }}
              />
              <img
                src={royaLogo.url}
                alt="Roya Ventures — new company logo"
                className="be-logo be-logo-new h-20 w-auto max-w-[260px] object-contain"
                loading="lazy"
              />
              <span aria-hidden className="be-pedestal" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectLightbox({
  open,
  images,
  title,
  initialIndex = 0,
  onClose,
}: {
  open: boolean;
  images: string[];
  title: string;
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:rgba(8,16,30,0.88)] backdrop-blur-sm animate-fade-in p-4 sm:p-6 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <div
        className="relative w-full max-w-6xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-white mb-4">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] font-semibold">
              Project Gallery
            </p>
            <h3 className="text-lg md:text-xl font-semibold mt-1">{title}</h3>
          </div>
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main image */}
        <div
          className="relative overflow-hidden rounded-2xl bg-black/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
            touchStartX.current = null;
          }}
        >
          <img
            key={index}
            src={images[index]}
            alt={`${title} — image ${index + 1}`}
            className="w-full h-[52vh] sm:h-[60vh] md:h-[68vh] object-contain bg-black animate-fade-in"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={prev}
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 grid h-11 w-11 md:h-12 md:w-12 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 grid h-11 w-11 md:h-12 md:w-12 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 right-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white/85 backdrop-blur">
            {index + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-2 md:gap-3 overflow-x-auto pb-1 scrollbar-thin">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === index
                    ? "border-[var(--gold)] opacity-100"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-16 w-24 md:h-20 md:w-28 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

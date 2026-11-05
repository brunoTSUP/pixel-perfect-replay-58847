import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/site";

export function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const go = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, go]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setIndex(i);
              }}
              className="group block w-full overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ampliar foto: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos"
          className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-overlay/95 p-4"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full text-graphite-foreground hover:bg-graphite-foreground/10"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-graphite-foreground hover:bg-graphite-foreground/10 md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              key={photos[index].src}
              src={photos[index].src}
              alt={photos[index].alt}
              className="animate-in fade-in max-h-[80vh] w-auto rounded-md object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-graphite-foreground/80">
              {photos[index].alt} · {index + 1}/{photos.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-graphite-foreground hover:bg-graphite-foreground/10 md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
}

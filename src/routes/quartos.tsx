import { createFileRoute } from "@tanstack/react-router";
import { Bath, CarFront, Coffee, KeyRound, Refrigerator, Snowflake, Tv, Wifi } from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { Gallery } from "@/components/rooms/Gallery";
import { GALLERY, PHOTOS } from "@/lib/site";

const TITLE = "Quartos e Acomodações | Hotel Moreno - Itajobi SP";
const DESC =
  "Conheça as acomodações do Hotel Moreno em Itajobi. Quartos confortáveis com ar-condicionado, TV, frigobar e banheiro privativo.";

export const Route = createFileRoute("/quartos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quartos,
});

const ROOM = [
  { icon: Snowflake, label: "Ar-condicionado" },
  { icon: KeyRound, label: "Fechaduras eletrônicas" },
  { icon: Refrigerator, label: "Frigobar" },
  { icon: Tv, label: "Televisão" },
  { icon: Wifi, label: "Wi-Fi" },
];

function Quartos() {
  return (
    <div className="reference-page">
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-graphite text-graphite-foreground">
        <img
          src={PHOTOS.quartoJanela.src}
          alt={PHOTOS.quartoJanela.alt}
          width={PHOTOS.quartoJanela.w}
          height={PHOTOS.quartoJanela.h}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-overlay/80 via-overlay/20 to-overlay/40" />
        <div className="container-site pb-14 pt-32">
          <p className="eyebrow">Acomodações</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Nossas acomodações</h1>
          <p className="mt-4 max-w-lg opacity-85">
            Espaços preparados para proporcionar conforto, tranquilidade e praticidade.
          </p>
        </div>
      </section>

      <section className="bg-surface py-6">
        <Reveal className="container-site grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-4xl md:text-5xl">Conforto para sua estadia</h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              O Hotel Moreno conta com quartos, oferecendo ambientes acolhedores, decoração contemporânea e
              comodidades pensadas para proporcionar uma experiência agradável.
            </p>
            <p>
              As acomodações combinam conforto, mobiliário funcional e ambientes organizados para receber nossos
              hóspedes.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-6" aria-labelledby="galeria">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Galeria</p>
            <h2 id="galeria" className="mb-12 mt-4 text-4xl md:text-5xl">Conheça os ambientes</h2>
          </Reveal>
          <Gallery photos={GALLERY} />
        </div>
      </section>

      <section className="bg-surface py-6">
        <div className="container-site">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Tudo para uma estadia confortável</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <Reveal>
              <p className="eyebrow mb-6">Nas acomodações</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                {ROOM.map((r) => (
                  <li key={r.label} className="flex items-center gap-3">
                    <r.icon className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.4} aria-hidden="true" />
                    <span>{r.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            As características e configurações das acomodações podem variar. Consulte nossa equipe para mais
            informações.
          </p>
        </div>
      </section>

      <CtaSection
        referenceStyle
        title="Encontre a acomodação ideal para sua estadia."
        text="Fale com nossa equipe para consultar disponibilidade e obter mais informações."
      />
    </div>
  );
}

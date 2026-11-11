import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CarFront,
  Coffee,
  createLucideIcon,
  KeyRound,
  MapPin,
  Snowflake,
  Wifi,
} from "lucide-react";
import { referenceBtn as btn } from "@/components/ui/btn";
import { Reveal } from "@/components/layout/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { HOTEL, PHOTOS } from "@/lib/site";

const TITLE = "Hotel Moreno | Hotel e Hospedagem em Itajobi - SP";
const DESC =
  "Conheça o Hotel Moreno em Itajobi - SP. Quartos climátizados, Wi-Fi, estacionamento, café da manhã e ambientes confortáveis. Entre em contato!";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const Elevator = createLucideIcon("Elevator", [
  ["rect", { x: "4", y: "8", width: "16", height: "14", rx: "1", key: "doors" }],
  ["path", { d: "M12 8v14M7 5V2m-2 2 2-2 2 2M17 2v3m-2-2 2 2 2-2", key: "arrows" }],
]);

const FEATURES = [
  {
    icon: Coffee,
    title: "Buffet de café da manhã",
    text: "Comece o dia com mais conforto e tranquilidade.",
  },
  { icon: Elevator, title: "Elevador", text: "Mais agilidade na sua locomoção." },
  {
    icon: CarFront,
    title: "Estacionamento no local",
    text: "Mais comodidade para quem viaja de carro.",
  },
  { icon: Wifi, title: "Wi-Fi Grátis", text: "Conectividade e praticidade durante sua estadia." },
  {
    icon: KeyRound,
    title: "Fechaduras eletrônicas",
    text: "Mais praticidade e segurança no acesso aos quartos.",
  },
  {
    icon: Snowflake,
    title: "Ambientes climatizados",
    text: "Mais conforto para seus momentos de descanso.",
  },
];

const FEATURED = [
  {
    photo: PHOTOS.quartoJanela,
    title: "Ambientes confortáveis",
    text: "Espaços organizados para o seu descanso.",
  },
  {
    photo: PHOTOS.quartoTv,
    title: "Praticidade no dia a dia",
    text: "Comodidades que tornam sua estadia mais agradável.",
  },
  {
    photo: PHOTOS.quartoBranco,
    title: "Atenção aos detalhes",
    text: "Ambientes planejados para receber você.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hotel-hero-section" aria-labelledby="hero-title">
        <div className="hotel-hero">
          <div className="hotel-hero-photo">
            <picture>
              <source
                media="(max-width: 767.98px)"
                srcSet={PHOTOS.heroMobile.src}
                width={PHOTOS.heroMobile.w}
                height={PHOTOS.heroMobile.h}
              />
              <img
                src={PHOTOS.hero.src}
                alt={PHOTOS.hero.alt}
                width={PHOTOS.hero.w}
                height={PHOTOS.hero.h}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <div className="hotel-hero-content">
            <p className="eyebrow">Bem-vindo ao Hotel Moreno</p>
            <h1 id="hero-title" className="hotel-hero-title">
              Hospedagem para diferentes momentos da sua viagem
            </h1>
            <div className="hotel-hero-actions">
              <Link
                to="/contato"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] bg-accent px-6 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span className="md:hidden">Reservar agora</span>
                <span className="hidden md:inline">Consultar disponibilidade</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/quartos"
                className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-foreground underline decoration-accent/40 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="md:hidden">Ver acomodações</span>
                <span className="hidden md:inline">Conhecer nossos quartos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="reference-page border-t border-border bg-surface py-6">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Hospitalidade</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Cada viagem tem um motivo
              <br />
              Sua hospedagem tem um endereço
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Seja a trabalho, a passeio, de passagem pela cidade ou para aproveitar uma pausa na
              rotina, o Hotel Moreno oferece uma opção prática e acolhedora para diferentes
              necessidades de hospedagem
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Estamos preparados para receber você
            </p>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={PHOTOS.quartoCasalSolteiro.src}
              alt={PHOTOS.quartoCasalSolteiro.alt}
              width={PHOTOS.quartoCasalSolteiro.w}
              height={PHOTOS.quartoCasalSolteiro.h}
              loading="lazy"
              className="aspect-[5/5] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="reference-page py-6">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Comodidades</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Conforto em cada detalhe</h2>
            <p className="mt-4 text-muted-foreground">
              Uma estrutura preparada para tornar sua experiência ainda mais agradável.
            </p>
          </Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <li key={f.title} className="bg-background">
                <Reveal
                  delay={i * 60}
                  className="h-full p-8 transition-colors duration-300 hover:bg-surface"
                >
                  <f.icon className="h-7 w-7 text-accent" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-6 text-xl">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Acomodações em destaque */}
      <section className="reference-page bg-surface py-6">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Acomodações</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Conheça nossas acomodações</h2>
              <p className="mt-4 text-muted-foreground">
                Ambientes acolhedores, modernos e preparados para proporcionar uma estadia
                confortável.
              </p>
            </div>
            <Link to="/quartos" className={btn({ variant: "outline" })}>
              Ver as acomodações <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {FEATURED.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article className="group">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={c.photo.src}
                      alt={c.photo.alt}
                      width={c.photo.w}
                      height={c.photo.h}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="reference-page py-6">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <img
              src={PHOTOS.quartoBanheiro.src}
              alt={PHOTOS.quartoBanheiro.alt}
              width={PHOTOS.quartoBanheiro.w}
              height={PHOTOS.quartoBanheiro.h}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:-ml-24">
            <div className="rounded-lg bg-surface p-8 shadow-soft md:p-12">
              <span className="block h-px w-12" />
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                Uma estadia com conforto e praticidade
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Do momento da chegada ao descanso, o Hotel Moreno oferece uma estrutura acolhedora e
                comodidades para que você aproveite sua estadia com tranquilidade.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Localização */}
      <section className="reference-page border-t border-border bg-surface py-6">
        <Reveal className="container-site grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Localização</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Encontre-nos em Itajobi</h2>
            <p className="mt-4 text-muted-foreground">
              O Hotel Moreno está localizado em Itajobi, no interior de São Paulo. Entre em contato
              para obter informações e planejar sua visita.
            </p>
            <p className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>{HOTEL.fullAddress}</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 md:items-end">
            <a href={HOTEL.mapsHref} target="_blank" rel="noopener noreferrer" className={btn()}>
              Como chegar <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <CtaSection
        referenceStyle
        title="Sua próxima estadia começa aqui."
        text="Entre em contato com nossa equipe e consulte a disponibilidade de acomodações."
      />
    </>
  );
}

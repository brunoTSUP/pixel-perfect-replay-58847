import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, CarFront, Coffee, KeyRound, MapPin, Snowflake, Wifi } from "lucide-react";
import { btn } from "@/components/ui/btn";
import { Reveal } from "@/components/layout/Reveal";
import { CtaSection } from "@/components/layout/CtaSection";
import { HOTEL, PHOTOS } from "@/lib/site";

const TITLE = "Hotel Moreno | Hotel e Hospedagem em Itajobi - SP";
const DESC =
  "Conheça o Hotel Moreno em Itajobi - SP. São 31 quartos, Wi-Fi, estacionamento, café da manhã e ambientes confortáveis. Entre em contato!";

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
    links: [{ rel: "preload", as: "image", href: PHOTOS.fachada.src }],
  }),
  component: Home,
});

const FEATURES = [
  { icon: Wifi, title: "Wi-Fi", text: "Conectividade e praticidade durante sua estadia." },
  { icon: CarFront, title: "Estacionamento", text: "Mais comodidade para quem viaja de carro." },
  { icon: Coffee, title: "Café da manhã", text: "Comece o dia com mais conforto e tranquilidade." },
  { icon: BedDouble, title: "31 quartos", text: "Acomodações preparadas para receber nossos hóspedes." },
  { icon: KeyRound, title: "Fechaduras eletrônicas", text: "Mais praticidade e segurança no acesso aos quartos." },
  { icon: Snowflake, title: "Ambientes climatizados", text: "Mais conforto para seus momentos de descanso." },
];

const FEATURED = [
  { photo: PHOTOS.quartoJanela, title: "Ambientes confortáveis", text: "Espaços organizados para o seu descanso." },
  { photo: PHOTOS.quartoTv, title: "Praticidade no dia a dia", text: "Comodidades que tornam sua estadia mais agradável." },
  { photo: PHOTOS.pia, title: "Atenção aos detalhes", text: "Ambientes planejados para receber você." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-graphite text-graphite-foreground">
        <div className="grid min-h-[88vh] lg:grid-cols-[1.1fr_1fr]">
          <div className="absolute inset-0 -z-10 lg:relative lg:order-2 lg:z-0">
            <img
              src={PHOTOS.fachada.src}
              alt={PHOTOS.fachada.alt}
              width={PHOTOS.fachada.w}
              height={PHOTOS.fachada.h}
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/45 to-overlay/40 lg:bg-gradient-to-r lg:from-graphite lg:via-transparent lg:to-overlay/20" />
          </div>
          <div className="flex items-end pb-16 pt-32 lg:order-1 lg:items-center lg:py-32">
            <div className="container-site lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-12">
              <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">Itajobi · São Paulo</p>
              <h1 className="mt-5 text-5xl leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-1000 md:text-7xl">
                Hotel Moreno
              </h1>
              <p className="mt-6 max-w-md font-display text-xl italic opacity-95 md:text-2xl">
                Conforto e tranquilidade para uma excelente estadia.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed opacity-75 md:text-base">
                Descubra um ambiente acolhedor, com acomodações confortáveis e a praticidade que você procura em Itajobi.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link to="/quartos" className={btn({ variant: "light" })}>
                  Conheça nossos quartos
                </Link>
                <Link to="/contato" className={btn({ variant: "ghostLight" })}>
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Hospitalidade</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Bem-vindo ao Hotel Moreno</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              No Hotel Moreno, cada detalhe foi pensado para proporcionar uma estadia confortável e agradável. Nossa
              estrutura combina ambientes modernos, praticidade e hospitalidade, oferecendo um espaço acolhedor para
              quem visita Itajobi.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Seja para descansar ou para uma viagem de trabalho, encontre aqui a tranquilidade e a comodidade que você
              procura.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={PHOTOS.quartoCasalSolteiro.src}
              alt={PHOTOS.quartoCasalSolteiro.alt}
              width={PHOTOS.quartoCasalSolteiro.w}
              height={PHOTOS.quartoCasalSolteiro.h}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 md:py-32">
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
                <Reveal delay={i * 60} className="h-full p-8 transition-colors duration-300 hover:bg-surface">
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
      <section className="bg-surface py-24 md:py-32">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Acomodações</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Conheça nossas acomodações</h2>
              <p className="mt-4 text-muted-foreground">
                Ambientes acolhedores, modernos e preparados para proporcionar uma estadia confortável.
              </p>
            </div>
            <Link to="/quartos" className={btn({ variant: "outline" })}>
              Ver todas as acomodações <ArrowRight className="h-4 w-4" />
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
      <section className="py-24 md:py-32">
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
              <span className="block h-px w-12 bg-accent" />
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">Uma estadia com conforto e praticidade</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Do momento da chegada ao descanso, o Hotel Moreno oferece uma estrutura acolhedora e comodidades para
                que você aproveite sua estadia com tranquilidade.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Localização */}
      <section className="border-t border-border bg-surface py-24">
        <Reveal className="container-site grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Localização</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Encontre-nos em Itajobi</h2>
            <p className="mt-4 text-muted-foreground">
              O Hotel Moreno está localizado em Itajobi, no interior de São Paulo. Entre em contato para obter
              informações e planejar sua visita.
            </p>
            <p className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span>Avenida Catanduva, 223 - Jardim Ferreira, Itajobi - SP.</span>
            </p>
          </div>
          <a href={HOTEL.mapsHref} target="_blank" rel="noopener noreferrer" className={btn()}>
            Como chegar <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <CtaSection
        title="Sua próxima estadia começa aqui."
        text="Entre em contato com nossa equipe e consulte a disponibilidade de acomodações."
      />
    </>
  );
}

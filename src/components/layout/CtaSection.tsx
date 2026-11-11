import { Link } from "@tanstack/react-router";
import { btn, referenceBtn } from "@/components/ui/btn";
import { HOTEL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CtaSection({
  title,
  text,
  referenceStyle = false,
}: {
  title: string;
  text: string;
  referenceStyle?: boolean;
}) {
  const button = referenceStyle ? referenceBtn : btn;
  return (
    <section
      className={
        referenceStyle
          ? "reference-page bg-graphite text-graphite-foreground"
          : "site-cta text-graphite-foreground"
      }
    >
      <Reveal className="container-site py-6 text-center md:py-32">
        <h2 className="mx-auto max-w-2xl text-4xl leading-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl opacity-75">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contato" className={button({ variant: "light" })}>
            Consultar disponibilidade
          </Link>
          <a href={HOTEL.whatsappMessageHref} target="_blank" rel="noopener noreferrer" className={button({ variant: "ghostLight" })}>
            <WhatsAppIcon className="h-4 w-4" /> Conversar pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

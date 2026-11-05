import { Link } from "@tanstack/react-router";
import { btn } from "@/components/ui/btn";
import { HOTEL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CtaSection({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-graphite text-graphite-foreground">
      <Reveal className="container-site py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-2xl text-4xl leading-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl opacity-75">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contato" className={btn({ variant: "light" })}>
            Consultar disponibilidade
          </Link>
          <a href={HOTEL.whatsappMessageHref} target="_blank" rel="noopener noreferrer" className={btn({ variant: "ghostLight" })}>
            <WhatsAppIcon className="h-4 w-4" /> Conversar pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

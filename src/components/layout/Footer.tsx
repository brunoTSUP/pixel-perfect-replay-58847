import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { HOTEL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="reference-page bg-graphite text-graphite-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.18em]">HOTEL MORENO</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-75">
            Conforto, praticidade e hospitalidade para sua estadia em Itajobi.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="eyebrow mb-4">Navegação</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="opacity-80 hover:opacity-100">Início</Link></li>
            <li><Link to="/quartos" className="opacity-80 hover:opacity-100">Quartos</Link></li>
            <li><Link to="/contato" className="opacity-80 hover:opacity-100">Contato</Link></li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-4">Contato</p>
          <ul className="space-y-3 text-sm opacity-85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={HOTEL.mapsHref} target="_blank" rel="noopener noreferrer">
                {HOTEL.street}
                <br />
                {HOTEL.cityLine}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={HOTEL.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {HOTEL.whatsappDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={HOTEL.phoneHref}>Telefone: {HOTEL.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${HOTEL.email}`} className="break-all">{HOTEL.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-graphite-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>© 2026 Hotel Moreno. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="hover:opacity-100">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

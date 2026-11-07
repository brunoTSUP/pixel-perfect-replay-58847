import { createFileRoute } from "@tanstack/react-router";
import { HOTEL } from "@/lib/site";

const TITLE = "Política de Privacidade | Hotel Moreno - Itajobi SP";
const DESC = "Saiba como o site do Hotel Moreno trata as informações enviadas pelos visitantes.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <section className="site-page-intro pb-24 pt-36 md:pt-44">
      <div className="container-site max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
        <h1 className="text-4xl text-foreground md:text-5xl">Política de Privacidade</h1>
        <p>
          Este site tem caráter institucional e apresenta informações sobre o Hotel Moreno. Não realizamos reservas,
          pagamentos ou cadastro de usuários por aqui.
        </p>
        <h2 className="pt-4 text-2xl text-foreground">Informações enviadas por você</h2>
        <p>
          Ao utilizar o formulário de contato, você nos envia nome, e-mail, telefone (opcional), assunto e mensagem.
          Esses dados são usados apenas para responder ao seu contato.
        </p>
        <h2 className="pt-4 text-2xl text-foreground">Serviços de terceiros</h2>
        <p>
          O site exibe um mapa do Google Maps e links para o WhatsApp. Ao interagir com esses serviços, aplicam-se as
          políticas de privacidade de seus respectivos fornecedores.
        </p>
        <h2 className="pt-4 text-2xl text-foreground">Contato</h2>
        <p>
          Para dúvidas sobre seus dados, escreva para{" "}
          <a href={`mailto:${HOTEL.email}`} className="text-accent underline">
            {HOTEL.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

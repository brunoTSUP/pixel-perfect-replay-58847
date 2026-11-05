import fachada from "@/assets/images/fachada.webp.asset.json";
import quartoCasalSolteiro from "@/assets/images/quarto-casal-solteiro.webp.asset.json";
import quartoJanela from "@/assets/images/quarto-janela.webp.asset.json";
import quartoBranco from "@/assets/images/quarto-branco.webp.asset.json";
import quartoTv from "@/assets/images/quarto-tv-frigobar.webp.asset.json";
import banheiro from "@/assets/images/banheiro.webp.asset.json";
import quartoBanheiro from "@/assets/images/quarto-banheiro.webp.asset.json";
import varanda from "@/assets/images/varanda.webp.asset.json";
import pia from "@/assets/images/pia-espelho.webp.asset.json";

export const HOTEL = {
  name: "Hotel Moreno",
  street: "Avenida Catanduva, 223 - Jardim Ferreira",
  cityLine: "Itajobi - SP, CEP: 15840-000",
  whatsappDisplay: "(17) 99715-1608",
  phoneDisplay: "(17) 3546-1608",
  phoneHref: "tel:+551735461608",
  email: "recepcao@hotelmoreno.com.br",
  whatsappHref: "https://wa.me/5517997151608",
  whatsappMessageHref:
    "https://wa.me/5517997151608?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20quartos%20no%20Hotel%20Moreno.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Catanduva+223+Jardim+Ferreira+Itajobi+SP",
  mapsEmbed:
    "https://maps.google.com/maps?q=Avenida%20Catanduva%2C%20223%20-%20Jardim%20Ferreira%2C%20Itajobi%20-%20SP%2C%2015840-000&z=17&output=embed",
};

export type Photo = { src: string; alt: string; w: number; h: number };

export const PHOTOS = {
  fachada: { src: fachada.url, alt: "Fachada moderna do Hotel Moreno em Itajobi", w: 375, h: 625 },
  quartoCasalSolteiro: {
    src: quartoCasalSolteiro.url,
    alt: "Quarto com cama de casal e cama de solteiro, manta vermelha e painel amadeirado",
    w: 1200,
    h: 1600,
  },
  quartoJanela: {
    src: quartoJanela.url,
    alt: "Quarto iluminado com cama de casal, cama de solteiro e janela para a varanda",
    w: 1600,
    h: 1200,
  },
  quartoBranco: {
    src: quartoBranco.url,
    alt: "Quarto com roupas de cama brancas e quadro decorativo de cavalos",
    w: 1600,
    h: 1200,
  },
  quartoTv: {
    src: quartoTv.url,
    alt: "Quarto com televisão, bancada de trabalho, frigobar e ar-condicionado",
    w: 1600,
    h: 1200,
  },
  banheiro: {
    src: banheiro.url,
    alt: "Banheiro privativo com box de vidro e revestimento em cinza",
    w: 1200,
    h: 1600,
  },
  quartoBanheiro: {
    src: quartoBanheiro.url,
    alt: "Quarto com acesso ao banheiro e revestimentos em marrom",
    w: 1600,
    h: 1200,
  },
  varanda: {
    src: varanda.url,
    alt: "Varanda com guarda-corpo de vidro e vista para a rua",
    w: 1086,
    h: 1448,
  },
  pia: {
    src: pia.url,
    alt: "Pias com bancada em granito e espelho iluminado",
    w: 1086,
    h: 1448,
  },
} satisfies Record<string, Photo>;

export const GALLERY: Photo[] = [
  PHOTOS.quartoJanela,
  PHOTOS.quartoCasalSolteiro,
  PHOTOS.quartoBranco,
  PHOTOS.quartoTv,
  PHOTOS.quartoBanheiro,
  PHOTOS.banheiro,
  PHOTOS.pia,
  PHOTOS.varanda,
];

export const HOTEL = {
  name: "Hotel Moreno",
  fullAddress: "Av. Catanduva, 223 - Itajobi, SP, 15841-110",
  street: "Av. Catanduva, 223",
  cityLine: "Itajobi, SP, 15841-110",
  whatsappDisplay: "(17) 99715-1608",
  phoneDisplay: "(17) 3546-1608",
  phoneHref: "tel:+551735461608",
  email: "recepcao@hotelmoreno.com.br",
  whatsappHref: "https://wa.me/5517997151608",
  whatsappMessageHref:
    "https://wa.me/5517997151608?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20quartos%20no%20Hotel%20Moreno.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Av.+Catanduva%2C+223+-+Itajobi%2C+SP%2C+15841-110",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Catanduva%2C%20223%20-%20Itajobi%2C%20SP%2C%2015841-110&z=17&output=embed",
};

export type Photo = { src: string; alt: string; w: number; h: number };

export const PHOTOS = {
  hero: {
    src: "/images/fachada-hero.webp",
    alt: "Fachada do Hotel Moreno com entrada envidraçada e varanda",
    w: 971,
    h: 1619,
  },
  fachada: { src: "/images/fachada.jpeg", alt: "Fachada moderna do Hotel Moreno em Itajobi", w: 375, h: 625 },
  quartoCasalSolteiro: {
    src: "/images/quarto-casal-solteiro.jpeg",
    alt: "Quarto com cama de casal e cama de solteiro, manta vermelha e painel amadeirado",
    w: 1600,
    h: 1200,
  },
  quartoJanela: {
    src: "/images/quarto-janela.jpeg",
    alt: "Quarto iluminado com cama de casal, cama de solteiro e janela para a varanda",
    w: 1600,
    h: 1200,
  },
  quartoBranco: {
    src: "/images/quarto-branco.jpeg",
    alt: "Quarto com roupas de cama brancas e quadro decorativo de cavalos",
    w: 1600,
    h: 1200,
  },
  quartoTv: {
    src: "/images/quarto-tv-frigobar.jpeg",
    alt: "Quarto com televisão, bancada de trabalho, frigobar e ar-condicionado",
    w: 1448,
    h: 1086,
  },
  banheiro: {
    src: "/images/banheiro.jpeg",
    alt: "Banheiro privativo com box de vidro e revestimento em cinza",
    w: 1086,
    h: 1448,
  },
  quartoBanheiro: {
    src: "/images/quarto-banheiro.jpeg",
    alt: "Quarto com acesso ao banheiro e revestimentos em marrom",
    w: 1086,
    h: 1448,
  },
  varanda: {
    src: "/images/varanda.jpeg",
    alt: "Varanda com guarda-corpo de vidro e vista para a rua",
    w: 1086,
    h: 1448,
  },
  pia: {
    src: "/images/pia-espelho.jpeg",
    alt: "Pias com bancada em granito e espelho iluminado",
    w: 1600,
    h: 1200,
  },
} satisfies Record<string, Photo>;

export const GALLERY: Photo[] = [
  PHOTOS.quartoJanela,
  PHOTOS.quartoBranco,
  PHOTOS.quartoCasalSolteiro,
  PHOTOS.quartoTv,
  PHOTOS.quartoBanheiro,
  PHOTOS.pia,
  PHOTOS.varanda,
];

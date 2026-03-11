import type { Category } from "../types/product";

const tacasEspeciaisImage = new URL("../../output/imagegen/taca-doce-lembranca.jpg", import.meta.url).href;
const bananaSplitImage = new URL("../../output/imagegen/banana-split-amorae.jpg", import.meta.url).href;
const milkshakeMorangoImage = new URL("../../output/imagegen/milkshake-morango-de-domingo.jpg", import.meta.url).href;

export const categories: Category[] = [
  {
    id: "cat-tacas",
    slug: "tacas-especiais",
    name: "Taças especiais",
    description: "As receitas mais marcantes da casa, servidas em camadas generosas e cheias de charme.",
    imageUrl: tacasEspeciaisImage,
    highlightLabel: "Assinaturas Amoraê",
    ctaLabel: "Ver taças",
  },
  {
    id: "cat-compartilhar",
    slug: "para-compartilhar",
    name: "Para compartilhar",
    description: "Clássicos de colher para dividir a mesa, a conversa e a parte mais gostosa da pausa.",
    imageUrl: bananaSplitImage,
    highlightLabel: "Clássicos da casa",
    ctaLabel: "Ver clássicos",
  },
  {
    id: "cat-bebidas",
    slug: "milkshakes-e-bebidas",
    name: "Milkshakes & bebidas",
    description: "Bebidas cremosas e refrescantes para acompanhar o passeio, o encontro ou o fim de tarde.",
    imageUrl: milkshakeMorangoImage,
    highlightLabel: "Pausa gelada",
    ctaLabel: "Escolher bebida",
  },
];


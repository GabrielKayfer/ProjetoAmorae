import { categoryImages } from "../assets";
import type { Category } from "../types/product";

export const categories: Category[] = [
  {
    id: "cat-tacas",
    slug: "tacas-especiais",
    name: "Taças especiais",
    description: "As receitas mais marcantes da casa, servidas em camadas generosas e cheias de charme.",
    imageUrl: categoryImages.tacasEspeciais,
    highlightLabel: "Assinaturas Amoraê",
    ctaLabel: "Ver taças",
  },
  {
    id: "cat-compartilhar",
    slug: "para-compartilhar",
    name: "Para compartilhar",
    description: "Clássicos de colher para dividir a mesa, a conversa e a parte mais gostosa da pausa.",
    imageUrl: categoryImages.paraCompartilhar,
    highlightLabel: "Clássicos da casa",
    ctaLabel: "Ver clássicos",
  },
  {
    id: "cat-bebidas",
    slug: "milkshakes-e-bebidas",
    name: "Milkshakes & bebidas",
    description: "Bebidas cremosas e refrescantes para acompanhar o passeio, o encontro ou o fim de tarde.",
    imageUrl: categoryImages.milkshakesEBebidas,
    highlightLabel: "Pausa gelada",
    ctaLabel: "Escolher bebida",
  },
];


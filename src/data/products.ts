import type { Product } from "../types/product";

const saladaFrutasImage = new URL("../../Imagens/salada_frutas.png", import.meta.url).href;
const acaiImage = new URL("../../Imagens/opcao_acai.png", import.meta.url).href;
const bebidasImage = new URL("../../Imagens/opcao_bebida.png", import.meta.url).href;

export const products: Product[] = [
  {
    id: "prod-salada-especial",
    slug: "salada-especial-da-casa",
    name: "Salada Especial da Casa",
    shortDescription: "Mix de frutas frescas com finalizacao crocante.",
    description:
      "Combinacao leve com frutas selecionadas, toque citrico e textura para o dia a dia.",
    price: 18.9,
    imageUrl: saladaFrutasImage,
    category: "saladas-de-frutas",
    featured: true,
  },
  {
    id: "prod-acai-energia",
    slug: "acai-energia",
    name: "Acai Energia",
    shortDescription: "Acai com fruta e toppings classicos.",
    description:
      "Base de acai batido com composicao pronta para a futura etapa de personalizacao.",
    price: 21.9,
    imageUrl: acaiImage,
    category: "acai-e-bowls",
    featured: true,
  },
  {
    id: "prod-suco-solar",
    slug: "suco-solar",
    name: "Suco Solar",
    shortDescription: "Blend natural para pedidos leves.",
    description:
      "Bebida natural pensada para acompanhar combos, lanches e rotinas mais frescas.",
    price: 12.9,
    imageUrl: bebidasImage,
    category: "sucos-e-bebidas",
    featured: true,
  },
];

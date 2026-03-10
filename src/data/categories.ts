import type { Category } from "../types/product";

const saladaFrutasImage = new URL("../../Imagens/salada_frutas.png", import.meta.url).href;
const acaiImage = new URL("../../Imagens/opcao_acai.png", import.meta.url).href;
const bebidasImage = new URL("../../Imagens/opcao_bebida.png", import.meta.url).href;

export const categories: Category[] = [
  {
    id: "cat-saladas",
    slug: "saladas-de-frutas",
    name: "Saladas de frutas",
    description: "Bases leves e coloridas para rotina, sobremesa ou pos-treino.",
    imageUrl: saladaFrutasImage,
    highlightLabel: "Mais leves",
    ctaLabel: "Ver opcoes",
  },
  {
    id: "cat-acai",
    slug: "acai-e-bowls",
    name: "Acai e bowls",
    description: "Combinacoes cremosas com estrutura pronta para futura personalizacao.",
    imageUrl: acaiImage,
    highlightLabel: "Mais personalizaveis",
    ctaLabel: "Montar combinacao",
  },
  {
    id: "cat-bebidas",
    slug: "sucos-e-bebidas",
    name: "Sucos e bebidas",
    description: "Bebidas naturais para acompanhar pedidos e pausas mais frescas.",
    imageUrl: bebidasImage,
    highlightLabel: "Mais refrescantes",
    ctaLabel: "Escolher bebida",
  },
];

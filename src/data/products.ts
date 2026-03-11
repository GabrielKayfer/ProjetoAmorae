import type { Product } from "../types/product";

const jardimBaunilhaImage = new URL("../../output/imagegen/signature-products/jardim-de-baunilha.jpg", import.meta.url).href;
const tacaSessaoTardeImage = new URL("../../output/imagegen/taca-sessao-da-tarde.jpg", import.meta.url).href;
const bananaSplitImage = new URL("../../output/imagegen/banana-split-amorae.jpg", import.meta.url).href;
const milkshakeMorangoImage = new URL("../../output/imagegen/milkshake-morango-de-domingo.jpg", import.meta.url).href;
const sundaeCerejaImage = new URL("../../output/imagegen/new-products/sundae-cereja-da-casa.jpg", import.meta.url).href;
const casquinhaBaunilhaImage = new URL("../../output/imagegen/new-products/casquinha-baunilha-da-casa.jpg", import.meta.url).href;
const ecobagImage = new URL("../../output/imagegen/non-food/ecobag-amorae.jpg", import.meta.url).href;
const canecaImage = new URL("../../output/imagegen/non-food/caneca-creme-das-5.jpg", import.meta.url).href;
const copoImage = new URL("../../output/imagegen/non-food/copo-reutilizavel-cereja-retro.jpg", import.meta.url).href;
const adesivosImage = new URL("../../output/imagegen/non-food/adesivos-doce-lembranca.jpg", import.meta.url).href;
const velaImage = new URL("../../output/imagegen/non-food/vela-noite-de-pistache.jpg", import.meta.url).href;

export const products: Product[] = [
  {
    id: "prod-jardim-de-baunilha",
    slug: "jardim-de-baunilha",
    name: "Jardim de Baunilha",
    shortDescription:
      "Taça da casa com creme de baunilha, camadas delicadas e aquele jeito bonito de sobremesa especial.",
    description:
      "Uma das assinaturas da Amoraê: cremosa, delicada e feita para quem gosta de sabores suaves com presença na mesa.",
    price: 26.9,
    imageUrl: jardimBaunilhaImage,
    category: "tacas-especiais",
    categoryLabel: "Taças especiais",
    badge: "Assinatura da casa",
    sizeLabel: "taça autoral",
    line: "core",
    featured: true,
  },
  {
    id: "prod-taca-sessao-da-tarde",
    slug: "taca-sessao-da-tarde",
    name: "Taça Sessão da Tarde",
    shortDescription: "Camadas generosas, calda delicada e clima de sobremesa boa para dividir olhares.",
    description:
      "Uma taça com presença, pensada para quem gosta de exagero bonito, colheradas cremosas e um toque nostálgico.",
    price: 29.9,
    imageUrl: tacaSessaoTardeImage,
    category: "tacas-especiais",
    categoryLabel: "Taças especiais",
    badge: "Favorito da vitrine",
    sizeLabel: "camadas generosas",
    line: "core",
    featured: true,
  },
  {
    id: "prod-sundae-cereja-da-casa",
    slug: "sundae-cereja-da-casa",
    name: "Sundae Cereja da Casa",
    shortDescription: "O clássico da vitrine com cerejas em destaque e sabor de lembrança boa.",
    description:
      "Um sundae feito para quem procura um clássico com charme retrô, doçura na medida e cara de favorito da casa.",
    price: 23.9,
    imageUrl: sundaeCerejaImage,
    category: "classicos-da-casa",
    categoryLabel: "Clássicos da casa",
    badge: "Clássico da casa",
    sizeLabel: "clássico da vitrine",
    line: "core",
    featured: true,
  },
  {
    id: "prod-casquinha-baunilha-da-casa",
    slug: "casquinha-baunilha-da-casa",
    name: "Casquinha Baunilha da Casa",
    shortDescription: "Gelato simples, cremoso e direto ao ponto para a pausa de todo dia.",
    description:
      "Nossa versão mais cotidiana: leve, gostosa e perfeita para quem quer passar, pedir e continuar o dia com um doce na mão.",
    price: 12.9,
    imageUrl: casquinhaBaunilhaImage,
    category: "entradas-da-casa",
    categoryLabel: "Gelatos da casa",
    badge: "Queridinho do balcão",
    sizeLabel: "clássico simples",
    line: "core",
    featured: true,
  },
  {
    id: "prod-banana-split-amorae",
    slug: "banana-split-amorae",
    name: "Banana Split Amoraê",
    shortDescription: "Clássico de colher para dividir a mesa, a conversa e a melhor parte do momento.",
    description:
      "A leitura mais retrô da casa: uma banana split generosa, feita para compartilhar e transformar o pedido em ocasião.",
    price: 34.9,
    imageUrl: bananaSplitImage,
    category: "para-compartilhar",
    categoryLabel: "Para compartilhar",
    badge: "Para dividir",
    sizeLabel: "serve duas pessoas",
    line: "core",
  },
  {
    id: "prod-milkshake-morango-de-domingo",
    slug: "milkshake-morango-de-domingo",
    name: "Milkshake Morango de Domingo",
    shortDescription: "Cremoso, fresco e fácil de escolher quando bate vontade de uma pausa gelada.",
    description:
      "Um milkshake de morango com cor bonita, sabor familiar e clima de fim de tarde sem pressa.",
    price: 18.9,
    imageUrl: milkshakeMorangoImage,
    category: "milkshakes-e-bebidas",
    categoryLabel: "Milkshakes & bebidas",
    badge: "Pausa gelada",
    sizeLabel: "400 ml",
    line: "core",
  },
  {
    id: "prod-ecobag-amorae",
    slug: "ecobag-amorae",
    name: "Ecobag Amoraê",
    shortDescription: "Uma lembrança útil da casa para levar a marca para a rua com leveza.",
    description:
      "Ecobag em algodão cru para quem gosta de levar um pedaço da Amoraê no dia a dia, sem abrir mão do charme.",
    price: 39.9,
    imageUrl: ecobagImage,
    category: "lembrancas-da-marca",
    categoryLabel: "Lembranças da marca",
    badge: "Leve a marca com você",
    sizeLabel: "algodão cru",
    line: "brand-extension",
  },
  {
    id: "prod-caneca-creme-das-5",
    slug: "caneca-creme-das-5",
    name: "Caneca Creme das 5",
    shortDescription: "Caneca da casa para café, chá e pausas lentas com clima de aconchego.",
    description:
      "Uma peça afetiva e presenteável, pensada para acompanhar a rotina com o mesmo charme das tardes na Amoraê.",
    price: 32.9,
    imageUrl: canecaImage,
    category: "lembrancas-da-marca",
    categoryLabel: "Lembranças da marca",
    badge: "Presente da casa",
    sizeLabel: "edição afetiva",
    line: "brand-extension",
  },
  {
    id: "prod-copo-reutilizavel-cereja-retro",
    slug: "copo-reutilizavel-cereja-retro",
    name: "Copo Reutilizável Cereja Retrô",
    shortDescription: "Leve, prático e charmoso para acompanhar pedidos gelados dentro e fora da loja.",
    description:
      "Um copo reutilizável com o repertório visual da marca, pensado para quem gosta de detalhes bonitos no cotidiano.",
    price: 24.9,
    imageUrl: copoImage,
    category: "lembrancas-da-marca",
    categoryLabel: "Lembranças da marca",
    badge: "Achado da loja",
    sizeLabel: "reutilizável",
    line: "brand-extension",
  },
  {
    id: "prod-adesivos-doce-lembranca",
    slug: "adesivos-doce-lembranca",
    name: "Adesivos Doce Lembrança",
    shortDescription: "Kit ilustrado para quem gosta de guardar a marca em detalhes pequenos e bonitos.",
    description:
      "Um conjunto de adesivos para presentear, colecionar ou levar a atmosfera da Amoraê para o caderno, a agenda ou o notebook.",
    price: 9.9,
    imageUrl: adesivosImage,
    category: "editorial-complementar",
    categoryLabel: "Peças especiais",
    badge: "Colecionável",
    sizeLabel: "kit ilustrado",
    line: "editorial",
  },
  {
    id: "prod-vela-noite-de-pistache",
    slug: "vela-noite-de-pistache",
    name: "Vela Noite de Pistache",
    shortDescription: "Uma peça perfumada para presentear e prolongar a pausa além da sobremesa.",
    description:
      "Vela perfumada criada para edições especiais, presentes e momentos em que a casa pede um clima mais intimista.",
    price: 49.9,
    imageUrl: velaImage,
    category: "edicao-especial",
    categoryLabel: "Peças especiais",
    badge: "Edição limitada",
    sizeLabel: "presenteável",
    line: "editorial",
  },
];


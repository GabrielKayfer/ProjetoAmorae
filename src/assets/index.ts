import cartaDeVeraoImage from "./images/carta-de-verao.png";
import tacaDoceLembrancaImage from "./images/taca-doce-lembranca.jpg";
import bananaSplitAmoraeImage from "./images/banana-split-amorae.jpg";
import milkshakeMorangoDeDomingoImage from "./images/milkshake-morango-de-domingo.jpg";
import jardimDeBaunilhaImage from "./images/jardim-de-baunilha.jpg";
import tacaSessaoDaTardeImage from "./images/taca-sessao-da-tarde.jpg";
import sundaeCerejaDaCasaImage from "./images/sundae-cereja-da-casa.jpg";
import casquinhaBaunilhaDaCasaImage from "./images/casquinha-baunilha-da-casa.jpg";
import ecobagAmoraeImage from "./images/ecobag-amorae.jpg";
import canecaCremeDas5Image from "./images/caneca-creme-das-5.jpg";
import copoReutilizavelCerejaRetroImage from "./images/copo-reutilizavel-cereja-retro.jpg";
import adesivosDoceLembrancaImage from "./images/adesivos-doce-lembranca.jpg";
import velaNoiteDePistacheImage from "./images/vela-noite-de-pistache.jpg";

import instagramIcon from "./icons/instagram.png";
import facebookIcon from "./icons/facebook.png";
import youtubeIcon from "./icons/youtube.png";

export const heroImageUrl = cartaDeVeraoImage;

export const categoryImages = {
  tacasEspeciais: tacaDoceLembrancaImage,
  paraCompartilhar: bananaSplitAmoraeImage,
  milkshakesEBebidas: milkshakeMorangoDeDomingoImage,
} as const;

export const productImages = {
  jardimDeBaunilha: jardimDeBaunilhaImage,
  tacaSessaoDaTarde: tacaSessaoDaTardeImage,
  bananaSplitAmorae: bananaSplitAmoraeImage,
  milkshakeMorangoDeDomingo: milkshakeMorangoDeDomingoImage,
  sundaeCerejaDaCasa: sundaeCerejaDaCasaImage,
  casquinhaBaunilhaDaCasa: casquinhaBaunilhaDaCasaImage,
  ecobagAmorae: ecobagAmoraeImage,
  canecaCremeDas5: canecaCremeDas5Image,
  copoReutilizavelCerejaRetro: copoReutilizavelCerejaRetroImage,
  adesivosDoceLembranca: adesivosDoceLembrancaImage,
  velaNoiteDePistache: velaNoiteDePistacheImage,
} as const;

export const socialIcons = {
  instagram: instagramIcon,
  facebook: facebookIcon,
  youtube: youtubeIcon,
} as const;

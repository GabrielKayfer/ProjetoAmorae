# Amorae

Aplicacao frontend de uma gelateria retro ficticia, desenvolvida com React, TypeScript, Vite e styled-components. O projeto evoluiu de uma landing page estatica para uma experiencia inicial de e-commerce com home editorial, catalogo, pagina de produto e carrinho.

## Estado atual da aplicacao

A aplicacao esta em um estagio funcional de frontend, com identidade de marca, estrutura de navegacao e catalogo inicial definidos.

### O que ja esta pronto

- Home com hero editorial e destaques da colecao atual.
- Catalogo com produtos organizados por linhas de negocio.
- Pagina de produto com informacoes detalhadas.
- Carrinho com estado global via contexto e reducer.
- Header e footer consistentes com a marca Amorae.
- Rebranding textual e visual aplicado ao site.
- Build de producao validado com `npm run build`.

### Estrutura comercial atual

A experiencia do site esta organizada em tres linhas de produto:

- `core`: produtos comestiveis principais, com maior peso emocional e comercial.
- `brand-extension`: lembrancas e itens de marca, apresentados como extensao do universo Amorae.
- `editorial`: itens complementares e premium, com leitura mais colecionavel e sensorial.

### Produtos em destaque

O catalogo atual inclui itens como:

- Carta de Verao
- Sundae Cereja da Casa
- Casquinha Baunilha da Casa
- Taca Doce Lembranca
- Taca Sessao da Tarde
- Banana Split Amorae
- Milkshake Morango de Domingo
- Ecobag Amorae
- Caneca Creme das 5
- Copo Reutilizavel Cereja Retro
- Adesivos Doce Lembranca
- Vela Noite de Pistache

## Rotas da aplicacao

A navegacao principal esta estruturada em:

- `/` home
- `/catalogo` catalogo
- `/produto/:slug` pagina de produto
- `/carrinho` carrinho

## Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- styled-components

## Como rodar o projeto

### Requisitos

- Node.js
- npm

### Desenvolvimento

```bash
npm install
npm run dev
```

### Build de producao

```bash
npm run build
```

### Preview local do build

```bash
npm run preview
```

## Estrutura principal

```text
src/
  app/
  components/
  data/
  pages/
  services/
  state/
  styles/
  types/
  utils/
```

## Proximas frentes sugeridas

- refinamento final de branding e linguagem visivel
- otimizacao de imagens e performance do catalogo
- integracao futura com backend/catalogo real
- evolucao de busca, filtros e estados comerciais

## Observacoes

- O projeto ainda opera com dados locais mockados em `src/data`.
- Os assets visuais mais recentes ficam em `output/` e alimentam a experiencia atual da home e do catalogo.
- O repositorio usa `.gitignore` para ignorar `node_modules`, `dist` e artefatos gerados de TypeScript.

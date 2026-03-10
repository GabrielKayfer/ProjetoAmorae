export const routes = {
  home: "/",
  catalog: "/catalogo",
  product: (slug = ":slug") => `/produto/${slug}`,
  cart: "/carrinho",
};

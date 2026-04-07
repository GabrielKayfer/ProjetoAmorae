export const routes = {
  home: '/',
  catalog: '/cardapio',
  product: (slug: string = ':slug') => `/cardapio/${slug}`,
  cart: '/carrinho',
  login: '/login',
  profile: '/profile',
  favorites: '/favoritos',
};

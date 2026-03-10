import { products } from "../data/products";
import type { Product } from "../types/product";

export const productsService = {
  list(): Product[] {
    return products;
  },
  listFeatured(): Product[] {
    return products.filter((product) => product.featured);
  },
  findBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
  },
};

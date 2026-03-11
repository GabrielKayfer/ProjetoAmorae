import { products } from "../data/products";
import type { Product } from "../types/product";

export const productsService = {
  list(): Product[] {
    return products;
  },
  listFeatured(): Product[] {
    return products.filter((product) => product.featured);
  },
  listByLine(line: Product["line"]): Product[] {
    return products.filter((product) => product.line === line);
  },
  listByCategory(category: string): Product[] {
    return products.filter((product) => product.category === category);
  },
  findBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
  },
};

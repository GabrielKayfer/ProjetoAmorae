export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  highlightLabel: string;
  ctaLabel: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured?: boolean;
}

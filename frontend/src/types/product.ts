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
  categoryLabel: string;
  badge: string;
  sizeLabel?: string;
  line: "core" | "brand-extension" | "editorial";
  featured?: boolean;
}

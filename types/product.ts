export type ProductBadge = "ขายดี" | "ใหม่" | "ฮอต" | "จำนวนจำกัด";
export type ProductType = "Points" | "Skin" | "Battle Pass" | "Top Up" | "Bundle" | "Currency";

export interface Product {
  slug: string;
  game: string;
  gameSlug: string;
  name: string;
  description: string;
  type: ProductType;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  sold: number;
  stock: number;
  badge: ProductBadge;
  accent: string;
  mark: string;
  isNew?: boolean;
  packages: { label: string; price: number }[];
  regions: string[];
}

export type ProductBadge = "ขายดี" | "ราคาพิเศษ" | "สินค้าใหม่";

export interface Product {
  slug: string;
  game: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  sold: number;
  badge: ProductBadge;
  accent: string;
  mark: string;
}

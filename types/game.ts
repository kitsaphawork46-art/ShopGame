export interface Game {
  slug: string;
  name: string;
  shortName: string;
  productCount: number;
  category: "PC" | "Mobile" | "Wallet";
  gradient: string;
  mark: string;
}

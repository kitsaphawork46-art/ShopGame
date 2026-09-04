import type { Metadata } from "next";
import { SiteShell, PageHeader } from "@/components/layout/SiteShell";
import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = { title: "ร้านค้า" };

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ game?: string }> }) {
  const params = await searchParams;
  return <SiteShell><PageHeader eyebrow="Loot marketplace" title="ร้านค้าไอเทมเกม" description="ค้นหาและเลือกซื้อ Game Currency, Weapon Skins, Battle Pass และ Bundle จากเกมโปรดของคุณ" /><ShopCatalog initialGame={params.game ?? "all"} /></SiteShell>;
}

import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <SiteShell><ProductDetail product={product} /></SiteShell>;
}

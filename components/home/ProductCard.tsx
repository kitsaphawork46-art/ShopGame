"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/types/product";
import { useStore } from "@/components/ui/StoreProvider";
import { ProductVisual } from "@/components/products/ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.slug);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#091120] transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/50 hover:shadow-[0_15px_50px_rgba(37,99,235,.13)]">
      <div className="relative overflow-hidden [&>div]:transition [&>div]:duration-500 group-hover:[&>div]:scale-[1.03]">
        <ProductVisual product={product} />
        <span className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-extrabold ${product.badge === "ใหม่" ? "bg-cyan text-slate-950" : product.badge === "ฮอต" ? "bg-violet-500 text-white" : product.badge === "จำนวนจำกัด" ? "bg-amber-400 text-slate-950" : "bg-brand text-white"}`}>{product.badge}</span>
        {discount > 0 && <span className="absolute bottom-3 left-3 rounded-md bg-slate-950/80 px-2 py-1 text-[10px] font-bold text-emerald-400 backdrop-blur">-{discount}%</span>}
        <button onClick={() => toggleWishlist(product.slug)} className={`absolute right-3 top-3 rounded-lg border p-2 backdrop-blur transition ${wished ? "border-rose-400/40 bg-rose-500/20 text-rose-400" : "border-white/10 bg-slate-950/50 text-slate-300 hover:text-rose-400"}`} aria-label={wished ? "นำออกจากรายการโปรด" : "เพิ่มในรายการโปรด"}><Heart size={16} fill={wished ? "currentColor" : "none"} /></button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2"><p className="text-[10px] font-extrabold tracking-[.12em] text-cyan">{product.game}</p><p className="text-[10px] text-slate-500">{product.type}</p></div>
        <Link href={`/product/${product.slug}`} className="mt-1.5 line-clamp-2 min-h-12 text-[15px] font-bold leading-6 text-slate-100 transition hover:text-cyan">{product.name}</Link>
        <div className="mt-2 flex items-center gap-2 text-xs"><span className="flex items-center gap-1 font-bold text-amber-300"><Star size={13} fill="currentColor" />{product.rating}</span><span className="text-slate-600">•</span><span className="text-slate-500">{product.reviews} รีวิว</span><span className="text-slate-600">•</span><span className="text-emerald-400">พร้อมส่ง</span></div>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-800/80 pt-4"><div><p className="text-lg font-black text-white">฿{product.price.toLocaleString()}</p>{product.originalPrice && <p className="text-[11px] text-slate-600 line-through">฿{product.originalPrice.toLocaleString()}</p>}</div><div className="flex gap-2"><button onClick={() => addToCart(product)} className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-cyan/50 hover:text-cyan" aria-label="เพิ่มลงตะกร้า"><ShoppingCart size={17} /></button><button onClick={() => addToCart(product)} className="rounded-lg bg-blue-600 px-3.5 text-xs font-bold text-white transition hover:bg-blue-500">ซื้อเลย</button></div></div>
      </div>
    </article>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Gamepad2, Search, X } from "lucide-react";
import { games } from "@/data/games";
import { products } from "@/data/products";
import { useStore } from "./StoreProvider";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products.slice(0, 4);
    return products.filter((item) => `${item.game} ${item.name}`.toLowerCase().includes(term)).slice(0, 5);
  }, [query]);
  if (!searchOpen) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/75 p-4 pt-20 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setSearchOpen(false)}>
      <div role="dialog" aria-modal="true" aria-label="ค้นหาสินค้า" className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-[#09101f] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-800 p-4">
          <Search className="text-cyan" size={21} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาเกม ไอเทม หรือ Gift Card..." className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500" />
          <button onClick={() => setSearchOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white" aria-label="ปิด"><X size={19} /></button>
        </div>
        <div className="p-3">
          <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-widest text-slate-500">{query ? `ผลการค้นหา ${results.length} รายการ` : "ค้นหายอดนิยม"}</p>
          {results.length ? results.map((product) => (
            <Link onClick={() => setSearchOpen(false)} key={product.slug} href={`/product/${product.slug}`} className="group flex items-center gap-3 rounded-xl p-3 hover:bg-slate-800/80">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} font-black text-cyan`}>{product.mark}</span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold text-cyan">{product.game}</span><span className="block truncate text-sm font-semibold text-white">{product.name}</span></span>
              <span className="text-sm font-bold text-white">฿{product.price.toLocaleString()}</span><ArrowRight size={16} className="text-slate-600 group-hover:text-cyan" />
            </Link>
          )) : <div className="flex flex-col items-center px-4 py-12 text-center"><Gamepad2 size={38} className="mb-3 text-slate-600" /><p className="font-bold text-white">ไม่พบสินค้าที่ค้นหา</p><p className="mt-1 text-sm text-slate-500">ลองใช้ชื่อเกมหรือชื่อสินค้าอื่น</p></div>}
        </div>
        <div className="flex flex-wrap gap-2 border-t border-slate-800 px-6 py-4 text-xs text-slate-500">เกมแนะนำ: {games.slice(0, 4).map((game) => <button key={game.slug} onClick={() => setQuery(game.name)} className="rounded-full border border-slate-700 px-2.5 py-1 hover:border-cyan/50 hover:text-cyan">{game.name}</button>)}</div>
      </div>
    </div>
  );
}

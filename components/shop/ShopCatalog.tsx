"use client";

import { useMemo, useState } from "react";
import { Filter, Search, SlidersHorizontal, X } from "lucide-react";
import { games } from "@/data/games";
import { products } from "@/data/products";
import { ProductCard } from "@/components/home/ProductCard";

export function ShopCatalog({ initialGame = "all" }: { initialGame?: string }) {
  const [query, setQuery] = useState("");
  const [game, setGame] = useState(initialGame);
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(2500);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const types = Array.from(new Set(products.map((product) => product.type)));
  const filtered = useMemo(() => {
    const result = products.filter(
      (product) =>
        (game === "all" || product.gameSlug === game) &&
        (type === "all" || product.type === type) &&
        product.price <= maxPrice &&
        `${product.name} ${product.game}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    );
    return [...result].sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : sort === "newest"
            ? Number(b.isNew) - Number(a.isNew)
            : b.sold - a.sold,
    );
  }, [query, game, type, sort, maxPrice]);
  const filterPanel = (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-bold">
          <SlidersHorizontal size={18} className="text-cyan" /> ตัวกรอง
        </h2>
        <button
          onClick={() => {
            setGame("all");
            setType("all");
            setMaxPrice(2500);
          }}
          className="text-xs text-slate-500 hover:text-cyan"
        >
          ล้างทั้งหมด
        </button>
      </div>
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          เกม
        </p>
        <div className="space-y-1">
          {[{ slug: "all", name: "ทุกเกม" }, ...games].map((item) => (
            <button
              key={item.slug}
              onClick={() => setGame(item.slug)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${game === item.slug ? "bg-blue-500/15 font-bold text-cyan" : "text-slate-400 hover:bg-slate-800"}`}
            >
              <span>{item.name}</span>
              {item.slug !== "all" && (
                <span className="text-[10px] text-slate-600">
                  {"productCount" in item ? item.productCount : ""}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          ประเภทสินค้า
        </p>
        <div className="space-y-1">
          {["all", ...types].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${type === item ? "bg-blue-500/15 font-bold text-cyan" : "text-slate-400 hover:bg-slate-800"}`}
            >
              {item === "all" ? "ทุกประเภท" : item}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-3 flex justify-between text-xs font-bold text-slate-500">
          <span>ราคาสูงสุด</span>
          <span className="text-white">฿{maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="200"
          max="2500"
          step="100"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
  return (
    <div className="container-page py-12">
      <div className="mb-7 flex flex-col gap-3 md:flex-row">
        <label className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="field pl-11"
            placeholder="ค้นหา Points, Skin, Battle Pass..."
          />
        </label>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="field md:w-56"
        >
          <option value="popular">ยอดนิยม</option>
          <option value="newest">สินค้าใหม่</option>
          <option value="low">ราคาต่ำไปสูง</option>
          <option value="high">ราคาสูงไปต่ำ</option>
        </select>
        <button
          onClick={() => setFiltersOpen(true)}
          className="button-secondary lg:hidden"
        >
          <Filter size={17} /> ตัวกรอง
        </button>
      </div>
      <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
        <aside className="hidden h-fit rounded-2xl border border-slate-800 bg-[#091120] p-5 lg:block">
          {filterPanel}
        </aside>
        <div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              พบ <strong className="text-white">{filtered.length}</strong>{" "}
              สินค้า
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              พร้อมส่งทุกชิ้น
            </p>
          </div>
          {filtered.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 py-20 text-center">
              <Search className="mx-auto text-slate-600" size={32} />
              <h3 className="mt-4 font-bold">ไม่พบสินค้า</h3>
              <p className="mt-2 text-sm text-slate-500">
                ลองเปลี่ยนคำค้นหาหรือตัวกรอง
              </p>
            </div>
          )}
        </div>
      </div>
      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-black/70 lg:hidden">
          <aside className="ml-auto h-full w-[86%] max-w-sm overflow-y-auto border-l border-slate-800 bg-[#07111f] p-6">
            <button
              onClick={() => setFiltersOpen(false)}
              className="mb-6 ml-auto block rounded-lg p-2 text-slate-400"
            >
              <X size={20} />
            </button>
            {filterPanel}
            <button
              onClick={() => setFiltersOpen(false)}
              className="button-primary mt-8 w-full"
            >
              ดูสินค้า {filtered.length} รายการ
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

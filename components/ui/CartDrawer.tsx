"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useStore } from "./StoreProvider";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  if (!cartOpen) return null;
  return (
    <div className="fixed inset-0 z-[70] bg-black/65 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setCartOpen(false)}>
      <aside role="dialog" aria-modal="true" aria-label="ตะกร้าสินค้า" className="ml-auto flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-[#080f1e] shadow-2xl">
        <div className="flex h-[74px] items-center justify-between border-b border-slate-800 px-5">
          <div className="flex items-center gap-2.5"><ShoppingBag size={20} className="text-cyan" /><h2 className="font-bold text-white">ตะกร้าของคุณ</h2><span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-bold text-cyan">{cart.length}</span></div>
          <button onClick={() => setCartOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white" aria-label="ปิดตะกร้า"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center"><span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-800 bg-slate-900"><ShoppingBag size={30} className="text-slate-600" /></span><h3 className="text-lg font-bold text-white">ตะกร้ายังว่างอยู่</h3><p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">เลือกสินค้าเกมที่คุณชอบ แล้วกลับมาดำเนินการชำระเงินได้ทันที</p><button onClick={() => setCartOpen(false)} className="button-primary mt-6">เลือกซื้อสินค้า</button></div>
          ) : (
            <div className="space-y-3">{cart.map(({ product, quantity }) => <div key={product.slug} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3"><span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.accent} font-black text-cyan`}>{product.mark}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-white">{product.name}</p><p className="mt-1 text-sm font-bold text-cyan">฿{product.price.toLocaleString()}</p><div className="mt-2 flex items-center justify-between"><div className="flex items-center rounded-lg border border-slate-700"><button onClick={() => updateQuantity(product.slug, quantity - 1)} className="p-1.5" aria-label="ลดจำนวน"><Minus size={13} /></button><span className="w-7 text-center text-xs font-bold">{quantity}</span><button onClick={() => updateQuantity(product.slug, quantity + 1)} className="p-1.5" aria-label="เพิ่มจำนวน"><Plus size={13} /></button></div><button onClick={() => removeFromCart(product.slug)} className="p-1.5 text-slate-500 hover:text-rose-400" aria-label="ลบสินค้า"><Trash2 size={16} /></button></div></div></div>)}</div>
          )}
        </div>
        {cart.length > 0 && <div className="border-t border-slate-800 bg-slate-950/70 p-5"><div className="mb-5 flex justify-between"><span className="text-sm text-slate-400">ยอดรวม</span><span className="text-xl font-black text-white">฿{subtotal.toLocaleString()}</span></div><Link onClick={() => setCartOpen(false)} href="/cart" className="button-primary w-full">ดูตะกร้าและชำระเงิน</Link><p className="mt-3 text-center text-xs text-slate-500">ชำระเงินปลอดภัย • จัดส่งสินค้าอัตโนมัติ</p></div>}
      </aside>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useStore } from "@/components/ui/StoreProvider";

const links = [
  ["หน้าแรก", "/"], ["เกมทั้งหมด", "/games"], ["ร้านค้า", "/shop"], ["โปรโมชั่น", "/promotions"],
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, setCartOpen, setSearchOpen } = useStore();
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-slate-800/90 bg-ink/90 shadow-xl backdrop-blur-xl" : "border-transparent bg-ink/45 backdrop-blur-sm"}`}>
      <nav className="container-page flex h-[74px] items-center justify-between gap-6" aria-label="เมนูหลัก">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} className={`focus-ring rounded-md text-sm font-semibold transition hover:text-white ${index === 0 ? "text-white" : "text-slate-400"}`}>{label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button onClick={() => setSearchOpen(true)} className="focus-ring rounded-xl p-2.5 text-slate-300 transition hover:bg-slate-800 hover:text-cyan" aria-label="ค้นหา"><Search size={19} /></button>
          <button onClick={() => setCartOpen(true)} className="focus-ring relative rounded-xl p-2.5 text-slate-300 transition hover:bg-slate-800 hover:text-cyan" aria-label={`ตะกร้าสินค้า ${cartCount} รายการ`}>
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white">{cartCount}</span>}
          </button>
          <Link href="/login" className="focus-ring hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:text-white sm:block">เข้าสู่ระบบ</Link>
          <Link href="/dashboard" className="focus-ring hidden h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_8px_24px_rgba(37,99,235,.25)] transition hover:bg-blue-500 md:flex" aria-label="โปรไฟล์"><UserRound size={18} /></Link>
          <button onClick={() => setMobileOpen((open) => !open)} className="focus-ring ml-1 rounded-xl border border-slate-800 p-2.5 text-slate-200 lg:hidden" aria-label="เปิดเมนู" aria-expanded={mobileOpen}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-ink/98 px-5 py-4 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-2xl gap-1">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-white">{label}</Link>)}
            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4">
              <Link href="/login" className="button-secondary">เข้าสู่ระบบ</Link><Link href="/register" className="button-primary">สมัครสมาชิก</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

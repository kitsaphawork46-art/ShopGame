"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { Product } from "@/types/product";

interface CartLine { product: Product; quantity: number }
interface StoreState {
  cart: CartLine[];
  cartOpen: boolean;
  searchOpen: boolean;
  wishlist: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  toggleWishlist: (slug: string) => void;
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("lootberry-cart");
    const savedWishlist = window.localStorage.getItem("lootberry-wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    setHydrated(true);
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setCartOpen(false); setSearchOpen(false); }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => { if (hydrated) window.localStorage.setItem("lootberry-cart", JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) window.localStorage.setItem("lootberry-wishlist", JSON.stringify(wishlist)); }, [wishlist, hydrated]);

  const addToCart = useCallback((product: Product) => {
    setCart((current) => {
      const exists = current.find((line) => line.product.slug === product.slug);
      return exists ? current.map((line) => line.product.slug === product.slug ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { product, quantity: 1 }];
    });
    setToast(`เพิ่ม ${product.name} ลงตะกร้าแล้ว`);
    window.setTimeout(() => setToast(""), 2600);
  }, []);

  const value = useMemo(() => ({
    cart, cartOpen, searchOpen, wishlist,
    addToCart,
    removeFromCart: (slug: string) => setCart((current) => current.filter((line) => line.product.slug !== slug)),
    updateQuantity: (slug: string, quantity: number) => setCart((current) => current.map((line) => line.product.slug === slug ? { ...line, quantity: Math.max(1, quantity) } : line)),
    clearCart: () => setCart([]),
    setCartOpen, setSearchOpen,
    toggleWishlist: (slug: string) => setWishlist((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]),
  }), [cart, cartOpen, searchOpen, wishlist, addToCart]);

  return (
    <StoreContext.Provider value={value}>
      {children}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl border border-emerald-400/30 bg-slate-950 px-4 py-3 text-sm text-white shadow-2xl">
          <CheckCircle2 className="text-emerald-400" size={19} />
          <span className="flex-1">{toast}</span>
          <button onClick={() => setToast("")} aria-label="ปิดข้อความ"><X size={17} /></button>
        </div>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}

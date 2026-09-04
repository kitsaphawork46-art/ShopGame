import { Crosshair, Gem, Package, Shield, Sparkles, Zap } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  const Icon = product.type === "Skin" ? Crosshair : product.type === "Battle Pass" ? Shield : product.type === "Bundle" ? Package : product.type === "Currency" ? Gem : Zap;
  return (
    <div className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br ${product.accent} ${large ? "min-h-[390px] rounded-2xl sm:min-h-[520px]" : "aspect-[1.5]"}`}>
      <div className="cyber-noise absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-3xl" />
      <div className={`relative flex items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/40 shadow-[0_0_50px_rgba(59,130,246,.24)] backdrop-blur ${large ? "h-52 w-52" : "h-24 w-24 rounded-2xl"}`}>
        <Icon className="absolute text-blue-300/25" size={large ? 136 : 66} strokeWidth={1} />
        <span className={`relative font-black tracking-tight text-white drop-shadow-[0_0_22px_rgba(56,189,248,.7)] ${large ? "text-6xl" : "text-3xl"}`}>{product.mark}</span>
      </div>
      <Sparkles className="absolute right-[16%] top-[18%] text-cyan/60" size={large ? 28 : 17} />
      <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[.18em] text-blue-100/70 backdrop-blur">Digital Product</span>
    </div>
  );
}

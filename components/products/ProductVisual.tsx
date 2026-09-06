import Image from "next/image";
import type { Product } from "@/types/product";

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={`relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br ${product.accent} ${large ? "min-h-[390px] rounded-2xl sm:min-h-[520px]" : "aspect-[1.5]"}`}>
      <Image
        src={product.image}
        alt={`ภาพสินค้า ${product.name}`}
        fill
        sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
        className={large ? "object-contain" : "object-cover"}
      />
      <div className={`absolute inset-0 ${large ? "bg-gradient-to-t from-black/20 via-transparent to-transparent" : "bg-gradient-to-t from-black/35 via-transparent to-black/5"}`} />
      <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[.18em] text-blue-100/70 backdrop-blur">Digital Product</span>
    </div>
  );
}

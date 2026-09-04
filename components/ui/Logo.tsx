import Link from "next/link";
import { Cherry } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex shrink-0 items-center gap-2.5 rounded-lg" aria-label="LootBerry Game หน้าแรก">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 text-white shadow-[0_0_24px_rgba(56,189,248,.24)]">
        <Cherry size={20} strokeWidth={2.3} />
      </span>
      {!compact && <span className="text-base font-black tracking-[0.02em] text-white">LootBerry <span className="text-cyan">Game</span></span>}
    </Link>
  );
}

import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#top" className="focus-ring flex shrink-0 items-center gap-2.5 rounded-lg" aria-label="Nexora Game หน้าแรก">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white shadow-[0_0_24px_rgba(56,189,248,.22)]">
        <Gamepad2 size={20} strokeWidth={2.3} />
      </span>
      {!compact && <span className="text-base font-black tracking-[0.06em] text-white">NEXORA <span className="text-cyan">GAME</span></span>}
    </Link>
  );
}

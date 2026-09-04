import type { Game } from "@/types/game";

export const games: Game[] = [
  { slug: "valorant", name: "VALORANT", shortName: "Tactical FPS", productCount: 24, category: "PC", gradient: "from-red-500/80 via-rose-600/50 to-slate-950", mark: "V" },
  { slug: "roblox", name: "ROBLOX", shortName: "Online Universe", productCount: 18, category: "PC", gradient: "from-zinc-400/70 via-zinc-700 to-slate-950", mark: "R" },
  { slug: "minecraft", name: "MINECRAFT", shortName: "Sandbox", productCount: 12, category: "PC", gradient: "from-emerald-500/70 via-green-800 to-slate-950", mark: "M" },
  { slug: "pubg", name: "PUBG", shortName: "Battle Royale", productCount: 16, category: "Mobile", gradient: "from-amber-400/80 via-orange-700 to-slate-950", mark: "P" },
  { slug: "free-fire", name: "FREE FIRE", shortName: "Survival Shooter", productCount: 21, category: "Mobile", gradient: "from-orange-500/80 via-red-800 to-slate-950", mark: "F" },
  { slug: "gta-v", name: "GTA V", shortName: "Open World", productCount: 14, category: "PC", gradient: "from-lime-400/60 via-cyan-800 to-slate-950", mark: "G" },
  { slug: "mobile-legends", name: "MOBILE LEGENDS", shortName: "MOBA", productCount: 30, category: "Mobile", gradient: "from-sky-400/80 via-blue-700 to-slate-950", mark: "ML" },
  { slug: "steam", name: "STEAM", shortName: "Game Wallet", productCount: 9, category: "Wallet", gradient: "from-blue-400/70 via-slate-700 to-slate-950", mark: "S" },
];

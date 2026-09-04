import type { Game } from "@/types/game";

export const games: Game[] = [
  { slug: "call-of-duty", name: "CALL OF DUTY", shortName: "CP, Skins & Bundles", productCount: 32, category: "PC", gradient: "from-blue-400/70 via-blue-900 to-slate-950", mark: "COD", image: "/images/games/call-of-duty.png" },
  { slug: "valorant", name: "VALORANT", shortName: "VP & Weapon Skins", productCount: 24, category: "PC", gradient: "from-rose-500/75 via-violet-900 to-slate-950", mark: "V", image: "/images/games/valorant.png" },
  { slug: "free-fire", name: "FREE FIRE", shortName: "Diamonds & Pass", productCount: 21, category: "Mobile", gradient: "from-orange-400/75 via-purple-900 to-slate-950", mark: "FF", image: "/images/games/free-fire.png" },
  { slug: "pubg", name: "PUBG", shortName: "UC & Crates", productCount: 18, category: "Mobile", gradient: "from-amber-400/75 via-blue-900 to-slate-950", mark: "PUBG", image: "/images/games/pubg.png" },
  { slug: "roblox", name: "ROBLOX", shortName: "Robux & Gift Cards", productCount: 16, category: "PC", gradient: "from-zinc-300/70 via-indigo-900 to-slate-950", mark: "R", image: "/images/games/roblox.png" },
  { slug: "other-games", name: "OTHER GAMES", shortName: "เกมยอดนิยมอีกมากมาย", productCount: 48, category: "Wallet", gradient: "from-cyan-400/65 via-purple-900 to-slate-950", mark: "+", image: "/images/games/other-games.png" },
];

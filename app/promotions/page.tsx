import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Copy, Gift, Sparkles, Zap } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/layout/SiteShell";

export const metadata: Metadata = { title: "โปรโมชั่น" };

const promotions = [
  { badge: "สมาชิกใหม่", title: "Welcome Loot ลด 20%", desc: "ส่วนลดออเดอร์แรก สูงสุด 200 บาท เมื่อสมัครสมาชิกใหม่", code: "BERRY20", color: "from-blue-600/35 to-violet-900/30", icon: Gift },
  { badge: "สุดสัปดาห์", title: "COD Weekend Bonus", desc: "ซื้อสินค้า Call of Duty ครบ 1,000 บาท รับส่วนลดเพิ่ม 100 บาท", code: "COD100", color: "from-cyan-600/30 to-blue-900/30", icon: Zap },
  { badge: "เวลาจำกัด", title: "Midnight Loot Drop", desc: "ลด 10% ทุกสินค้า ระหว่าง 00:00–02:00 น. เฉพาะวันศุกร์", code: "NIGHT10", color: "from-violet-600/35 to-fuchsia-950/30", icon: Sparkles },
];

export default function PromotionsPage() { return <SiteShell><PageHeader eyebrow="Loot rewards" title="โปรโมชั่นพิเศษ" description="ดีลและโค้ดส่วนลดสำหรับชาว LootBerry อัปเดตทุกสัปดาห์ ใช้ได้ง่ายในหน้าชำระเงิน" /><section className="container-page py-14"><div className="grid gap-5 lg:grid-cols-3">{promotions.map(({ badge, title, desc, code, color, icon: Icon }) => <article key={code} className={`relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br ${color} p-6`}><div className="cyber-noise absolute inset-0 opacity-20" /><div className="relative"><div className="flex items-center justify-between"><span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-cyan">{badge}</span><Icon className="text-blue-300" size={25} /></div><h2 className="mt-8 text-xl font-black">{title}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{desc}</p><div className="mt-6 flex items-center justify-between rounded-xl border border-dashed border-blue-400/30 bg-black/20 px-4 py-3"><span className="font-black tracking-widest text-cyan">{code}</span><Copy size={16} className="text-slate-400" /></div><div className="mt-5 flex items-center justify-between"><span className="flex items-center gap-1 text-[10px] text-slate-500"><Clock3 size={12} /> ถึง 30 ก.ย. 2026</span><Link href="/shop" className="flex items-center gap-1 text-xs font-bold text-white">ช้อปเลย <ArrowRight size={14} /></Link></div></div></article>)}</div></section></SiteShell>; }

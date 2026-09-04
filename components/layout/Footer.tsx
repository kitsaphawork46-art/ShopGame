import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Music2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerGroups = [
  { title: "ร้านค้า", links: ["เกมทั้งหมด", "สินค้าขายดี", "โปรโมชั่น", "สินค้าใหม่"] },
  { title: "ช่วยเหลือ", links: ["วิธีสั่งซื้อ", "วิธีชำระเงิน", "คำถามที่พบบ่อย", "ติดต่อเรา"] },
];

export function Footer() {
  return (
    <footer id="footer" className="scroll-mt-24 border-t border-slate-800 bg-[#030711]">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_1fr]">
          <div><Logo /><p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">ตลาดซื้อขายสินค้าเกมดิจิทัลสำหรับเกมเมอร์ ส่งเร็ว ปลอดภัย และพร้อมดูแลคุณในทุกออเดอร์</p><div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500"><ShieldCheck size={16} className="text-cyan" /> ซื้อขายปลอดภัย 100%</div></div>
          {footerGroups.map((group) => <div key={group.title}><h3 className="text-sm font-bold text-white">{group.title}</h3><ul className="mt-5 space-y-3">{group.links.map((link) => <li key={link}><Link href="#" className="text-sm text-slate-500 transition hover:text-cyan">{link}</Link></li>)}</ul></div>)}
          <div><h3 className="text-sm font-bold text-white">ติดตามเรา</h3><p className="mt-5 text-sm leading-6 text-slate-500">ติดตามข่าวสาร เกมใหม่ และโปรโมชั่นก่อนใคร</p><div className="mt-5 flex gap-2">{[{ l: "Facebook", i: Facebook }, { l: "Line", i: MessageCircle }, { l: "Instagram", i: Instagram }, { l: "TikTok", i: Music2 }].map(({ l, i: Icon }) => <Link key={l} href="#" aria-label={l} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 transition hover:border-cyan/40 hover:bg-cyan/5 hover:text-cyan"><Icon size={17} /></Link>)}</div></div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"><p>Copyright © 2026 NEXORA GAME. All rights reserved.</p><div className="flex gap-5"><Link href="#" className="hover:text-slate-300">เงื่อนไขการใช้งาน</Link><Link href="#" className="hover:text-slate-300">นโยบายความเป็นส่วนตัว</Link></div></div>
      </div>
    </footer>
  );
}

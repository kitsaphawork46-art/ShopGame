import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[760px] overflow-hidden pt-[74px] sm:min-h-[800px]">
      <div className="grid-texture pointer-events-none absolute inset-0 -z-20 opacity-70" />
      <div className="pointer-events-none absolute left-[10%] top-40 -z-20 h-60 w-60 rounded-full bg-brand/10 blur-[100px]" />
      <div className="container-page grid min-h-[680px] items-center gap-10 py-14 lg:grid-cols-[.96fr_1.04fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 text-[11px] font-bold tracking-[.14em] text-blue-200 sm:text-xs">
            <Sparkles size={14} className="text-cyan" /> MARKETPLACE FOR GAMERS
          </div>
          <h1 className="text-[2.65rem] font-black leading-[1.12] tracking-[-.04em] text-white sm:text-6xl lg:text-[4.25rem]">
            เติมเกม ซื้อไอเทม<br /><span className="text-gradient">ครบทุกอย่าง</span>ในที่เดียว
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">ซื้อเงินในเกม ไอเทม Code Game และสินค้า Digital ราคาดี ส่งไว ปลอดภัย พร้อมบริการตลอด 24 ชั่วโมง</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#products" className="button-primary px-6">เลือกซื้อสินค้า <ArrowRight size={18} /></Link>
            <Link href="#games" className="button-secondary px-6">ดูเกมทั้งหมด</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800/70 pt-6">
            {[{ icon: Zap, text: "ส่งของรวดเร็ว" }, { icon: ShieldCheck, text: "ระบบปลอดภัย" }, { icon: CheckCircle2, text: "ดูแลหลังการขาย" }].map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm"><Icon size={17} className="text-cyan" />{text}</div>)}
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-slate-500"><div className="flex -space-x-2">{["NE", "XA", "GG", "TH"].map((name, i) => <span key={name} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-gradient-to-br ${i % 2 ? "from-sky-500 to-blue-800" : "from-slate-500 to-slate-800"} text-[9px] font-bold text-white`}>{name}</span>)}</div><p><strong className="text-white">24,000+</strong> เกมเมอร์ไว้วางใจ</p></div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[550px]">
          <div className="absolute inset-6 rounded-full bg-blue-500/15 blur-[90px]" />
          <Image src="/images/nexora-hero.png" alt="คอนโทรลเลอร์ เหรียญดิจิทัล และกิฟต์การ์ดในโลกเกมของ Nexora" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-contain object-center drop-shadow-[0_20px_60px_rgba(37,99,235,.18)] lg:scale-[1.2] lg:translate-x-8" />
          <div className="glass-card absolute left-2 top-8 hidden animate-float items-center gap-3 rounded-xl p-3.5 shadow-glow sm:flex lg:left-0 lg:top-20"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-lg">💎</span><div><p className="text-[10px] uppercase tracking-wider text-slate-500">Digital Item</p><p className="text-sm font-bold">ส่งทันที 24/7</p></div></div>
          <div className="glass-card absolute bottom-10 right-2 hidden animate-float-delay items-center gap-3 rounded-xl p-3.5 shadow-glow sm:flex"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-lg">✓</span><div><p className="text-[10px] uppercase tracking-wider text-slate-500">Secure Trade</p><p className="text-sm font-bold">รับประกันทุกออเดอร์</p></div></div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, BadgeDollarSign, CheckCircle2, ChevronRight, CircleUserRound, Clock3, Code2, CreditCard, Crown, Gamepad2, Gem, Gift, Headphones, KeyRound, MessageCircle, PackageCheck, ShieldCheck, ShoppingCart, Sparkles, Star, WalletCards, Zap } from "lucide-react";
import { games } from "@/data/games";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "./ProductCard";

const categories = [
  { name: "เงินในเกม", desc: "Coins & Currency", icon: BadgeDollarSign },
  { name: "ไอเทม", desc: "Skins & Items", icon: Gem },
  { name: "Game Code", desc: "Keys & Codes", icon: Code2 },
  { name: "Gift Card", desc: "Digital Cards", icon: Gift },
  { name: "Account", desc: "Verified Accounts", icon: CircleUserRound },
  { name: "เติมเกม", desc: "Instant Top Up", icon: Zap },
];

export function PopularGames() {
  return (
    <section id="games" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Explore games" title="เกมยอดนิยม" description="เลือกเกมที่คุณต้องการซื้อสินค้า ราคาดี พร้อมส่งทุกออเดอร์" action={<Link href="/games" className="hidden items-center gap-2 text-sm font-bold text-cyan hover:text-sky-300 sm:flex">ดูเกมทั้งหมด <ArrowRight size={17} /></Link>} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {games.map((game) => (
            <Link href={`/games/${game.slug}`} key={game.slug} className="group relative min-h-[172px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow sm:min-h-[200px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/20 to-transparent" />
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(110deg,transparent_40%,rgba(255,255,255,.08)_50%,transparent_60%)] transition duration-700 group-hover:translate-x-20" />
              <span className="absolute right-4 top-2 text-6xl font-black text-white/10 transition duration-500 group-hover:scale-110 sm:text-7xl">{game.mark}</span>
              <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur">{game.category}</span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5"><div><p className="text-base font-black tracking-wide text-white sm:text-lg">{game.name}</p><p className="mt-1 text-[11px] text-slate-300">{game.productCount} สินค้า • {game.shortName}</p></div><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:border-cyan group-hover:bg-cyan group-hover:text-slate-950"><ChevronRight size={16} /></span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="border-y border-slate-800/60 bg-[#070d1a] py-12">
      <div className="container-page"><p className="mb-6 text-center text-sm font-bold text-slate-300">เลือกช้อปตามหมวดหมู่</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map(({ name, desc, icon: Icon }) => <Link href={`/games?category=${encodeURIComponent(name)}`} key={name} className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-3.5 transition hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-blue-500/5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/70 text-slate-400 transition group-hover:bg-cyan/10 group-hover:text-cyan"><Icon size={20} /></span><span><span className="block text-sm font-bold text-white">{name}</span><span className="mt-0.5 block text-[10px] text-slate-500">{desc}</span></span></Link>)}</div></div>
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section id="products" className="scroll-mt-24 py-20 sm:py-24"><div className="container-page"><SectionHeading eyebrow="Hot deals" title="สินค้าขายดี" description="ไอเทมยอดนิยมที่เกมเมอร์เลือกซื้อ พร้อมราคาพิเศษเฉพาะวันนี้" action={<Link href="/games" className="hidden items-center gap-2 text-sm font-bold text-cyan hover:text-sky-300 sm:flex">ดูสินค้าทั้งหมด <ArrowRight size={17} /></Link>} /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div><Link href="/games" className="button-secondary mt-7 w-full sm:hidden">ดูสินค้าทั้งหมด <ArrowRight size={17} /></Link></div></section>
  );
}

export function Promotion() {
  return (
    <section className="container-page pb-20 sm:pb-24"><div className="relative isolate overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-[#0b1b42] via-[#0b2861] to-[#071a3d] px-6 py-10 shadow-[0_25px_100px_rgba(37,99,235,.16)] sm:px-10 lg:px-14 lg:py-12"><div className="grid-texture absolute inset-0 -z-10 opacity-50" /><div className="absolute -right-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan/20 blur-[70px]" /><div className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]"><div><span className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1.5 text-[11px] font-bold tracking-widest text-cyan"><Sparkles size={13} /> MEMBER EXCLUSIVE</span><h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">เติมเกมสุดคุ้ม<br />ลดสูงสุด <span className="text-cyan">20%</span></h2><p className="mt-3 text-sm text-blue-100/70 sm:text-base">โปรโมชั่นพิเศษสำหรับสมาชิกใหม่ สมัครวันนี้รับคูปองทันที</p><Link href="/register" className="button-primary mt-7 bg-white text-blue-800 shadow-xl hover:bg-blue-50">รับโปรโมชั่น <ArrowRight size={17} /></Link></div><div className="relative hidden min-h-48 md:block"><div className="absolute right-16 top-2 rotate-[-8deg] rounded-2xl border border-white/15 bg-gradient-to-br from-blue-400/25 to-slate-950/70 p-5 shadow-2xl backdrop-blur"><Gift className="text-cyan" size={70} strokeWidth={1.2} /><p className="mt-5 text-[10px] font-bold tracking-[.2em] text-cyan">NEXORA REWARD</p></div><div className="absolute bottom-0 right-0 rotate-[8deg] rounded-2xl border border-white/15 bg-slate-950/70 px-6 py-5 shadow-2xl backdrop-blur"><p className="text-xs text-slate-400">PROMO CODE</p><p className="mt-1 text-2xl font-black tracking-widest text-white">NEW20</p><p className="mt-3 text-xs font-bold text-emerald-400">SAVE UP TO 20%</p></div></div></div></div></section>
  );
}

const steps = [
  { n: "01", title: "เลือกเกม", desc: "เลือกเกมและสินค้าที่ต้องการ", icon: Gamepad2 },
  { n: "02", title: "สั่งซื้อ", desc: "เพิ่มลงตะกร้าและตรวจสอบรายการ", icon: ShoppingCart },
  { n: "03", title: "ชำระเงิน", desc: "เลือกช่องทางที่สะดวกและปลอดภัย", icon: CreditCard },
  { n: "04", title: "รับสินค้า", desc: "รับ Code หรือสินค้า Digital ได้ทันที", icon: PackageCheck },
];

export function HowItWorks() {
  return <section id="how-it-works" className="scroll-mt-24 border-y border-slate-800/60 bg-[#070d1a] py-20 sm:py-24"><div className="container-page"><div className="text-center"><p className="section-kicker">Easy & secure</p><h2 className="section-title">ซื้อสินค้าง่าย ๆ เพียง 4 ขั้นตอน</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">ตั้งแต่เลือกสินค้าไปจนถึงรับของ ใช้เวลาเพียงไม่กี่นาที</p></div><div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><div className="absolute left-[13%] right-[13%] top-[34px] hidden border-t border-dashed border-blue-400/30 lg:block" />{steps.map(({ n, title, desc, icon: Icon }) => <div key={n} className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:border-transparent lg:bg-transparent lg:text-center"><div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-blue-400/25 bg-[#0b1730] text-cyan shadow-glow"><Icon size={26} /></div><span className="absolute right-5 top-4 text-4xl font-black text-white/[.04] lg:right-auto lg:left-[calc(50%+22px)]">{n}</span><h3 className="mt-5 font-bold text-white">{n} <span className="ml-1">{title}</span></h3><p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p></div>)}</div></div></section>;
}

const benefits = [
  { title: "Fast Delivery", desc: "จัดส่งสินค้าและ Code อย่างรวดเร็ว อัตโนมัติตลอดวัน", icon: Zap },
  { title: "Secure Payment", desc: "ระบบชำระเงินมาตรฐาน ข้อมูลทุกอย่างถูกเข้ารหัส", icon: ShieldCheck },
  { title: "24/7 Support", desc: "มีทีมงานคอยช่วยเหลือและติดตามออเดอร์ตลอด 24 ชั่วโมง", icon: Headphones },
  { title: "Best Price", desc: "สินค้าราคาดี มีส่วนลดและโปรโมชั่นใหม่ทุกสัปดาห์", icon: Crown },
  { title: "Trusted Store", desc: "ร้านค้าที่ได้รับความไว้วางใจจากเกมเมอร์กว่า 24,000 คน", icon: CheckCircle2 },
];

export function WhyUs() {
  return <section className="py-20 sm:py-24"><div className="container-page"><SectionHeading eyebrow="Nexora guarantee" title="ทำไมต้องซื้อกับเรา" description="เราออกแบบทุกขั้นตอนให้รวดเร็ว ปลอดภัย และดูแลคุณได้จริง" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{benefits.map(({ title, desc, icon: Icon }) => <div key={title} className="group rounded-2xl border border-slate-800 bg-[#091120] p-5 transition hover:border-blue-400/40 hover:bg-blue-500/[.04]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-cyan transition group-hover:bg-blue-500 group-hover:text-white"><Icon size={21} /></span><h3 className="mt-5 text-sm font-bold text-white">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{desc}</p></div>)}</div></div></section>;
}

const reviews = [
  { initials: "PK", user: "Pongsak_K", game: "VALORANT POINTS", text: "ได้รับของเร็วมาก ซื้อ VP ไม่ถึง 5 นาทีก็ได้รับแล้วครับ แอดมินตอบไวด้วย", ago: "2 วันที่แล้ว" },
  { initials: "ML", user: "MintLuna", game: "STEAM WALLET", text: "ซื้อหลายครั้งแล้วค่ะ ระบบใช้ง่าย Code ส่งเข้าอีเมลทันที ราคาดีกว่าที่อื่น", ago: "5 วันที่แล้ว" },
  { initials: "TN", user: "TonNight", game: "MOBILE LEGENDS", text: "เติมเพชรไวมาก ไม่ต้องรอนาน มีสถานะออเดอร์ให้ดูทุกขั้นตอน ประทับใจครับ", ago: "1 สัปดาห์ที่แล้ว" },
];

export function Reviews() {
  return <section id="reviews" className="scroll-mt-24 bg-gradient-to-b from-transparent to-blue-950/10 pb-20 sm:pb-24"><div className="container-page"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-kicker">Player voices</p><h2 className="section-title">เสียงจากเกมเมอร์ของเรา</h2><p className="mt-3 text-sm text-slate-400">ความไว้ใจจากการส่งมอบมากกว่า 50,000 ออเดอร์</p></div><div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3"><span className="text-2xl font-black text-white">4.9</span><div><div className="flex text-amber-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div><p className="mt-1 text-[10px] text-slate-500">จาก 3,842 รีวิว</p></div></div></div><div className="mt-9 grid gap-4 lg:grid-cols-3">{reviews.map((review, index) => <article key={review.user} className={`rounded-2xl border p-6 ${index === 1 ? "border-blue-500/35 bg-blue-500/[.06]" : "border-slate-800 bg-[#091120]"}`}><div className="flex items-center gap-3"><span className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-black text-white ${index === 1 ? "bg-gradient-to-br from-cyan to-blue-700" : "bg-slate-700"}`}>{review.initials}</span><div className="flex-1"><p className="text-sm font-bold text-white">{review.user}</p><div className="mt-0.5 flex text-amber-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill="currentColor" />)}</div></div><span className="text-[10px] text-slate-600">{review.ago}</span></div><p className="mt-5 text-sm leading-7 text-slate-300">“{review.text}”</p><div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4"><span className="text-[10px] font-bold tracking-wider text-slate-500">{review.game}</span><span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400"><CheckCircle2 size={13} /> ยืนยันการซื้อแล้ว</span></div></article>)}</div></div></section>;
}

export function TrustStrip() {
  return <section className="border-y border-slate-800/70 bg-slate-950/40"><div className="container-page grid grid-cols-2 gap-px py-6 sm:grid-cols-4">{[{ n: "50K+", l: "ออเดอร์สำเร็จ" }, { n: "24K+", l: "สมาชิกเกมเมอร์" }, { n: "4.9/5", l: "คะแนนรีวิว" }, { n: "24/7", l: "บริการช่วยเหลือ" }].map((stat) => <div key={stat.l} className="py-4 text-center"><p className="text-2xl font-black text-white sm:text-3xl">{stat.n}</p><p className="mt-1 text-xs text-slate-500">{stat.l}</p></div>)}</div></section>;
}

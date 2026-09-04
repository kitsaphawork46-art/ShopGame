import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  DollarSign,
  ShoppingBag,
  UsersRound,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

const recentOrders = [
  {
    id: "#LB2609-1850",
    customer: "NightRaven",
    product: "COD Neon Reaper Skin",
    total: 890,
    status: "ชำระแล้ว",
  },
  {
    id: "#LB2609-1849",
    customer: "MewBerry",
    product: "Call of Duty Points",
    total: 329,
    status: "กำลังส่ง",
  },
  {
    id: "#LB2609-1848",
    customer: "ZeroAim",
    product: "PUBG Mobile UC",
    total: 429,
    status: "สำเร็จ",
  },
  {
    id: "#LB2609-1847",
    customer: "LunaTH",
    product: "COD Battle Pass",
    total: 259,
    status: "สำเร็จ",
  },
];

export default function AdminPage() {
  const stats = [
    { l: "ยอดขายรวม", n: "฿184,920", d: "+12.8%", i: DollarSign },
    { l: "คำสั่งซื้อ", n: "1,842", d: "+8.4%", i: ShoppingBag },
    { l: "ผู้ใช้งาน", n: "32,418", d: "+6.2%", i: UsersRound },
    { l: "สินค้าทั้งหมด", n: "159", d: "+12 รายการ", i: Boxes },
  ];
  return (
    <DashboardShell admin>
      <div>
        <p className="section-kicker">Control center</p>
        <h1 className="mt-2 text-3xl font-black">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-500">
          ภาพรวมร้านค้าและประสิทธิภาพวันนี้
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ l, n, d, i: Icon }) => (
          <div
            key={l}
            className="rounded-2xl border border-slate-800 bg-[#091120] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{l}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan">
                <Icon size={18} />
              </span>
            </div>
            <p className="mt-3 text-2xl font-black">{n}</p>
            <p className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
              <ArrowUpRight size={12} />
              {d} จากเดือนก่อน
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_.6fr]">
        <section className="rounded-2xl border border-slate-800 bg-[#091120] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">Revenue Overview</h2>
              <p className="mt-1 text-xs text-slate-500">ยอดขาย 7 วันล่าสุด</p>
            </div>
            <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs">
              <option>7 วัน</option>
              <option>30 วัน</option>
            </select>
          </div>
          <div className="mt-8 flex h-52 items-end gap-3 border-b border-l border-slate-800 pl-3">
            {[
              { value: 42, height: "h-[42%]" },
              { value: 68, height: "h-[68%]" },
              { value: 54, height: "h-[54%]" },
              { value: 82, height: "h-[82%]" },
              { value: 64, height: "h-[64%]" },
              { value: 91, height: "h-[91%]" },
              { value: 76, height: "h-[76%]" },
            ].map((bar, i) => (
              <div
                key={i}
                className={`group relative flex-1 rounded-t-md bg-gradient-to-t from-blue-700 to-cyan transition hover:brightness-125 ${bar.height}`}
              >
                <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 text-[9px] group-hover:block">
                  ฿{bar.value}K
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-slate-600">
            <span>จ.</span>
            <span>อ.</span>
            <span>พ.</span>
            <span>พฤ.</span>
            <span>ศ.</span>
            <span>ส.</span>
            <span>อา.</span>
          </div>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-[#091120] p-6">
          <h2 className="font-bold">สินค้าขายดี</h2>
          <div className="mt-6 space-y-5">
            {[
              { name: "COD Points", value: 82, width: "w-[82%]" },
              { name: "Weapon Skins", value: 61, width: "w-[61%]" },
              { name: "Battle Pass", value: 47, width: "w-[47%]" },
              { name: "PUBG UC", value: 34, width: "w-[34%]" },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{item.name}</span>
                  <span className="font-bold">{item.value}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan ${item.width}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#091120]">
        <div className="flex justify-between border-b border-slate-800 p-5">
          <h2 className="font-bold">คำสั่งซื้อล่าสุด</h2>
          <button className="text-xs font-bold text-cyan">จัดการออเดอร์</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-950/60 text-xs text-slate-500">
              <tr>
                <th className="px-5 py-3">Order</th>
                <th className="px-5 py-3">ลูกค้า</th>
                <th className="px-5 py-3">สินค้า</th>
                <th className="px-5 py-3">ยอดรวม</th>
                <th className="px-5 py-3">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-t border-slate-800">
                  <td className="px-5 py-4 font-bold text-cyan">{o.id}</td>
                  <td className="px-5 py-4">{o.customer}</td>
                  <td className="px-5 py-4 text-slate-400">{o.product}</td>
                  <td className="px-5 py-4 font-bold">฿{o.total}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { id: "products", title: "จัดการสินค้า", detail: "เพิ่ม แก้ไข ราคาและสต็อก", count: "159 รายการ", icon: Boxes },
          { id: "orders", title: "จัดการออเดอร์", detail: "ตรวจสอบการชำระและจัดส่ง", count: "12 รอดำเนินการ", icon: ShoppingBag },
          { id: "users", title: "จัดการผู้ใช้งาน", detail: "บัญชี สิทธิ์ และประวัติลูกค้า", count: "32,418 บัญชี", icon: UsersRound },
        ].map(({ id, title, detail, count, icon: Icon }) => (
          <article id={id} key={id} className="rounded-2xl border border-slate-800 bg-[#091120] p-5">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300"><Icon size={19} /></span>
              <span className="text-[10px] text-slate-500">{count}</span>
            </div>
            <h2 className="mt-5 font-bold">{title}</h2>
            <p className="mt-2 text-xs text-slate-500">{detail}</p>
            <button className="mt-5 text-xs font-bold text-cyan">เปิดเครื่องมือ →</button>
          </article>
        ))}
      </section>
    </DashboardShell>
  );
}

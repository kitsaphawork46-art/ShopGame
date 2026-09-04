import type { Metadata } from "next";
import { SiteShell, PageHeader } from "@/components/layout/SiteShell";
import { CheckoutForm } from "@/components/shop/CheckoutForm";

export const metadata: Metadata = { title: "ชำระเงิน" };
export default function CheckoutPage() { return <SiteShell><PageHeader eyebrow="Secure checkout" title="ชำระเงินอย่างปลอดภัย" description="ตรวจสอบข้อมูลบัญชีเกมและรายการสินค้าให้ถูกต้องก่อนยืนยันคำสั่งซื้อ" /><CheckoutForm /></SiteShell>; }

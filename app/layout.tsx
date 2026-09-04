import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/ui/StoreProvider";

export const metadata: Metadata = {
  title: { default: "LootBerry Game — เติมเกมง่าย ได้ของไว", template: "%s | LootBerry Game" },
  description: "ตลาดไอเทมเกมสำหรับเกมเมอร์ไทย เติมเงิน ซื้อสกินและบันเดิล ส่งไว ปลอดภัย พร้อมบริการ 24 ชั่วโมง",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

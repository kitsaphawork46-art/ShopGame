import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/ui/StoreProvider";

export const metadata: Metadata = {
  title: "NEXORA GAME — Game Marketplace สำหรับเกมเมอร์",
  description: "ซื้อเงินในเกม ไอเทม เกมโค้ด และสินค้า Digital ส่งไว ปลอดภัย พร้อมบริการ 24 ชั่วโมง",
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

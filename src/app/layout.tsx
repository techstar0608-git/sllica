import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silica.vn"),
  title: {
    default: "Silica — Dịch vụ kỹ thuật cho vườn sầu riêng Tây Nguyên",
    template: "%s | Silica",
  },
  description:
    "Silica bán giải pháp cho vườn, không chỉ bán vật tư: sức khoẻ đất, quy trình chăm sóc, kiểm soát thuốc BVTV và hồ sơ mã số vùng trồng.",
};

/**
 * Layout gốc chỉ dựng khung html/body. Header, footer và các nút liên hệ nổi
 * nằm ở (chrome)/layout.tsx, để trang truy xuất lô hàng /[batch] đứng độc lập
 * đúng như bản WordPress cũ — người quét QR chỉ xem thông tin lô.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnamPro.className}>
      <body>{children}</body>
    </html>
  );
}

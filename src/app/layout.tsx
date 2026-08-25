import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { FloatingContact } from "@/components/floating-contact";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnamPro.className}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Bỏ qua, tới nội dung chính
        </a>
        <SiteHeader />
        <main id="noi-dung" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileContactBar />
        <FloatingContact />
      </body>
    </html>
  );
}

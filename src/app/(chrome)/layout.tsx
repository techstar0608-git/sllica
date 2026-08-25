import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { FloatingContact } from "@/components/floating-contact";

/** Khung chung cho các trang của site: header, footer, nút liên hệ nổi. */
export default function ChromeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="has-contact-bar flex min-h-screen flex-col">
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
    </div>
  );
}

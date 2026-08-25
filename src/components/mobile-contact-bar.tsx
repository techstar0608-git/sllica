import Link from "next/link";
import { site } from "@/content/site";

/** G-02 · Thanh liên hệ nổi, chỉ hiển thị trên mobile. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white md:hidden">
      <a
        href={site.hotlineHref}
        className="py-4 text-center text-base font-semibold text-brand-700"
      >
        Gọi ngay
      </a>
      <a
        href={site.zaloHref}
        className="border-x border-line py-4 text-center text-base font-semibold text-brand-700"
      >
        Zalo
      </a>
      <Link
        href={site.cta.href}
        className="bg-brand-500 py-4 text-center text-base font-semibold text-white"
      >
        Khảo sát
      </Link>
    </div>
  );
}

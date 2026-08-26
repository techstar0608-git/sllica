import { site } from "@/content/site";

/**
 * G-02 · Thanh liên hệ nổi, chỉ hiển thị trên mobile.
 * Form khảo sát đang ẩn (site.surveyEnabled) nên thanh chỉ còn Gọi và Zalo.
 */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-white md:hidden">
      <a
        href={site.hotlineHref}
        className="py-4 text-center text-base font-semibold text-brand-700"
      >
        Gọi ngay
      </a>
      <a
        href={site.zaloHref}
        className="border-l border-line py-4 text-center text-base font-semibold text-brand-700"
      >
        Zalo
      </a>
    </div>
  );
}

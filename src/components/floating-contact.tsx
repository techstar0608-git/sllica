import { site } from "@/content/site";

/** G-03 · Nút Zalo + Hotline nổi, desktop. */
export function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-6 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={site.zaloHref}
        className="rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-brand-700"
      >
        Zalo
      </a>
      <a
        href={site.hotlineHref}
        className="rounded-full border border-line bg-white px-5 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50"
      >
        {site.hotline}
      </a>
    </div>
  );
}

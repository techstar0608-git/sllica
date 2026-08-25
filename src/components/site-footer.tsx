import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container } from "./ui";

/** G-06 · Footer 4 cột. */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-900 text-brand-100">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="inline-flex rounded-lg bg-white px-4 py-3">
              <Image
                src="/img/logo-silica.png"
                alt={site.name}
                width={1899}
                height={828}
                className="h-8 w-auto"
              />
            </span>
            <p className="mt-3 text-base leading-relaxed">
              Nhà phân phối độc quyền bộ sản phẩm K-SON tại Việt Nam. Đội kỹ
              thuật đồng hành cùng chủ vườn sầu riêng Tây Nguyên.
            </p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="font-semibold text-white">
              Dịch vụ
            </h2>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/dich-vu/${s.slug}`}
                    className="inline-flex min-h-11 items-center hover:text-white hover:underline"
                  >
                    {s.navName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dich-vu" className="inline-flex min-h-11 items-center hover:text-white hover:underline">
                  Tổng quan dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="inline-flex min-h-11 items-center hover:text-white hover:underline">
                  Sản phẩm K-SON
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold text-white">Liên hệ</h2>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={site.hotlineHref}
                  className="inline-flex min-h-11 items-center text-lg font-semibold text-white hover:underline"
                >
                  {site.hotline}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center hover:text-white hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.zaloHref}
                  className="inline-block rounded-full border border-brand-300/60 px-4 py-2 font-medium text-white hover:bg-white/10"
                >
                  Nhắn Zalo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white">Địa điểm</h2>
            <ul className="mt-3 space-y-3">
              {site.offices.map((o) => (
                <li key={o.label}>
                  <span className="block font-medium text-white">{o.label}</span>
                  <span className="block">{o.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p>
            {site.legalName} · MST {site.taxCode} · © 2026 {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}

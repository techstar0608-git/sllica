"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container } from "./ui";

/** G-01 · Header — logo trái, menu giữa, hotline + nút CTA phải. Sticky khi cuộn. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={site.name}
            className="inline-flex min-h-11 items-center"
          >
            <Image
              src="/img/logo-silica.png"
              alt={site.name}
              width={1899}
              height={828}
              priority
              className="h-8 w-auto lg:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu chính">
            <NavLink href="/">Trang chủ</NavLink>
            <ServicesMenu />
            <ProductsMenu />
            <NavLink href="/dang-ky-khao-sat">Khảo sát vườn</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.hotlineHref}
              className="hidden min-h-11 items-center text-base font-semibold text-brand-700 sm:inline-flex"
            >
              {site.hotline}
            </a>
            <Link
              href={site.cta.href}
              className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-base font-semibold text-white hover:bg-brand-700 lg:inline-flex"
            >
              {site.cta.shortLabel}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="rounded-lg border border-line px-3 py-2 text-base font-medium lg:hidden"
            >
              {open ? "Đóng" : "Menu"}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <Container>
            <nav className="flex flex-col py-3" aria-label="Menu chính (mobile)">
              <MobileLink href="/" onClick={() => setOpen(false)}>
                Trang chủ
              </MobileLink>
              <MobileLink href="/dich-vu" onClick={() => setOpen(false)}>
                Tất cả dịch vụ
              </MobileLink>
              {services.map((s) => (
                <MobileLink
                  key={s.slug}
                  href={`/dich-vu/${s.slug}`}
                  onClick={() => setOpen(false)}
                  indented
                >
                  {s.navName}
                </MobileLink>
              ))}
              <MobileLink href="/san-pham" onClick={() => setOpen(false)}>
                Sản phẩm K-SON
              </MobileLink>
              {products.map((p) => (
                <MobileLink
                  key={p.slug}
                  href={`/san-pham/${p.slug}`}
                  onClick={() => setOpen(false)}
                  indented
                >
                  {p.name}
                </MobileLink>
              ))}
              <MobileLink href="/dang-ky-khao-sat" onClick={() => setOpen(false)}>
                Đăng ký khảo sát vườn
              </MobileLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  indented = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  indented?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`border-b border-line py-3 text-base font-medium last:border-0 ${
        indented ? "pl-4 text-muted" : "text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

/** Mega menu: 4 dịch vụ + link "Xem tất cả dịch vụ". */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/dich-vu"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
        onFocus={() => setOpen(true)}
      >
        Dịch vụ
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </Link>
      {open ? (
        <div className="absolute top-full left-0 w-[26rem] rounded-2xl border border-line bg-white p-2 shadow-lg">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/dich-vu/${s.slug}`}
              className="block rounded-xl px-4 py-3 hover:bg-brand-50"
            >
              <span className="block font-semibold text-brand-900">
                {s.navName}
              </span>
              <span className="mt-0.5 block text-muted">
                {s.cardSummary}
              </span>
            </Link>
          ))}
          <Link
            href="/dich-vu"
            className="block rounded-xl px-4 py-3 text-base font-semibold text-brand-600 hover:bg-brand-50"
          >
            Xem tất cả dịch vụ →
          </Link>
        </div>
      ) : null}
    </div>
  );
}

/** Dropdown: 5 sản phẩm + link "Xem toàn bộ catalog". */
function ProductsMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/san-pham"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
        onFocus={() => setOpen(true)}
      >
        Sản phẩm
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </Link>
      {open ? (
        <div className="absolute top-full left-0 w-[24rem] rounded-2xl border border-line bg-white p-2 shadow-lg">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/san-pham/${p.slug}`}
              className="block rounded-xl px-4 py-3 hover:bg-brand-50"
            >
              <span className="block font-semibold text-brand-900">{p.name}</span>
              <span className="mt-0.5 block text-muted">
                {p.keyComposition}
              </span>
            </Link>
          ))}
          <Link
            href="/san-pham"
            className="block rounded-xl px-4 py-3 text-base font-semibold text-brand-600 hover:bg-brand-50"
          >
            Xem toàn bộ catalog →
          </Link>
        </div>
      ) : null}
    </div>
  );
}

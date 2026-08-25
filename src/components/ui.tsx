import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const isDark = tone === "dark";
  const centered = align === "center";
  return (
    <header
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow ? (
        <p
          className={`mb-2 text-sm font-semibold tracking-wide uppercase ${
            isDark ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-2xl leading-snug font-bold sm:text-[34px] ${
          isDark ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-lg ${isDark ? "text-brand-100" : "text-muted"}`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

/** Nút to theo yêu cầu hiển thị cho chủ vườn 35 – 60 tuổi. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors";
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-700",
    secondary:
      "bg-white text-brand-700 border-2 border-brand-500 hover:bg-brand-50",
    ghost: "bg-brand-900/40 text-white border border-white/40 hover:bg-brand-900/60",
  } as const;
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-line bg-white p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function Breadcrumb({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">›</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-600 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Bảng cuộn ngang trên mobile thay vì tràn trang. */
export function DataTable({
  headers,
  rows,
  highlightLastColumn = false,
}: {
  headers: string[];
  rows: string[][];
  highlightLastColumn?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[36rem] border-collapse text-left">
        <thead>
          <tr className="bg-brand-50">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 text-sm font-semibold text-brand-900"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line align-top">
              {row.map((cell, j) => {
                const isStatus =
                  highlightLastColumn && j === row.length - 1;
                return (
                  <td key={j} className="px-4 py-3.5">
                    {isStatus ? (
                      <StatusTag value={cell} />
                    ) : j === 0 ? (
                      <span className="font-semibold text-brand-900">{cell}</span>
                    ) : (
                      <span className="text-muted">{cell}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Tag trạng thái đăng ký — bắt buộc trên mọi card và trang sản phẩm
 * (docs/SITEMAP_LAYOUT.md mục 5.4).
 */
export function StatusTag({ value }: { value: string }) {
  const pending = value.toLowerCase().includes("đang hoàn tất");
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
        pending
          ? "bg-amber-100 text-amber-900"
          : "bg-brand-100 text-brand-700"
      }`}
    >
      {value}
    </span>
  );
}

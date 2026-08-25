"use client";

import { useMemo, useState } from "react";
import type { Product, ProductForm, ProductUseGroup } from "@/content/products";
import { ProductCard } from "./product-card";

const FORMS: { value: ProductForm; label: string }[] = [
  { value: "hat", label: "Dạng hạt" },
  { value: "long", label: "Dạng lỏng" },
];

const USE_GROUPS: { value: ProductUseGroup; label: string }[] = [
  { value: "cai-tao-dat", label: "Cải tạo đất" },
  { value: "dinh-duong", label: "Dinh dưỡng" },
  { value: "canxi", label: "Canxi" },
];

/** Mục 3.6 §4–5 · Bộ lọc catalog + lưới sản phẩm. */
export function ProductCatalog({ products }: { products: Product[] }) {
  const [form, setForm] = useState<ProductForm | null>(null);
  const [useGroup, setUseGroup] = useState<ProductUseGroup | null>(null);
  const [crop, setCrop] = useState<string | null>(null);

  const crops = useMemo(() => {
    const all = new Set<string>();
    for (const p of products) {
      for (const c of p.cropTags) all.add(c);
    }
    return [...all].sort((a, b) => a.localeCompare(b, "vi"));
  }, [products]);

  const visible = products.filter(
    (p) =>
      (form === null || p.form === form) &&
      (useGroup === null || p.useGroup === useGroup) &&
      (crop === null || p.cropTags.includes(crop)),
  );

  const hasFilter = form !== null || useGroup !== null || crop !== null;

  return (
    <div>
      <div className="space-y-4 rounded-[18px] border border-line bg-white p-5">
        <FilterRow label="Dạng">
          {FORMS.map((f) => (
            <FilterChip
              key={f.value}
              active={form === f.value}
              onClick={() => setForm(form === f.value ? null : f.value)}
            >
              {f.label}
            </FilterChip>
          ))}
        </FilterRow>

        <FilterRow label="Nhóm công dụng">
          {USE_GROUPS.map((g) => (
            <FilterChip
              key={g.value}
              active={useGroup === g.value}
              onClick={() => setUseGroup(useGroup === g.value ? null : g.value)}
            >
              {g.label}
            </FilterChip>
          ))}
        </FilterRow>

        <FilterRow label="Cây trồng">
          {crops.map((c) => (
            <FilterChip
              key={c}
              active={crop === c}
              onClick={() => setCrop(crop === c ? null : c)}
            >
              {c}
            </FilterChip>
          ))}
        </FilterRow>

        {hasFilter ? (
          <button
            type="button"
            onClick={() => {
              setForm(null);
              setUseGroup(null);
              setCrop(null);
            }}
            className="text-base font-semibold text-brand-600 underline"
          >
            Xoá bộ lọc
          </button>
        ) : null}
      </div>

      <p className="mt-5 text-muted" aria-live="polite">
        Hiển thị {visible.length} / {products.length} sản phẩm
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-[18px] border border-line bg-white p-6 text-lg">
          Không có sản phẩm nào khớp bộ lọc. Bạn thử bỏ bớt một điều kiện xem sao.
        </p>
      )}
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-full font-semibold text-brand-900 sm:w-auto">
        {label}
      </span>
      {children}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-base font-medium transition-colors ${
        active
          ? "border-brand-500 bg-brand-500 text-white"
          : "border-line bg-white text-ink hover:bg-brand-50"
      }`}
    >
      {children}
    </button>
  );
}

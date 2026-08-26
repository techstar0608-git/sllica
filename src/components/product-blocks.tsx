import type { DosageTable, QuickSpec } from "@/content/products";

/** B3 · Thanh thông số nhanh — 3 ô chia đều, số lớn. */
export function QuickSpecBar({ specs }: { specs: readonly QuickSpec[] }) {
  return (
    <dl className="grid grid-cols-3 divide-x divide-line rounded-[18px] border border-line bg-white">
      {specs.map((spec) => (
        <div key={spec.label} className="px-3 py-4 text-center">
          <dd className="text-lg font-bold text-brand-700 sm:text-xl">
            {spec.value}
          </dd>
          <dt className="mt-1 text-muted">{spec.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/** B4 · Điểm nổi bật — mỗi dòng 1 dấu tích + 1 câu ngắn. */
export function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
          >
            ✓
          </span>
          <span className="text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * B7 · Bảng hướng dẫn sử dụng — chép nguyên văn nhãn đăng ký.
 * Số cột thay đổi theo sản phẩm nên render động từ headers/rows.
 */
export function DosageTableBlock({ table }: { table: DosageTable }) {
  return (
    <>
      {table.summary ? (
        <p className="mb-4 text-lg">
          <strong className="text-brand-900">Tổng lượng:</strong>{" "}
          {table.summary}
        </p>
      ) : null}
      <div className="overflow-x-auto rounded-[18px] border border-line">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="bg-brand-50">
              {table.headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3 font-semibold text-brand-900"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("|")} className="border-t border-line align-top">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3.5 ${
                      i === 0 ? "font-medium text-brand-900" : "text-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** B7 · Khối cảnh báo nền vàng dưới bảng liều. */
export function NoticeBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[18px] border-l-4 border-amber-400 bg-amber-50 p-5">
      <p className="font-semibold text-amber-900">{title}</p>
      <p className="mt-1 text-amber-900">{children}</p>
    </div>
  );
}

/** Thanh sticky đáy trên trang sản phẩm — không có nút mua hàng. */
export function ProductStickyBar({
  zaloHref,
  hotlineHref,
}: {
  zaloHref: string;
  hotlineHref: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-line bg-white p-2 md:hidden">
      <a
        href={zaloHref}
        className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand-50 px-3 text-base font-semibold text-brand-700"
      >
        Chat Zalo
      </a>
      <a
        href={hotlineHref}
        className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand-50 px-3 text-base font-semibold text-brand-700"
      >
        Gọi ngay
      </a>
      <a
        href={hotlineHref}
        className="flex min-h-11 flex-[1.4] items-center justify-center rounded-full bg-brand-500 px-3 text-base font-semibold text-white"
      >
        Tìm điểm bán
      </a>
    </div>
  );
}

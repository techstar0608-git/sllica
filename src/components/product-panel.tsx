import { StatusTag } from "./ui";
import { getProduct } from "@/content/products";

/**
 * Khối 6 trang dịch vụ — "Sản phẩm / công cụ đi kèm".
 * Trạng thái đăng ký là bắt buộc hiển thị (docs/SITEMAP_LAYOUT.md mục 5.4).
 */
export function ProductPanel({ slugs }: { slugs: string[] }) {
  const items = slugs.map(getProduct).filter((p) => p !== undefined);

  return (
    <div className="space-y-5">
      {items.map((product) => (
        <article
          key={product.slug}
          className="rounded-2xl border border-line bg-white p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-brand-900">{product.name}</h3>
              {product.registeredName ? (
                <p className="mt-1 text-muted">
                  Tên lưu hành tại Việt Nam: {product.registeredName}
                </p>
              ) : null}
              {product.line ? (
                <p className="mt-1 text-muted">{product.line}</p>
              ) : null}
            </div>
            <StatusTag value={product.status} />
          </div>

          <p className="mt-3 text-lg">{product.roleInProgram}</p>

          <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <Spec label="Phân loại" value={product.category} />
            <Spec label="Quy cách" value={product.packaging} />
            <Spec label="Xuất xứ" value={product.origin} />
            {product.circulationDecision ? (
              <Spec label="Quyết định lưu hành" value={product.circulationDecision} />
            ) : null}
            <Spec label="Hạn sử dụng" value={product.shelfLife} />
            <Spec label="Đối tượng" value={product.targetCrops} />
          </dl>

          <div className="mt-5">
            <h4 className="font-semibold text-brand-900">Thành phần</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {product.composition.map((spec) => (
                <li
                  key={spec.label}
                  className="rounded-full bg-brand-50 px-3 py-1.5"
                >
                  <span className="text-muted">{spec.label}: </span>
                  <span className="font-semibold text-brand-900">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <details className="group mt-5 rounded-xl border border-line p-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center font-semibold text-brand-700">
              Công dụng & hướng dẫn sử dụng
            </summary>

            <ul className="mt-4 space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit.title}>
                  <span className="font-semibold text-brand-900">
                    {benefit.title}
                  </span>{" "}
                  — <span className="text-muted">{benefit.detail}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 font-semibold text-brand-900">
              Phương thức: <span className="font-normal">{product.applicationMethod}</span>
            </p>

            <div className="mt-3 overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="bg-brand-50">
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Đối tượng / Giai đoạn
                    </th>
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Liều lượng
                    </th>
                    <th scope="col" className="px-3 py-2 font-semibold">
                      Thời điểm / Tần suất
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.dosage.map((row) => (
                    <tr key={row.target} className="border-t border-line align-top">
                      <td className="px-3 py-2.5 font-medium">{row.target}</td>
                      <td className="px-3 py-2.5 text-muted">{row.amount}</td>
                      <td className="px-3 py-2.5 text-muted">{row.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {product.dosageNote ? (
              <p className="mt-3 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-amber-900">
                <strong>Lưu ý:</strong> {product.dosageNote}
              </p>
            ) : null}

            <ul className="mt-4 space-y-2 text-muted">
              {product.usageNotes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{note}</span>
                </li>
              ))}
              <li className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>Bảo quản: {product.storage}</span>
              </li>
            </ul>
          </details>
        </article>
      ))}
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

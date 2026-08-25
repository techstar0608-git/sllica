import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { batches, getBatch } from "@/content/batches";
import { site } from "@/content/site";
import "./batch.css";

type PageProps = { params: Promise<{ batch: string }> };

export function generateStaticParams() {
  return batches.map((b) => ({ batch: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { batch: slug } = await params;
  const batch = getBatch(slug);
  if (!batch) return {};
  return {
    title: `${batch.productName} ${batch.productLine} — Lô ${batch.batchCode}`,
    description: batch.intro,
    // Trang tra cứu lô hàng, không cần lên kết quả tìm kiếm.
    robots: { index: false, follow: false },
  };
}

/**
 * Trang truy xuất lô hàng, giữ nguyên bố cục bản WordPress cũ.
 * Cố ý KHÔNG dùng header/footer chung của site: người quét QR trên bao bì
 * chỉ cần xem thông tin lô.
 */
export default async function BatchPage({ params }: PageProps) {
  const { batch: slug } = await params;
  const batch = getBatch(slug);
  if (!batch) notFound();

  return (
    <div className="batch">
      <header className="batch-hero">
        <p className="batch-company">Công ty TNHH Silica</p>
        <span className="batch-badge">★ Sản phẩm chính hãng</span>
        <h1>
          {batch.productName}
          <br />
          {batch.productLine}
        </h1>
        <p className="batch-tagline">{batch.tagline}</p>
      </header>

      <section className="batch-section">
        <div className="batch-grid">
          <Image
            src={batch.image}
            alt={`${batch.productName} ${batch.productLine}`}
            width={900}
            height={900}
            priority
            className="batch-photo"
          />

          <div>
            <p className="batch-eyebrow">Thông tin sản phẩm</p>
            <h2 className="batch-h2">
              {batch.productName}
              <br />
              {batch.productLine}
            </h2>
            <p className="batch-intro">{batch.intro}</p>

            <div className="batch-table-wrap">
              <table className="batch-specs">
                <thead>
                  <tr>
                    <th scope="col">Chỉ tiêu</th>
                    <th scope="col">🇻🇳 Hàm lượng đăng ký</th>
                    <th scope="col">🇰🇷 Hàm lượng công bố tại Hàn Quốc</th>
                  </tr>
                </thead>
                <tbody>
                  {batch.specs.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      {row.common ? (
                        <td colSpan={2} className="batch-common">
                          {row.common}
                        </td>
                      ) : (
                        <>
                          <td>{row.vn}</td>
                          <td className="batch-kr">{row.kr}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="batch-specnote">* {batch.specNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="batch-section">
        <p className="batch-eyebrow batch-center">Công dụng</p>
        <h2 className="batch-h3">Giải pháp sức khỏe đất toàn diện</h2>
        <div className="batch-cards">
          {batch.benefits.map((item) => (
            <div key={item.title} className="batch-card">
              <span className="batch-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="batch-section batch-alt">
        <p className="batch-eyebrow batch-center">Hướng dẫn sử dụng</p>
        <h2 className="batch-h3">Liều lượng khuyến cáo</h2>
        <div className="batch-table-wrap">
          <table className="batch-dosage">
            <thead>
              <tr>
                <th scope="col">Đất trồng cây</th>
                <th scope="col">Liều lượng</th>
                <th scope="col">Cách bón</th>
              </tr>
            </thead>
            <tbody>
              {batch.dosage.map((row) => (
                <tr key={row.crop}>
                  <td>{row.crop}</td>
                  <td className="batch-amount">{row.amount}</td>
                  <td>{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="batch-warning">
          <strong>⚠️ Khuyến cáo:</strong> {batch.warning}
        </p>
        <p className="batch-note">
          <strong>💡 Lưu ý:</strong> {batch.note}
        </p>
      </section>

      <section className="batch-section batch-green">
        <p className="batch-eyebrow batch-center">Xuất xứ &amp; chứng nhận</p>
        <h2 className="batch-h3">Nhập khẩu chính ngạch từ Hàn Quốc</h2>
        <div className="batch-origin">
          {batch.origin.map((item) => (
            <div key={item.label} className="batch-card batch-card-white">
              <p className="batch-origin-label">{item.label}</p>
              <p className="batch-origin-value">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="batch-legal">
          <h3>Hồ sơ pháp lý đầy đủ</h3>
          <ul>
            {batch.legalDocs.map((doc) => (
              <li key={doc}>
                <span aria-hidden="true">✓</span> {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="batch-footer">
        <div className="batch-footer-grid">
          <div>
            <p className="batch-eyebrow batch-light">Thông tin lô hàng</p>
            <dl className="batch-lot">
              <div>
                <dt>Số lô</dt>
                <dd>[{batch.batchCode}]</dd>
              </div>
              <div>
                <dt>Ngày sản xuất</dt>
                <dd>[{batch.producedAt}]</dd>
              </div>
              <div>
                <dt>Hạn sử dụng</dt>
                <dd>[{batch.expiresAt}]</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="batch-eyebrow batch-light">Liên hệ</p>
            <ul className="batch-contact">
              <li>
                📞 Hotline: <a href={site.hotlineHref}>{site.hotline}</a>
              </li>
              <li>
                💬 Zalo: <a href={site.zaloHref}>{site.hotline}</a>
              </li>
              <li>📍 TP. Thủ Đức, TP.HCM</li>
            </ul>
          </div>
        </div>
        <p className="batch-copy">© 2026 Công ty TNHH Silica</p>
      </footer>
    </div>
  );
}

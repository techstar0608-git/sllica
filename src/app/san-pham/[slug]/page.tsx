import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/cta-block";
import { ProductGallery } from "@/components/product-gallery";
import {
  Breadcrumb,
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
  StatusTag,
} from "@/components/ui";
import { getProduct, products } from "@/content/products";
import { getService } from "@/content/services";
import { site } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary.join(" "),
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getService(product.relatedServiceSlug);
  const others = products.filter((p) => p.slug !== product.slug);
  const isRegistered = !product.status.toLowerCase().includes("đang hoàn tất");

  return (
    <>
      {/* 1 · Khối sản phẩm chính */}
      <section className="border-b border-line bg-brand-50 py-10 sm:py-14">
        <Container>
          <Breadcrumb
            trail={[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm", href: "/san-pham" },
              { label: product.name },
            ]}
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <ProductGallery
              alt={product.name}
              images={[product.image ?? product.icon, product.imageBack].filter(
                (src): src is string => Boolean(src),
              )}
            />

            <div>
              <h1 className="text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
                {product.name}
              </h1>
              {product.registeredName ? (
                <p className="mt-2 text-lg text-muted">
                  Tên lưu hành tại Việt Nam: {product.registeredName}
                </p>
              ) : null}
              {product.line ? (
                <p className="mt-1 text-lg text-muted">{product.line}</p>
              ) : null}

              <div className="mt-4">
                <StatusTag value={product.status} />
              </div>

              <ul className="mt-6 space-y-3">
                {product.summary.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 text-brand-500">
                      ✓
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 space-y-2">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted">Quy cách:</dt>
                  <dd className="font-medium">{product.packaging}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted">Giá:</dt>
                  <dd className="font-semibold text-brand-900">Liên hệ</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={site.cta.href}>Liên hệ đặt hàng</Button>
                <Button href={site.zaloHref} variant="secondary">
                  Zalo tư vấn
                </Button>
              </div>
              <p className="mt-3 text-muted">
                Gọi trực tiếp{" "}
                <a href={site.hotlineHref} className="inline-flex min-h-11 items-center font-semibold text-brand-700">
                  {site.hotline}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 · Thành phần */}
      <Section>
        <SectionHeading eyebrow="Thành phần" title="Chỉ tiêu theo nhãn đăng ký" />
        <div className="overflow-x-auto rounded-[18px] border border-line">
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <thead>
              <tr className="bg-brand-50">
                <th scope="col" className="px-5 py-3 font-semibold text-brand-900">
                  Chỉ tiêu
                </th>
                <th scope="col" className="px-5 py-3 font-semibold text-brand-900">
                  Hàm lượng
                </th>
              </tr>
            </thead>
            <tbody>
              {product.composition.map((spec) => (
                <tr key={spec.label} className="border-t border-line">
                  <td className="px-5 py-3.5">{spec.label}</td>
                  <td className="px-5 py-3.5 font-semibold text-brand-900">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3 · Công dụng */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Công dụng" title="Sản phẩm giúp được gì" />
        <div className="grid gap-4 sm:grid-cols-2">
          {product.benefits.map((benefit) => (
            <Card key={benefit.title}>
              <h3 className="text-lg font-bold text-brand-900">{benefit.title}</h3>
              <p className="mt-2 text-muted">{benefit.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4 · Đối tượng cây trồng & liều dùng */}
      <Section>
        <SectionHeading
          eyebrow="Liều dùng"
          title="Đối tượng cây trồng & liều lượng"
          lead={product.targetCrops}
        />
        <p className="mb-4 font-semibold text-brand-900">
          Phương thức: <span className="font-normal">{product.applicationMethod}</span>
        </p>
        <div className="overflow-x-auto rounded-[18px] border border-line">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="bg-brand-50">
                <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                  Đối tượng / Giai đoạn
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                  Liều lượng
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand-900">
                  Thời điểm / Tần suất
                </th>
              </tr>
            </thead>
            <tbody>
              {product.dosage.map((row) => (
                <tr key={row.target} className="border-t border-line align-top">
                  <td className="px-4 py-3.5 font-medium">{row.target}</td>
                  <td className="px-4 py-3.5 text-muted">{row.amount}</td>
                  <td className="px-4 py-3.5 text-muted">{row.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {product.dosageNote ? (
          <p className="mt-4 rounded-[18px] border-l-4 border-amber-400 bg-amber-50 p-5 text-amber-900">
            <strong>Lưu ý:</strong> {product.dosageNote}
          </p>
        ) : null}
      </Section>

      {/* 5 · Hướng dẫn sử dụng & lưu ý */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Sử dụng" title="Hướng dẫn & lưu ý" />
        <ul className="space-y-3">
          {product.usageNotes.map((note) => (
            <li
              key={note}
              className="flex gap-3 rounded-[18px] border border-line bg-white p-5"
            >
              <span aria-hidden="true" className="mt-1 text-brand-500">
                ✓
              </span>
              <span className="text-lg">{note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-[18px] border border-line bg-white p-5">
          <strong className="text-brand-900">Bảo quản:</strong> {product.storage}
        </p>
      </Section>

      {/* 6 · Xuất xứ & công nghệ sản xuất */}
      <Section>
        <SectionHeading eyebrow="Xuất xứ" title="Nhà sản xuất & công nghệ" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Nhà sản xuất</h3>
            <p className="mt-2 text-muted">{product.origin}</p>
            <p className="mt-2 text-muted">Tỉnh Gangwon, Hàn Quốc.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Nghiên cứu & công nghệ</h3>
            <p className="mt-2 text-muted">
              Silicate Crop Research Institute. Công nghệ Alkaline hỗ trợ điều
              hòa pH đất.
            </p>
          </Card>
        </div>
      </Section>

      {/* 7 · Hồ sơ pháp lý */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Pháp lý" title="Hồ sơ sản phẩm" />
        <div className="rounded-[18px] border border-line bg-white p-6">
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {isRegistered ? (
              <>
                <Legal label="Mã số phân bón" value={product.fertilizerCode ?? "—"} />
                <Legal
                  label="Quyết định lưu hành"
                  value={product.circulationDecision ?? "—"}
                />
              </>
            ) : (
              <div className="sm:col-span-2">
                <dt className="text-sm text-muted">Trạng thái đăng ký</dt>
                <dd className="mt-1">
                  <StatusTag value={product.status} />
                </dd>
              </div>
            )}
            <Legal label="Đơn vị nhập khẩu & phân phối" value={site.legalName} />
            <Legal label="Hạn sử dụng" value={product.shelfLife} />
          </dl>
        </div>
      </Section>

      {/* 8 · FAQ */}
      <Section>
        <SectionHeading eyebrow="Câu hỏi thường gặp" title="Chủ vườn hay hỏi" />
        <div className="space-y-3">
          {product.faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-[18px] border border-line bg-white p-5"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center text-lg font-semibold text-brand-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 9 · Dịch vụ liên quan */}
      {related ? (
        <Section className="bg-brand-50">
          <SectionHeading eyebrow="Dịch vụ liên quan" title={related.navName} />
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[18px] border border-line bg-white p-7">
            <p className="max-w-xl text-lg text-muted">{related.cardSummary}</p>
            <Button href={`/dich-vu/${related.slug}`} variant="secondary">
              Xem chi tiết
            </Button>
          </div>
        </Section>
      ) : null}

      {/* 10 · Sản phẩm khác trong bộ K-SON */}
      <Section>
        <SectionHeading title="Sản phẩm khác trong bộ K-SON" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/san-pham/${other.slug}`}
              className="rounded-[18px] border border-line bg-white p-5 hover:shadow-md"
            >
              <p className="font-bold text-brand-900">{other.name}</p>
              <p className="mt-2 text-muted">{other.keyComposition}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}

function Legal({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1 font-medium text-brand-900">{value}</dd>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/cta-block";
import { ProductGallery } from "@/components/product-gallery";
import {
  DosageTableBlock,
  Highlights,
  NoticeBox,
  ProductStickyBar,
  QuickSpecBar,
} from "@/components/product-blocks";
import {
  Breadcrumb,
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
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
              images={
                product.gallery?.length
                  ? product.gallery
                  : [product.image ?? product.icon]
              }
            />

            <div>
              <h1 className="text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
                {product.name}
              </h1>
              {/* B2 · Badge — tên đăng ký chỉ xuất hiện ở bảng Hồ sơ pháp lý */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-brand-100 px-3 py-1.5 font-medium text-brand-700"
                  >
                    {badge}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-lg">
                <span className="text-muted">Giá: </span>
                <span className="font-semibold text-brand-900">Liên hệ</span>
              </p>

              {/* B3 · Thanh thông số nhanh */}
              <div className="mt-6">
                <QuickSpecBar specs={product.quickSpecs} />
              </div>

              {/* B4 · Điểm nổi bật */}
              <div className="mt-6">
                <Highlights items={product.highlights} />
              </div>

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

      {/* B7 · Hướng dẫn sử dụng — bảng nguyên văn nhãn đăng ký */}
      <Section>
        <SectionHeading eyebrow="Hướng dẫn" title="Hướng dẫn sử dụng" />
        {product.dosageTable ? (
          <DosageTableBlock table={product.dosageTable} />
        ) : null}
        <div className="mt-4 space-y-3">
          {product.usageMethod ? (
            <NoticeBox title="Phương pháp sử dụng">
              {product.usageMethod}
            </NoticeBox>
          ) : null}
          {product.pesticideNote ? (
            <NoticeBox title="Lưu ý khi pha chung thuốc BVTV">
              {product.pesticideNote}
            </NoticeBox>
          ) : null}
        </div>
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
            <h3 className="text-lg font-bold text-brand-900">Viện nghiên cứu</h3>
            <p className="mt-2 text-muted">Silicate Crop Research Institute.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Thương hiệu độc quyền</h3>
            <p className="mt-2 text-muted">
              K-SON — {site.legalName} là đơn vị nhập khẩu và phân phối độc
              quyền tại Việt Nam.
            </p>
          </Card>
        </div>
      </Section>

      {/* 7 · Hồ sơ pháp lý */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Pháp lý" title="Hồ sơ sản phẩm" />
        <div className="rounded-[18px] border border-line bg-white p-6">
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {product.registeredName ? (
              <Legal label="Tên đăng ký" value={product.registeredName} />
            ) : null}
            <Legal
              label="Số quyết định lưu hành"
              value={product.circulationDecision ?? "—"}
            />
            <Legal label="Mã số phân bón" value={product.fertilizerCode ?? "—"} />
            <Legal label="Đơn vị nhập khẩu & phân phối" value={site.legalName} />
            <Legal label="Đơn vị sản xuất" value={product.origin} />
            <Legal label="Hạn sử dụng" value={product.shelfLife} />
            <Legal label="Bảo quản" value={product.storage} />
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

      {/* Thanh sticky đáy — không có nút mua hàng, web không bán trực tuyến */}
      <ProductStickyBar zaloHref={site.zaloHref} hotlineHref={site.hotlineHref} />
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

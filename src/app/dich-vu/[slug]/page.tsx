import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/cta-block";
import { ProductPanel } from "@/components/product-panel";
import {
  Breadcrumb,
  Button,
  Card,
  Container,
  DataTable,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.navName,
    description: service.tagline,
    keywords: service.seoKeywords,
  };
}

/**
 * Khung 9 khối dùng chung cho cả 4 trang dịch vụ
 * (docs/SITEMAP_LAYOUT.md mục 3.5 · docs/BRIEF_4_DICH_VU.md mục 0).
 */
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* 1 · Hero — nền sáng theo style landing K-SON */}
      <section className="relative isolate overflow-hidden bg-brand-50">
        <Image
          src={service.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <Container className="relative py-12 sm:py-20">
          <Breadcrumb
            trail={[
              { label: "Trang chủ", href: "/" },
              { label: "Dịch vụ", href: "/dich-vu" },
              { label: service.navName },
            ]}
          />
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight font-bold text-brand-900 sm:text-[42px]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-brand-700 italic">
            “{service.tagline}”
          </p>
          {service.subline ? (
            <p className="mt-3 max-w-3xl text-lg text-muted">{service.subline}</p>
          ) : null}
          <div className="mt-8">
            <Button href={site.cta.href}>{site.cta.label} →</Button>
          </div>
        </Container>
      </section>

      {/* 2 · Vấn đề — nền tối tạo tương phản */}
      <Section>
        <SectionHeading eyebrow="Vấn đề" title="Vườn bạn có đang gặp?" />
        <ul className="grid gap-4 lg:grid-cols-2">
          {service.problems.map((problem) => (
            <li
              key={problem}
              className="flex gap-4 rounded-[18px] border border-line bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700"
              >
                !
              </span>
              <span className="text-lg">{problem}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3 · Silica làm gì — khối quan trọng nhất */}
      <Section>
        <SectionHeading
          eyebrow="Silica làm gì"
          title="Từng đầu việc cụ thể"
          lead="Đây là phần bạn nên đọc kỹ nhất: chính xác những gì đội kỹ thuật làm tại vườn."
        />
        <div className="space-y-6">
          {service.taskGroups.map((group, i) => (
            <Card key={group.title}>
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-brand-900">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 text-brand-500">
                      ✓
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {service.highlight ? (
          <div className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-6">
            <p className="text-lg font-medium text-brand-900">{service.highlight}</p>
          </div>
        ) : null}
      </Section>

      {/* 4 · Cơ chế / Quy trình triển khai */}
      {service.mechanism ? (
        <Section className="bg-brand-50">
          {service.mechanism.kind === "steps" ? (
            <>
              <SectionHeading eyebrow="Cơ chế" title={service.mechanism.data.title} />
              <ol className="grid gap-4 lg:grid-cols-2">
                {service.mechanism.data.steps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-2xl border border-line bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ol>
              {service.mechanism.data.note ? (
                <p className="mt-6 text-muted">
                  {service.mechanism.data.note}{" "}
                  <span className="whitespace-nowrap">
                    (Cập nhật ngày {site.contentUpdatedAt}.)
                  </span>
                </p>
              ) : null}
            </>
          ) : (
            <>
              <SectionHeading
                eyebrow="Quy trình triển khai"
                title={service.mechanism.data.caption ?? "Các bước theo thời gian"}
              />
              <DataTable
                headers={service.mechanism.data.headers}
                rows={service.mechanism.data.rows}
              />
              {service.mechanism.data.note ? (
                <p className="mt-4 text-muted">{service.mechanism.data.note}</p>
              ) : null}
            </>
          )}
        </Section>
      ) : null}

      {/* 5 · Chủ vườn nhận được gì */}
      <Section>
        <SectionHeading
          eyebrow="Bàn giao"
          title="Chủ vườn nhận được gì"
          lead="Sản phẩm bàn giao cầm được, nhìn được."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-line bg-white p-5"
            >
              <span aria-hidden="true" className="text-brand-500">
                ▣
              </span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6 · Sản phẩm / công cụ đi kèm — trạng thái đăng ký bắt buộc hiển thị */}
      {service.productSlugs?.length ? (
        <Section className="bg-brand-50">
          <SectionHeading
            eyebrow="Sản phẩm đi kèm"
            title={service.products?.caption ?? "Sản phẩm sử dụng"}
          />
          <ProductPanel slugs={service.productSlugs} />
          {service.products?.note ? (
            <p className="mt-5 text-muted">{service.products.note}</p>
          ) : null}
        </Section>
      ) : null}

      {/* 7 · Cam kết & giới hạn — bắt buộc có trên trang */}
      <Section>
        <SectionHeading
          eyebrow="Minh bạch"
          title="Cam kết & giới hạn"
          lead="Nói rõ Silica làm gì và không làm gì."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-6">
            <h3 className="text-lg font-bold text-brand-700">Silica cam kết</h3>
            <ul className="mt-4 space-y-3">
              {service.commitment.does.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-brand-500">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">
              Silica không cam kết
            </h3>
            <ul className="mt-4 space-y-3">
              {service.commitment.doesNot.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-amber-700">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8 · FAQ */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Câu hỏi thường gặp" title="Chủ vườn hay hỏi" />
        <div className="space-y-3">
          {service.faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-line bg-white p-5"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center text-lg font-semibold text-brand-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Điều hướng chéo: 3 dịch vụ khác */}
      <Section>
        <SectionHeading title="Ba dịch vụ khác" />
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/dich-vu/${other.slug}`}
              className="rounded-2xl border border-line p-5 hover:bg-brand-50"
            >
              <p className="font-bold text-brand-900">{other.navName}</p>
              <p className="mt-2 text-muted">{other.cardSummary}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 9 · CTA cuối */}
      <CtaBlock />
    </>
  );
}

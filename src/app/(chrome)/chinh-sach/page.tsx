import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, Card, Container, Section } from "@/components/ui";
import { legalEntity, policies, policyUpdatedAt } from "@/content/policies";

export const metadata: Metadata = {
  title: "Chính sách & điều khoản",
  description:
    "Bộ chính sách của Công ty TNHH Silica: bảo vệ dữ liệu cá nhân, cookie, điều khoản sử dụng website, đổi trả khiếu nại và chính sách đối tác phân phối.",
};

export default function PolicyIndexPage() {
  return (
    <>
      <section className="border-b border-line bg-brand-50 py-10 sm:py-14">
        <Container>
          <Breadcrumb trail={[{ label: "Trang chủ", href: "/" }, { label: "Chính sách" }]} />
          <h1 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Chính sách &amp; điều khoản
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Các chính sách dưới đây áp dụng khi Quý khách sử dụng website
            silica.vn và các sản phẩm, dịch vụ do Công ty TNHH Silica cung cấp.
          </p>
          <p className="mt-2 text-muted">Cập nhật lần cuối: {policyUpdatedAt}</p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {policies.map((policy) => (
            <Card key={policy.slug} className="flex flex-col">
              <h2 className="text-lg font-bold text-brand-900">
                <Link
                  href={`/chinh-sach/${policy.slug}`}
                  className="hover:text-brand-600 hover:underline"
                >
                  {policy.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-muted">{policy.description}</p>
              <Link
                href={`/chinh-sach/${policy.slug}`}
                className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand-600 hover:underline"
              >
                Xem chi tiết →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <h2 className="text-xl font-bold text-brand-900 sm:text-2xl">
          Thông tin pháp nhân
        </h2>
        <div className="mt-4 rounded-2xl border-l-4 border-brand-500 bg-white px-5 py-4">
          <p className="text-lg font-semibold text-brand-900">{legalEntity.name}</p>
          <ul className="mt-2 space-y-1 text-muted">
            <li>Mã số doanh nghiệp: {legalEntity.taxCode}</li>
            <li>{legalEntity.registration}</li>
            <li>Cơ quan cấp: {legalEntity.issuer}</li>
            <li>Trụ sở chính: {legalEntity.headOffice}</li>
            <li>Địa điểm kinh doanh: {legalEntity.businessLocation}</li>
            <li>Người đại diện theo pháp luật: {legalEntity.representative}</li>
            <li>
              Hotline:{" "}
              <a href={legalEntity.hotlineHref} className="font-medium text-brand-600 hover:underline">
                {legalEntity.hotline}
              </a>{" "}
              · Email:{" "}
              <a href={`mailto:${legalEntity.email}`} className="font-medium text-brand-600 hover:underline">
                {legalEntity.email}
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import {
  Breadcrumb,
  Button,
  Container,
  DataTable,
  Section,
  SectionHeading,
} from "@/components/ui";
import { services } from "@/content/services";
import { packages, painPoints, workflowSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Dịch vụ cho vườn sầu riêng",
  description:
    "Silica bán giải pháp cho vườn, không chỉ bán vật tư: sức khoẻ đất, quy trình chăm sóc, kiểm soát thuốc BVTV, hồ sơ mã số vùng trồng.",
};

export default function ServicesOverviewPage() {
  return (
    <>
      {/* 1 · Banner trang */}
      <section className="border-b border-line bg-brand-50 py-10 sm:py-14">
        <Container>
          <Breadcrumb trail={[{ label: "Trang chủ", href: "/" }, { label: "Dịch vụ" }]} />
          <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Silica bán giải pháp cho vườn, không chỉ bán vật tư
          </h1>
        </Container>
      </section>

      {/* 2 · Vấn đề của nhà vườn hiện nay */}
      <Section>
        <SectionHeading eyebrow="Vấn đề" title="Nhà vườn đang gặp gì" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <li key={point} className="flex gap-3 rounded-2xl border border-line p-5">
              <span aria-hidden="true" className="text-warn">
                ▸
              </span>
              <span className="text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3 · Sơ đồ 4 dịch vụ thành một chuỗi */}
      <Section className="bg-brand-900 text-white">
        <SectionHeading
          tone="dark"
          eyebrow="Cách bốn dịch vụ nối với nhau"
          title="Đất → Quy trình → Kiểm soát vật tư → Hồ sơ xuất khẩu"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li
              key={service.slug}
              className="rounded-2xl border border-white/20 bg-white/5 p-5"
            >
              <span className="text-3xl font-bold text-brand-300">{i + 1}</span>
              <p className="mt-2 font-semibold">{service.navName}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 · Chi tiết từng dịch vụ, xen kẽ trái/phải */}
      <Section>
        <SectionHeading eyebrow="Chi tiết" title="Bốn dịch vụ" />
        <div className="space-y-12">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <Image
                src={service.heroImage}
                alt=""
                width={800}
                height={600}
                className={`rounded-2xl object-cover ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              />
              <div>
                <h3 className="text-2xl font-bold text-brand-900">
                  {service.navName}
                </h3>
                <p className="mt-3 text-lg text-muted italic">
                  “{service.tagline}”
                </p>
                <ul className="mt-5 space-y-2">
                  {service.taskGroups.slice(0, 4).map((group) => (
                    <li key={group.title} className="flex gap-3">
                      <span aria-hidden="true" className="text-brand-500">
                        ✓
                      </span>
                      <span>{group.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href={`/dich-vu/${service.slug}`} variant="secondary">
                    Xem chi tiết
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 5 · Quy trình làm việc chung */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Quy trình" title="Silica làm việc với vườn thế nào" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, i) => (
            <li key={step} className="rounded-2xl border border-line bg-white p-5">
              <span className="text-2xl font-bold text-brand-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-semibold text-brand-900">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6 · Gói dịch vụ */}
      <Section>
        <SectionHeading
          eyebrow="Gói dịch vụ"
          title="Ba gói theo quy mô và định hướng của vườn"
        />
        <DataTable
          headers={["Gói", "Bao gồm", "Phù hợp với", "Chi phí"]}
          rows={packages.map((p) => [p.name, p.includes, p.audience, "Liên hệ"])}
        />
      </Section>

      {/* 7 · FAQ chung */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Câu hỏi thường gặp" title="Trước khi bắt đầu" />
        <div className="space-y-3">
          {[
            {
              q: "Tôi phải làm cả bốn dịch vụ cùng lúc không?",
              a: "Không. Phần lớn vườn bắt đầu từ Chương trình Sức khoẻ đất, vì mọi khuyến cáo về sau đều dựa trên kết quả phân tích đất của chính vườn.",
            },
            {
              q: "Nếu tôi không mua sản phẩm K-SON thì có được tư vấn không?",
              a: "Có. Dịch vụ và việc mua vật tư là hai việc tách bạch.",
            },
            {
              q: "Silica có bán thuốc bảo vệ thực vật không?",
              a: "Không. Silica cung cấp dịch vụ tư vấn kỹ thuật và kiểm soát tuân thủ, không kinh doanh thuốc bảo vệ thực vật và không hưởng hoa hồng từ hãng thuốc nào.",
            },
            {
              q: "Chi phí bao nhiêu?",
              a: "Tính theo diện tích, số cây và các hạng mục vườn chọn. Liên hệ để nhận báo giá theo vườn.",
            },
            {
              q: "Vườn tôi ở ngoài Đắk Lắk thì có làm được không?",
              a: "Trọng tâm hiện nay là Tây Nguyên. Bạn cứ đăng ký khảo sát, đội kỹ thuật sẽ xác nhận lịch theo khu vực.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-line bg-white p-5"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center text-lg font-semibold text-brand-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}

import type { Metadata } from "next";
import { SurveyForm } from "@/components/survey-form";
import { Card, Container, Section, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Đăng ký khảo sát vườn miễn phí",
  description:
    "Kỹ thuật viên Silica xuống tận vườn, đo pH/EC tại chỗ và nói thẳng vườn bạn đang cần gì. Miễn phí, không ép mua.",
};

const surveySteps = [
  "Gọi xác nhận và hẹn lịch xuống vườn theo khu vực.",
  "Khảo sát thực địa: địa hình, thoát nước, tình trạng gốc rễ, tán lá, ghi nhận bằng hình ảnh.",
  "Đo nhanh tại vườn: pH và EC tại 3 – 5 điểm đại diện, có mặt chủ vườn.",
  "Rà soát nhanh vật tư và quy trình vườn đang dùng.",
  "Trao đổi tại chỗ và đề xuất hạng mục nên làm trước.",
];

const outcomes = [
  "Biết chỉ số pH/EC thực tế tại vườn mình, đo ngay trước mặt bạn.",
  "Nghe đánh giá trực tiếp bằng ngôn ngữ nhà vườn, không phải một file gửi qua Zalo.",
  "Danh sách việc nên làm trước, theo thứ tự ưu tiên.",
];

export default function SurveyPage() {
  return (
    <>
      <section className="bg-brand-900 py-12 text-white sm:py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl">
                {site.cta.label}
              </h1>
              <p className="mt-5 text-lg text-brand-100">
                Kỹ thuật viên Silica xuống tận vườn, đo pH và EC ngay tại chỗ,
                và nói thẳng vườn bạn đang cần gì — kể cả khi câu trả lời là
                chưa cần mua gì của Silica.
              </p>
              <p className="mt-6 text-lg">
                Ngại điền form? Gọi thẳng{" "}
                <a
                  href={site.hotlineHref}
                  className="font-bold text-white underline"
                >
                  {site.hotline}
                </a>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-ink sm:p-8">
              <SurveyForm source="landing-hero" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Quy trình" title="Buổi khảo sát vườn gồm những gì" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {surveySteps.map((step, i) => (
            <li key={step} className="rounded-2xl border border-line p-5">
              <span className="text-2xl font-bold text-brand-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Kết quả"
          title="Chủ vườn nhận được gì sau buổi khảo sát"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {outcomes.map((item) => (
            <Card key={item}>
              <p className="text-lg">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Cam kết" title="Ba điều Silica cam kết với bạn" />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Miễn phí",
              detail: "Buổi khảo sát vườn không thu phí.",
            },
            {
              title: "Không ép mua",
              detail:
                "Kết quả được trả trung thực kể cả khi vườn không cần mua sản phẩm của Silica.",
            },
            {
              title: "Bảo mật thông tin vườn",
              detail:
                "Dữ liệu vườn của bạn chỉ dùng cho việc tư vấn kỹ thuật.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
              <p className="mt-2 text-muted">{item.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading eyebrow="Câu hỏi thường gặp" title="Trước khi đăng ký" />
        <div className="space-y-3">
          {[
            {
              q: "Khảo sát có mất phí không?",
              a: "Không. Buổi khảo sát vườn là miễn phí và không ràng buộc bạn phải mua gì.",
            },
            {
              q: "Bao lâu thì có người xuống vườn?",
              a: "Đội kỹ thuật sẽ gọi xác nhận và hẹn lịch theo khu vực của bạn.",
            },
            {
              q: "Tôi cần chuẩn bị gì?",
              a: "Chỉ cần có mặt tại vườn cùng kỹ thuật viên. Nếu có hoá đơn hoặc vỏ bao vật tư đang dùng thì mang ra để rà soát luôn.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-line bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-brand-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Form nhắc lại ở cuối trang */}
      <Section className="bg-brand-900 text-white">
        <SectionHeading
          tone="dark"
          title="Để lại số, đội kỹ thuật gọi lại cho bạn"
        />
        <div className="max-w-2xl rounded-2xl bg-white p-6 text-ink sm:p-8">
          <SurveyForm source="landing-footer" />
        </div>
      </Section>
    </>
  );
}

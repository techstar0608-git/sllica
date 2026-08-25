import { site } from "@/content/site";
import { Container } from "./ui";
import { SurveyForm } from "./survey-form";

/** G-05 · Khối CTA cuối trang — nền màu thương hiệu, 1 câu + form rút gọn. */
export function CtaBlock() {
  return (
    <section className="bg-brand-900 py-14 text-white sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl leading-snug font-bold sm:text-3xl">
              Để kỹ thuật viên Silica xuống tận vườn xem giúp bạn.
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Khảo sát miễn phí, không ép mua. Chúng tôi đo pH/EC ngay tại vườn
              và nói thẳng vườn bạn đang cần gì.
            </p>
            <p className="mt-6 text-lg">
              Hoặc gọi trực tiếp{" "}
              <a href={site.hotlineHref} className="font-bold text-white underline">
                {site.hotline}
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink sm:p-8">
            <SurveyForm variant="compact" />
          </div>
        </div>
      </Container>
    </section>
  );
}

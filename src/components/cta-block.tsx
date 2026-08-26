import { site } from "@/content/site";
import { Container } from "./ui";
import { SurveyForm } from "./survey-form";

/**
 * G-05 · Khối CTA cuối trang — nền màu thương hiệu.
 * Khi site.surveyEnabled = false, form đăng ký khảo sát được ẩn và khối này
 * chuyển sang mời gọi hotline / Zalo.
 */
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
              <a href={site.hotlineHref} className="inline-flex min-h-11 items-center font-bold text-white underline">
                {site.hotline}
              </a>
            </p>
          </div>

          {site.surveyEnabled ? (
            <div className="rounded-2xl bg-white p-6 text-ink sm:p-8">
              <SurveyForm variant="compact" />
            </div>
          ) : (
            <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
              <p className="text-lg font-semibold text-white">
                Liên hệ đội kỹ thuật Silica
              </p>
              <p className="mt-2 text-brand-100">
                Gọi hotline hoặc nhắn Zalo, chúng tôi sẽ trao đổi trực tiếp về
                tình trạng vườn của bạn.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.hotlineHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50"
                >
                  Gọi {site.hotline}
                </a>
                <a
                  href={site.zaloHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10"
                >
                  Nhắn Zalo
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

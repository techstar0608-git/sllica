import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { services } from "@/content/services";
import { site } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cảm ơn bạn đã đăng ký",
  // Trang xác nhận, dùng để gắn mã theo dõi chuyển đổi — không cần index.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Section>
        <div className="max-w-2xl">
          <p className="text-5xl" aria-hidden="true">
            ✓
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Đã nhận đăng ký của bạn.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Đội kỹ thuật Silica sẽ gọi lại để xác nhận và hẹn lịch xuống vườn
            theo khu vực của bạn. Nếu cần gấp, bạn gọi thẳng số dưới đây.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.hotlineHref}>Gọi {site.hotline}</Button>
            <Button href={site.zaloHref} variant="secondary">
              Nhắn Zalo
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50">
        <h2 className="text-2xl font-bold text-brand-900">
          Trong lúc chờ, xem thêm về dịch vụ
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/dich-vu/${service.slug}`}
              className="rounded-2xl border border-line bg-white p-5 hover:shadow-md"
            >
              <p className="font-bold text-brand-900">{service.navName}</p>
              <p className="mt-2 text-muted">{service.cardSummary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

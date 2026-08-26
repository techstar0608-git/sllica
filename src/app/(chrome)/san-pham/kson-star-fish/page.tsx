import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui";

const TARGET = "/san-pham/kson-starfish/";

/**
 * Slug cũ trước khi đổi tên theo BRIEF_TRANG_CHI_TIET_SAN_PHAM_KSON.md.
 * Giữ lại để link đã chia sẻ và trang Google đã index không trả 404.
 * Site chạy static export nên không dùng redirect() được — chuyển hướng bằng
 * thẻ meta refresh, kèm link để người dùng bấm nếu trình duyệt chặn.
 */
export const metadata: Metadata = {
  title: "Đang chuyển trang…",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
  other: { refresh: `0; url=${TARGET}` },
};

export default function MovedPage() {
  return (
    <Section>
      <Container>
        <p className="text-lg">
          Trang này đã chuyển sang địa chỉ mới.{" "}
          <Link href={TARGET} className="font-semibold text-brand-600 underline">
            Bấm vào đây nếu trình duyệt không tự chuyển
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}

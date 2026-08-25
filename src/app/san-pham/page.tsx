import type { Metadata } from "next";
import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { ProductCatalog } from "@/components/product-catalog";
import {
  Breadcrumb,
  Button,
  Card,
  Container,
  DataTable,
  Section,
  SectionHeading,
} from "@/components/ui";
import { products } from "@/content/products";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bộ sản phẩm K-SON",
  description:
    "Bộ sản phẩm K-SON nhập khẩu nguyên kiện từ Hàn Quốc, sản xuất bởi Saturn Bio Tech — Gangwon. Silica phân phối độc quyền tại Việt Nam.",
};

/** Mục 2 · Infographic thế mạnh bộ sản phẩm. */
const strengths = [
  { icon: "/img/ic-korea.png", title: "Nhập khẩu nguyên kiện từ Hàn Quốc" },
  { icon: "/img/ic-flask.png", title: "Sản xuất bởi Saturn Bio Tech – Gangwon" },
  {
    icon: "/img/ic-bio.png",
    title: "Nghiên cứu bởi Silicate Crop Research Institute",
  },
  { icon: "/img/ic-soil.png", title: "Công nghệ Alkaline điều hòa pH" },
  {
    icon: "/img/ic-safety.png",
    title: "Không phát hiện kim loại nặng (As, Cd, Hg, Pb)",
  },
  { icon: "/img/ic-shield.png", title: "Phân phối độc quyền tại Việt Nam bởi Silica" },
];

export default function ProductCatalogPage() {
  return (
    <>
      {/* 1 · Banner trang */}
      <section className="border-b border-line bg-brand-50 py-10 sm:py-14">
        <Container>
          <Breadcrumb
            trail={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]}
          />
          <h1 className="mt-4 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Bộ sản phẩm K-SON
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Nhập khẩu nguyên kiện từ Hàn Quốc, sản xuất bởi Saturn Bio Tech
            (Gangwon). Silica là nhà phân phối độc quyền tại Việt Nam.
          </p>
        </Container>
      </section>

      {/* 2 · Infographic thế mạnh bộ sản phẩm */}
      <Section>
        <SectionHeading eyebrow="Thế mạnh" title="Vì sao chọn bộ sản phẩm K-SON" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-[18px] border border-line bg-white p-5"
            >
              <span className="icon-tile shrink-0">
                <Image src={item.icon} alt="" width={64} height={64} />
              </span>
              <span className="font-semibold text-brand-900">{item.title}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 · Dây chuyền & công nghệ sản xuất */}
      <Section className="bg-brand-50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/img/science.png"
            alt="Nghiên cứu và sản xuất tại Hàn Quốc"
            width={800}
            height={600}
            className="rounded-[18px] object-cover"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sản xuất"
              title="Dây chuyền & công nghệ"
            />
            <p className="text-lg text-muted">
              Toàn bộ sản phẩm được sản xuất tại nhà máy của Saturn Bio Tech
              Co., Ltd. ở tỉnh Gangwon, Hàn Quốc, và nhập khẩu nguyên kiện về
              Việt Nam — không sang chiết, không đóng gói lại.
            </p>
            <p className="mt-4 text-lg text-muted">
              Công nghệ Alkaline đứng sau khả năng điều hòa pH đất từ từ và bền
              vững, nghiên cứu bởi Silicate Crop Research Institute.
            </p>
            <p className="mt-4 text-lg text-muted">
              Kết quả kiểm nghiệm với K-SON Soil Conditioner: không phát hiện
              As, Cd, Hg, Pb.
            </p>
          </div>
        </div>
      </Section>

      {/* 4 + 5 · Bộ lọc catalog và lưới sản phẩm */}
      <Section>
        <SectionHeading eyebrow="Catalog" title="Toàn bộ sản phẩm" />
        <ProductCatalog products={products} />
      </Section>

      {/* 6 · Bảng so sánh nhanh */}
      <Section className="bg-brand-50">
        <SectionHeading eyebrow="So sánh" title="Bảng so sánh nhanh" />
        <DataTable
          headers={[
            "Sản phẩm",
            "Dạng",
            "Thành phần chính",
            "Đối tượng sử dụng",
            "Quy cách",
            "Trạng thái",
          ]}
          rows={products.map((p) => [
            p.name,
            p.form === "hat" ? "Hạt" : "Lỏng",
            p.keyComposition,
            p.targetCrops,
            p.packaging.split("—")[0].trim(),
            p.status,
          ])}
          highlightLastColumn
        />
      </Section>

      {/* 7 · Mua hàng ở đâu */}
      <Section>
        <SectionHeading eyebrow="Mua hàng" title="Mua sản phẩm K-SON ở đâu" />
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Đại lý gần bạn</h3>
            <p className="mt-2 text-muted">
              Hệ thống đại lý vật tư nông nghiệp phân phối sản phẩm K-SON.
            </p>
            <p className="mt-4 font-semibold text-muted">
              Trang đại lý đang được cập nhật — gọi hotline để được chỉ điểm bán
              gần nhất.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Mua online</h3>
            <p className="mt-2 text-muted">
              Sản phẩm có mặt trên Shopee và TikTok Shop chính hãng của Silica.
            </p>
            <p className="mt-4 font-semibold text-muted">
              Liên hệ hotline để nhận đường dẫn gian hàng chính hãng.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">Liên hệ trực tiếp</h3>
            <p className="mt-2 text-muted">
              Đặt hàng và nhận tư vấn liều dùng theo vườn.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={site.hotlineHref}
                className="inline-flex min-h-11 items-center font-bold text-brand-700 underline"
              >
                {site.hotline}
              </a>
              <a href={site.zaloHref} className="inline-flex min-h-11 items-center font-bold text-brand-700 underline">
                Zalo
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* 8 · Cần tư vấn dùng đúng cách */}
      <Section className="bg-brand-50">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[18px] border border-line bg-white p-7">
          <div>
            <h2 className="text-xl font-bold text-brand-900">
              Chưa chắc vườn mình cần loại nào?
            </h2>
            <p className="mt-2 text-muted">
              Silica xây quy trình trên nền vật tư hiện có của vườn và chỉ bổ
              sung ở những khâu còn thiếu.
            </p>
          </div>
          <Button href="/dich-vu" variant="secondary">
            Xem dịch vụ kỹ thuật
          </Button>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}

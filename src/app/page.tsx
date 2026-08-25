import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { ProductCard } from "@/components/product-card";
import { ServiceCard } from "@/components/service-card";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { coreValues, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* 1 · Hero — nền sáng, ảnh mờ phía sau, theo style landing K-SON */}
      <section className="relative isolate overflow-hidden bg-brand-50">
        <Image
          src="/img/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="pill">
              <span
                className="pill-dot bg-brand-500"
                aria-hidden="true"
              >
                ✓
              </span>
              Dịch vụ kỹ thuật cho vườn sầu riêng • Đắk Lắk
            </span>
            <h1 className="mt-5 text-4xl leading-[1.15] font-bold text-brand-900 sm:text-5xl">
              Silica bán giải pháp cho vườn,{" "}
              <span className="whitespace-nowrap">không chỉ bán vật tư.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Từ sức khoẻ đất, quy trình chăm sóc, kiểm soát thuốc bảo vệ thực
              vật đến hồ sơ mã số vùng trồng — bốn dịch vụ nối thành một chuỗi
              cho vườn sầu riêng của bạn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.cta.href}>{site.cta.label} →</Button>
              <Button href="/dich-vu" variant="secondary">
                Xem 4 dịch vụ
              </Button>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
              {["Khảo sát miễn phí", "Không ép mua", "Kết quả từ phòng thí nghiệm"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-muted">
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-xs text-brand-700"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </section>

      {/* 2 · Dải giá trị cốt lõi — thẻ trắng nổi, như dải dưới hero của landing */}
      <div className="relative z-10 bg-white">
        <Container>
          <div className="-mt-8 grid gap-6 rounded-[18px] border border-line bg-white px-7 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
                >
                  ✓
                </span>
                <span className="font-semibold text-brand-900">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3 · Giới thiệu Silica */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/img/science.png"
            alt="Phân tích mẫu đất tại phòng thí nghiệm"
            width={800}
            height={600}
            className="rounded-2xl object-cover"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Về Silica"
              title="Đội kỹ thuật đi cùng chủ vườn, từ đất lên tới hồ sơ xuất khẩu"
            />
            <p className="text-lg text-muted">
              Silica là nhà phân phối độc quyền bộ sản phẩm K-SON — nhập khẩu
              nguyên kiện từ Hàn Quốc (Saturn Bio Tech, Gangwon) — và là đơn vị
              làm dịch vụ kỹ thuật tại vườn cho chủ vườn sầu riêng Tây Nguyên,
              trọng tâm là Đắk Lắk.
            </p>
            <p className="mt-4 text-lg text-muted">
              Chúng tôi không bán một bao phân rồi đi. Mọi khuyến cáo đều bắt
              đầu từ con số của chính vườn bạn: kết quả phân tích đất, chỉ số đo
              tại vườn, và tình trạng thực tế của cây.
            </p>
          </div>
        </div>
      </Section>

      {/* 4 · 4 dịch vụ cung cấp */}
      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Bốn dịch vụ cho vườn sầu riêng"
          lead="Mỗi dịch vụ giải quyết một khâu, và bốn dịch vụ nối lại thành một chuỗi hoàn chỉnh."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/dich-vu" variant="secondary">
            Xem tất cả dịch vụ
          </Button>
        </div>
      </Section>

      {/* 5 · Bộ sản phẩm nổi bật */}
      <Section>
        <SectionHeading
          eyebrow="Sản phẩm"
          title="Bộ sản phẩm K-SON"
          lead="Nhập khẩu nguyên kiện từ Hàn Quốc, sản xuất bởi Saturn Bio Tech — Gangwon."
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/san-pham" variant="secondary">
            Xem toàn bộ catalog
          </Button>
        </div>
      </Section>

      {/* 6 · Vì sao chọn Silica */}
      <Section>
        <SectionHeading eyebrow="Vì sao chọn Silica" title="Ba điểm khác biệt" />
        <div className="grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-bold text-brand-900">
              Khuyến cáo dựa trên con số của chính vườn bạn
            </h3>
            <p className="mt-3 text-muted">
              Lấy mẫu đúng kỹ thuật, phân tích tại phòng thí nghiệm độc lập, và
              trả kết quả trung thực kể cả khi kết quả cho thấy vườn không cần
              mua sản phẩm của Silica.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">
              Kỹ thuật viên ngồi tại vườn giải thích, không chỉ gửi file
            </h3>
            <p className="mt-3 text-muted">
              Từng chỉ số được giải thích bằng ngôn ngữ nhà vườn. Giữa các lần
              thăm vườn có nhóm Zalo kỹ thuật riêng, phản hồi trong ngày làm
              việc.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-brand-900">
              Không bắt bạn bỏ quy trình đang dùng
            </h3>
            <p className="mt-3 text-muted">
              Silica xây quy trình trên nền vật tư hiện có của vườn và chỉ bổ
              sung ở những khâu còn thiếu.
            </p>
          </Card>
        </div>
      </Section>

      {/* 8 · Đối tác chiến lược */}
      <Section className="border-y border-line bg-brand-50">
        <SectionHeading
          eyebrow="Đối tác"
          title="Hợp tác quốc tế đứng sau bộ sản phẩm K-SON"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              name: "Tỉnh Gangwon, Hàn Quốc",
              desc: "Chương trình hợp tác cấp tỉnh.",
            },
            {
              name: "Saturn Bio Tech Co., Ltd.",
              desc: "Nhà sản xuất bộ sản phẩm K-SON tại Gangwon.",
            },
            {
              name: "Silicate Crop Research Institute",
              desc: "Đơn vị nghiên cứu đứng sau công nghệ Alkaline.",
            },
          ].map((partner) => (
            <Card key={partner.name}>
              <p className="font-bold text-brand-900">{partner.name}</p>
              <p className="mt-2 text-muted">{partner.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}

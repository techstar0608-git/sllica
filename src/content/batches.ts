/**
 * Trang truy xuất lô hàng — giữ nguyên nội dung và URL của bản WordPress cũ
 * tại silica.vn, vì mã QR in trên bao bì đang trỏ về các URL này. Đổi slug là
 * QR đã in thành vô hiệu.
 *
 * Thêm lô mới: chép một khối trong `batches`, sửa slug + số lô + ngày.
 */

export type SpecRow = {
  label: string;
  /** Hàm lượng theo nhãn đăng ký tại Việt Nam. "—" nếu không công bố. */
  vn: string;
  /** Hàm lượng công bố trên bao bì gốc Hàn Quốc. */
  kr?: string;
  /** Chỉ tiêu chung, không phân biệt VN / Hàn (dạng, đóng gói…). */
  common?: string;
};

export type DosageRow = {
  crop: string;
  amount: string;
  method: string;
};

export type Batch = {
  /** Đúng slug của bản WordPress cũ. */
  slug: string;
  productName: string;
  productLine: string;
  tagline: string;
  intro: string;
  image: string;
  specs: SpecRow[];
  specNote: string;
  benefits: { icon: string; title: string; detail: string }[];
  dosage: DosageRow[];
  warning: string;
  note: string;
  origin: { label: string; value: string }[];
  legalDocs: string[];
  /** Thông tin riêng của từng lô. */
  batchCode: string;
  producedAt: string;
  expiresAt: string;
};

const SOIL_CONDITIONER = {
  productName: "K-SON",
  productLine: "Soil Conditioner",
  tagline:
    "Chất cải tạo đất công nghệ Silicate — Nhập khẩu nguyên kiện từ Hàn Quốc",
  intro:
    "Giải pháp nâng cao sức khỏe đất từ Hàn Quốc, ứng dụng công nghệ Silicate giúp cải thiện sức khỏe đất, bổ sung Canxi và các trung vi lượng thiết yếu cho cây trồng. Phù hợp cho sầu riêng, cây ăn trái và cây công nghiệp.",
  image: "/img/kson-soil-conditioner-bags.jpg",
  specs: [
    { label: "Akanline", vn: "—", kr: "25%" },
    { label: "Canxi (CaO)", vn: "20%", kr: "40%" },
    { label: "Magie (MgO)", vn: "1%", kr: "2.86%" },
    { label: "Sắt (Fe₂O₃)", vn: "1.000 ppm", kr: "1.120 ppm" },
    { label: "Dạng", vn: "", common: "Hạt (Granule) 3–5mm" },
    { label: "Đóng gói", vn: "", common: "Bao 20 kg" },
    { label: "Hạn sử dụng", vn: "", common: "3 năm từ ngày SX" },
  ] satisfies SpecRow[],
  specNote:
    "Hàm lượng công bố tại Hàn Quốc ghi trên bao bì gốc. Nhãn phụ VN theo quy định Cục BVTV.",
  benefits: [
    {
      icon: "🌱",
      title: "Cải thiện cấu trúc đất",
      detail: "Tăng khả năng giữ nước và dinh dưỡng, điều hòa pH đất",
    },
    {
      icon: "🛡️",
      title: "Ức chế Cadimi",
      detail: "Hỗ trợ giảm tích lũy kim loại nặng trong đất canh tác",
    },
    {
      icon: "💪",
      title: "Bổ sung Canxi",
      detail: "Hỗ trợ vách tế bào, chống nứt trái cho cây ăn trái",
    },
    {
      icon: "☀️",
      title: "Bổ sung Magie",
      detail: "Hỗ trợ quá trình quang hợp, cây xanh tốt bền vững",
    },
    {
      icon: "⚡",
      title: "Bổ sung Sắt",
      detail: "Vi lượng thiết yếu cho quá trình sinh trưởng",
    },
    {
      icon: "🌿",
      title: "Nâng pH đất",
      detail: "Đất khỏe, cây hấp thu tốt",
    },
  ],
  dosage: [
    { crop: "🌳 Sầu riêng", amount: "2 kg/gốc/lần", method: "Chia 2–3 lần/vụ" },
    { crop: "🍊 Cây ăn trái", amount: "200–300 kg/ha", method: "Bón theo giai đoạn" },
    { crop: "🌾 Rau màu", amount: "250 kg/ha/vụ", method: "Bón lót trước gieo" },
  ],
  warning:
    "Để đạt hiệu quả tối ưu, nên bón sau khi trời mưa hoặc khi đất đủ ẩm. Độ ẩm giúp các thành phần trong sản phẩm phân giải và thẩm thấu vào đất tốt hơn.",
  note: "Bón xa gốc, rải đều theo hình chiếu tán. Có thể kết hợp với phân NPK và phân hữu cơ. Sản phẩm là giải pháp cải tạo đất — không thay thế quy trình bón phân hiện tại.",
  origin: [
    { label: "Xuất xứ", value: "Hàn Quốc 🇰🇷" },
    { label: "Nhà sản xuất", value: "Saturn Bio Tech" },
    { label: "Nghiên cứu", value: "Silicate Crop Research Institute" },
    { label: "Nhập khẩu & Phân phối", value: "Công ty TNHH Silica" },
  ],
  legalDocs: [
    "Quyết định lưu hành phân bón (QĐ 1995/QĐ-BVTV-PB ngày 31/08/2023)",
    "Nguồn gốc xuất xứ (C/O)",
    "Kết quả kiểm tra chất lượng tại Hàn Quốc",
    "Kiểm tra nhà nước về chất lượng phân bón nhập khẩu",
  ],
};

export const batches: Batch[] = [
  {
    ...SOIL_CONDITIONER,
    slug: "2026-nk-im01-sc02-th01-001",
    batchCode: "1317.2026/TH01.001",
    producedAt: "15/01/2026",
    expiresAt: "15/01/2029",
  },
];

export function getBatch(slug: string): Batch | undefined {
  return batches.find((b) => b.slug === slug);
}

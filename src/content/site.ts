/** Thông tin công ty — theo mục G-06 trong docs/SITEMAP_LAYOUT.md */
export const site = {
  name: "Silica",
  legalName: "Công ty TNHH Silica",
  taxCode: "0313042368",
  hotline: "0932 047 055",
  hotlineHref: "tel:0932047055",
  zaloHref: "https://zalo.me/0932047055",
  email: "huunx@silica.vn",
  offices: [
    {
      label: "Văn phòng chính",
      address: "3F2 Đường 22, KP2, P. An Khánh, TP. Thủ Đức, TP.HCM",
    },
    {
      label: "Địa điểm kinh doanh & kho",
      address: "Thôn Hồ Tiếng, xã Krông Năng, Đắk Lắk",
    },
  ],
  /** CTA thống nhất toàn site. */
  cta: {
    label: "Đăng ký khảo sát vườn miễn phí",
    shortLabel: "Đăng ký khảo sát vườn",
    href: "/dang-ky-khao-sat",
  },
  /** Ngày duyệt nội dung — dùng cho dòng "Cập nhật ngày…" ở khối dẫn chiếu pháp luật. */
  contentUpdatedAt: "24/08/2026",
} as const;

export const coreValues = [
  "Nhập khẩu nguyên kiện Hàn Quốc",
  "Phân phối độc quyền K-SON",
  "12 năm trong ngành",
  "Đội kỹ thuật đồng hành tại vườn",
];

/** Mục 5 · /dich-vu — Quy trình làm việc chung */
export const workflowSteps = [
  "Đăng ký",
  "Khảo sát vườn",
  "Phân tích & đề xuất",
  "Triển khai",
  "Đồng hành & đánh giá",
];

/** Vấn đề của nhà vườn hiện nay — mục 2 trang /dich-vu */
export const painPoints = [
  "Bón phân theo kinh nghiệm và lời khuyên người bán, chưa từng có kết quả phân tích đất của chính vườn mình.",
  "Mỗi người tư vấn một kiểu, chủ vườn không biết nghe ai; chủ vườn đi vắng là công nhân không biết làm gì.",
  "Chỉ cần một loại thuốc ngoài danh mục là mất mã số vùng trồng.",
  "Cadimi và Vàng O vượt ngưỡng là cả lô hàng bị chặn tại cửa khẩu.",
  "Không có mã số vùng trồng, trái chỉ bán được cho thương lái với giá thấp hơn.",
];

/** Mục 6 · /dich-vu — Gói dịch vụ. Cột giá để "Liên hệ" cho đến khi chốt bảng giá. */
export const packages = [
  {
    name: "Khởi đầu",
    includes: "Khảo sát vườn + Sức khoẻ đất (phân tích cơ bản) + Phác đồ cải tạo",
    audience: "Vườn mới tiếp cận, muốn thử",
  },
  {
    name: "Chuẩn",
    includes:
      "Khởi đầu + Quy trình chăm sóc cả vụ + Thăm vườn định kỳ + Rà soát danh mục thuốc BVTV",
    audience: "Vườn 1 – 5 ha, đầu tư nghiêm túc",
  },
  {
    name: "Toàn diện – Xuất khẩu",
    includes:
      "Chuẩn + Hồ sơ mã số vùng trồng + Kiểm nghiệm trước thu hoạch + Kết nối đầu ra",
    audience: "Vườn định hướng xuất khẩu chính ngạch",
  },
];

/** Các vấn đề chủ vườn chọn trong form đăng ký khảo sát. */
export const surveyIssues = [
  "Đất chua, chai cứng, cây hấp thu kém",
  "Rễ tơ ít, cây suy sau thu hoạch",
  "Lo Cadimi / dư lượng vượt ngưỡng",
  "Xử lý ra hoa không đồng loạt",
  "Trái sượng nước, cháy múi",
  "Chưa có quy trình chăm sóc rõ ràng",
  "Cần rà soát thuốc BVTV đang dùng",
  "Muốn xin / giữ mã số vùng trồng",
];

/**
 * Dữ liệu sản phẩm K-SON — theo BRIEF_TRANG_CHI_TIET_SAN_PHAM_KSON.md (26/08/2026).
 *
 * Nguyên tắc tuân thủ (Phần III của brief), áp dụng cho toàn bộ file:
 *  1. Không nêu tên cây trồng cụ thể ở bất kỳ đâu, TRỪ bảng liều `dosage` —
 *     bảng đó chép nguyên văn nhãn đăng ký, giữ cả tên cây trồng ghi trên nhãn.
 *     Không thêm dòng liều cho cây ngoài nhãn.
 *  2. Hàm lượng ghi đúng nhãn phụ: "Canxi (Ca)", không ghi CaO; dùng "Silic",
 *     không dùng "Silicon".
 *  3. Tên hiển thị luôn là tên thương mại K-SON. `registeredName` chỉ dùng
 *     trong bảng Hồ sơ pháp lý.
 *  4. Chỉ hiển thị số QĐLH và mã số phân bón — KHÔNG hiển thị ngày ban hành.
 *  5. Cả 5 sản phẩm đều đã có quyết định lưu hành.
 */

export type ProductSpec = { label: string; value: string };

export type DosageRow = {
  target: string;
  amount: string;
  timing: string;
};

/** B3 · Thanh thông số nhanh — đúng 3 ô, icon + số lớn. */
export type QuickSpec = { label: string; value: string };

/**
 * B7 · Bảng hướng dẫn sử dụng — chép nguyên văn nhãn đăng ký.
 * Số cột thay đổi theo từng sản phẩm nên để headers/rows tự do.
 */
export type DosageTable = {
  /** Câu tổng lượng đặt trên bảng, ví dụ "4,8 lít / 3.200 lít nước / ha / vụ". */
  summary?: string;
  headers: string[];
  rows: string[][];
};

/** Dùng cho bộ lọc catalog (mục 3.6 §4). */
export type ProductForm = "hat" | "long";
export type ProductUseGroup = "cai-tao-dat" | "dinh-duong" | "canxi";

export type Product = {
  slug: string;
  name: string;
  /** Tên lưu hành tại Việt Nam, nếu khác tên thương mại. */
  registeredName?: string;
  line?: string;
  category: string;
  packaging: string;
  origin: string;
  fertilizerCode?: string;
  circulationDecision?: string;
  shelfLife: string;
  /** Trạng thái đăng ký — bắt buộc hiển thị trên mọi card và bảng. */
  status: string;
  /** B2 · Badge ngang dưới tên sản phẩm. */
  badges: string[];
  /** B3 · Đúng 3 thông số nhanh. */
  quickSpecs: [QuickSpec, QuickSpec, QuickSpec];
  /** B4 · Điểm nổi bật — mỗi dòng dưới 12 từ. */
  highlights: string[];
  /** B7 · Bảng liều nguyên văn nhãn. Thay cho `dosage` khi có. */
  dosageTable?: DosageTable;
  /** B7 · Khối cảnh báo "Phương pháp sử dụng". */
  usageMethod?: string;
  /** B7 · Khối cảnh báo "Lưu ý khi pha chung thuốc BVTV". */
  pesticideNote?: string;
  composition: ProductSpec[];
  benefits: { title: string; detail: string }[];
  targetCrops: string;
  applicationMethod: string;
  dosage: DosageRow[];
  /** Cảnh báo hiển thị ngay dưới bảng liều dùng. */
  dosageNote?: string;
  usageNotes: string[];
  storage: string;
  /** Vai trò trong quy trình chăm sóc — dùng ở khối 6 trang dịch vụ. */
  roleInProgram: string;

  /** Dạng sản phẩm, cho bộ lọc catalog. */
  form: ProductForm;
  /** Nhóm công dụng, cho bộ lọc catalog. */
  useGroup: ProductUseGroup;
  /** Nhóm cây trồng, cho bộ lọc catalog. */
  cropTags: string[];
  /** Tóm tắt 3 gạch đầu dòng ở khối sản phẩm chính. */
  summary: string[];
  /** Thành phần chính, hiển thị ở bảng so sánh nhanh. */
  keyComposition: string;
  /** Ảnh sản phẩm; để trống thì dùng icon thay thế. */
  image?: string;
  /**
   * B1 · Bộ ảnh gallery, thứ tự: ảnh tách nền → ảnh nhãn → ảnh thực tế.
   * Ảnh tách nền (`-front`) đặt trước để làm ảnh đại diện.
   */
  gallery?: string[];
  /** Icon dùng khi chưa có ảnh chụp sản phẩm. */
  icon: string;
  /** Slug dịch vụ liên quan (mục 3.7 §9). */
  relatedServiceSlug: string;
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "kson-soil-conditioner",
    name: "K-SON Soil Conditioner",
    registeredName: "NSK High Country 2",
    category: "Chất cải tạo đất / Phân bón trung – vi lượng",
    packaging: "Bao 20kg — dạng hạt 3 – 5 mm",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "28190",
    circulationDecision: "1995/QĐ-BVTV-PB",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành",
    badges: ["Nhập khẩu Hàn Quốc", "Đã đăng ký lưu hành", "Bao 20kg"],
    quickSpecs: [
      { label: "Canxi", value: "Ca 20%" },
      { label: "Magie", value: "Mg 1%" },
      { label: "Quy cách", value: "Bao 20kg" },
    ],
    highlights: [
      "Dạng hạt, tan chậm, tác dụng kéo dài",
      "Bổ sung Canxi, Magie, Sắt cho đất",
      "Không phát hiện As, Cd, Hg, Pb",
      "Nhập khẩu nguyên kiện từ Hàn Quốc",
    ],
    composition: [
      { label: "Canxi (Ca)", value: "20%" },
      { label: "Magie (Mg)", value: "1%" },
      { label: "Sắt (Fe)", value: "1.000 ppm" },
      { label: "Độ ẩm", value: "≤ 3%" },
      { label: "Dạng", value: "Hạt 3 – 5 mm" },
      { label: "Quy cách", value: "Bao 20kg" },
      { label: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
    ],
    benefits: [
      {
        title: "Cải tạo đất",
        detail:
          "Cải thiện cấu trúc đất, tăng khả năng giữ nước và dinh dưỡng, điều hòa pH đất.",
      },
      {
        title: "Bổ sung trung lượng",
        detail:
          "Cung cấp Canxi hỗ trợ vách tế bào, Magie tham gia quang hợp, Sắt là vi lượng thiết yếu.",
      },
      {
        title: "Sản phẩm sạch",
        detail:
          "Không phát hiện kim loại nặng As, Cd, Hg, Pb trong kết quả kiểm nghiệm.",
      },
    ],
    targetCrops: "Đất trồng cần cải tạo.",
    applicationMethod: "Bón gốc.",
    dosage: [],
    dosageTable: {
      headers: ["Nhóm cây trồng", "Liều lượng", "Cách bón"],
      rows: [
        ["Cây ăn trái", "200 – 300 kg/ha", "Bón theo giai đoạn trong vụ"],
        ["Rau màu", "250 kg/ha/vụ", "Bón lót trước khi gieo trồng"],
      ],
    },
    usageMethod:
      "Bón gốc, rải đều theo hình chiếu tán, bón xa gốc. Có thể kết hợp với phân NPK và phân hữu cơ đang sử dụng, không cần thay đổi quy trình bón phân hiện tại.",
    usageNotes: [],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.",
    roleInProgram: "Cải tạo đất, bổ sung canxi – magie – sắt",
    form: "hat",
    useGroup: "cai-tao-dat",
    cropTags: ["Cây ăn trái", "Rau màu"],
    summary: [
      "Chất cải tạo đất dạng hạt, tan chậm, tác dụng kéo dài.",
      "Bổ sung Canxi 20%, Magie 1%, Sắt 1.000 ppm cho đất.",
      "Không phát hiện kim loại nặng As, Cd, Hg, Pb.",
    ],
    keyComposition: "Ca 20% · Mg 1% · Fe 1.000 ppm",
    image: "/img/kson-soil-conditioner-front.png",
    gallery: [
      "/img/kson-soil-conditioner-front.png",
      "/img/kson-soil-conditioner.png",
      "/img/kson-soil-conditioner-back.png",
      "/img/kson-soil-conditioner-pair.png",
      "/img/kson-soil-conditioner-bags.jpg",
    ],
    icon: "/img/ic-soil.png",
    relatedServiceSlug: "suc-khoe-dat",
    faqs: [
      {
        q: "Bón bao nhiêu cho vườn của tôi?",
        a: "Liều theo nhãn đăng ký là 200 – 300 kg/ha với cây ăn trái và 250 kg/ha/vụ với rau màu. Quy ra từng gốc thì tuỳ mật độ trồng — kỹ thuật viên sẽ tính theo số cây thực tế khi khảo sát.",
      },
      {
        q: "Khác gì với bón vôi?",
        a: "Sản phẩm ở dạng hạt 3 – 5 mm, tan chậm nên tác dụng kéo dài, đồng thời bổ sung Canxi, Magie và Sắt cho đất.",
      },
      {
        q: "Có bón chung với phân đang dùng được không?",
        a: "Được. Có thể kết hợp với phân NPK và phân hữu cơ.",
      },
      {
        q: "Sản phẩm có kim loại nặng không?",
        a: "Kết quả kiểm nghiệm: không phát hiện As, Cd, Hg, Pb.",
      },
    ],
  },
  {
    slug: "kson-silicate-liquid",
    name: "K-SON Silicate Liquid",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500 ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    registeredName: "Phân bón lá trung lượng Silic",
    fertilizerCode: "33947",
    circulationDecision: "474/QĐ-TTTV-PB",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành",
    badges: ["Nhập khẩu Hàn Quốc", "Đã đăng ký lưu hành", "Chai 500ml"],
    quickSpecs: [
      { label: "Silic hữu hiệu", value: "SiO₂ₕₕ 23%" },
      { label: "pH_H₂O", value: "12" },
      { label: "Quy cách", value: "500ml" },
    ],
    highlights: [
      "Hàm lượng Silic hữu hiệu cao",
      "Giúp lá dày, cứng, giảm rụng lá do gió",
      "Hỗ trợ cây chống sốc nhiệt, chống hạn",
      "Tăng hiệu quả sử dụng phân bón",
    ],
    composition: [
      { label: "Silic hữu hiệu (SiO₂ₕₕ)", value: "23%" },
      { label: "pH_H₂O", value: "12" },
      { label: "Tỷ trọng", value: "1,4" },
      { label: "Quy cách", value: "Chai 500ml" },
      { label: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
    ],
    benefits: [
      {
        title: "Dày lá, giảm rụng lá",
        detail:
          "Silic tích lũy trong biểu bì lá giúp lá dày và cứng hơn, giảm rụng lá do gió mạnh.",
      },
      {
        title: "Tăng sức đề kháng cây trồng",
        detail:
          "Silic tạo hàng rào vật lý ở biểu bì, giúp cây chống chịu tốt hơn với nấm bệnh, côn trùng và điều kiện bất lợi.",
      },
      {
        title: "Hỗ trợ chống sốc nhiệt, chống hạn",
        detail:
          "Silic hỗ trợ cây duy trì quang hợp và giảm thoát hơi nước trong điều kiện nắng nóng, khô hạn kéo dài.",
      },
      {
        title: "Tăng hiệu suất quang hợp",
        detail:
          "Tăng hiệu suất quang hợp khi không đủ ánh nắng. Tăng hiệu quả sử dụng phân bón.",
      },
      {
        title: "Đặc biệt trên cây lúa",
        detail:
          "Giúp thân cứng, chống đổ ngã; cải thiện hiệu quả sử dụng đạm, giảm lượng phân đạm cần bón.",
      },
    ],
    targetCrops: "Theo nhãn đăng ký.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [],
    dosageTable: {
      summary: "2.250ml / 1.500 lít nước / ha / vụ. Chia phun 3 lần.",
      headers: ["Giai đoạn", "Liều lượng"],
      rows: [
        ["Lần 1 — 10 ngày sau sạ", "Pha 750ml / 500 lít nước / lần"],
        ["Lần 2 — 22 ngày sau sạ", "Pha 750ml / 500 lít nước / lần"],
        ["Lần 3 — 40 ngày sau sạ", "Pha 750ml / 500 lít nước / lần"],
      ],
    },
    usageMethod:
      "Hòa phân bón với nước rồi phun đều bề mặt lá vào lúc sáng sớm hoặc chiều mát.",
    pesticideNote:
      "Pha loãng phân bón lá với nước trước khi pha chung với thuốc BVTV. Không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu).",
    usageNotes: [],
    storage:
      "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Bảo quản 5 – 30°C sau khi mở nắp.",
    roleInProgram: "Dinh dưỡng silicate dạng lỏng",
    form: "long",
    useGroup: "dinh-duong",
    cropTags: ["Lúa"],
    summary: [
      "Silic hữu hiệu 23%, giúp lá dày và cứng hơn, giảm rụng lá do gió mạnh.",
      "Tăng sức đề kháng của cây trước nấm bệnh, côn trùng và điều kiện bất lợi.",
      "Hỗ trợ cây chống sốc nhiệt, chống hạn.",
    ],
    keyComposition: "SiO₂ₕₕ 23%",
    image: "/img/kson-silicate-liquid-front.png",
    gallery: [
      "/img/kson-silicate-liquid-front.png",
      "/img/kson-silicate-liquid.png",
    ],
    icon: "/img/ic-magleaf.png",
    relatedServiceSlug: "quy-trinh-cham-soc",
    faqs: [
      {
        q: "Silic có tác dụng gì với cây trồng?",
        a: "Silic tích lũy trong biểu bì lá, tạo hàng rào vật lý giúp lá dày và cứng hơn, đồng thời hỗ trợ cây chống chịu nấm bệnh, côn trùng và điều kiện bất lợi.",
      },
      {
        q: "Vì sao lá dày lại giảm rụng do gió?",
        a: "Silic tích lũy ở biểu bì làm mô lá dày và cứng hơn, nhờ đó lá bám chắc hơn và ít bị tổn thương khi gặp gió mạnh.",
      },
      {
        q: "Phun vào thời điểm nào trong ngày là tốt nhất?",
        a: "Sáng sớm hoặc chiều mát. Hòa phân bón với nước rồi phun đều bề mặt lá.",
      },
      {
        q: "Dùng cho cây trồng khác ngoài nhãn được không?",
        a: "Bảng liều trên trang này là liều đã đăng ký theo nhãn. Với cây trồng khác, vui lòng liên hệ đội kỹ thuật Silica để được tư vấn theo điều kiện thực tế của vườn.",
      },
      {
        q: "Bảo quản thế nào?",
        a: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Bảo quản 5 – 30°C sau khi mở nắp.",
      },
    ],
  },
  {
    slug: "kson-sulfur-silicate",
    name: "K-SON Sulfur Silicate",
    registeredName: "Phân bón lá trung lượng Lưu huỳnh – Silic",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "33948",
    circulationDecision: "474/QĐ-TTTV-PB",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành",
    badges: ["Nhập khẩu Hàn Quốc", "Đã đăng ký lưu hành", "Chai 500ml"],
    quickSpecs: [
      { label: "Lưu huỳnh siêu mịn", value: "S 16%" },
      { label: "Silic hữu hiệu", value: "SiO₂ₕₕ 15%" },
      { label: "Quy cách", value: "500ml" },
    ],
    highlights: [
      "Lưu huỳnh dạng đơn chất S⁰, hạt siêu mịn",
      "Kết hợp Silic tăng lớp bảo vệ bề mặt lá",
      "Không chứa hoạt chất thuốc BVTV",
      "Nhập khẩu nguyên chai từ Hàn Quốc",
    ],
    composition: [
      { label: "Silic hữu hiệu (SiO₂ₕₕ)", value: "15%" },
      { label: "Lưu huỳnh siêu mịn (S)", value: "16%" },
      { label: "pH_H₂O", value: "11,6" },
      { label: "Tỷ trọng", value: "1,4" },
      { label: "Quy cách", value: "Chai 500ml" },
      { label: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
    ],
    benefits: [
      {
        title: "Tăng sức đề kháng",
        detail:
          "Lưu huỳnh đơn chất (S⁰) dạng hạt siêu mịn, giúp cây tăng khả năng chống chịu nấm bệnh, nhện và côn trùng gây hại.",
      },
      {
        title: "Silic tăng cường lớp bảo vệ bề mặt lá",
        detail:
          "Silic hữu hiệu tích lũy ở biểu bì lá, tạo lớp bảo vệ tự nhiên, hỗ trợ cây chống chịu điều kiện bất lợi (nắng hạn, mưa nhiều, ẩm độ cao).",
      },
      {
        title: "Hỗ trợ hương vị đặc trưng của trái",
        detail:
          "Lưu huỳnh là dưỡng chất tham gia hình thành các hợp chất sulfide tự nhiên, góp phần vào hương vị đặc trưng của trái.",
      },
      {
        title: "An toàn, không tồn dư thuốc BVTV",
        detail:
          "Là phân bón trung lượng dạng khoáng, không chứa hoạt chất thuốc bảo vệ thực vật, an toàn cho người sử dụng và cây trồng khi dùng đúng liều khuyến cáo.",
      },
    ],
    targetCrops: "Theo nhãn đăng ký.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [],
    dosageTable: {
      summary:
        "4,8 lít phân bón / 3.200 lít nước / ha / vụ. Chia phun 4 lần.",
      headers: ["Giai đoạn", "Liều lượng"],
      rows: [
        ["Lần 1 — bắt đầu ra hoa đầu tiên", "Pha 1,2 lít / 800 lít nước / ha"],
        ["Lần 2 — 7 ngày sau phun lần 1", "Pha 1,2 lít / 800 lít nước / ha"],
        ["Lần 3 — 7 ngày sau phun lần 2", "Pha 1,2 lít / 800 lít nước / ha"],
        ["Lần 4 — 7 ngày sau phun lần 3", "Pha 1,2 lít / 800 lít nước / ha"],
      ],
    },
    usageMethod: "Hòa phân bón với nước rồi phun trên lá vào lúc sáng sớm hoặc chiều mát.",
    pesticideNote: "Pha loãng phân bón lá với nước trước khi pha chung với thuốc BVTV. Không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu).",
    usageNotes: [],
    storage:
      "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Bảo quản 5 – 30°C sau khi mở nắp.",
    roleInProgram: "Dinh dưỡng silicate có lưu huỳnh đơn chất S⁰",
    form: "long",
    useGroup: "dinh-duong",
    cropTags: [],
    summary: [
      "Lưu huỳnh siêu mịn 16% kết hợp Silic hữu hiệu 15%.",
      "Giúp cây tăng khả năng chống chịu nấm bệnh, nhện và côn trùng gây hại.",
      "Không chứa hoạt chất thuốc bảo vệ thực vật.",
    ],
    keyComposition: "S 16% · SiO₂ₕₕ 15%",
    image: "/img/kson-sulfur-silicate-front.png",
    gallery: [
      "/img/kson-sulfur-silicate-front.png",
      "/img/kson-sulfur-silicate.png",
    ],
    icon: "/img/ic-bio.png",
    relatedServiceSlug: "quy-trinh-cham-soc",
    faqs: [
      {
        q: "Lưu huỳnh đơn chất S⁰ khác gì lưu huỳnh dạng sulfate?",
        a: "Sản phẩm dùng lưu huỳnh ở dạng đơn chất (S⁰) hạt siêu mịn, khác với lưu huỳnh dạng sulfate trong các loại phân bón thông thường.",
      },
      {
        q: "Sản phẩm này có phải là thuốc trừ nấm không?",
        a: "Không. Đây là phân bón lá trung lượng dạng khoáng, không chứa hoạt chất thuốc bảo vệ thực vật. Theo nhãn đăng ký, sản phẩm giúp cây tăng khả năng chống chịu nấm bệnh, nhện và côn trùng gây hại.",
      },
      {
        q: "Có pha chung với phân bón lá khác được không?",
        a: "Khi pha chung với thuốc bảo vệ thực vật, cần pha loãng phân bón lá với nước trước. Không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu). Với các sản phẩm khác, vui lòng liên hệ đội kỹ thuật để được tư vấn.",
      },
      {
        q: "pH 11,6 có cao quá không, phun lên lá có sao không?",
        a: "Sản phẩm được phun sau khi đã hòa với nước theo đúng liều trên nhãn, nên nồng độ khi tới lá đã giảm nhiều lần. Phun vào sáng sớm hoặc chiều mát theo hướng dẫn.",
      },
    ],
  },
  {
    slug: "kson-dr-calcium",
    name: "K-SON Dr. Calcium",
    registeredName: "Phân bón lá Canxibo Plus",
    category: "Phân bón lá trung – vi lượng, dạng lỏng",
    packaging: "Chai 500ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "21818",
    circulationDecision: "431/QĐ-BVTV-PB",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành",
    badges: ["Nhập khẩu Hàn Quốc", "Đã đăng ký lưu hành", "Chai 500ml"],
    quickSpecs: [
      { label: "Canxi", value: "Ca 10%" },
      { label: "Bo", value: "B 11.000 ppm" },
      { label: "Quy cách", value: "500ml" },
    ],
    highlights: [
      "Kết hợp Canxi và Bo trong một sản phẩm",
      "Hàm lượng Bo cao, dạng dễ hấp thu",
      "pH trung tính, an toàn khi phun lá",
      "Hỗ trợ giai đoạn ra hoa – đậu trái",
    ],
    composition: [
      { label: "Canxi (Ca)", value: "10%" },
      { label: "Bo (B)", value: "11.000 ppm" },
      { label: "pH_H₂O", value: "7" },
      { label: "Tỷ trọng", value: "1,5" },
      { label: "Quy cách", value: "Chai 500ml" },
      { label: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
    ],
    benefits: [
      {
        title: "Bổ sung Canxi và Bo dễ hấp thu",
        detail: "Cung cấp đồng thời Canxi và Bo ở dạng cây dễ hấp thu qua lá.",
      },
      {
        title: "Hỗ trợ phát triển hạt phấn, tăng tỷ lệ đậu trái",
        detail:
          "Bo tham gia vào quá trình phát triển hạt phấn, hỗ trợ tăng tỷ lệ đậu trái.",
      },
      {
        title: "Giảm nứt và rụng trái do thiếu Canxi – Bo",
        detail:
          "Bổ sung đầy đủ Canxi và Bo giúp hạn chế hiện tượng nứt trái và rụng trái do thiếu hai dưỡng chất này.",
      },
    ],
    targetCrops: "Theo nhãn đăng ký.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [],
    dosageTable: {
      summary:
        "Pha 2 – 2,5 lít với 320 lít nước, bón cho 1 ha/lần. Phun 3 lần/vụ.",
      headers: ["Lần", "Cây lương thực", "Cây rau"],
      rows: [
        ["Lần 1", "12 ngày sau trồng", "7 ngày sau trồng"],
        ["Lần 2", "22 ngày sau trồng", "15 ngày sau trồng"],
        ["Lần 3", "45 ngày sau trồng", "20 ngày sau trồng"],
      ],
    },
    usageMethod: "Hòa phân bón với nước rồi phun trên lá vào lúc sáng sớm hoặc chiều mát.",
    pesticideNote: "Pha loãng phân bón lá với nước trước khi pha chung với thuốc BVTV. Không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu).",
    usageNotes: [],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
    roleInProgram: "Canxi – Bo, giai đoạn ra hoa và đậu trái",
    form: "long",
    useGroup: "canxi",
    cropTags: [],
    summary: [
      "Canxi 10% kết hợp Bo 11.000 ppm.",
      "Hỗ trợ phát triển hạt phấn, tăng tỷ lệ đậu trái.",
      "pH trung tính, an toàn khi phun lá.",
    ],
    keyComposition: "Ca 10% · B 11.000 ppm",
    image: "/img/kson-dr-calcium-front.png",
    gallery: [
      "/img/kson-dr-calcium-front.png",
      "/img/kson-dr-calcium.png",
    ],
    icon: "/img/ic-apple.png",
    relatedServiceSlug: "quy-trinh-cham-soc",
    faqs: [
      {
        q: "Vì sao Canxi và Bo phải đi cùng nhau?",
        a: "Canxi tham gia cấu tạo vách tế bào, còn Bo hỗ trợ vận chuyển Canxi và phát triển hạt phấn. Bổ sung đồng thời giúp cây tận dụng được cả hai dưỡng chất.",
      },
      {
        q: "Thiếu Bo biểu hiện thế nào trên cây?",
        a: "Thiếu Bo thường ảnh hưởng tới quá trình phát triển hạt phấn và đậu trái, kèm hiện tượng nứt hoặc rụng trái. Kỹ thuật viên sẽ đánh giá cụ thể khi khảo sát vườn.",
      },
      {
        q: "Phun Canxi qua lá có hiệu quả hơn bón gốc không?",
        a: "Phun qua lá giúp bổ sung nhanh vào đúng giai đoạn cây cần. Đây là sản phẩm phân bón lá, dùng theo bảng liều trên nhãn.",
      },
      {
        q: "Có pha chung với phân bón lá khác được không?",
        a: "Khi pha chung với thuốc bảo vệ thực vật, cần pha loãng phân bón lá với nước trước, không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu). Với sản phẩm khác, vui lòng liên hệ đội kỹ thuật.",
      },
    ],
  },
  {
    slug: "kson-starfish",
    name: "K-SON Starfish",
    registeredName: "Phân bón lá AT-Fósforo",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "15025",
    circulationDecision: "646/QĐ-TTTV-PB",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành",
    badges: ["Nhập khẩu Hàn Quốc", "Đã đăng ký lưu hành", "Chai 500ml"],
    quickSpecs: [
      { label: "Canxi", value: "Ca 7,15%" },
      { label: "Đạm tổng số", value: "N 2%" },
      { label: "Quy cách", value: "500ml" },
    ],
    highlights: [
      "Canxi dạng dễ hấp thu qua lá",
      "Kết hợp đạm hỗ trợ phát triển mô",
      "Giúp mô cây cứng cáp hơn",
      "Nhập khẩu nguyên chai từ Hàn Quốc",
    ],
    composition: [
      { label: "Đạm tổng số (N_ts)", value: "2%" },
      { label: "Canxi (Ca)", value: "7,15%" },
      { label: "pH_H₂O", value: "4,9" },
      { label: "Tỷ trọng", value: "1,19" },
      { label: "Quy cách", value: "Chai 500ml" },
      { label: "Hạn sử dụng", value: "36 tháng kể từ ngày sản xuất" },
    ],
    benefits: [
      {
        title: "Bổ sung canxi dễ hấp thu",
        detail: "Cung cấp Canxi ở dạng cây dễ hấp thu qua lá.",
      },
      {
        title: "Hỗ trợ phát triển vách tế bào, giảm nứt và rụng trái",
        detail:
          "Canxi tham gia cấu tạo vách tế bào, giúp hạn chế hiện tượng nứt và rụng trái.",
      },
      {
        title: "Tăng độ cứng cáp mô cây",
        detail: "Kết hợp Canxi và đạm hỗ trợ mô cây phát triển cứng cáp hơn.",
      },
    ],
    targetCrops: "Theo nhãn đăng ký.",
    applicationMethod:
      "Pha loãng với nước rồi phun trực tiếp lên thân, lá. Phun 3 lần/vụ.",
    dosage: [],
    dosageTable: {
      headers: ["Đối tượng cây trồng", "Liều lượng", "Giai đoạn"],
      rows: [
        [
          "Cây lương thực",
          "Pha 20 – 40 ml/bình 8 lít (1 – 2 lít/400 lít nước) phun cho 1 ha",
          "Lần 1: sau gieo 7 – 10 ngày · Lần 2: sau lần 1 là 10 ngày · Lần 3: sau lần 2 là 10 ngày",
        ],
        [
          "Cây rau màu",
          "Pha 10 – 20 ml/bình 8 lít (0,5 – 1 lít/400 lít nước) phun cho 1 ha",
          "Như trên",
        ],
      ],
    },
    usageMethod: "Hòa phân bón với nước rồi phun trên lá vào lúc sáng sớm hoặc chiều mát.",
    pesticideNote: "Pha loãng phân bón lá với nước trước khi pha chung với thuốc BVTV. Không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu).",
    usageNotes: [],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
    roleInProgram: "Canxi kết hợp đạm, hỗ trợ phát triển mô",
    form: "long",
    useGroup: "canxi",
    cropTags: [],
    summary: [
      "Canxi 7,15% kết hợp đạm tổng số 2%.",
      "Hỗ trợ phát triển vách tế bào, giảm nứt và rụng trái.",
      "Tăng độ cứng cáp mô cây.",
    ],
    keyComposition: "Ca 7,15% · N 2%",
    image: "/img/kson-starfish-front.png",
    gallery: [
      "/img/kson-starfish-front.png",
      "/img/kson-starfish.png",
    ],
    icon: "/img/ic-shield-plant.png",
    relatedServiceSlug: "quy-trinh-cham-soc",
    faqs: [
      {
        q: "Canxi qua lá hấp thu nhanh hơn bón gốc ở điểm nào?",
        a: "Phun qua lá đưa dưỡng chất trực tiếp tới bộ phận cần, phù hợp khi muốn bổ sung nhanh vào đúng giai đoạn theo bảng liều trên nhãn.",
      },
      {
        q: "pH 4,9 có ảnh hưởng khi pha chung với sản phẩm khác không?",
        a: "Sản phẩm có tính axit nhẹ. Khi pha chung với thuốc bảo vệ thực vật, cần pha loãng với nước trước và không pha chung với thuốc có tính axit mạnh hoặc thuốc chứa đồng (Cu).",
      },
      {
        q: "Dùng chung với Dr. Calcium được không, khác nhau thế nào?",
        a: "Dr. Calcium có thêm Bo với hàm lượng cao, hỗ trợ giai đoạn ra hoa – đậu trái. Starfish kết hợp Canxi với đạm, hỗ trợ phát triển mô. Vui lòng liên hệ đội kỹ thuật để được tư vấn phối hợp phù hợp với vườn.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

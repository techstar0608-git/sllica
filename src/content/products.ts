/**
 * Dữ liệu sản phẩm K-SON — bản chi tiết do khách hàng cung cấp ngày 25/08/2026,
 * GHI ĐÈ bảng sản phẩm rút gọn trong docs/BRIEF_4_DICH_VU.md theo quyết định của khách.
 *
 * ⚠ CẦN NGUYỄN XUÂN HỮU DUYỆT LẠI — các điểm sau lệch với mục
 * "LƯU Ý TUÂN THỦ" ở cuối brief (khách đã chọn đăng nguyên văn):
 *   • Công bố SiO₂ hữu hiệu (23% / 15%) — brief mục 1 yêu cầu không nêu.
 *   • Công bố CaO thực tế (20% / 17%) — brief mục 3 yêu cầu chỉ ghi "Canxi 20%".
 *   • Sulfur Silicate dùng ngôn ngữ phòng trừ sâu bệnh và từ "hữu cơ" cho sản
 *     phẩm phân bón — brief mục 5 & 6 yêu cầu không dùng.
 */

export type ProductSpec = { label: string; value: string };

export type DosageRow = {
  target: string;
  amount: string;
  timing: string;
};

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
};

export const products: Product[] = [
  {
    slug: "kson-soil-conditioner",
    name: "K-SON Soil Conditioner",
    registeredName: "NSK High Country 2",
    category: "Chất cải tạo đất / Phân bón trung – vi lượng",
    packaging: "Bao 20 kg — nhập khẩu nguyên kiện từ Hàn Quốc. Dạng viên (granule), kích cỡ hạt 3 – 5 mm.",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "28190",
    circulationDecision: "1995/QĐ-BVTV-PB ngày 31/08/2023",
    shelfLife: "3 năm kể từ ngày sản xuất",
    status: "Đã đăng ký lưu hành tại Việt Nam (mã 28190)",
    composition: [
      { label: "Canxi (CaO)", value: "20%" },
      { label: "Magiê (MgO)", value: "1%" },
      { label: "Sắt (Fe)", value: "1.000 ppm" },
      { label: "Công nghệ Alkaline", value: "Có — hỗ trợ điều hòa pH đất" },
      { label: "Kim loại nặng (As, Cd, Hg, Pb)", value: "Không phát hiện" },
    ],
    benefits: [
      {
        title: "Cải tạo đất",
        detail: "Cải thiện cấu trúc đất, tăng khả năng giữ nước và dinh dưỡng.",
      },
      {
        title: "Nâng pH đất",
        detail:
          "Điều hòa pH đất từ từ, bền vững nhờ công nghệ Alkaline, không gây sốc đất như vôi.",
      },
      {
        title: "Kiểm soát kim loại nặng trong đất",
        detail:
          "Sản phẩm sạch tuyệt đối kim loại nặng, hỗ trợ giảm tích lũy kim loại nặng trong đất canh tác.",
      },
      {
        title: "Bổ sung trung lượng cho đất",
        detail:
          "Cung cấp Canxi, Magiê, Sắt — các dưỡng chất trung – vi lượng thiết yếu cho đất trồng.",
      },
      {
        title: "Hỗ trợ hiệu quả phân bón",
        detail: "Tăng hiệu quả sử dụng phân bón NPK khi đất có pH cân bằng.",
      },
    ],
    targetCrops:
      "Đất trồng cần cải tạo: đất chua, đất bạc màu, đất tích lũy kim loại nặng.",
    applicationMethod:
      "Bón vào đất cần cải tạo (rải đều trên bề mặt đất hoặc trộn vào đất trước khi canh tác).",
    dosage: [
      {
        target: "Đất trồng cần cải tạo",
        amount: "200 – 300 kg/ha/lần",
        timing:
          "2 – 3 lần/vụ. Rải đều trên bề mặt đất, tưới nước sau khi bón để sản phẩm ngấm vào đất.",
      },
    ],
    usageNotes: ["Có thể kết hợp với phân NPK và phân hữu cơ."],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.",
    roleInProgram: "Cải tạo đất, nâng pH, bổ sung canxi – magie – sắt",
  },
  {
    slug: "kson-silicate-liquid",
    name: "K-SON Silicate Liquid",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500 ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "33947",
    circulationDecision: "474/QĐ-TTTV-PB ngày 29/05/2026",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký cho cây lúa (mã 33947)",
    composition: [
      { label: "Silic hữu hiệu (SiO₂ hữu hiệu)", value: "23%" },
      { label: "pH (H₂O)", value: "12" },
      { label: "Tỷ trọng", value: "1,4" },
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
        title: "Tăng hiệu quả sử dụng phân bón",
        detail:
          "Trên cây lúa: giúp thân cứng, chống đổ ngã; cải thiện hiệu quả sử dụng đạm, giảm lượng phân đạm cần bón.",
      },
    ],
    targetCrops:
      "Cây lúa (đối tượng chính theo nhãn đăng ký); sầu riêng, cà phê, hồ tiêu và các cây ăn trái khác.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [
      {
        target: "Cây lúa (theo nhãn đăng ký)",
        amount: "2.250 ml / 1.500 lít nước / ha / vụ",
        timing: "Phun 3 lần: 10, 22 và 40 ngày sau sạ",
      },
      {
        target: "Cây ăn trái (sầu riêng, cà phê, hồ tiêu) *",
        amount:
          "Pha loãng tương đương ~1,5 ml/lít nước (khoảng 24 ml/bình 16 lít)",
        timing:
          "Phun định kỳ 15 – 20 ngày/lần, ưu tiên giai đoạn ra lá non và trước cao điểm nắng nóng/khô hạn",
      },
    ],
    dosageNote:
      "(*) Liều dùng cho cây ăn trái là khuyến cáo tham khảo dựa trên tỷ lệ pha loãng tương đương, chưa phải liều đăng ký chính thức trên nhãn cho nhóm cây trồng này.",
    usageNotes: [
      "Phun ướt đều hai mặt lá, vào sáng sớm hoặc chiều mát. Lắc kỹ trước khi dùng.",
    ],
    storage:
      "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Bảo quản 5 – 30°C sau khi mở nắp.",
    roleInProgram: "Dinh dưỡng silicate dạng lỏng",
  },
  {
    slug: "kson-sulfur-silicate-liquid",
    name: "K-SON Sulfur Silicate Liquid",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500 ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    fertilizerCode: "33948",
    circulationDecision: "474/QĐ-TTTV-PB ngày 29/05/2026",
    shelfLife: "36 tháng kể từ ngày sản xuất",
    status: "Đã đăng ký cho cây cà chua (mã 33948)",
    composition: [
      { label: "Lưu huỳnh (S)", value: "16%" },
      { label: "Silic hữu hiệu (SiO₂ hữu hiệu)", value: "15%" },
      { label: "pH (H₂O)", value: "11,6" },
      { label: "Tỷ trọng", value: "1,4" },
    ],
    benefits: [
      {
        title: "Kháng nấm & nhện vượt trội",
        detail:
          "Lưu huỳnh sinh học là hoạt chất diệt nấm và nhện kinh điển, kết hợp Silic tạo hàng rào vật lý bảo vệ bề mặt lá — hỗ trợ phòng trừ thán thư, sương mai, phấn trắng, đạo ôn, rệp, bọ trĩ, nhện đỏ, ruồi trắng...",
      },
      {
        title: "Tăng hương vị đặc trưng của trái",
        detail:
          "Lưu huỳnh tham gia tạo các hợp chất sulfide tự nhiên trong trái, góp phần tăng hương vị đặc trưng của sầu riêng.",
      },
      {
        title: "Hữu cơ, không dư lượng thuốc BVTV",
        detail:
          "Không liên quan đến PLS (Pesticide Registration Scheme), an toàn cho người sử dụng và không ảnh hưởng thiên địch có lợi trong vườn.",
      },
      {
        title: "Dùng được đa cây trồng",
        detail:
          "Phù hợp cho lúa, ớt, dưa chuột, dưa lê, cải thảo, dâu tây, cà chua, xoài, nhãn, sầu riêng, cà phê, hồ tiêu...",
      },
    ],
    targetCrops:
      "Cà chua (đối tượng chính theo nhãn đăng ký); sầu riêng, cà phê, hồ tiêu, lúa và nhiều loại cây ăn trái, rau màu khác.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [
      {
        target: "Cà chua trên đất đỏ vàng (theo nhãn đăng ký)",
        amount: "4,8 lít / 3.200 lít nước / ha / vụ",
        timing: "Phun 4 lần, mỗi lần 1,2 lít / 800 lít nước / ha",
      },
      {
        target: "Cây ăn trái, rau màu khác *",
        amount: "Pha loãng ~1.000 lần (khoảng 20 ml / bình 16 – 20 lít nước)",
        timing:
          "Phòng ngừa: phun định kỳ 5 – 7 ngày/lần. Đang có bệnh: phun 2 – 3 lần liên tiếp",
      },
    ],
    dosageNote:
      "(*) Liều dùng cho nhóm cây trồng ngoài cà chua là khuyến cáo tham khảo theo tỷ lệ pha loãng tương đương, chưa phải liều đăng ký chính thức trên nhãn cho từng loại cây.",
    usageNotes: [
      "Phun ướt đều lá trên và lá dưới. Tránh phun khi nhiệt độ trên 30°C hoặc dưới nắng gắt.",
      "Phun 2 lần nồng độ thấp hiệu quả hơn 1 lần nồng độ cao.",
      "Lắc kỹ trước khi dùng. Ngưng phun trước thu hoạch theo thời gian cách ly khuyến cáo trên nhãn.",
    ],
    storage:
      "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Bảo quản 5 – 30°C sau khi mở nắp.",
    roleInProgram: "Dinh dưỡng silicate có lưu huỳnh nguyên tố S⁰",
  },
  {
    slug: "kson-dr-calcium",
    name: "K-SON Dr. Calcium",
    line: "Dòng sản phẩm Canxi + Bo",
    category: "Phân bón lá trung – vi lượng, dạng lỏng",
    packaging: "Chai 500 ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    shelfLife: "Theo công bố trên nhãn phụ",
    status: "Đang hoàn tất đăng ký",
    composition: [
      { label: "Canxi (CaO)", value: "17%" },
      { label: "Bo (B)", value: "4,5%" },
    ],
    benefits: [
      {
        title: "Chắc cùi, chống nứt trái",
        detail:
          "Canxi gia cố vách tế bào, Bo là chất kết nối pectin — giúp cùi/thịt trái chắc, hạn chế nứt trái.",
      },
      {
        title: "Giảm sượng cơm, cải thiện chất lượng cùi",
        detail:
          "Bo có vai trò vận chuyển tinh bột từ lá vào trái; thiếu Bo khiến tinh bột tích lũy ở lá thay vì vào cùi, gây hiện tượng sượng. Bổ sung Ca–Bo đúng giai đoạn giúp cải thiện chất lượng cùi.",
      },
      {
        title: "Tăng đậu trái, giảm rụng trái non",
        detail:
          "Bo hỗ trợ sức sống hạt phấn và quá trình thụ phấn, giúp tăng tỷ lệ đậu trái và giảm rụng trái non.",
      },
    ],
    targetCrops:
      "Sầu riêng, cây ăn trái (xoài, nhãn, chôm chôm, cam, bưởi...), cà phê, hồ tiêu.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [
      {
        target: "Trước và đầu giai đoạn ra hoa",
        amount: "1 chai 500 ml / 400 lít nước (~20 – 30 ml / bình 16 lít)",
        timing: "Kích thích phân hóa mầm hoa, tăng sức sống hạt phấn",
      },
      {
        target: "Sau đậu trái non",
        amount: "Liều tương tự",
        timing:
          "Phun cách 10 – 15 ngày/lần. Giữ trái, giảm rụng sinh lý, củng cố vỏ trái non",
      },
      {
        target: "Giai đoạn phát triển trái",
        amount: "Liều tương tự",
        timing:
          "Phun cách 10 – 15 ngày/lần. Chắc cùi, chống nứt trái, giảm sượng cơm",
      },
    ],
    dosageNote:
      "Sản phẩm chưa có số liệu hướng dẫn sử dụng chính thức từ nhãn phụ Saturn Bio Tech / Silica. Liều lượng trên là đề xuất tham khảo, xây dựng dựa trên nghiên cứu khoa học về vai trò Canxi–Bo và tỷ lệ pha loãng phổ biến của các sản phẩm Canxi–Bo dạng lỏng cùng phân khúc trên thị trường Việt Nam. Cần xác nhận chính thức với Saturn Bio Tech trước khi in nhãn phụ hoặc công bố cố định trên Shopee/website.",
    usageNotes: [
      "Phun ướt đều tán, ưu tiên mặt lá non và chùm hoa/trái non. Phun vào sáng sớm hoặc chiều mát.",
      "Không pha chung với phân lân/MKP hoặc các sản phẩm có tính kiềm mạnh; nên luân phiên cách 3 – 5 ngày.",
      "Không lạm dụng vào cuối giai đoạn nuôi trái nếu cây đã đủ Canxi và trái đã cứng vỏ.",
    ],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
    roleInProgram: "Canxi – Bo, giai đoạn đậu trái đến ~60 ngày sau đậu",
  },
  {
    slug: "kson-star-fish",
    name: "K-SON Star Fish",
    line: "Dòng sản phẩm Canxi đơn",
    category: "Phân bón lá trung lượng, dạng lỏng",
    packaging: "Chai 500 ml",
    origin: "Saturn Bio Tech Co., Ltd. — Hàn Quốc",
    shelfLife: "Theo công bố trên nhãn phụ",
    status: "Đang hoàn tất đăng ký",
    composition: [{ label: "Canxi (CaO)", value: "17%" }],
    benefits: [
      {
        title: "Chắc trái, chống nứt trái",
        detail:
          "Canxi là thành phần chính của pectin trong vách tế bào, giúp vách tế bào cứng chắc, hạn chế nứt trái, thối trái.",
      },
      {
        title: "Tăng khả năng bảo quản sau thu hoạch",
        detail:
          "Bổ sung Canxi giúp trái chắc, kéo dài thời gian bảo quản sau thu hoạch.",
      },
      {
        title: "Lựa chọn Canxi đơn, linh hoạt",
        detail:
          "Không chứa Bo, phù hợp cho các giai đoạn không cần bổ sung Bo hoặc khi muốn bổ sung Canxi với tần suất linh hoạt hơn (Bo dễ gây ngộ độc nếu dùng lặp lại liều cao, trong khi Canxi đơn an toàn hơn khi lặp lại).",
      },
    ],
    targetCrops:
      "Sầu riêng, cây ăn trái, cây công nghiệp (cà phê, hồ tiêu), lúa và rau màu.",
    applicationMethod: "Bón lá (phun qua lá).",
    dosage: [
      {
        target: "Giai đoạn nuôi trái",
        amount: "1 chai 500 ml / 400 lít nước (~20 – 30 ml / bình 16 lít)",
        timing:
          "Phun cách 10 – 15 ngày/lần. Chắc trái, chống nứt, tăng khối lượng trái",
      },
      {
        target: "Sau thu hoạch",
        amount: "Liều tương tự",
        timing: "Phun 1 – 2 lần. Phục hồi cây, chuẩn bị cho vụ tiếp theo",
      },
    ],
    dosageNote:
      "Sản phẩm chưa có số liệu hướng dẫn sử dụng chính thức từ nhãn phụ Saturn Bio Tech / Silica. Liều lượng trên là đề xuất tham khảo, xây dựng dựa trên nghiên cứu khoa học về vai trò Canxi và tỷ lệ pha loãng phổ biến của các sản phẩm Canxi dạng lỏng cùng phân khúc trên thị trường Việt Nam. Cần xác nhận chính thức với Saturn Bio Tech trước khi in nhãn phụ hoặc công bố cố định trên Shopee/website.",
    usageNotes: [
      "Phun ướt đều tán, vào sáng sớm hoặc chiều mát. Lắc kỹ trước khi dùng.",
      "Có thể kết hợp với hầu hết các loại phân bón lá và thuốc bảo vệ thực vật khác (trừ sản phẩm có tính kiềm mạnh).",
    ],
    storage: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
    roleInProgram: "Canxi giai đoạn nuôi trái về sau",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

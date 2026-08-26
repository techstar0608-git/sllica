import type { Service } from "./types";

/**
 * Nội dung lấy nguyên văn từ docs/BRIEF_4_DICH_VU.md (duyệt 24/08/2026 — Nguyễn Xuân Hữu).
 * Không tự biên tập lại câu chữ: brief đã qua duyệt nội dung và ràng buộc bởi
 * mục "LƯU Ý TUÂN THỦ" ở cuối tài liệu.
 */
export const services: Service[] = [
  {
    slug: "suc-khoe-dat",
    navName: "Chương trình Sức khoẻ đất",
    title: "Chương trình Sức khoẻ đất cho vườn sầu riêng",
    tagline:
      "Biết chính xác đất vườn mình đang thiếu gì, thừa gì — trước khi bón thêm một bao phân nào.",
    subline:
      "Lấy mẫu – phân tích tại phòng thí nghiệm – đọc kết quả cùng chủ vườn – cải tạo theo đúng chỉ số của vườn.",
    cardSummary:
      "Phân tích đất tại phòng thí nghiệm, đọc kết quả cùng chủ vườn và cải tạo theo đúng chỉ số của vườn.",
    icon: "/img/ic-soil.png",
    heroImage: "/img/science.png",
    problems: [
      "Đất bazan thâm canh sầu riêng nhiều năm bị chua dần, chai cứng, bón phân nhiều nhưng cây hấp thu kém.",
      "Rễ tơ ít, cây suy sau thu hoạch, nấm bệnh trong đất ngày càng khó trị.",
      "Cadimi (Cd) tồn dư trong đất là rủi ro lớn nhất của ngành sầu riêng hiện nay: Trung Quốc chỉ chấp nhận dư lượng dưới 0,05 mg/kg, vượt ngưỡng là cả lô hàng bị chặn tại cửa khẩu. Đây là vấn đề đến từ đất, không phải do nhà vườn cố ý.",
      "Hầu hết nhà vườn chưa từng có một kết quả phân tích đất nào của chính vườn mình. Mọi quyết định bón phân đều dựa trên kinh nghiệm và lời khuyên của người bán.",
    ],
    taskGroups: [
      {
        title: "Bước khảo sát & lấy mẫu",
        items: [
          "Khảo sát thực địa: địa hình, thoát nước, tình trạng gốc rễ, tán lá, ghi nhận bằng hình ảnh.",
          "Đo nhanh tại vườn: pH và EC tại 3 – 5 điểm đại diện, có mặt chủ vườn.",
          "Lấy mẫu đất tổ hợp theo đúng kỹ thuật: 5 – 7 điểm/ha, tầng 0 – 30 cm (tầng rễ hoạt động), lấy theo hình chiếu tán, có định vị GPS từng điểm để lần sau lấy đúng chỗ cũ.",
          "Lấy mẫu tầng 30 – 60 cm, mẫu lá, mẫu nước tưới khi cần đánh giá sâu hơn.",
        ],
      },
      {
        title: "Phân tích tại phòng thí nghiệm",
        items: [
          "Nhóm chỉ tiêu nền: pH (H₂O và KCl), EC, chất hữu cơ (OM), CEC — khả năng giữ dinh dưỡng của đất.",
          "Nhóm dinh dưỡng: đạm – lân – kali dễ tiêu, canxi, magie, lưu huỳnh.",
          "Nhóm vi lượng: sắt, kẽm, mangan, đồng, bo.",
          "Nhóm an toàn: kim loại nặng Cd, Pb, As, Hg trong đất.",
          "Tuỳ chọn thêm: mật độ tuyến trùng, vi sinh vật đất, chất lượng nước tưới.",
        ],
      },
      {
        title: "Đọc kết quả & lập phác đồ cải tạo",
        items: [
          "Báo cáo sức khoẻ đất riêng cho vườn: mỗi chỉ số so với ngưỡng tối ưu của sầu riêng, đánh dấu Đạt / Cảnh báo / Cần xử lý.",
          "Bản đồ phân vùng đất trong vườn nếu vườn lớn và không đồng nhất.",
          "Giải thích trực tiếp cho chủ vườn — không chỉ gửi file. Kỹ thuật viên ngồi tại vườn giải thích từng chỉ số bằng ngôn ngữ nhà vườn.",
          "Phác đồ cải tạo 12 tháng: bón gì, bao nhiêu, thời điểm nào, kết hợp với phân đang dùng ra sao.",
        ],
      },
      {
        title: "Thực hiện cải tạo",
        items: [
          "Cung cấp K-SON Soil Conditioner — chất cải tạo đất nhập khẩu nguyên kiện từ Hàn Quốc (Saturn Bio Tech, Gangwon), dạng hạt 3 – 5 mm, bao 20 kg.",
          "Thành phần công bố: Canxi 20%, Magie 1%, Sắt 1.000 ppm, cùng thành phần Alkaline điều hoà pH.",
          "Kết quả kiểm nghiệm: không phát hiện Cd, Pb, As, Hg trong sản phẩm.",
          "Liều khuyến cáo cho sầu riêng: 4 kg/gốc/vụ, chia 2 – 3 lần bón, rải theo hình chiếu tán, bón xa gốc.",
          "Hướng dẫn kết hợp với phân hữu cơ, vi sinh và NPK hiện tại của vườn — không bắt chủ vườn bỏ quy trình đang dùng.",
        ],
      },
      {
        title: "Theo dõi & tái kiểm",
        items: [
          "Đo pH nhanh tại vườn ở mỗi lần thăm vườn định kỳ.",
          "Phân tích lại toàn bộ chỉ tiêu sau 6 – 12 tháng, so sánh với lần đầu bằng biểu đồ.",
          "Điều chỉnh phác đồ theo kết quả thực tế.",
        ],
      },
    ],
    mechanism: {
      kind: "steps",
      data: {
        title: "Vì sao cải tạo đất lại giảm được Cadimi",
        steps: [
          "Đất chua (pH thấp) làm kim loại nặng ở dạng hoà tan — rễ hút được dễ dàng.",
          "Thành phần Alkaline và Canxi trong K-SON nâng pH đất lên từ từ, bền hơn bón vôi.",
          "Khi pH tăng, Cadimi và các kim loại nặng chuyển sang dạng kết tủa khó tan, đồng thời bị hấp phụ và giữ chặt trên bề mặt hạt đất.",
          "Kim loại nặng bị “khoá” lại trong đất → giảm lượng đi vào rễ, thân, trái.",
        ],
        note: "Cơ chế này được ghi nhận trong nhiều nghiên cứu quốc tế đã công bố (Scientific Reports – Nature, 2017 & 2024) và cũng là hướng cải tạo mà cơ quan chuyên môn trong nước đang khuyến nghị cho vùng trồng nguy cơ cao: nâng pH và điều chỉnh chế độ dinh dưỡng để giảm khả năng hấp thu Cadimi của cây.",
      },
    },
    deliverables: [
      "Phiếu kết quả phân tích đất từ phòng thí nghiệm (bản gốc).",
      "Báo cáo sức khoẻ đất của vườn, bản in màu + bản mềm gửi Zalo.",
      "Phác đồ cải tạo 12 tháng, in khổ lớn để treo tại vườn.",
      "Buổi giải thích kết quả trực tiếp tại vườn.",
      "Báo cáo so sánh sau kỳ tái kiểm.",
    ],
    productSlugs: ["kson-soil-conditioner"],
    products: {
      caption: "Sản phẩm dùng trong chương trình",
      headers: ["Sản phẩm", "Vai trò", "Trạng thái"],
      rows: [
        [
          "K-SON Soil Conditioner",
          "Cải tạo đất, nâng pH, bổ sung canxi – magie – sắt. Dạng hạt 3 – 5 mm, bao 20 kg. Liều khuyến cáo cho sầu riêng: 4 kg/gốc/vụ.",
          "Đã đăng ký lưu hành",
        ],
      ],
      note: "Thành phần công bố: Canxi 20%, Magie 1%, Sắt 1.000 ppm, cùng thành phần Alkaline điều hoà pH. Kết quả kiểm nghiệm: không phát hiện Cd, Pb, As, Hg trong sản phẩm.",
    },
    commitment: {
      does: [
        "Lấy mẫu đúng kỹ thuật, phân tích tại phòng thí nghiệm độc lập, trả kết quả trung thực kể cả khi kết quả cho thấy vườn không cần mua sản phẩm của Silica.",
      ],
      doesNot: [
        "Một con số Cadimi cụ thể trên trái sau cải tạo. Cải tạo đất là quá trình cần thời gian và phụ thuộc mức tồn dư ban đầu, chế độ nước, phân bón và thuốc mà vườn sử dụng.",
      ],
    },
    faqs: [
      {
        q: "Lấy mẫu có làm ảnh hưởng đến cây không?",
        a: "Không, chỉ lấy lớp đất mặt bằng khoan tay tại vùng hình chiếu tán.",
      },
      {
        q: "Bao lâu có kết quả?",
        a: "Thông thường 7 – 10 ngày làm việc kể từ khi gửi mẫu.",
      },
      {
        q: "Vườn tôi bón vôi hằng năm rồi, còn cần không?",
        a: "Vôi nâng pH nhanh nhưng hết tác dụng nhanh, dễ làm đất chai và mất kali. Cần đọc kết quả phân tích rồi mới quyết định.",
      },
      {
        q: "Chi phí bao nhiêu?",
        a: "Tính theo diện tích và số chỉ tiêu phân tích. Liên hệ để nhận báo giá theo vườn.",
      },
      {
        q: "Vườn tôi bán nội địa, không xuất khẩu thì có cần không?",
        a: "Cần, vì phần lớn lợi ích là năng suất và chất lượng cơm, kiểm soát kim loại nặng chỉ là một phần.",
      },
    ],
    seoKeywords: [
      "cải tạo đất sầu riêng",
      "pH đất trồng sầu riêng",
      "phân tích đất sầu riêng Đắk Lắk",
      "xử lý cadimi trong đất sầu riêng",
      "chất cải tạo đất nhập khẩu Hàn Quốc",
    ],
  },
  {
    slug: "quy-trinh-cham-soc",
    navName: "Quy trình & kỹ thuật chăm sóc",
    title:
      "Quy trình chăm sóc sầu riêng theo từng giai đoạn — thiết kế riêng cho vườn của bạn",
    tagline:
      "Một tấm lịch treo tại vườn. Công nhân nhìn vào là biết hôm nay làm gì.",
    cardSummary:
      "Lịch canh tác cả vụ xây riêng cho vườn, chia theo 6 giai đoạn, kèm thăm vườn định kỳ và hỗ trợ qua Zalo.",
    icon: "/img/ic-magleaf.png",
    heroImage: "/img/veggies.png",
    problems: [
      "Mỗi người tư vấn một kiểu, mỗi đại lý bán một bộ sản phẩm khác nhau, chủ vườn không biết nghe ai.",
      "Quy trình sao chép từ vườn khác, từ vùng khác — trong khi đất, giống, tuổi cây và thời tiết mỗi nơi mỗi khác.",
      "Cây suy sau thu hoạch, cơi đọt ra không kiểm soát, xử lý ra hoa không đồng loạt.",
      "Trái bị sượng nước, cháy múi — thường là hậu quả của việc bón sai loại, sai thời điểm, chứ không phải thiếu phân.",
      "Chủ vườn đi vắng là công nhân không biết làm gì.",
    ],
    taskGroups: [
      {
        title: "Xây quy trình riêng cho vườn",
        items: [
          "Căn cứ đầu vào: kết quả khảo sát vườn, kết quả phân tích đất, giống, tuổi cây, mật độ, hệ thống tưới, ngày thu hoạch vụ vừa rồi và ngày thu hoạch mục tiêu vụ tới.",
          "Chia toàn bộ chu kỳ 300 – 360 ngày thành 6 giai đoạn, mỗi giai đoạn có mục tiêu sinh lý riêng.",
          "Với mỗi giai đoạn, quy trình ghi rõ: làm gì, bón/phun gì, liều lượng, thời điểm, dấu hiệu nhận biết trên cây để biết đã sang giai đoạn kế tiếp.",
          "Quản lý nước tưới theo giai đoạn — riêng khâu siết nước tạo khô hạn và khâu tưới lại sau đậu trái được hướng dẫn chi tiết vì đây là hai thời điểm dễ hỏng cả vụ nhất.",
        ],
      },
      {
        title: "Thăm vườn định kỳ",
        items: [
          "Giai đoạn nhạy cảm (xử lý ra hoa, xổ nhuỵ, 45 ngày đầu nuôi trái): 2 tuần/lần.",
          "Giai đoạn còn lại: 1 tháng/lần.",
          "Mỗi lần thăm: đo pH/EC tại vườn, kiểm tra rễ tơ, đánh giá bộ lá và tình hình sinh vật gây hại, chụp ảnh, ghi biên bản thăm vườn, điều chỉnh lịch nếu cần.",
        ],
      },
      {
        title: "Hỗ trợ liên tục giữa các lần thăm",
        items: [
          "Nhóm Zalo kỹ thuật riêng cho từng vườn, có kỹ thuật viên phụ trách.",
          "Chủ vườn chụp ảnh gửi vào nhóm, nhận phản hồi trong ngày làm việc.",
          "Cảnh báo chủ động khi có mưa trái mùa, thay đổi thời tiết bất thường trong khu vực.",
        ],
      },
      {
        title: "Chuẩn hoá cho người làm",
        items: [
          "Tập huấn tại vườn cho chủ vườn và công nhân: cách bón đúng vị trí, cách pha, cách nhận biết giai đoạn.",
          "Thiết lập sổ nhật ký canh tác — đây cũng chính là hồ sơ bắt buộc cho mã số vùng trồng.",
        ],
      },
    ],
    mechanism: {
      kind: "table",
      data: {
        caption: "6 giai đoạn của một chu kỳ 300 – 360 ngày",
        headers: ["Giai đoạn", "Thời gian tham chiếu", "Mục tiêu chính"],
        rows: [
          [
            "1. Sau thu hoạch – phục hồi",
            "Ngay sau thu hoạch",
            "Phục hồi rễ, phục hồi tán, cải tạo đất",
          ],
          [
            "2. Làm cơi đọt – tạo mầm hoa",
            "Trước xử lý ra hoa",
            "Đủ số cơi đọt, lá thành thục",
          ],
          ["3. Xử lý ra hoa", "~30 ngày tạo khô hạn", "Ra mắt cua đồng loạt"],
          [
            "4. Mắt cua → xổ nhuỵ → đậu trái",
            "~70 ngày",
            "Đậu trái tốt, hạn chế rụng",
          ],
          [
            "5. Nuôi trái",
            "~130 ngày, chia 3 kỳ",
            "Trái lớn đều, chắc cơm, không sượng",
          ],
          [
            "6. Trước thu hoạch & thu hoạch",
            "3 – 4 tuần cuối",
            "Lên cơm, lên màu, đảm bảo thời gian cách ly",
          ],
        ],
      },
    },
    deliverables: [
      "Lịch canh tác cả vụ, in khổ A2, treo tại chòi vườn.",
      "Bản mềm trên Google Sheet, cập nhật được, chia sẻ cho người nhà và công nhân.",
      "Biên bản thăm vườn mỗi lần, kèm ảnh.",
      "Nhóm Zalo kỹ thuật riêng.",
      "Sổ nhật ký canh tác (bản giấy + bản số).",
      "Buổi tập huấn tại vườn.",
    ],
    productSlugs: [
      "kson-soil-conditioner",
      "kson-silicate-liquid",
      "kson-sulfur-silicate",
      "kson-dr-calcium",
      "kson-starfish",
    ],
    products: {
      caption: "Sản phẩm K-SON dùng trong quy trình",
      headers: ["Sản phẩm", "Vai trò trong quy trình", "Trạng thái"],
      rows: [
        [
          "K-SON Soil Conditioner",
          "Cải tạo đất, bổ sung canxi – magie – sắt",
          "Đã đăng ký lưu hành",
        ],
        [
          "K-SON Silicate Liquid",
          "Dinh dưỡng silicate dạng lỏng",
          "Đã đăng ký lưu hành",
        ],
        [
          "K-SON Sulfur Silicate",
          "Dinh dưỡng silicate có lưu huỳnh đơn chất S⁰",
          "Đã đăng ký lưu hành",
        ],
        [
          "K-SON Dr. Calcium (Ca–B)",
          "Canxi – Bo, giai đoạn ra hoa và đậu trái",
          "Đã đăng ký lưu hành",
        ],
        [
          "K-SON Starfish (Ca)",
          "Canxi kết hợp đạm, hỗ trợ phát triển mô",
          "Đã đăng ký lưu hành",
        ],
      ],
      note: "Quy trình của Silica không bắt buộc chủ vườn thay toàn bộ vật tư đang dùng. Silica xây quy trình trên nền vật tư hiện có của vườn và chỉ bổ sung ở những khâu còn thiếu.",
    },
    commitment: {
      does: [
        "Quy trình được điều chỉnh trong vụ khi điều kiện thực tế thay đổi.",
        "Quy trình là khuyến cáo kỹ thuật. Quyền quyết định cuối cùng thuộc về chủ vườn.",
      ],
      doesNot: [
        "Một con số năng suất cụ thể — kết quả phụ thuộc thời tiết, tình trạng cây và mức độ thực hiện đúng quy trình.",
      ],
    },
    faqs: [
      {
        q: "Tôi đang theo quy trình của một kỹ sư khác, có xung đột không?",
        a: "Silica sẽ rà soát quy trình hiện tại trước, chỉ điều chỉnh phần chưa phù hợp.",
      },
      {
        q: "Vườn tôi nhỏ, 100 cây, có làm không?",
        a: "Có, quy trình được xây theo quy mô vườn.",
      },
      {
        q: "Nếu tôi không mua sản phẩm K-SON thì có được tư vấn không?",
        a: "Có. Dịch vụ quy trình và việc mua vật tư là hai việc tách bạch.",
      },
      {
        q: "Bao lâu thấy khác biệt?",
        a: "Bộ lá và rễ thường thấy chuyển biến trong 2 – 3 tháng. Chất lượng cơm phải chờ hết một vụ mới đánh giá được.",
      },
    ],
    seoKeywords: [
      "quy trình chăm sóc sầu riêng",
      "lịch bón phân sầu riêng theo giai đoạn",
      "xử lý ra hoa sầu riêng",
      "chống sượng nước sầu riêng",
      "kỹ thuật nuôi trái sầu riêng",
    ],
  },
  {
    slug: "quan-ly-thuoc-bvtv",
    navName: "Quy trình & danh mục thuốc BVTV",
    title: "Kiểm soát thuốc bảo vệ thực vật — giữ vườn sạch, giữ mã số vùng trồng",
    tagline:
      "Chỉ cần một loại thuốc ngoài danh mục là mất mã số vùng trồng. Chúng tôi rà soát toàn bộ vật tư vườn bạn đang dùng.",
    cardSummary:
      "Rà soát toàn bộ vật tư BVTV vườn đang dùng, lập danh mục trắng – đỏ và lịch phòng trừ theo giai đoạn.",
    icon: "/img/ic-spray.png",
    heroImage: "/img/ic-shield-plant.png",
    problems: [
      "Theo Nghị định 38/2026/NĐ-CP, vùng trồng sử dụng hoá chất cấm hoặc thuốc BVTV không có trong Danh mục được phép sử dụng tại Việt Nam sẽ bị thu hồi mã số vùng trồng.",
      "Từ tháng 1/2025 đến tháng 5/2026, hơn 400 mã vùng trồng sầu riêng bị Trung Quốc cảnh báo vi phạm, trong đó 167 mã đã bị đình chỉ.",
      "Chất Vàng O bị cấm tuyệt đối. Cadimi phải dưới 0,05 mg/kg. Phát hiện là chặn nguyên lô tại cửa khẩu.",
      "Nhiều nhà vườn pha 5 – 7 loại trong một bình, không biết loại nào trùng hoạt chất, không biết thời gian cách ly, chi phí thuốc cao mà sâu bệnh vẫn tái đi tái lại vì kháng thuốc.",
    ],
    taskGroups: [
      {
        title: "Rà soát hiện trạng",
        items: [
          "Kiểm kê toàn bộ vật tư BVTV vườn đang dùng và còn tồn kho: chụp nhãn, ghi hoạt chất, ghi hàm lượng.",
          "Đối chiếu từng sản phẩm với Danh mục thuốc BVTV được phép sử dụng tại Việt Nam đang có hiệu lực.",
          "Đối chiếu tiếp với yêu cầu của thị trường đích (Trung Quốc là chủ yếu; EU, Nhật, Hàn nếu vườn có định hướng).",
          "Kết quả: bảng phân loại 3 nhóm — Dùng được / Hạn chế, cần cân nhắc / Loại bỏ ngay.",
        ],
      },
      {
        title: "Xây danh mục và lịch phòng trừ",
        items: [
          "Danh mục trắng cho vườn: các hoạt chất được phép, ghi rõ đối tượng phòng trừ, liều, cách pha, thời gian cách ly (PHI).",
          "Danh mục đỏ: hoạt chất cấm, hoạt chất bị thị trường đích cảnh báo, hoạt chất không có trong danh mục Việt Nam.",
          "Lịch phòng trừ theo giai đoạn sinh trưởng, gắn với quy trình chăm sóc.",
          "Ngưỡng hành động theo nguyên tắc IPM: chỉ phun khi mật độ sinh vật gây hại vượt ngưỡng, không phun theo lịch cố định.",
          "Bảng luân phiên hoạt chất theo nhóm cơ chế tác động để hạn chế kháng thuốc.",
          "Tính ngược thời gian cách ly từ ngày dự kiến thu hoạch — lập mốc “ngày dừng phun” và dán trên lịch canh tác.",
        ],
      },
      {
        title: "Hướng dẫn thực hành",
        items: [
          "Hướng dẫn pha đúng nồng độ, đúng thứ tự, các cặp không được pha chung.",
          "Hiệu chỉnh máy phun, lượng nước phun trên mỗi cây theo tuổi cây và tán.",
          "An toàn lao động: bảo hộ, thời điểm phun, cách ly người và vật nuôi.",
          "Thu gom và xử lý bao gói thuốc BVTV sau sử dụng đúng quy định.",
        ],
      },
      {
        title: "Ghi chép & kiểm nghiệm",
        items: [
          "Thiết lập nhật ký sử dụng thuốc BVTV: ngày phun, hoạt chất, liều, người phun, đối tượng phòng trừ, thời gian cách ly. Đây là hồ sơ bắt buộc khi cơ quan chức năng hậu kiểm mã số vùng trồng.",
          "Hỗ trợ chủ vườn lấy mẫu và gửi kiểm nghiệm trước khi thu hoạch: Cadimi, Vàng O và dư lượng thuốc BVTV, tại các phòng kiểm nghiệm được Tổng cục Hải quan Trung Quốc (GACC) chấp nhận.",
          "Đọc kết quả kiểm nghiệm và tư vấn hướng xử lý nếu có chỉ tiêu chưa đạt.",
        ],
      },
    ],
    mechanism: {
      kind: "steps",
      data: {
        title: "Rà soát vật tư — phân loại 3 nhóm",
        steps: [
          "Dùng được — hoạt chất nằm trong danh mục Việt Nam và được thị trường đích chấp nhận.",
          "Hạn chế, cần cân nhắc — còn được phép nhưng có rủi ro dư lượng hoặc bị thị trường đích cảnh báo.",
          "Loại bỏ ngay — hoạt chất cấm, hoặc không có trong Danh mục được phép sử dụng tại Việt Nam.",
        ],
      },
    },
    highlight:
      "Kiểm nghiệm từ gốc — tức là kiểm trên vườn trước khi cắt, thay vì đợi hàng đã lên container mới kiểm. Đây cũng là khuyến cáo của Cục Trồng trọt và Bảo vệ thực vật, và là cách duy nhất để tránh mất trắng cả lô hàng.",
    deliverables: [
      "Bảng rà soát vật tư hiện có, phân loại 3 nhóm.",
      "Danh mục thuốc BVTV khuyến nghị riêng cho vườn, in khổ lớn treo tại kho vật tư.",
      "Lịch phòng trừ theo giai đoạn, có mốc ngày dừng phun trước thu hoạch.",
      "Sổ nhật ký sử dụng thuốc BVTV.",
      "Kết quả kiểm nghiệm trước thu hoạch (nếu chọn gói có kiểm nghiệm).",
    ],
    commitment: {
      does: [
        "Cung cấp dịch vụ tư vấn kỹ thuật và kiểm soát tuân thủ. Silica không kinh doanh thuốc bảo vệ thực vật và không hưởng hoa hồng từ hãng thuốc nào — điều này bảo đảm khuyến nghị là khách quan.",
        "Cập nhật Danh mục thuốc BVTV được phép sử dụng tại Việt Nam cho khách hàng đang trong hợp đồng dịch vụ, vì danh mục thay đổi theo từng năm.",
      ],
      doesNot: [
        "Việc mua thuốc do chủ vườn thực hiện tại cửa hàng vật tư có đủ điều kiện kinh doanh.",
        "Kết quả kiểm nghiệm phản ánh tình trạng mẫu tại thời điểm lấy mẫu, không thay thế kiểm nghiệm lô hàng xuất khẩu.",
      ],
    },
    faqs: [
      {
        q: "Tôi đang dùng thuốc mua ở đại lý quen, có phải bỏ hết không?",
        a: "Không. Phần lớn sản phẩm trên thị trường nằm trong danh mục cho phép. Chỉ loại bỏ những gì thực sự có vấn đề.",
      },
      {
        q: "Kiểm nghiệm trước thu hoạch tốn bao nhiêu và mất bao lâu?",
        a: "Tuỳ chỉ tiêu và phòng kiểm nghiệm; thường vài ngày làm việc. Silica hỗ trợ đặt lịch và gửi mẫu.",
      },
      {
        q: "Vườn tôi chưa có mã số vùng trồng thì có cần dịch vụ này không?",
        a: "Cần, vì đây là điều kiện để sau này xin được mã, và để trái bán được giá tốt hơn.",
      },
      {
        q: "Nếu kết quả Cadimi vượt ngưỡng thì sao?",
        a: "Chuyển sang Chương trình Sức khoẻ đất để xử lý gốc rễ vấn đề, đồng thời điều chỉnh chế độ dinh dưỡng để giảm hấp thu.",
      },
    ],
    seoKeywords: [
      "danh mục thuốc BVTV sầu riêng",
      "thời gian cách ly thuốc sầu riêng",
      "dư lượng thuốc sầu riêng xuất khẩu",
      "kiểm nghiệm cadimi vàng O sầu riêng",
      "mất mã số vùng trồng do thuốc BVTV",
    ],
  },
  {
    slug: "ma-so-vung-trong",
    navName: "Xây dựng hồ sơ mã số vùng trồng",
    title: "Xây dựng hồ sơ mã số vùng trồng cho vườn sầu riêng",
    tagline:
      "Tấm hộ chiếu để trái sầu riêng của bạn đi chính ngạch — và giữ được nó qua mỗi lần hậu kiểm.",
    cardSummary:
      "Chuẩn bị điều kiện vườn, hồ sơ và hệ thống ghi chép để xin cấp — và giữ được — mã số vùng trồng.",
    icon: "/img/ic-safety.png",
    heroImage: "/img/ic-shield.png",
    problems: [
      "Mã số vùng trồng là điều kiện bắt buộc để xuất khẩu chính ngạch. Không có mã, trái chỉ bán được cho thương lái với giá thấp hơn.",
      "Quy định đã thay đổi từ 01/8/2026. Nghị quyết 36/2026/NQ-CP (ban hành 31/7/2026, điều chỉnh Nghị định 38/2026/NĐ-CP) đơn giản hoá mạnh thủ tục: nộp hồ sơ tại UBND cấp xã nơi có vùng trồng, làm toàn trình trên Cổng Dịch vụ công Quốc gia; mã số gắn với mã định danh thửa đất; nguyên tắc tự kê khai, tự chịu trách nhiệm; thời gian cấp không quá 3 ngày làm việc với vùng trồng không đăng ký xuất khẩu và không quá 10 ngày làm việc với trường hợp đăng ký xuất khẩu; tiền kiểm chỉ áp dụng khi nước nhập khẩu có yêu cầu — với sầu riêng xuất sang Trung Quốc thì vẫn còn tiền kiểm.",
      "Đổi lại, hậu kiểm siết chặt. Cơ quan chức năng kiểm tra định kỳ và đột xuất. Mã số bị thu hồi nếu sử dụng hoá chất cấm, thuốc ngoài danh mục, hoặc dùng giấy tờ giả trong hồ sơ.",
      "Riêng Đắk Lắk: khoảng 41.000 ha sầu riêng nhưng mới có khoảng 280 mã số vùng trồng, tương ứng khoảng 7.500 ha. Nguyên nhân lớn là khoảng 70% diện tích trồng xen với cà phê và hồ tiêu, gây khó khi kê khai.",
      "Thủ tục nay dễ hơn, nhưng hồ sơ và nhật ký vẫn phải làm thật, vì hậu kiểm sẽ soi vào đó.",
    ],
    taskGroups: [
      {
        title: "Đánh giá điều kiện ban đầu",
        items: [
          "Rà soát vườn theo các yêu cầu hiện hành: ranh giới, giấy tờ đất, quy trình canh tác, nhật ký sản xuất, quản lý sinh vật gây hại.",
          "Chỉ ra khoảng cách giữa hiện trạng vườn và yêu cầu — chốt danh sách việc cần làm trước khi nộp hồ sơ.",
          "Xử lý riêng tình huống vườn trồng xen cà phê/hồ tiêu, xác định phần diện tích và số cây sầu riêng thực tế để kê khai đúng.",
        ],
      },
      {
        title: "Chuẩn bị hồ sơ",
        items: [
          "Thu thập và kiểm tra giấy tờ: CCCD chủ vườn, giấy chứng nhận quyền sử dụng đất, mã định danh thửa đất.",
          "Đo và vẽ sơ đồ vùng trồng, xác định toạ độ ranh giới bằng GPS.",
          "Thống kê chính xác: diện tích, số cây, giống, năm trồng, sản lượng dự kiến.",
          "Lập bộ tài liệu quy trình canh tác của vùng trồng.",
        ],
      },
      {
        title: "Thiết lập hệ thống ghi chép và giám sát",
        items: [
          "Bàn giao và hướng dẫn ghi sổ nhật ký sản xuất: bón phân, phun thuốc, tưới, tỉa cành, thu hoạch.",
          "Thiết lập hệ thống giám sát sinh vật gây hại: danh sách đối tượng kiểm dịch thực vật mà nước nhập khẩu quan tâm, đặt bẫy, lịch điều tra, sổ theo dõi.",
          "Hướng dẫn áp dụng IPM và thực hành nông nghiệp tốt theo yêu cầu của phía nhập khẩu.",
        ],
      },
      {
        title: "Kê khai và theo dõi hồ sơ",
        items: [
          "Hướng dẫn hoặc hỗ trợ chủ vườn kê khai trên Cổng Dịch vụ công Quốc gia.",
          "Theo dõi tiến độ tại UBND cấp xã, bổ sung khi có yêu cầu.",
          "Chuẩn bị và cùng chủ vườn tiếp đoàn tiền kiểm nếu vùng trồng đăng ký xuất khẩu.",
        ],
      },
      {
        title: "Duy trì mã số sau khi được cấp",
        items: [
          "Tập huấn cho chủ vườn và công nhân về những hành vi làm mất mã số.",
          "Kiểm tra nội bộ định kỳ, mô phỏng trước một đợt hậu kiểm.",
          "Hỗ trợ báo cáo sản lượng, hỗ trợ hồ sơ khi có đoàn kiểm tra.",
          "Tư vấn về việc uỷ quyền sử dụng mã cho doanh nghiệp thu mua — nêu rõ rủi ro khi cho mượn, cho thuê mã số.",
          "Kết nối với cơ sở đóng gói đã có mã số và doanh nghiệp xuất khẩu.",
        ],
      },
    ],
    mechanism: {
      kind: "steps",
      data: {
        title: "Timeline thủ tục",
        steps: [
          "Đánh giá điều kiện ban đầu và chốt danh sách việc cần làm.",
          "Chuẩn bị hồ sơ, sơ đồ vùng trồng có toạ độ và hệ thống ghi chép.",
          "Kê khai toàn trình trên Cổng Dịch vụ công Quốc gia, nộp tại UBND cấp xã.",
          "Cấp mã: không quá 3 ngày làm việc nếu không đăng ký xuất khẩu, không quá 10 ngày làm việc nếu có đăng ký xuất khẩu.",
          "Duy trì mã số: kiểm tra nội bộ định kỳ, sẵn sàng cho hậu kiểm.",
        ],
        note: "Cập nhật ngày 24/08/2026. Nghị quyết 36/2026/NQ-CP có hiệu lực đến khi Nghị định sửa đổi Nghị định 38/2026/NĐ-CP được ban hành.",
      },
    },
    deliverables: [
      "Báo cáo đánh giá điều kiện ban đầu và danh sách việc cần làm.",
      "Sơ đồ vùng trồng có toạ độ.",
      "Bộ hồ sơ hoàn chỉnh đã kê khai.",
      "Sổ nhật ký sản xuất và sổ giám sát sinh vật gây hại.",
      "Bộ tài liệu quy trình canh tác của vùng trồng.",
      "Buổi tập huấn duy trì mã số cho chủ vườn và người làm.",
    ],
    commitment: {
      does: [
        "Hỗ trợ chuẩn bị hồ sơ và điều kiện vườn.",
        "Cập nhật cho khách hàng khi quy định thay đổi: Nghị quyết 36/2026/NQ-CP có hiệu lực đến khi Nghị định sửa đổi Nghị định 38/2026/NĐ-CP được ban hành.",
      ],
      doesNot: [
        "Mã số vùng trồng do cơ quan nhà nước có thẩm quyền cấp. Silica không cam kết chắc chắn được cấp mã và không nhận “chạy” thủ tục.",
        "Hồ sơ do chủ vườn tự kê khai và tự chịu trách nhiệm về tính chính xác theo quy định hiện hành.",
      ],
    },
    faqs: [
      {
        q: "Vườn tôi chỉ 2 ha, có xin được mã không?",
        a: "Quy định diện tích tối thiểu 10 ha đã được điều chỉnh theo hướng đơn giản hoá từ 01/8/2026. Silica sẽ rà soát tình trạng cụ thể của vườn và tư vấn phương án phù hợp.",
      },
      {
        q: "Vườn trồng xen cà phê thì sao?",
        a: "Vẫn làm được, nhưng phải kê khai đúng phần diện tích và số cây sầu riêng. Đây là vướng mắc phổ biến nhất tại Đắk Lắk.",
      },
      {
        q: "Mất bao lâu?",
        a: "Thủ tục cấp mã đã rút xuống 3 – 10 ngày làm việc. Phần lâu hơn là chuẩn bị điều kiện vườn và hồ sơ trước khi nộp.",
      },
      {
        q: "Có mã rồi có mất không?",
        a: "Có. Mã bị thu hồi nếu dùng hoá chất cấm hoặc thuốc ngoài danh mục, hoặc dùng giấy tờ giả. Vì vậy phần duy trì quan trọng không kém phần xin cấp.",
      },
      {
        q: "Doanh nghiệp thu mua bảo cho họ mượn mã, có nên không?",
        a: "Cần thận trọng. Việc trộn hàng ngoài vùng trồng vào mã số của bạn là nguyên nhân chính khiến nhiều mã bị đình chỉ, và người mất mã là chủ vườn.",
      },
    ],
    seoKeywords: [
      "mã số vùng trồng sầu riêng",
      "thủ tục cấp mã số vùng trồng 2026",
      "Nghị quyết 36/2026 mã số vùng trồng",
      "hồ sơ mã số vùng trồng Đắk Lắk",
      "nhật ký canh tác sầu riêng",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

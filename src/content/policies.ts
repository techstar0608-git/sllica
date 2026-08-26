/** Thông tin pháp nhân dùng chung cho các trang chính sách. */
export const legalEntity = {
  name: "CÔNG TY TNHH SILICA",
  taxCode: "0313042368",
  registration:
    "Đăng ký lần đầu ngày 08/12/2014 · Đăng ký thay đổi lần thứ 9 ngày 20/11/2025",
  issuer:
    "Phòng Đăng ký kinh doanh – Sở Tài chính Thành phố Hồ Chí Minh",
  headOffice:
    "3F2 Đường 22, Khu phố 2, Phường An Khánh, Thành phố Hồ Chí Minh, Việt Nam",
  businessLocation: "Thôn Hồ Tiếng, Xã Krông Năng, Tỉnh Đắk Lắk",
  representative: "Ông Nguyễn Xuân Hữu — Giám đốc",
  hotline: "0932 047 055",
  hotlineHref: "tel:0932047055",
  email: "cskh@silica.vn",
  website: "silica.vn",
} as const;

/** Ngày đăng bộ chính sách — hiển thị ở dòng "Cập nhật lần cuối". */
export const policyUpdatedAt = "26/08/2026";

/**
 * Một khối nội dung trong trang chính sách.
 * - "text"    : một đoạn văn (hỗ trợ **in đậm** và [nhãn](href)).
 * - "list"    : danh sách gạch đầu dòng.
 * - "ordered" : danh sách đánh số.
 * - "table"   : bảng có tiêu đề cột.
 * - "quote"   : khối trích dẫn / thông tin liên hệ.
 */
export type PolicyBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "ordered"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "quote"; lines: string[] };

export type PolicySection = {
  /** Số mục hiển thị, ví dụ "1.2". */
  number: string;
  heading: string;
  blocks: PolicyBlock[];
};

export type Policy = {
  slug: string;
  /** Tên ngắn dùng cho menu, footer và breadcrumb. */
  navName: string;
  title: string;
  description: string;
  /** Đoạn dẫn nhập trước mục 1. */
  intro?: string[];
  sections: PolicySection[];
};

export const policies: Policy[] = [
  {
    slug: "bao-ve-du-lieu-ca-nhan",
    navName: "Bảo vệ dữ liệu cá nhân",
    title: "Chính sách bảo vệ dữ liệu cá nhân",
    description:
      "Cách Công ty TNHH Silica thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân của khách hàng theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.",
    intro: [
      'Công ty TNHH Silica ("Silica", "chúng tôi") tôn trọng và cam kết bảo vệ dữ liệu cá nhân của Quý khách hàng. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân khi Quý khách sử dụng website silica.vn hoặc liên hệ với chúng tôi qua các kênh chính thức.',
      "Chính sách được xây dựng theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định số 356/2025/NĐ-CP.",
    ],
    sections: [
      {
        number: "1.1",
        heading: "Phạm vi áp dụng",
        blocks: [
          {
            kind: "text",
            text: "Chính sách này áp dụng cho dữ liệu cá nhân mà Silica thu thập thông qua:",
          },
          {
            kind: "list",
            items: [
              "Các biểu mẫu đăng ký trên website silica.vn (đăng ký khảo sát vườn, liên hệ tư vấn, đăng ký làm đối tác phân phối);",
              "Cuộc gọi, tin nhắn Zalo, email do Quý khách chủ động gửi đến các kênh liên hệ chính thức của Silica;",
              "Phiếu khảo sát vườn do cán bộ kỹ thuật Silica thực hiện trực tiếp tại vườn.",
            ],
          },
        ],
      },
      {
        number: "1.2",
        heading: "Dữ liệu cá nhân chúng tôi thu thập",
        blocks: [
          { kind: "text", text: "**Thông tin do Quý khách cung cấp:**" },
          {
            kind: "table",
            headers: ["Loại thông tin", "Bắt buộc"],
            rows: [
              ["Họ và tên", "Có"],
              ["Số điện thoại / Zalo", "Có"],
              ["Xã – Tỉnh nơi có vườn", "Có"],
              ["Diện tích vườn, số cây", "Có"],
              ["Vấn đề canh tác đang gặp phải", "Có"],
              ["Địa chỉ email", "Không bắt buộc"],
              ["Ghi chú, mong muốn khác", "Không bắt buộc"],
            ],
          },
          {
            kind: "text",
            text: "**Thông tin kỹ thuật thu thập tự động:** địa chỉ IP, loại trình duyệt, thiết bị, trang đã xem, nguồn truy cập — thông qua các công cụ đo lường được nêu tại [Chính sách Cookie](/chinh-sach/cookie).",
          },
          {
            kind: "text",
            text: "**Chúng tôi không thu thập** số căn cước công dân, thông tin tài khoản ngân hàng, dữ liệu sức khỏe hay bất kỳ dữ liệu cá nhân nhạy cảm nào qua website.",
          },
        ],
      },
      {
        number: "1.3",
        heading: "Mục đích sử dụng",
        blocks: [
          {
            kind: "text",
            text: "Silica sử dụng dữ liệu cá nhân cho các mục đích sau:",
          },
          {
            kind: "ordered",
            items: [
              "**Liên hệ tư vấn kỹ thuật và hỗ trợ canh tác** — gọi điện, nhắn tin Zalo để trao đổi về nhu cầu của vườn, sắp xếp lịch khảo sát, tư vấn quy trình và sản phẩm phù hợp.",
              "**Chuyển thông tin đến đối tác phân phối tại khu vực** để đối tác liên hệ báo giá, bán hàng và chăm sóc trực tiếp (xem mục 1.5).",
              "**Gửi thông tin cập nhật và chương trình khuyến mại** của Silica — chỉ thực hiện khi Quý khách đã đồng ý riêng cho mục đích này.",
              "**Cải thiện chất lượng dịch vụ** — thống kê, phân tích nhu cầu thị trường trên dữ liệu đã tổng hợp.",
              "**Thực hiện nghĩa vụ pháp lý** khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền.",
            ],
          },
        ],
      },
      {
        number: "1.4",
        heading: "Cơ sở xử lý dữ liệu",
        blocks: [
          {
            kind: "text",
            text: "Silica xử lý dữ liệu cá nhân **trên cơ sở sự đồng ý** của Quý khách, được thể hiện qua việc chủ động tích chọn ô đồng ý trên biểu mẫu hoặc chủ động cung cấp thông tin khi liên hệ với chúng tôi.",
          },
          {
            kind: "text",
            text: "Quý khách có quyền rút lại sự đồng ý bất kỳ lúc nào. Việc rút lại sự đồng ý không ảnh hưởng đến tính hợp pháp của hoạt động xử lý dữ liệu đã thực hiện trước đó.",
          },
        ],
      },
      {
        number: "1.5",
        heading: "Chia sẻ dữ liệu cá nhân",
        blocks: [
          {
            kind: "text",
            text: "Silica **không mua bán dữ liệu cá nhân** của khách hàng trong bất kỳ trường hợp nào.",
          },
          {
            kind: "text",
            text: "Dữ liệu cá nhân chỉ được chia sẻ trong các trường hợp sau:",
          },
          { kind: "text", text: "**a) Đối tác phân phối, đại lý của Silica**" },
          {
            kind: "text",
            text: "Silica là đơn vị nhập khẩu và phân phối, không bán lẻ trực tiếp đến người tiêu dùng. Vì vậy, thông tin liên hệ của Quý khách có thể được chuyển đến đối tác phân phối hoặc đại lý tại khu vực để thực hiện việc báo giá, cung cấp hàng hóa và chăm sóc sau bán hàng.",
          },
          {
            kind: "text",
            text: "Việc chuyển thông tin này **chỉ được thực hiện khi Quý khách đã tích chọn đồng ý** trên biểu mẫu đăng ký.",
          },
          {
            kind: "text",
            text: "Silica yêu cầu tất cả đối tác phân phối cam kết bằng văn bản trong hợp đồng: chỉ sử dụng thông tin khách hàng cho mục đích bán hàng và chăm sóc sản phẩm K-SON, không chuyển giao cho bên thứ ba, không sử dụng cho mục đích khác. Đối tác vi phạm sẽ bị xử lý theo hợp đồng, bao gồm chấm dứt hợp tác.",
          },
          { kind: "text", text: "**b) Nhà cung cấp nền tảng công nghệ**" },
          {
            kind: "text",
            text: "Silica sử dụng dịch vụ của bên thứ ba để vận hành hệ thống, bao gồm nền tảng lưu trữ và bảng tính trực tuyến, hệ thống quản lý quan hệ khách hàng, nền tảng nhắn tin và các công cụ đo lường website. Các đơn vị này chỉ xử lý dữ liệu trong phạm vi cung cấp dịch vụ cho Silica.",
          },
          {
            kind: "text",
            text: "**c) Cơ quan nhà nước có thẩm quyền** khi có yêu cầu hợp pháp bằng văn bản.",
          },
        ],
      },
      {
        number: "1.6",
        heading: "Chuyển dữ liệu ra nước ngoài",
        blocks: [
          {
            kind: "text",
            text: "Một số nền tảng công nghệ mà Silica sử dụng có hệ thống máy chủ đặt ngoài lãnh thổ Việt Nam. Do đó, dữ liệu cá nhân của Quý khách có thể được lưu trữ hoặc xử lý ở nước ngoài. Silica thực hiện việc này theo đúng quy định của Luật Bảo vệ dữ liệu cá nhân và lựa chọn các nhà cung cấp có cam kết bảo mật tương ứng.",
          },
        ],
      },
      {
        number: "1.7",
        heading: "Thời gian lưu trữ",
        blocks: [
          {
            kind: "text",
            text: "Dữ liệu cá nhân được lưu trữ trong thời gian **05 (năm) năm kể từ lần tương tác gần nhất** giữa Quý khách và Silica, nhằm phục vụ việc theo dõi, chăm sóc và hỗ trợ kỹ thuật cho vườn theo chu kỳ canh tác nhiều vụ.",
          },
          {
            kind: "text",
            text: "Sau thời hạn trên, hoặc khi Quý khách yêu cầu xóa dữ liệu, Silica sẽ xóa hoặc ẩn danh hóa dữ liệu, trừ phần dữ liệu phải lưu giữ theo quy định pháp luật.",
          },
        ],
      },
      {
        number: "1.8",
        heading: "Quyền của Quý khách đối với dữ liệu cá nhân",
        blocks: [
          {
            kind: "text",
            text: "Theo Luật Bảo vệ dữ liệu cá nhân, Quý khách có các quyền sau:",
          },
          {
            kind: "list",
            items: [
              "Quyền được biết về việc xử lý dữ liệu cá nhân của mình;",
              "Quyền đồng ý hoặc không đồng ý cho phép xử lý dữ liệu;",
              "Quyền truy cập để xem, chỉnh sửa dữ liệu cá nhân của mình;",
              "Quyền rút lại sự đồng ý;",
              "Quyền xóa dữ liệu;",
              "Quyền hạn chế xử lý dữ liệu;",
              "Quyền yêu cầu cung cấp dữ liệu cá nhân của mình;",
              "Quyền phản đối việc xử lý dữ liệu;",
              "Quyền khiếu nại, tố cáo, khởi kiện và yêu cầu bồi thường thiệt hại theo quy định pháp luật.",
            ],
          },
          {
            kind: "text",
            text: "**Cách thực hiện quyền:** Quý khách liên hệ hotline **0932 047 055** hoặc email **cskh@silica.vn**, cung cấp họ tên và số điện thoại đã đăng ký. Silica sẽ xử lý yêu cầu trong thời hạn 72 giờ kể từ khi tiếp nhận, trừ trường hợp có lý do chính đáng cần thêm thời gian và sẽ thông báo cho Quý khách.",
          },
          {
            kind: "text",
            text: "**Từ chối nhận thông tin quảng cáo:** Quý khách có thể yêu cầu ngừng nhận thông tin khuyến mại bất kỳ lúc nào qua hotline hoặc Zalo mà vẫn tiếp tục được hỗ trợ kỹ thuật bình thường.",
          },
        ],
      },
      {
        number: "1.9",
        heading: "Bảo mật dữ liệu",
        blocks: [
          {
            kind: "text",
            text: "Silica áp dụng các biện pháp quản lý và kỹ thuật để bảo vệ dữ liệu cá nhân: phân quyền truy cập theo chức năng công việc, chỉ nhân sự trực tiếp phụ trách tư vấn và chăm sóc khách hàng mới được tiếp cận, kết nối website qua giao thức bảo mật, và yêu cầu cam kết bảo mật đối với nhân viên cũng như đối tác.",
          },
          {
            kind: "text",
            text: "Trường hợp xảy ra sự cố lộ lọt dữ liệu, Silica sẽ thông báo cho cơ quan chức năng và các chủ thể dữ liệu bị ảnh hưởng theo quy định pháp luật.",
          },
        ],
      },
      {
        number: "1.10",
        heading: "Dữ liệu trẻ em",
        blocks: [
          {
            kind: "text",
            text: "Website silica.vn hướng đến khách hàng là chủ vườn, đại lý và đối tác kinh doanh. Chúng tôi không chủ đích thu thập dữ liệu cá nhân của người dưới 16 tuổi. Nếu phát hiện đã thu thập dữ liệu của trẻ em mà không có sự đồng ý hợp lệ, chúng tôi sẽ xóa ngay khi được thông báo.",
          },
        ],
      },
      {
        number: "1.11",
        heading: "Đầu mối liên hệ về bảo vệ dữ liệu cá nhân",
        blocks: [
          {
            kind: "quote",
            lines: [
              "Bộ phận Chăm sóc khách hàng — Công ty TNHH Silica",
              "Địa chỉ: 3F2 Đường 22, Khu phố 2, Phường An Khánh, Thành phố Hồ Chí Minh",
              "Hotline: 0932 047 055 · Email: cskh@silica.vn",
            ],
          },
        ],
      },
      {
        number: "1.12",
        heading: "Thay đổi chính sách",
        blocks: [
          {
            kind: "text",
            text: "Silica có thể cập nhật Chính sách này khi quy định pháp luật hoặc hoạt động của công ty thay đổi. Bản mới nhất luôn được đăng tại địa chỉ này kèm ngày cập nhật.",
          },
        ],
      },
    ],
  },
  {
    slug: "cookie",
    navName: "Chính sách cookie",
    title: "Chính sách cookie",
    description:
      "Các loại cookie website silica.vn sử dụng, công cụ đo lường của bên thứ ba và cách Quý khách quản lý cookie trên thiết bị của mình.",
    sections: [
      {
        number: "2.1",
        heading: "Cookie là gì",
        blocks: [
          {
            kind: "text",
            text: "Cookie là các tệp dữ liệu nhỏ được lưu trên thiết bị của Quý khách khi truy cập website, giúp website ghi nhớ thao tác và giúp chúng tôi hiểu cách website đang được sử dụng.",
          },
        ],
      },
      {
        number: "2.2",
        heading: "Các loại cookie chúng tôi sử dụng",
        blocks: [
          {
            kind: "table",
            headers: ["Loại", "Mục đích"],
            rows: [
              [
                "Cookie thiết yếu",
                "Bảo đảm website hoạt động: điều hướng, ghi nhớ lựa chọn ngôn ngữ, bảo mật biểu mẫu. Không thể tắt.",
              ],
              [
                "Cookie phân tích",
                "Thống kê lượt truy cập, trang được xem nhiều, thời gian ở lại — để cải thiện nội dung.",
              ],
              [
                "Cookie quảng cáo",
                "Đo lường hiệu quả quảng cáo và hiển thị nội dung phù hợp hơn trên các nền tảng.",
              ],
            ],
          },
        ],
      },
      {
        number: "2.3",
        heading: "Công cụ của bên thứ ba",
        blocks: [
          {
            kind: "text",
            text: "Website silica.vn sử dụng các công cụ đo lường sau: **Google Analytics 4, Meta Pixel, TikTok Pixel và mã đo lường của Zalo.** Các công cụ này có thể đặt cookie trên thiết bị của Quý khách và thu thập dữ liệu theo chính sách riêng của từng nền tảng.",
          },
        ],
      },
      {
        number: "2.4",
        heading: "Quản lý cookie",
        blocks: [
          {
            kind: "text",
            text: "Quý khách có thể từ chối hoặc xóa cookie thông qua cài đặt trình duyệt. Việc chặn cookie thiết yếu có thể khiến một số chức năng của website không hoạt động đúng.",
          },
        ],
      },
      {
        number: "2.5",
        heading: "Liên hệ",
        blocks: [
          {
            kind: "text",
            text: "Mọi câu hỏi về cookie xin gửi về: **cskh@silica.vn** — hotline **0932 047 055**.",
          },
        ],
      },
    ],
  },
  {
    slug: "dieu-khoan-su-dung",
    navName: "Điều khoản sử dụng",
    title: "Điều khoản sử dụng website",
    description:
      "Điều khoản áp dụng khi truy cập và sử dụng website silica.vn: tính chất website, nội dung kỹ thuật nông nghiệp, quyền sở hữu trí tuệ và giới hạn trách nhiệm.",
    sections: [
      {
        number: "3.1",
        heading: "Chấp nhận điều khoản",
        blocks: [
          {
            kind: "text",
            text: "Website silica.vn thuộc sở hữu và vận hành bởi Công ty TNHH Silica. Khi truy cập và sử dụng website, Quý khách được xem là đã đọc, hiểu và đồng ý với các điều khoản dưới đây.",
          },
        ],
      },
      {
        number: "3.2",
        heading: "Tính chất của website",
        blocks: [
          {
            kind: "text",
            text: "silica.vn là website giới thiệu doanh nghiệp, sản phẩm và dịch vụ. **Website không có chức năng đặt hàng hoặc thanh toán trực tuyến.** Mọi giao dịch mua bán được thực hiện thông qua hệ thống đối tác phân phối và đại lý của Silica.",
          },
        ],
      },
      {
        number: "3.3",
        heading: "Về nội dung kỹ thuật nông nghiệp",
        blocks: [
          {
            kind: "text",
            text: "Các nội dung về quy trình canh tác, hướng dẫn sử dụng sản phẩm, khuyến cáo kỹ thuật và thông tin về sinh vật gây hại đăng trên website là **thông tin tham khảo mang tính phổ biến chung**.",
          },
          {
            kind: "text",
            text: "Điều kiện thực tế của mỗi vườn — loại đất, độ pH, tuổi cây, giống, khí hậu, chế độ nước và lịch sử canh tác — là khác nhau. Vì vậy, các nội dung này không thay thế cho việc khảo sát thực địa và tư vấn trực tiếp của cán bộ kỹ thuật. Quý khách nên liên hệ Silica để được tư vấn phù hợp với vườn của mình trước khi áp dụng.",
          },
          {
            kind: "text",
            text: "Silica không chịu trách nhiệm đối với kết quả phát sinh từ việc tự áp dụng thông tin trên website mà không qua khảo sát và tư vấn thực tế.",
          },
        ],
      },
      {
        number: "3.4",
        heading: "Về thông tin pháp lý dẫn chiếu",
        blocks: [
          {
            kind: "text",
            text: "Website có đăng tải thông tin về quy định pháp luật liên quan đến phân bón, mã số vùng trồng và yêu cầu của thị trường xuất khẩu. Đây là thông tin tổng hợp tại thời điểm đăng tải, có kèm ngày cập nhật.",
          },
          {
            kind: "text",
            text: "Quy định pháp luật có thể thay đổi. Quý khách cần tham chiếu văn bản gốc và hướng dẫn của cơ quan nhà nước có thẩm quyền khi thực hiện các thủ tục cụ thể.",
          },
        ],
      },
      {
        number: "3.5",
        heading: "Quyền sở hữu trí tuệ",
        blocks: [
          {
            kind: "text",
            text: "Toàn bộ nội dung trên website — bao gồm văn bản, hình ảnh, video, thiết kế, logo Silica và nhãn hiệu K-SON — thuộc quyền sở hữu hoặc quyền sử dụng hợp pháp của Công ty TNHH Silica.",
          },
          {
            kind: "text",
            text: "Quý khách được phép xem, tải và in nội dung cho mục đích sử dụng cá nhân, phi thương mại. Việc sao chép, chỉnh sửa, phân phối lại hoặc sử dụng cho mục đích thương mại phải có văn bản chấp thuận của Silica.",
          },
        ],
      },
      {
        number: "3.6",
        heading: "Hành vi không được phép",
        blocks: [
          {
            kind: "text",
            text: "Quý khách không được sử dụng website để: phát tán mã độc hoặc gây cản trở hoạt động của hệ thống; thu thập dữ liệu tự động hàng loạt khi chưa được cho phép; đăng tải thông tin sai sự thật, xúc phạm hoặc vi phạm pháp luật; mạo danh Silica hoặc đối tác của Silica.",
          },
        ],
      },
      {
        number: "3.7",
        heading: "Liên kết đến website bên thứ ba",
        blocks: [
          {
            kind: "text",
            text: "Website có thể chứa liên kết đến các trang khác, bao gồm gian hàng của nhà phân phối trên các sàn thương mại điện tử. Silica không kiểm soát và không chịu trách nhiệm về nội dung cũng như chính sách của các trang này.",
          },
        ],
      },
      {
        number: "3.8",
        heading: "Giới hạn trách nhiệm",
        blocks: [
          {
            kind: "text",
            text: "Silica nỗ lực bảo đảm thông tin trên website là chính xác và cập nhật, nhưng không cam kết website hoạt động không gián đoạn hoặc hoàn toàn không có sai sót. Trách nhiệm của Silica đối với sản phẩm được thực hiện theo [Chính sách đổi trả & khiếu nại chất lượng sản phẩm](/chinh-sach/doi-tra-khieu-nai) và quy định pháp luật hiện hành.",
          },
        ],
      },
      {
        number: "3.9",
        heading: "Luật áp dụng và giải quyết tranh chấp",
        blocks: [
          {
            kind: "text",
            text: "Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Tranh chấp phát sinh sẽ được ưu tiên giải quyết bằng thương lượng; nếu không đạt được thỏa thuận, tranh chấp được đưa ra Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh.",
          },
        ],
      },
    ],
  },
  {
    slug: "doi-tra-khieu-nai",
    navName: "Đổi trả & khiếu nại",
    title: "Chính sách đổi trả & khiếu nại chất lượng sản phẩm",
    description:
      "Điều kiện đổi trả, quy trình khiếu nại và trách nhiệm bồi thường đối với sản phẩm K-SON do Công ty TNHH Silica nhập khẩu và phân phối.",
    sections: [
      {
        number: "4.1",
        heading: "Phạm vi áp dụng",
        blocks: [
          {
            kind: "text",
            text: "Chính sách này áp dụng cho các sản phẩm mang nhãn hiệu **K-SON** do Công ty TNHH Silica nhập khẩu chính ngạch và phân phối tại thị trường Việt Nam.",
          },
          {
            kind: "text",
            text: "Silica là đơn vị nhập khẩu và phân phối, **không bán lẻ trực tiếp đến người tiêu dùng**. Quý khách mua hàng thông qua hệ thống đối tác phân phối, đại lý và các gian hàng trực tuyến chính thức được Silica công nhận.",
          },
        ],
      },
      {
        number: "4.2",
        heading: "Điều kiện đổi trả",
        blocks: [
          {
            kind: "text",
            text: "Sản phẩm được xem xét đổi trả khi đáp ứng **đồng thời** các điều kiện sau:",
          },
          {
            kind: "ordered",
            items: [
              "Khiếu nại được gửi trong vòng **06 (sáu) tháng** kể từ ngày mua hàng;",
              "Sản phẩm vẫn **còn trong hạn sử dụng** ghi trên bao bì;",
              "Sản phẩm **còn nguyên bao bì và nhãn gốc**, còn nhận diện được số lô sản xuất;",
              "Có **chứng từ mua hàng** từ đối tác phân phối hoặc đại lý trong hệ thống của Silica.",
            ],
          },
        ],
      },
      {
        number: "4.3",
        heading: "Trường hợp được đổi trả",
        blocks: [
          {
            kind: "text",
            text: "Sản phẩm được đổi hoặc thu hồi khi có lỗi thuộc về nhà sản xuất hoặc quá trình nhập khẩu, bao gồm:",
          },
          {
            kind: "list",
            items: [
              "Bao bì bị lỗi, rách, bục, hàn không kín ngay từ khi xuất kho;",
              "Sản phẩm bị biến chất, vón cục bất thường, tách lớp trong khi vẫn còn hạn sử dụng và được bảo quản đúng hướng dẫn;",
              "Sản phẩm không đúng quy cách, chủng loại so với đơn hàng;",
              "Sản phẩm có chỉ tiêu chất lượng không phù hợp với tiêu chuẩn công bố áp dụng hoặc quy chuẩn kỹ thuật tương ứng, được xác định qua kết quả thử nghiệm hợp lệ.",
            ],
          },
        ],
      },
      {
        number: "4.4",
        heading: "Trường hợp không áp dụng đổi trả",
        blocks: [
          {
            kind: "list",
            items: [
              "Sản phẩm đã hết hạn sử dụng;",
              "Sản phẩm bị hư hỏng do bảo quản, vận chuyển hoặc sử dụng không đúng hướng dẫn (để nơi ẩm ướt, phơi nắng trực tiếp, để chung với hóa chất, mở bao không đậy kín…);",
              "Sản phẩm đã bị sang chiết, thay đổi bao bì, thay đổi nhãn hoặc pha trộn với sản phẩm khác;",
              "Sản phẩm không mua từ hệ thống phân phối chính thức của Silica;",
              "Sản phẩm không còn bao bì, nhãn hoặc không xác định được số lô sản xuất;",
              "Khiếu nại vượt quá thời hạn nêu tại mục 4.2.",
            ],
          },
        ],
      },
      {
        number: "4.5",
        heading: "Quy trình khiếu nại",
        blocks: [
          {
            kind: "table",
            headers: ["Bước", "Thực hiện"],
            rows: [
              [
                "1",
                "Quý khách liên hệ trực tiếp đại lý hoặc đối tác phân phối nơi đã mua hàng, cung cấp chứng từ mua hàng, ảnh chụp sản phẩm và bao bì, thông tin số lô.",
              ],
              [
                "2",
                "Đại lý tiếp nhận, lập biên bản ghi nhận và chuyển thông tin về Silica.",
              ],
              [
                "3",
                "Silica phối hợp với đại lý kiểm tra thực tế. Trường hợp cần thiết, Silica lấy mẫu sản phẩm khiếu nại và đối chiếu với mẫu lưu của cùng lô hàng.",
              ],
              [
                "4",
                "Silica thông báo kết quả xử lý và thực hiện phương án xử lý trong thời hạn 07 ngày làm việc kể từ ngày có đủ thông tin.",
              ],
            ],
          },
          {
            kind: "text",
            text: "Quý khách cũng có thể liên hệ trực tiếp hotline **0932 047 055** hoặc email **cskh@silica.vn** để được hỗ trợ song song.",
          },
        ],
      },
      {
        number: "4.6",
        heading: "Hình thức xử lý",
        blocks: [
          {
            kind: "text",
            text: "Tùy tính chất vụ việc, Silica áp dụng một trong các phương án:",
          },
          {
            kind: "list",
            items: [
              "Đổi sản phẩm cùng loại, cùng quy cách;",
              "Thu hồi sản phẩm và hoàn trả giá trị hàng hóa theo giá đã mua;",
              "Thu hồi lô sản phẩm liên quan trên toàn hệ thống nếu xác định lỗi mang tính hệ thống.",
            ],
          },
          {
            kind: "text",
            text: "Chi phí vận chuyển hàng đổi trả trong trường hợp lỗi thuộc về nhà sản xuất do Silica chịu.",
          },
        ],
      },
      {
        number: "4.7",
        heading: "Trách nhiệm bồi thường thiệt hại",
        blocks: [
          {
            kind: "text",
            text: "Silica thực hiện đầy đủ trách nhiệm bồi thường thiệt hại theo quy định của Luật Chất lượng sản phẩm, hàng hóa hiện hành.",
          },
          {
            kind: "text",
            text: "Cụ thể: trường hợp có căn cứ xác định thiệt hại phát sinh **do lỗi của hàng hóa không phù hợp với tiêu chuẩn công bố áp dụng hoặc quy chuẩn kỹ thuật tương ứng**, Silica có trách nhiệm bồi thường cho đối tác bán hàng hoặc người sử dụng theo quy định pháp luật.",
          },
          {
            kind: "text",
            text: "**Căn cứ xác định lỗi hàng hóa:** kết quả thử nghiệm mẫu sản phẩm khiếu nại đối chiếu với mẫu lưu cùng lô, thực hiện tại tổ chức thử nghiệm được chỉ định hoặc được công nhận theo quy định pháp luật.",
          },
          {
            kind: "text",
            text: "**Các trường hợp Silica không phải bồi thường** theo quy định của Luật Chất lượng sản phẩm, hàng hóa, bao gồm nhưng không giới hạn ở:",
          },
          {
            kind: "list",
            items: [
              "Sản phẩm đã hết hạn sử dụng nhưng vẫn được bán hoặc được sử dụng;",
              "Đã hết thời hiệu khiếu nại, khởi kiện theo quy định pháp luật;",
              "Silica đã thông báo thu hồi sản phẩm nhưng bên bán hoặc người sử dụng vẫn tiếp tục bán, tiếp tục sử dụng;",
              "Khuyết tật phát sinh sau khi sản phẩm được đưa vào lưu thông do lỗi của bên khác;",
              "Sản phẩm bị làm giả, làm nhái, bị sang chiết hoặc pha trộn ngoài kiểm soát của Silica.",
            ],
          },
          {
            kind: "text",
            text: "Silica ưu tiên giải quyết mọi khiếu nại bằng thương lượng trên tinh thần thiện chí, hợp tác. Trường hợp không đạt được thỏa thuận, các bên có quyền yêu cầu cơ quan có thẩm quyền giải quyết theo quy định pháp luật.",
          },
        ],
      },
      {
        number: "4.8",
        heading: "Cam kết đồng hành",
        blocks: [
          {
            kind: "text",
            text: "Ngoài trách nhiệm theo pháp luật, khi vườn của Quý khách gặp sự cố có liên quan đến sản phẩm K-SON, đội ngũ kỹ thuật của Silica sẽ xuống vườn kiểm tra thực tế và cùng Quý khách tìm phương án khắc phục — không phụ thuộc vào việc lỗi cuối cùng được xác định thuộc về bên nào.",
          },
        ],
      },
    ],
  },
  {
    slug: "doi-tac-phan-phoi",
    navName: "Đối tác phân phối",
    title: "Chính sách đối tác phân phối & hỗ trợ marketing",
    description:
      "Vai trò phân phối của Silica, các hình thức hỗ trợ marketing cho đối tác và cam kết bảo mật thông tin khách hàng cùng dữ liệu kỹ thuật của vườn.",
    sections: [
      {
        number: "5.1",
        heading: "Vai trò của Silica",
        blocks: [
          {
            kind: "text",
            text: "Công ty TNHH Silica là đơn vị **nhập khẩu và phân phối độc quyền** các sản phẩm mang nhãn hiệu K-SON của Saturn Bio Tech Co., Ltd. (Hàn Quốc) tại thị trường Việt Nam.",
          },
          {
            kind: "text",
            text: "Silica **không bán lẻ trực tiếp** đến nhà vườn. Sản phẩm được đưa đến người sử dụng thông qua hệ thống đối tác phân phối, đại lý và các gian hàng trực tuyến chính thức.",
          },
          {
            kind: "text",
            text: "Quý khách vui lòng liên hệ hotline **0932 047 055** để được hướng dẫn tới điểm bán gần nhất.",
          },
        ],
      },
      {
        number: "5.2",
        heading: "Hỗ trợ marketing từ nhãn hàng",
        blocks: [
          {
            kind: "text",
            text: "Hiện tại, Silica hỗ trợ đối tác phân phối thông qua:",
          },
          {
            kind: "list",
            items: [
              "**Truyền thông thương hiệu:** sản xuất và đăng tải video quảng cáo, nội dung giới thiệu sản phẩm K-SON trên các kênh truyền thông chính thức do Silica quản lý;",
              "**Hỗ trợ kỹ thuật:** đội ngũ kỹ thuật Silica đồng hành cùng đối tác trong việc tư vấn cho nhà vườn;",
              "**Tài liệu bán hàng:** cung cấp tài liệu sản phẩm, hồ sơ pháp lý và thông tin kỹ thuật chính thức.",
            ],
          },
          {
            kind: "text",
            text: "Các chương trình hỗ trợ marketing, chính sách chiết khấu và thưởng doanh số được xây dựng **theo từng giai đoạn và theo thỏa thuận trong từng hợp đồng cụ thể**, được Silica ban hành bằng văn bản chính thức đến đối tác.",
          },
          {
            kind: "text",
            text: "Thông tin chi tiết vui lòng liên hệ hotline **0932 047 055**.",
          },
        ],
      },
      {
        number: "5.3",
        heading: "Trách nhiệm bảo mật thông tin khách hàng của đối tác phân phối",
        blocks: [
          {
            kind: "text",
            text: "Trong quá trình hợp tác, Silica có thể chuyển thông tin liên hệ của khách hàng đến đối tác phân phối tại khu vực để phục vụ việc bán hàng và chăm sóc.",
          },
          { kind: "text", text: "Đối tác phân phối cam kết:" },
          {
            kind: "ordered",
            items: [
              "Chỉ sử dụng thông tin khách hàng do Silica cung cấp cho mục đích tư vấn, bán hàng và chăm sóc sau bán hàng đối với sản phẩm K-SON;",
              "Không chuyển giao, mua bán, trao đổi hoặc tiết lộ thông tin khách hàng cho bất kỳ bên thứ ba nào;",
              "Không sử dụng thông tin khách hàng để tiếp thị sản phẩm của thương hiệu khác;",
              "Áp dụng biện pháp bảo mật phù hợp, giới hạn người được tiếp cận thông tin;",
              "Ngừng sử dụng và xóa thông tin khách hàng khi chấm dứt hợp tác với Silica hoặc khi khách hàng rút lại sự đồng ý;",
              "Chịu trách nhiệm trước pháp luật và trước Silica đối với mọi thiệt hại phát sinh do vi phạm nghĩa vụ bảo mật.",
            ],
          },
          {
            kind: "text",
            text: "Silica có quyền tạm ngừng cung cấp thông tin khách hàng, tạm ngừng chính sách hỗ trợ hoặc chấm dứt hợp đồng đối với đối tác vi phạm các cam kết trên.",
          },
        ],
      },
      {
        number: "5.4",
        heading: "Bảo mật dữ liệu kỹ thuật của vườn",
        blocks: [
          {
            kind: "text",
            text: "Đối với khách hàng sử dụng dịch vụ kỹ thuật của Silica:",
          },
          {
            kind: "list",
            items: [
              "**Kết quả phân tích đất từ phòng thí nghiệm** là thông tin bảo mật, chỉ được cung cấp riêng cho chủ vườn. Silica không công bố, không chia sẻ cho bên thứ ba khi chưa có sự đồng ý bằng văn bản của chủ vườn.",
              "**Các chỉ số đo nhanh tại vườn** (pH, EC, độ ẩm và các chỉ số đo bằng dụng cụ cầm tay) có thể được Silica sử dụng làm tư liệu kỹ thuật và truyền thông ở dạng ẩn danh.",
              "Trường hợp Silica muốn sử dụng **tên chủ vườn, tên vườn, địa chỉ cụ thể hoặc hình ảnh có nhận diện cá nhân** cho mục đích truyền thông, Silica sẽ xin sự đồng ý riêng của chủ vườn trước khi sử dụng.",
            ],
          },
        ],
      },
      {
        number: "5.5",
        heading: "Đăng ký hợp tác",
        blocks: [
          {
            kind: "text",
            text: "Đơn vị có nhu cầu trở thành đối tác phân phối vui lòng liên hệ hotline **0932 047 055** · Email **cskh@silica.vn**.",
          },
        ],
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}

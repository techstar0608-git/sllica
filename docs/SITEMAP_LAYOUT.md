# SITEMAP & LAYOUT CƠ BẢN — WEBSITE CÔNG TY TNHH SILICA

**Phạm vi tài liệu:** Cấu trúc site + danh sách section của từng trang.
**Không bao gồm:** Nội dung chi tiết từng section, copy, hệ thống thiết kế — sẽ có brief riêng cho từng trang.
**Nền tảng:** WordPress + Elementor
**Ngày lập:** 25/08/2026 · **Người duyệt:** Nguyễn Xuân Hữu

---

## 0. QUY ƯỚC CHUNG

| Hạng mục | Quy ước |
|---|---|
| Ngôn ngữ | Tiếng Việt (chuẩn bị cấu trúc cho bản EN giai đoạn 2) |
| Ưu tiên thiết bị | **Mobile first** — trên 80% chủ vườn truy cập bằng điện thoại |
| URL | Không dấu, gạch ngang, chữ thường, không lồng quá 2 cấp |
| Đối tượng chính | Chủ vườn sầu riêng Tây Nguyên, độ tuổi 35 – 60 |
| Yêu cầu hiển thị | Chữ tối thiểu 16px, nút bấm to, tránh chữ trắng trên nền ảnh |

---

## 1. SITEMAP

```
/                                       Trang chủ
│
├── /gioi-thieu                         Giới thiệu Silica
├── /lien-he                            Liên hệ (form + bản đồ 2 địa điểm)
│
├── /dich-vu                            Tổng quan 4 dịch vụ
│   ├── /dich-vu/suc-khoe-dat           DV1 – Chương trình Sức khỏe đất
│   ├── /dich-vu/quy-trinh-cham-soc     DV2 – Quy trình & kỹ thuật chăm sóc sầu riêng
│   ├── /dich-vu/quan-ly-thuoc-bvtv     DV3 – Quy trình & danh mục thuốc BVTV
│   └── /dich-vu/ma-so-vung-trong       DV4 – Xây dựng hồ sơ mã số vùng trồng
│
├── /san-pham                           Catalog toàn bộ sản phẩm K-SON
│   ├── /san-pham/kson-soil-conditioner
│   ├── /san-pham/kson-silicate-liquid
│   ├── /san-pham/kson-sulfur-silicate-liquid
│   ├── /san-pham/kson-dr-calcium
│   └── /san-pham/kson-star-fish
│
├── /tin-tuc                            Trang tin tổng hợp
│   ├── /tin-tuc/su-kien                Chuyên mục: Sự kiện & hợp tác
│   ├── /tin-tuc/ky-thuat               Chuyên mục: Kỹ thuật canh tác
│   ├── /tin-tuc/tin-nganh              Chuyên mục: Tin ngành & chính sách
│   └── /tin-tuc/[slug]                 Bài viết chi tiết
│
├── /dang-ky-khao-sat                   Landing page chuyển đổi (đích của mọi CTA)
│   └── /cam-on                         Trang cảm ơn sau khi gửi form
│
├── /dai-ly                             Chương trình đại lý & nhà phân phối
│
└── /chinh-sach                         (trang mục lục chính sách)
    ├── /chinh-sach/bao-mat-thong-tin
    ├── /chinh-sach/mua-hang-thanh-toan
    ├── /chinh-sach/van-chuyen-giao-nhan
    ├── /chinh-sach/doi-tra-bao-hanh
    ├── /chinh-sach/dai-ly-phan-phoi
    └── /chinh-sach/dieu-khoan-su-dung

Trang hệ thống: /404 · /tim-kiem · /sitemap.xml
```

### Menu chính (header)

`Trang chủ` · `Giới thiệu` · `Dịch vụ ▾` · `Sản phẩm ▾` · `Tin tức` · `Liên hệ` · **[Nút CTA: Đăng ký khảo sát vườn]**

- `Dịch vụ ▾` mega menu: 4 dịch vụ + link "Xem tất cả dịch vụ"
- `Sản phẩm ▾` dropdown: 5 sản phẩm + link "Xem toàn bộ catalog"

---

## 2. COMPONENT DÙNG CHUNG TOÀN SITE

| Mã | Component | Xuất hiện tại |
|---|---|---|
| G-01 | **Header** — logo trái, menu giữa, hotline + nút CTA phải. Sticky khi cuộn. | Mọi trang |
| G-02 | **Thanh liên hệ nổi (mobile)** — thanh cố định đáy màn hình: Gọi ngay / Zalo / Đăng ký khảo sát | Mọi trang, chỉ mobile |
| G-03 | **Nút Zalo + Hotline nổi** | Mọi trang, desktop |
| G-04 | **Breadcrumb** | Mọi trang trừ Trang chủ |
| G-05 | **Khối CTA cuối trang** — nền màu thương hiệu, 1 câu + form rút gọn (Tên, SĐT, Diện tích) | Cuối mọi trang nội dung |
| G-06 | **Footer** | Mọi trang |
| G-07 | **Card dịch vụ** — icon, tên, 1 dòng mô tả, link | Trang chủ, /dich-vu |
| G-08 | **Card sản phẩm** — ảnh, tên, quy cách, giá hoặc "Liên hệ", nút Xem chi tiết | Trang chủ, /san-pham |
| G-09 | **Card bài viết** — ảnh, chuyên mục, tiêu đề, ngày | Trang chủ, /tin-tuc |
| G-10 | **Dải logo đối tác** | Trang chủ, /gioi-thieu |

### G-06 · Cấu trúc Footer (4 cột)

| Cột 1 — Về Silica | Cột 2 — Dịch vụ | Cột 3 — Chính sách | Cột 4 — Liên hệ |
|---|---|---|---|
| Logo Silica + logo K-SON | Sức khỏe đất | Bảo mật thông tin | **VP chính:** 3F2 Đường 22, KP2, P. An Khánh, TP. Thủ Đức, TP.HCM |
| 2 dòng mô tả công ty | Quy trình chăm sóc | Mua hàng & thanh toán | **Địa điểm KD:** Thôn Hồ Tiếng, xã Krông Năng, Đắk Lắk |
| Giới thiệu | Quản lý thuốc BVTV | Vận chuyển & giao nhận | Hotline: 0932 047 055 |
| Tin tức | Mã số vùng trồng | Đổi trả & bảo hành | Email: huunx@silica.vn |
| Tuyển dụng *(giai đoạn 2)* | Sản phẩm K-SON | Chính sách đại lý | Icon: Zalo OA, Facebook, YouTube, TikTok, Shopee |
| | Đăng ký đại lý | Điều khoản sử dụng | Nút: Chỉ đường Google Maps |

**Dải cuối footer:** Tên pháp nhân đầy đủ · MST 0313042368 · Người đại diện · © 2026 Silica · *(chuẩn bị chỗ cho logo Đã thông báo Bộ Công Thương)*

---

## 3. LAYOUT TỪNG TRANG

### 3.1 · `/` — TRANG CHỦ

| # | Section | Nội dung chính |
|---|---|---|
| 1 | **Hero slider** | 3 – 5 slide: poster sự kiện đang chạy · banner bộ sản phẩm K-SON · banner nhóm dịch vụ · banner chương trình hợp tác Gangwon. Mỗi slide 1 nút CTA riêng. |
| 2 | **Dải giá trị cốt lõi** | 4 icon ngang: Nhập khẩu nguyên kiện Hàn Quốc · Phân phối độc quyền K-SON · 12 năm trong ngành · Đội kỹ thuật đồng hành tại vườn |
| 3 | **Giới thiệu Silica** | Ảnh/video trái – text phải. Đoạn ngắn về công ty + Tầm nhìn & Sứ mệnh (2 khối nhỏ). Nút "Tìm hiểu về Silica". |
| 4 | **4 dịch vụ cung cấp** | Grid 4 card (G-07). Desktop 4 cột, mobile slider ngang. Nút "Xem tất cả dịch vụ". |
| 5 | **Bộ sản phẩm nổi bật** | Grid card sản phẩm (G-08), 4 – 5 sản phẩm. Nút "Xem toàn bộ catalog". |
| 6 | **Vì sao chọn Silica** | 3 – 4 điểm khác biệt kèm ảnh thực tế tại vườn. Nhấn: bán giải pháp, không bán bao phân. |
| 7 | **Sự kiện & hoạt động nổi bật** | Slider card bài viết (G-09), link sang bài blog: ký kết Gangwon, triển khai Sức khỏe đất theo khu vực, hội thảo nhà vườn, lễ hội sầu riêng Đắk Lắk. |
| 8 | **Đối tác chiến lược** | Dải logo (G-10): Gangwon Province, Saturn Bio Tech, các đối tác phân phối. |
| 9 | **Mô hình thực tế / Cảm nhận nhà vườn** | Slider ảnh vườn mẫu + trích dẫn ngắn của chủ vườn. *(Có thể ẩn ở bản v1 nếu chưa đủ tư liệu.)* |
| 10 | **CTA cuối** | G-05 |
| 11 | **Footer** | G-06 |

---

### 3.2 · `/gioi-thieu` — GIỚI THIỆU SILICA

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Banner trang | Ảnh nền + tiêu đề + breadcrumb |
| 2 | **Silica là ai** | Đoạn giới thiệu tổng quan, con số nổi bật (năm hoạt động, số tỉnh có mặt, số vườn đồng hành) |
| 3 | **Lịch sử hình thành & phát triển** | Timeline dọc theo mốc năm — từ tiền thân FM đến Silica hiện tại |
| 4 | **Tầm nhìn & Sứ mệnh** | 2 khối song song, có icon. Kèm khối "Giá trị cốt lõi" 3 – 4 mục. |
| 5 | **Đối tác chiến lược** | Card lớn cho từng đối tác: Tỉnh Gangwon (Hàn Quốc), Saturn Bio Tech Co., Ltd. + Silicate Crop Research Institute. Mỗi card: logo, mô tả, ảnh ký kết. |
| 6 | **Năng lực & hệ thống** | Kho tại Đắk Lắk, đội kỹ thuật thị trường, quy trình nhập khẩu chính ngạch, hồ sơ pháp lý sản phẩm |
| 7 | **Mạng lưới khách hàng** | Bản đồ Việt Nam highlight vùng phủ (Tây Nguyên trọng tâm, ĐBSCL mở rộng) + con số đại lý/vườn |
| 8 | **Các chương trình đã triển khai** | Grid 3 cột: tên chương trình, địa bàn, thời gian, ảnh. Link sang bài viết chi tiết. |
| 9 | **Thông tin liên hệ rút gọn** | 2 card địa điểm: VP chính TP. Thủ Đức + Địa điểm kinh doanh Krông Năng, Đắk Lắk. Nút "Xem trang liên hệ". |
| 10 | CTA cuối + Footer | G-05, G-06 |

---

### 3.3 · `/lien-he` — LIÊN HỆ

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Banner trang | Tiêu đề + breadcrumb |
| 2 | **Form liên hệ** | Trái: form (Họ tên, SĐT/Zalo, Khu vực, Nội dung, Chủ đề quan tâm). Phải: thông tin công ty đầy đủ, hotline, email, giờ làm việc. |
| 3 | **Hai địa điểm** | 2 card song song, mỗi card có bản đồ Google Maps nhúng + nút chỉ đường: <br>• Văn phòng chính — TP. Thủ Đức, TP.HCM <br>• Địa điểm kinh doanh & kho — Krông Năng, Đắk Lắk |
| 4 | **Kênh liên hệ nhanh** | Nút lớn: Gọi hotline · Zalo OA · Facebook · Email |
| 5 | **Dành cho đại lý** | Dải nhỏ dẫn sang `/dai-ly` |
| 6 | Footer | G-06 |

---

### 3.4 · `/dich-vu` — TỔNG QUAN DỊCH VỤ

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Banner trang | Tiêu đề + câu định vị: Silica bán giải pháp cho vườn, không chỉ bán vật tư |
| 2 | **Vấn đề của nhà vườn hiện nay** | 4 – 5 pain point ngắn, dẫn dắt vào dịch vụ |
| 3 | **Sơ đồ 4 dịch vụ** | Infographic liên kết 4 dịch vụ thành một chuỗi: Đất → Quy trình → Kiểm soát vật tư → Hồ sơ xuất khẩu |
| 4 | **Chi tiết từng dịch vụ** | 4 khối lớn xen kẽ trái/phải (ảnh – text). Mỗi khối: tên, 1 câu giá trị, 3 – 4 gạch đầu dòng đầu việc, nút "Xem chi tiết". |
| 5 | **Quy trình làm việc chung** | 5 bước ngang: Đăng ký → Khảo sát vườn → Phân tích & đề xuất → Triển khai → Đồng hành & đánh giá |
| 6 | **Gói dịch vụ** | Bảng so sánh 3 gói: Khởi đầu / Chuẩn / Toàn diện – Xuất khẩu. *(Cột giá để "Liên hệ" cho đến khi chốt bảng giá.)* |
| 7 | **Câu hỏi thường gặp** | Accordion 5 – 6 câu chung cho cả 4 dịch vụ |
| 8 | CTA cuối + Footer | G-05, G-06 |

---

### 3.5 · `/dich-vu/[tên-dịch-vụ]` — 4 TRANG CHI TIẾT DỊCH VỤ

Cả 4 trang dùng **chung một khung 9 khối** để đồng bộ. Nội dung từng khối lấy từ tài liệu *BRIEF_4_DICH_VU_SILICA_LANDINGPAGE.md*.

| # | Section | Ghi chú thiết kế |
|---|---|---|
| 1 | **Hero** | Tên dịch vụ + 1 câu chốt + nút CTA. Nền ảnh thực tế tại vườn. |
| 2 | **Vấn đề** | 4 gạch đầu dòng, mỗi dòng 1 icon. Nền tối để tạo tương phản. |
| 3 | **Silica làm gì** | **Khối quan trọng nhất.** Chia theo nhóm đầu việc, mỗi nhóm là 1 khối con có tiêu đề + danh sách. Dài, cần đánh số hoặc dùng tab. |
| 4 | **Cơ chế / Quy trình triển khai** | Infographic hoặc timeline ngang. DV1 dùng sơ đồ 4 bước cơ chế nâng pH; DV2 dùng bảng 6 giai đoạn; DV3 dùng sơ đồ rà soát 3 nhóm; DV4 dùng timeline thủ tục. |
| 5 | **Chủ vườn nhận được gì** | Grid card có ảnh sản phẩm bàn giao (báo cáo, lịch canh tác A2, sổ nhật ký…) |
| 6 | **Sản phẩm / công cụ đi kèm** | Bảng hoặc card. **Bắt buộc giữ cột trạng thái đăng ký của sản phẩm.** |
| 7 | **Cam kết & giới hạn** | Khối nền nhạt, 2 cột: Silica cam kết / Silica không cam kết. Không được bỏ khối này. |
| 8 | **FAQ** | Accordion 4 – 6 câu |
| 9 | **CTA cuối + Footer** | G-05, G-06 |

**Điều hướng chéo:** cuối mỗi trang dịch vụ có dải "3 dịch vụ khác" dẫn sang các trang còn lại.

---

### 3.6 · `/san-pham` — CATALOG SẢN PHẨM

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Banner trang | Tiêu đề "Bộ sản phẩm K-SON" + breadcrumb |
| 2 | **Infographic thế mạnh bộ sản phẩm** | Khối lớn đầu trang, 5 – 6 điểm mạnh dạng icon + số: <br>• Nhập khẩu nguyên kiện từ Hàn Quốc <br>• Sản xuất bởi Saturn Bio Tech – Gangwon <br>• Nghiên cứu bởi Silicate Crop Research Institute <br>• Công nghệ Alkaline điều hòa pH <br>• Không phát hiện kim loại nặng (As, Cd, Hg, Pb) <br>• Phân phối độc quyền tại Việt Nam bởi Silica |
| 3 | **Dây chuyền & công nghệ sản xuất** | Ảnh/video nhà máy Hàn Quốc + 3 – 4 dòng mô tả |
| 4 | **Bộ lọc catalog** | Lọc theo: Dạng (hạt / lỏng) · Nhóm công dụng (cải tạo đất / dinh dưỡng / canxi) · Cây trồng |
| 5 | **Lưới sản phẩm** | Grid card (G-08): ảnh, tên VN + tên gốc, quy cách, giá hoặc "Liên hệ", tag trạng thái đăng ký, nút Xem chi tiết. Desktop 3 – 4 cột, mobile 2 cột. |
| 6 | **Bảng so sánh nhanh** | Bảng ngang: sản phẩm × (dạng, thành phần chính, đối tượng sử dụng, quy cách) |
| 7 | **Mua hàng ở đâu** | 3 kênh: Đại lý gần bạn (link `/dai-ly`) · Mua online (Shopee, TikTok Shop) · Liên hệ trực tiếp |
| 8 | **Cần tư vấn dùng đúng cách?** | Dải dẫn sang `/dich-vu` |
| 9 | CTA cuối + Footer | G-05, G-06 |

---

### 3.7 · `/san-pham/[tên-sản-phẩm]` — CHI TIẾT SẢN PHẨM

| # | Section | Nội dung chính |
|---|---|---|
| 1 | **Khối sản phẩm chính** | Trái: gallery ảnh (bao bì, hạt/dung dịch, ảnh sử dụng tại vườn, ảnh nhãn phụ). Phải: tên VN + tên gốc, tag trạng thái đăng ký, quy cách, giá hoặc "Liên hệ", tóm tắt 3 gạch đầu dòng, nút **Liên hệ đặt hàng** + **Mua trên Shopee** + **Zalo tư vấn**. |
| 2 | **Thành phần** | Bảng chỉ tiêu theo đúng nhãn phụ đã đăng ký |
| 3 | **Công dụng** | 4 – 6 khối icon. Ngôn ngữ theo đúng phạm vi đăng ký. |
| 4 | **Đối tượng cây trồng & liều dùng** | Bảng: cây trồng – liều lượng – cách bón – thời điểm. Phân tách rõ nhóm đã đăng ký và nhóm khuyến cáo tham khảo. |
| 5 | **Hướng dẫn sử dụng & lưu ý** | Danh sách bước + cảnh báo bảo quản |
| 6 | **Xuất xứ & công nghệ sản xuất** | Nhà sản xuất, địa chỉ Gangwon, viện nghiên cứu, công nghệ Alkaline, bảo hộ độc quyền công nghệ |
| 7 | **Hồ sơ pháp lý** | Số quyết định lưu hành, mã số phân bón, đơn vị nhập khẩu, ảnh nhãn phụ. *(Sản phẩm chưa hoàn tất đăng ký: hiển thị dòng trạng thái thay cho số quyết định.)* |
| 8 | **Câu hỏi thường gặp** | Accordion 4 – 5 câu |
| 9 | **Dịch vụ liên quan** | Card dẫn sang dịch vụ tương ứng |
| 10 | **Sản phẩm khác trong bộ K-SON** | Slider card |
| 11 | CTA cuối + Footer | G-05, G-06 |

---

### 3.8 · `/tin-tuc` — TIN TỨC & SỰ KIỆN

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Banner trang | Tiêu đề + breadcrumb |
| 2 | **Bài nổi bật** | 1 bài lớn + 2 bài nhỏ bên cạnh |
| 3 | **Bộ lọc chuyên mục** | Tab ngang: Tất cả · Sự kiện & hợp tác · Kỹ thuật canh tác · Tin ngành & chính sách |
| 4 | **Lưới bài viết** | Grid card (G-09) + phân trang / tải thêm |
| 5 | **Đăng ký nhận tin** | Form email + SĐT |
| 6 | Footer | G-06 |

### `/tin-tuc/[slug]` — BÀI VIẾT CHI TIẾT

1. Breadcrumb + tiêu đề + chuyên mục + ngày đăng
2. Ảnh đại diện
3. Mục lục bài viết *(bài dài)*
4. Nội dung bài
5. Khối chia sẻ (Zalo, Facebook)
6. Khối CTA giữa/cuối bài — dẫn sang dịch vụ hoặc sản phẩm liên quan
7. Bài viết liên quan
8. Footer

---

### 3.9 · `/dang-ky-khao-sat` — LANDING PAGE CHUYỂN ĐỔI

Trang tối giản, **không có menu header đầy đủ** (chỉ logo + hotline) để hạn chế thoát trang.

| # | Section | Nội dung chính |
|---|---|---|
| 1 | **Hero + Form** | Form ngay màn hình đầu: Họ tên, SĐT/Zalo, Xã–Tỉnh, Diện tích, Số cây, Vấn đề đang gặp (chọn nhiều), Ghi chú. Nút "Đăng ký khảo sát miễn phí". |
| 2 | **Khảo sát vườn gồm những gì** | 4 – 5 bước có icon |
| 3 | **Chủ vườn nhận được gì sau buổi khảo sát** | 3 – 4 mục |
| 4 | **Cam kết** | Miễn phí, không ép mua, bảo mật thông tin vườn |
| 5 | **Chứng thực** | Ảnh thực tế đội kỹ thuật tại vườn + trích dẫn ngắn |
| 6 | **FAQ ngắn** | 3 câu |
| 7 | **Form nhắc lại** | Lặp lại form ở cuối trang |

**Kết nối dữ liệu:** form → Google Sheets → thông báo Zalo cho đội sale. `/cam-on` là trang xác nhận, dùng để gắn mã theo dõi chuyển đổi.

---

### 3.10 · `/dai-ly` — CHƯƠNG TRÌNH ĐẠI LÝ

| # | Section | Nội dung chính |
|---|---|---|
| 1 | Hero | Câu định vị cho đại lý vật tư nông nghiệp |
| 2 | **Vì sao hợp tác với Silica** | 4 – 5 lợi ích: sản phẩm độc quyền, hỗ trợ kỹ thuật, bảo vệ kênh, biên lợi nhuận |
| 3 | **Chính sách bảo vệ kênh** | **Khối bắt buộc** — cam kết không phá giá kênh khi bán online |
| 4 | **Quyền lợi theo cấp đại lý** | Bảng phân cấp |
| 5 | **Hỗ trợ từ Silica** | Vật phẩm bán hàng, hội thảo nhà vườn, mô hình trình diễn, đào tạo kỹ thuật |
| 6 | **Quy trình trở thành đại lý** | 4 bước |
| 7 | **Form đăng ký** | Tên cửa hàng, người đại diện, SĐT, khu vực, quy mô |
| 8 | Footer | G-06 |

---

### 3.11 · `/chinh-sach/*` — CÁC TRANG CHÍNH SÁCH

Layout chung, đơn giản: Breadcrumb → Tiêu đề → Ngày cập nhật → Mục lục neo → Nội dung văn bản → Khối liên hệ hỗ trợ → Footer.

| Trang | Nội dung phải có |
|---|---|
| Bảo mật thông tin | Loại dữ liệu thu thập, mục đích, thời gian lưu, quyền của khách hàng, đầu mối liên hệ |
| Mua hàng & thanh toán | Hình thức đặt hàng, phương thức thanh toán, thông tin tài khoản MB Bank, xuất hóa đơn |
| Vận chuyển & giao nhận | Khu vực giao, thời gian, phí, kiểm tra hàng khi nhận |
| Đổi trả & bảo hành | Điều kiện đổi trả, thời hạn, quy trình khiếu nại chất lượng |
| Chính sách đại lý & phân phối | Điều kiện, cấp đại lý, cam kết bảo vệ kênh |
| Điều khoản sử dụng | Quy định sử dụng website, sở hữu trí tuệ, giới hạn trách nhiệm |

---

### 3.12 · TRANG HỆ THỐNG

- **`/404`** — thông báo ngắn + ô tìm kiếm + link nhanh về Trang chủ, Dịch vụ, Sản phẩm, Liên hệ
- **`/tim-kiem`** — kết quả gộp cả sản phẩm, dịch vụ, bài viết

---

## 4. ƯU TIÊN TRIỂN KHAI

| Giai đoạn | Trang | Lý do |
|---|---|---|
| **Ưu tiên 1** | Trang chủ · 4 trang dịch vụ · `/dang-ky-khao-sat` · Footer + chính sách cơ bản | Trực tiếp phục vụ bán hàng và chiến dịch quảng cáo |
| **Ưu tiên 2** | `/san-pham` + 5 trang chi tiết sản phẩm · `/gioi-thieu` · `/lien-he` | Hỗ trợ thuyết phục và xây uy tín |
| **Ưu tiên 3** | `/tin-tuc` + chuyên mục · `/dai-ly` | Nội dung dài hạn, SEO |

**QR code:** mỗi trang sản phẩm và mỗi trang dịch vụ cần một URL cố định để in QR lên bao bì, tài liệu bán hàng và standee tại hội thảo. Không đổi slug sau khi đã in.

---

## 5. LƯU Ý BẮT BUỘC CHO NGƯỜI DỰNG TRANG

1. **Không dùng từ "Silicon"** ở bất kỳ vị trí nào trên website. Gọi công nghệ là **"Alkaline"**.
2. **Không công bố** hàm lượng SiO₂, hàm lượng CaO thực tế, hay nguồn gốc nguyên liệu. Thành phần chỉ hiển thị đúng theo nhãn phụ đã đăng ký.
3. **Không dùng ngôn ngữ phòng trừ sâu bệnh** ("ngừa", "phòng", "diệt") cho sản phẩm phân bón. Dùng "tăng khả năng chống chịu".
4. **Tag trạng thái đăng ký là bắt buộc** trên mọi card và trang sản phẩm. Dr. Calcium và Star Fish hiện đang hoàn tất đăng ký — không được hiển thị như sản phẩm đã lưu hành.
5. Silicate Liquid đăng ký cho **lúa**, Sulfur Silicate Liquid đăng ký cho **cà chua**. Nội dung trang không được viết như thể đã đăng ký cho sầu riêng.
6. Trang dịch vụ thuốc BVTV giữ định vị **tư vấn**, không có nút mua thuốc, không có bảng giá thuốc.
7. Mọi nội dung dẫn chiếu quy định pháp luật phải có dòng "Cập nhật ngày …" vì quy định về mã số vùng trồng đang trong giai đoạn sửa đổi.

---

*Tài liệu nội bộ — Công ty TNHH Silica*

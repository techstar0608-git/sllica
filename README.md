# Website Silica

Next.js 16 (App Router) + Tailwind v4 + TypeScript.

## Chạy

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start
```

## Nội dung

Toàn bộ chữ trên web nằm trong `src/content/`, không viết thẳng vào JSX:

| File | Nội dung |
|---|---|
| `services.ts` | 4 dịch vụ — lấy **nguyên văn** từ `docs/BRIEF_4_DICH_VU.md` |
| `products.ts` | 5 sản phẩm K-SON — bản chi tiết khách cung cấp 25/08/2026 |
| `site.ts` | Thông tin công ty, CTA, gói dịch vụ, danh sách vấn đề trong form |

Sửa nội dung thì sửa ở đây, không sửa trong `src/app/`.

> ⚠ **Cần duyệt lại:** `products.ts` có vài điểm lệch với mục "LƯU Ý TUÂN THỦ"
> ở cuối brief (công bố SiO₂/CaO, ngôn ngữ phòng trừ sâu bệnh cho phân bón,
> từ "hữu cơ"). Khách đã chọn đăng nguyên văn — chi tiết ghi trong comment đầu file.

## Routes

| URL | Trang |
|---|---|
| `/` | Trang chủ |
| `/dich-vu` | Tổng quan 4 dịch vụ |
| `/dich-vu/[slug]` | 4 trang dịch vụ, chung khung 9 khối |
| `/dang-ky-khao-sat` → `/cam-on` | Form chuyển đổi |
| `/landing/kson-sulfur-silicate` | Landing page cũ, chuyển từ WordPress |
| `/[batch]` | Trang truy xuất lô hàng (QR trên bao bì) |

### Trang truy xuất lô hàng

`/2026-nk-im01-sc02-th01-001/` và các lô sau này. **Không đổi slug** — mã QR đã
in trên bao bì đang trỏ về đúng URL này.

Thêm lô mới: chép một khối trong `src/content/batches.ts`, sửa `slug`,
`batchCode`, `producedAt`, `expiresAt`. Phần mô tả sản phẩm dùng chung
`SOIL_CONDITIONER` nên không phải chép lại.

Trang này cố ý không có header/footer chung (người quét QR chỉ xem thông tin
lô). Các trang còn lại nằm trong route group `(chrome)`.

## Form

Cả 2 form gửi thẳng lên Google Apps Script từ trình duyệt (`src/lib/lead.ts`),
vì site build ở chế độ static export nên không có server.

Tên trường giữ đúng như bản WordPress cũ (`hoten`, `sdt`, `email`, `cty`,
`mucdich`) để Apps Script và sheet đang chạy không phải sửa. Form khảo sát gộp
phần riêng của nó (xã/tỉnh, diện tích, số cây, vấn đề) vào `mucdich`.

> Endpoint dùng `mode: "no-cors"` nên trình duyệt **không đọc được response** —
> gửi xong là chuyển sang `/cam-on`, không phân biệt được Apps Script nhận
> thành công hay lỗi. Cần chắc chắn thì phải đổi Apps Script để trả CORS header.

Đổi endpoint qua `.env.example`.

## Deploy — Cloudflare Workers (Static Assets)

Site xuất HTML tĩnh vào `out/` (`output: "export"` trong `next.config.ts`),
`wrangler.toml` cấu hình Workers phục vụ thư mục đó. Không có file worker nào —
site thuần tĩnh.

Cấu hình khi tạo project trên Cloudflare:

| Mục | Giá trị |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Deploy tay:

```bash
npm run build && npx wrangler deploy
```

`public/_headers` đặt sẵn security header và cache cho `/_next/static/*`.

`trailingSlash: true` nên `/dich-vu` được Cloudflare tự chuyển sang
`/dich-vu/` (307) rồi trả đúng trang.

Xem trước bản tĩnh ở local:

```bash
npm run build && npx serve out
```

## Style

Ngôn ngữ thiết kế lấy từ landing page K-SON đang chạy tại silica.vn: nền sáng,
tiêu đề xanh đậm căn giữa, thẻ trắng bo tròn, pill badge có chấm màu.
Token màu trong `src/app/globals.css`. Mobile first, chữ tối thiểu 16px.

CSS của landing page cũ giữ nguyên trong `legacy.css`, đã scope dưới
`.legacy-landing` nên không ảnh hưởng các trang khác.

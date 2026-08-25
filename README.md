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

## Form

- `/dang-ky-khao-sat` → `src/app/actions.ts`. Chưa set `SILICA_SHEETS_WEBHOOK_URL`
  thì lead ghi ra log server (không mất, nhưng chưa vào Sheets).
- Landing page cũ → `src/app/landing/kson-sulfur-silicate/actions.ts`, đã nối sẵn
  Apps Script của bản WordPress.

Xem `.env.example`.

## Style

Ngôn ngữ thiết kế lấy từ landing page K-SON đang chạy tại silica.vn: nền sáng,
tiêu đề xanh đậm căn giữa, thẻ trắng bo tròn, pill badge có chấm màu.
Token màu trong `src/app/globals.css`. Mobile first, chữ tối thiểu 16px.

CSS của landing page cũ giữ nguyên trong `legacy.css`, đã scope dưới
`.legacy-landing` nên không ảnh hưởng các trang khác.

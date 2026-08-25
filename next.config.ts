import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Neo root vào thư mục dự án, tránh Next suy ra nhầm thư mục home.
  turbopack: { root: __dirname },

  // Xuất HTML tĩnh vào out/ để deploy lên Cloudflare Pages.
  // Không có server nên form gửi thẳng lên Apps Script từ trình duyệt
  // (xem src/lib/lead.ts).
  output: "export",

  // Cloudflare Pages phục vụ file tĩnh, không chạy được trình tối ưu ảnh
  // của Next. Ảnh giữ nguyên kích thước gốc.
  images: { unoptimized: true },

  // Mỗi route thành một thư mục có index.html, để /dich-vu và /dich-vu/
  // đều trỏ đúng file khi host tĩnh.
  trailingSlash: true,
};

export default nextConfig;

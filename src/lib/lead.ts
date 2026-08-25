/**
 * Gửi lead thẳng từ trình duyệt vào Google Apps Script.
 *
 * Site build ở chế độ static export (Cloudflare Pages) nên không có server để
 * chạy Server Action — form phải tự gọi Apps Script. Endpoint dùng `no-cors`,
 * nghĩa là trình duyệt KHÔNG đọc được response: gửi xong coi như xong, không
 * phân biệt được Apps Script nhận thành công hay lỗi.
 *
 * Tên trường giữ đúng như bản WordPress cũ (hoten, sdt, email, cty, mucdich)
 * để không phải sửa Apps Script và sheet đang chạy.
 */
export const GAS_URL =
  process.env.NEXT_PUBLIC_SILICA_GAS_URL ??
  "https://script.google.com/macros/s/AKfycbzxRoeUSSEeJoPT2Dl3IiJjKEtUJ_0kMyee7k9-pMbuzYAyX09YOB86JGx3zWICcYxnjw/exec";

export type LeadPayload = Record<string, string>;

export async function sendLead(payload: LeadPayload): Promise<void> {
  const body = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    body.append(key, value);
  }
  await fetch(GAS_URL, { method: "POST", mode: "no-cors", body });
}

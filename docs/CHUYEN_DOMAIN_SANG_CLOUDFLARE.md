# Chuyển silica.vn từ Hostinger sang Cloudflare

**Tình huống:** domain mua ở Hostinger · thay hẳn web cũ bằng site Next.js mới
**Đích:** Worker `sllica` (https://sllica.tech-star0608.workers.dev)

> ⚠️ **Không transfer domain.** Domain vẫn thuộc Hostinger, chỉ đổi *nameserver*
> để Cloudflare quản lý DNS. Không tốn phí, không cần mã EPP, không chờ 60 ngày.

---

## ⚠️ Rủi ro lớn nhất: mất email @silica.vn

Domain đang chạy email công ty qua **Lark Suite**. Đổi nameserver mà chưa tạo
lại bản ghi MX/TXT thì email ngừng nhận thư **ngay lập tức**, thư gửi tới bị
trả về và **mất luôn**.

→ Bắt buộc làm xong **Bước 2** trước khi làm **Bước 3**. Không được đảo thứ tự.

---

## Bước 1 — Thêm domain vào Cloudflare

1. Đăng nhập https://dash.cloudflare.com (tài khoản `tech.star0608@gmail.com`)
2. **Add a domain** → nhập `silica.vn` → chọn gói **Free**
3. Cloudflare tự quét DNS hiện có. **Quét tự động thường sót bản ghi** —
   phải đối chiếu với file Xuất ở Bước 2.
4. **ĐÃ XONG (26/08/2026).** Zone ID: `b9806e92b154c18a89efe28ae4aa369a`
   Account: `723e3606077cdf9c3f9e3585fb4397ce` (đúng tài khoản chứa worker sllica)

   Nameserver Cloudflare cấp:
   ```
   beau.ns.cloudflare.com
   isla.ns.cloudflare.com
   ```

---

## Bước 2 — Xuất DNS từ Hostinger (làm ĐẦU TIÊN)

Trong trang **DNS / Máy chủ tên miền** của Hostinger, góc trên phải có nút
**"Xuất"**. Bấm để tải file chứa **toàn bộ** bản ghi.

Đây là bước quan trọng nhất: danh sách trên màn hình còn cuộn tiếp, dễ sót
bản ghi. File xuất ra mới là bản đầy đủ, và chuỗi DKIM dài phải copy chính
xác từ đó — không gõ tay.

---

## Bước 3 — Tạo lại bản ghi email trong Cloudflare (trước khi đổi NS)

Vào **DNS > Records**, đối chiếu với `docs/DNS_SILICA_VN_BACKUP.md` và file
vừa xuất. Thiếu cái nào thêm vào:

### MX — email Lark
| Type | Name | Mail server        | Priority | Proxy    |
|------|------|--------------------|----------|----------|
| MX   | @    | mx1.larksuite.com  | 1        | DNS only |
| MX   | @    | mx2.larksuite.com  | 5        | DNS only |
| MX   | @    | mx3.larksuite.com  | 10       | DNS only |

### TXT
| Type | Name                      | Content |
|------|---------------------------|---------|
| TXT  | @                         | `v=spf1 +include:spf.onlarksuite.com -all` |
| TXT  | @                         | `verification-code-site-App_lark=fIsQyQ1RN2N5YhxYw3TV` |
| TXT  | _dmarc                    | `v=DMARC1; p=none; rua=mailto:huunx@silica.vn` |
| TXT  | lark2603050413._domainkey | chuỗi DKIM dài — copy từ file Xuất |
| TXT  | demo                      | `google-site-verification=c36vDIlrbKrjCmq6q6Dn-UJrNU4vBxPo0DTfj3EBUUk` |

> 🔑 **Toàn bộ bản ghi email để "DNS only" (mây xám), KHÔNG bật proxy (mây cam).**
> Bật proxy cho MX là email chết.

### ✅ Đã kiểm tra thực tế zone Cloudflare (26/08/2026)

Truy vấn thẳng `beau.ns.cloudflare.com` cho kết quả:

| Bản ghi | Trạng thái |
|---|---|
| MX mx1/mx2/mx3.larksuite.com | ✅ đã có |
| TXT SPF | ✅ đã có |
| TXT mã xác minh Lark | ✅ đã có |
| TXT _dmarc | ✅ đã có |
| **TXT lark2603050413._domainkey (DKIM)** | ❌ **THIẾU — phải thêm tay** |

Quét tự động của Cloudflare bỏ sót DKIM (chuỗi quá dài). Thiếu bản ghi này
email vẫn gửi nhận được nhưng mất chữ ký, dễ bị đánh dấu spam.

**Cách thêm:** DNS > Records > Add record
- Type: `TXT`
- Name: `lark2603050413._domainkey`
- Content: copy chuỗi DKIM từ file Xuất của Hostinger (bắt đầu `v=DKIM1; k=rsa; p=...`)
- TTL: Auto · Proxy: không áp dụng với TXT

**Chưa thêm** ALIAS `@` và CNAME `www` của Hostinger — web mới sẽ tự tạo ở Bước 5.

---

## Bước 4 — Đổi nameserver tại Hostinger

Chỉ làm khi Bước 3 đã xong.

1. Đăng nhập Hostinger → **Domains** → chọn `silica.vn`
2. Vào **DNS / Nameservers**
3. Chọn **Change nameservers** → **Use custom nameservers**
4. Xoá NS cũ (`athena.dns-parking.com`, `apollo.dns-parking.com`),
   dán 2 NS Cloudflare ở Bước 1
5. Lưu lại

Thời gian có hiệu lực: thường 15 phút – 2 giờ, tối đa 24 giờ.
Cloudflare gửi email khi domain chuyển sang trạng thái **Active**.

---

## Bước 5 — Trỏ domain về web mới

Chỉ làm khi Cloudflare báo domain **Active**.

1. Dashboard → **Workers & Pages** → chọn worker **`sllica`**
2. Tab **Settings** → **Domains & Routes** → **Add** → **Custom Domain**
3. Thêm lần lượt:
   - `silica.vn`
   - `www.silica.vn`
4. Cloudflare **tự tạo bản ghi và tự cấp SSL**. Không cần tự thêm A/CNAME.

> Sau khi thêm xong, vào DNS > Records **xoá** ALIAS `@` → `silica.vn.cdn.hstgr.net`
> và CNAME `www` → `www.silica.vn.cdn.hstgr.net` nếu chúng được copy sang.
> Để lại sẽ tranh chấp với bản ghi Cloudflare tự tạo.

---

## Bước 6 — Kiểm tra sau khi xong

```sh
# Nameserver đã về Cloudflare chưa
dig +short NS silica.vn

# Web mới đã lên chưa (phải ra 200)
curl -s -o /dev/null -w '%{http_code}\n' https://silica.vn/
curl -s -o /dev/null -w '%{http_code}\n' https://silica.vn/chinh-sach/

# EMAIL — quan trọng nhất, phải thấy 3 dòng larksuite
dig +short MX silica.vn
dig +short TXT silica.vn
dig +short TXT lark2603050413._domainkey.silica.vn
```

**Kiểm tra thật:** gửi 1 email từ Gmail cá nhân tới `huunx@silica.vn`
và xác nhận nhận được. Đây là bằng chứng chắc chắn nhất.

---

## Việc cần làm thêm

- [ ] **SSL/TLS mode**: đặt **Full (strict)**. Để "Flexible" sẽ lặp chuyển hướng.
- [ ] **Redirect www**: Rules > Redirect Rules, đưa `www.silica.vn` → `silica.vn`
      (hoặc ngược lại) để tránh trùng nội dung, hại SEO.
- [ ] **Web cũ Hostinger**: giữ nguyên ít nhất 1–2 tuần, đừng xoá vội.
      Có sự cố còn trỏ NS ngược lại được.
- [ ] **URL cũ**: web WordPress cũ có URL nào đang chạy quảng cáo hoặc đã in
      trên bao bì thì liệt kê ra, cần thêm redirect sang trang mới tương ứng —
      nếu không sẽ mất thứ hạng Google và khách bấm vào gặp 404.
- [ ] **/dang-ky-khao-sat** giờ trả 404 (đã ẩn theo yêu cầu). Nếu URL này từng
      chạy ads thì cần redirect về trang chủ.

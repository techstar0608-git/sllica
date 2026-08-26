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

## Bước 4 — Dọn bản ghi web cũ + thêm Custom Domain

**Quyết định (26/08/2026):** thay hẳn web cũ → xoá bản ghi Hostinger ngay.
Bỏ qua TXT `demo` (subdomain không còn dùng).

### 4a. Xoá 5 bản ghi trỏ Hostinger

Cloudflare quét tự động đã tạo và **bật Proxy (mây cam)** cho các bản ghi sau.
Để nguyên sẽ gây lỗi SSL và xung đột với Custom Domain của worker.

| Name       | Type  | Content                     |
|------------|-------|-----------------------------|
| silica.vn  | A     | 148.135.128.254             |
| silica.vn  | A     | 77.37.76.251                |
| silica.vn  | AAAA  | 2a02:4780:4f:c523:f9e8:612b:bfd5:6b |
| silica.vn  | AAAA  | 2a02:4780:4e:34cf:1ef3:a67f:743c:9c3b |
| www        | CNAME | www.silica.vn.cdn.hstgr.net |

→ Tick chọn cả 5 dòng → **Delete**.

> **Giữ nguyên** toàn bộ MX và TXT — đó là email, không được đụng.

### 4b. Thêm DKIM còn thiếu

**Add record** → Type `TXT` · Name `lark2603050413._domainkey`
· Content: chuỗi DKIM copy từ file **Xuất** của Hostinger.

### 4c. Thêm Custom Domain vào worker (làm LUÔN, trước khi đổi NS)

Worker nhận Custom Domain được cả khi zone còn *pending*. Làm trước để khi
nameserver có hiệu lực là web mới lên ngay, không có khoảng trống.

1. **Workers & Pages** → worker **`sllica`**
2. **Settings** → **Domains & Routes** → **Add** → **Custom Domain**
3. Thêm `silica.vn`, rồi thêm tiếp `www.silica.vn`

Cloudflare tự tạo bản ghi và cấp SSL.

### Checklist trước khi sang Bước 5

- [ ] Đã xoá 5 bản ghi A/AAAA/CNAME trỏ Hostinger
- [ ] Đã thêm TXT DKIM `lark2603050413._domainkey`
- [ ] MX ×3 còn nguyên, để **DNS only**
- [ ] TXT SPF + xác minh Lark + _dmarc còn nguyên
- [ ] Đã thêm Custom Domain `silica.vn` và `www.silica.vn` vào worker

---

## Bước 5 — Đổi nameserver tại Hostinger

Chỉ làm khi checklist Bước 4 đã xong hết.

1. Đăng nhập Hostinger → **Domains** → chọn `silica.vn`
2. Vào **DNS / Nameservers**
3. Chọn **Change nameservers** → **Use custom nameservers**
4. Xoá NS cũ (`athena.dns-parking.com`, `apollo.dns-parking.com`), dán:
   ```
   beau.ns.cloudflare.com
   isla.ns.cloudflare.com
   ```
5. Lưu lại

Thời gian có hiệu lực: thường 15 phút – 2 giờ, tối đa 24 giờ.
Cloudflare gửi email khi domain chuyển sang trạng thái **Active**.

---

> ⚠️ **Tránh khung 09:00–10:00 UTC Thứ Bảy 29/08/2026** (16:00–17:00 giờ VN) —
> Cloudflare bảo trì, thay đổi cấu hình có thể lỗi.

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

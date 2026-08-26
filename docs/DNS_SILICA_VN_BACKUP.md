# Sao lưu DNS silica.vn — trước khi chuyển sang Cloudflare

**Ngày chụp:** 26/08/2026
**Nguồn:** trang quản trị DNS Hostinger + truy vấn `dig`

> ⚠️ Các bản ghi EMAIL phải được tạo lại trong Cloudflare **TRƯỚC KHI** đổi
> nameserver. Thiếu là email @silica.vn ngừng hoạt động ngay.

## Nameserver hiện tại (Hostinger)
```
athena.dns-parking.com
apollo.dns-parking.com
```

---

## NHÓM 1 — EMAIL (Lark Suite) · BẮT BUỘC GIỮ

### MX
| Type | Name | Content            | Priority | Proxy    |
|------|------|--------------------|----------|----------|
| MX   | @    | mx1.larksuite.com  | 1        | DNS only |
| MX   | @    | mx2.larksuite.com  | 5        | DNS only |
| MX   | @    | mx3.larksuite.com  | 10       | DNS only |

### SPF / DMARC
| Type | Name   | Content |
|------|--------|---------|
| TXT  | @      | `v=spf1 +include:spf.onlarksuite.com -all` |
| TXT  | _dmarc | `v=DMARC1; p=none; rua=mailto:huunx@silica.vn` |

### DKIM — selector `lark2603050413._domainkey`
Chuỗi rất dài, **phải copy nguyên vẹn từ Hostinger**, không gõ tay.
Dùng nút **Xuất** trong Hostinger để lấy chính xác.

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArEcSsqdp3tbSX33eDKYTsQhVWtEOaTxQl/QPu3FPisPeBWZABvv4RYmhYUckKu+AmXoUrIghOTV2KL8/DJCUO/gp8BOfMIaaZs8Oyfz2xzXjNsabNT54LzZxRCH55iIeFtHpuS6JhncD4r+zNYn0gWfkgjTjhtfCYojQLYENtjGJT6/2e+anlETgLHyol/5ig6acRu9WjnpxHR9MNTPveLnF8G+b7wtRq4eOgkHS9iC2WfM8Qil+KKE2r56/w8Orzsc7iZvH8tiAOLNnJ6Y9ZeWHUmFsNICDWPBatOS7Z47ZP8EjvbsS+S2FyY1mU2GtwbjVrdcClV13bWNS1YuCfwIDAQAB
```

> ⚠️ Chuỗi trên chép lại từ ảnh chụp màn hình — **phải đối chiếu với bản Xuất
> từ Hostinger trước khi dùng**. Sai một ký tự là DKIM hỏng.

---

## NHÓM 2 — Xác minh dịch vụ · nên giữ

| Type | Name | Content |
|------|------|---------|
| TXT  | @    | `verification-code-site-App_lark=fIsQyQ1RN2N5YhxYw3TV` |
| TXT  | demo | `google-site-verification=c36vDIlrbKrjCmq6q6Dn-UJrNU4vBxPo0DTfj3EBUUk` |

---

## NHÓM 3 — WEB CŨ (Hostinger) · SẼ THAY THẾ

| Type  | Name | Content                     |
|-------|------|-----------------------------|
| ALIAS | @    | silica.vn.cdn.hstgr.net     |
| CNAME | www  | www.silica.vn.cdn.hstgr.net |

IP phân giải ra (tham khảo): 91.108.119.92 · 185.124.137.57

> Sau khi thêm Custom Domain vào Worker, **xoá 2 bản ghi này** để tránh tranh chấp.

---

## Đích đến mới

Worker `sllica` → https://sllica.tech-star0608.workers.dev
Cấu hình: Workers & Pages > sllica > Settings > Domains & Routes > Add Custom Domain.
Cloudflare tự tạo bản ghi và cấp SSL.

---

## ⚠️ Danh sách trong file này có thể CHƯA ĐỦ

Ảnh chụp màn hình chỉ thấy được 6 bản ghi đầu, danh sách còn cuộn tiếp.
**Trước khi đổi nameserver, bấm nút "Xuất" trong Hostinger** để tải file DNS
đầy đủ và đối chiếu lại toàn bộ.

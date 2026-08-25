import type { Metadata } from "next";
import { LegacyForm } from "./legacy-form";
import "./legacy.css";

export const metadata: Metadata = {
  title: "K-SON Sulfur Silicate Liquid — Cây ăn trái khỏe",
  description:
    "Kết hợp Nano Silicate ion hóa + Lưu huỳnh sinh học. Phòng ngừa 8+ loại sâu bệnh — hữu cơ, an toàn, không dư lượng PLS.",
  alternates: { canonical: "/landing/kson-sulfur-silicate" },
};

/**
 * Landing page K-SON Sulfur Silicate — chuyển nguyên trạng từ bản WordPress
 * đang chạy tại silica.vn, nay dời về /landing/kson-sulfur-silicate để nhường
 * URL gốc cho trang chủ. Giữ nguyên markup và CSS của bản cũ.
 */
export default function KsonSulfurSilicateLanding() {
  return (
    <div className="legacy-landing">

          <section className="hero">
            <div className="container hero-grid">
              <div>
                <span className="pill">🌿 Phòng trừ sâu bệnh sinh học • Dạng lỏng</span>
                <h1>Cây ăn trái khỏe —<br />Không thuốc hóa học</h1>
                <p className="lead">
                  Kết hợp Nano Silicate ion hóa + Lưu huỳnh sinh học. Phòng ngừa 8+
                  loại sâu bệnh — hữu cơ, an toàn, không dư lượng PLS.
                </p>
                <div className="hero-badges">
                  <span className="badge s"
                    ><span className="dot">S</span> Lưu huỳnh S &gt; 23%</span
                  >
                  <span className="badge si"
                    ><span className="dot">Si</span> Silic Si 14%</span
                  >
                  <span className="badge org"
                    ><span className="dot">🌱</span> Hữu cơ sinh học</span
                  >
                </div>
                <a href="#dangky" className="btn">Đăng ký nhận sản phẩm mẫu →</a>
                <div className="hero-check">
                  <span>Hiệu quả cao</span>
                  <span>An toàn sinh học</span>
                  <span>Bảo vệ môi trường</span>
                </div>
              </div>
              <div className="hero-bottle">
                <img src="/img/bottle.png" alt="K-SON Sulfur Silicate Liquid 500ml" />
              </div>
            </div>
          </section>

    
          <div className="container">
            <div className="trust">
              <div className="item">
                <div className="ico"><img src="/img/ic-korea.png" alt="" /></div>
                <div><b>Nhập khẩu</b><small>Hàn Quốc</small></div>
              </div>
              <div className="item">
                <div className="ico"><img src="/img/ic-bio.png" alt="" /></div>
                <div><b>Lưu huỳnh</b><small>sinh học</small></div>
              </div>
              <div className="item">
                <div className="ico"><img src="/img/ic-shield.png" alt="" /></div>
                <div><b>Không dư lượng</b><small>PLS</small></div>
              </div>
              <div className="item">
                <div className="ico"><img src="/img/ic-flask.png" alt="" /></div>
                <div><b>Saturn Bio Tech</b><small>20 năm R&D</small></div>
              </div>
            </div>
          </div>

    
          <section>
            <div className="container">
              <h2 className="section-title">
                Sâu bệnh ngày càng kháng thuốc —<br />chi phí ngày càng tăng?
              </h2>
              <p className="section-sub">
                Hiệu lực thuốc hóa học giảm dần, chi phí tăng cao, dư lượng thuốc BVTV
                ngày càng là rào cản lớn cho nông sản xuất khẩu.
              </p>
              <div className="cards-3">
                <div className="pcard">
                  <div className="picon"><img src="/img/ic-spray.png" alt="" /></div>
                  <h3>Thuốc hóa học mất dần hiệu quả</h3>
                  <p>
                    Sâu bệnh kháng thuốc sau nhiều vụ. Tăng liều, tăng chi phí, hiệu
                    quả giảm.
                  </p>
                </div>
                <div className="pcard">
                  <div className="picon"><img src="/img/ic-apple.png" alt="" /></div>
                  <h3>Dư lượng thuốc BVTV trên trái</h3>
                  <p>Rào cản xuất khẩu và tiêu thụ thị trường cao cấp.</p>
                </div>
                <div className="pcard">
                  <div className="picon"><img src="/img/ic-soil.png" alt="" /></div>
                  <h3>Phun nhiều — đất và cây yếu dần</h3>
                  <p>Phá vỡ hệ vi sinh đất, sức đề kháng tự nhiên của cây suy yếu.</p>
                </div>
              </div>
            </div>
          </section>

    
          <section className="solution">
            <div className="container">
              <h2 className="section-title">Giải pháp sinh học — Hiệu quả kép</h2>
              <p className="section-sub">
                Lưu huỳnh diệt sâu bệnh. Silicate tạo tường rào bảo vệ. Hai cơ chế —
                một sản phẩm.
              </p>
              <div className="cards-2">
                <div className="scard">
                  <div className="sicon"><img src="/img/ic-shield-plant.png" alt="" /></div>
                  <div>
                    <div className="tag">Phòng + Trị</div>
                    <h3>Phòng ngừa 8+ loại sâu bệnh</h3>
                    <p>
                      Thán thư, Sương mai, Phấn trắng, Đạo ôn, Rệp, Bọ trĩ, Nhện đỏ,
                      Ruồi trắng.
                    </p>
                  </div>
                </div>
                <div className="scard">
                  <div className="sicon"><img src="/img/ic-bio.png" alt="" /></div>
                  <div>
                    <div className="tag">Vật lý • Sinh học • Phân tử</div>
                    <h3>Cơ chế tác động 3 lớp</h3>
                    <p>
                      Silicon vật lý ngăn nấm. Lưu huỳnh diệt nấm/côn trùng. Enzyme
                      kháng khuẩn kích hoạt từ bên trong.
                    </p>
                  </div>
                </div>
                <div className="scard">
                  <div className="sicon"><img src="/img/ic-safety.png" alt="" /></div>
                  <div>
                    <div className="tag">An toàn • Hữu cơ</div>
                    <h3>Hữu cơ — Không dư lượng PLS</h3>
                    <p>
                      Không liên quan PLS. An toàn người dùng, không hại đến thiên
                      địch có lợi.
                    </p>
                  </div>
                </div>
                <div className="scard">
                  <div className="sicon"><img src="/img/veggies.png" alt="" /></div>
                  <div>
                    <div className="tag">Đa cây trồng</div>
                    <h3>Dùng được mọi loại cây trồng</h3>
                    <p>Lúa, ớt, dưa, dâu tây, cà chua, xoài, nhãn, sầu riêng…</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

    
          <section>
            <div className="container">
              <h2 className="section-title">Thông số kỹ thuật</h2>
              <div className="specs-grid">
                <div className="specs-card">
                  <h4>Thành phần</h4>
                  <div className="bottle-mini">
                    <img src="/img/bottle.png" alt="K-SON bottle" />
                  </div>
                  <table>
                    <tr>
                      <th>Chỉ tiêu</th>
                      <th>Hàm lượng</th>
                      <th>Ghi chú</th>
                    </tr>
                    <tr>
                      <td>Lưu huỳnh (S)</td>
                      <td>&gt; 23%</td>
                      <td>Lưu huỳnh sinh học</td>
                    </tr>
                    <tr>
                      <td>Silic (Si)</td>
                      <td>14%</td>
                      <td>Nano Silicate ion hóa</td>
                    </tr>
                    <tr>
                      <td>Dạng lưu huỳnh</td>
                      <td>Hạt 1–4 micron</td>
                      <td>Tác dụng nhanh</td>
                    </tr>
                  </table>
                </div>
                <div className="specs-card">
                  <h4>Cây trồng / Sâu bệnh / Liều dùng</h4>
                  <table>
                    <tr>
                      <th>Cây trồng</th>
                      <th>Sâu bệnh</th>
                      <th>Liều dùng</th>
                      <th>Tần suất</th>
                    </tr>
                    <tr>
                      <td>Lúa</td>
                      <td>Đạo ôn</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Ớt</td>
                      <td>Thán thư, Bọ trĩ</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Dưa chuột</td>
                      <td>Phấn trắng</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Dưa lê</td>
                      <td>Sương mai</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Cải thảo</td>
                      <td>Rệp</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Dâu tây</td>
                      <td>Bọ ve</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                    <tr>
                      <td>Cà chua</td>
                      <td>Ruồi trắng</td>
                      <td>20ml/20L (1.000 lần)</td>
                      <td>2–3 lần, cách 5–7 ngày</td>
                    </tr>
                  </table>
                  <div className="specs-meta">
                    Quy cách: Dạng lỏng • Xuất xứ: Saturn Bio Tech, Korea • Đóng gói:
                    cập nhật sau
                  </div>
                </div>
              </div>
            </div>
          </section>

    
          <section className="usage">
            <div className="container">
              <h2 className="section-title">Cách dùng đúng — Hiệu quả tối ưu</h2>
              <div className="steps">
                <div className="step">
                  <div className="num">1</div>
                  <div className="sicon2"><img src="/img/ic-magleaf.png" alt="" /></div>
                  <h4>Xác định tình trạng</h4>
                  <p>
                    Phòng ngừa: phun định kỳ. Đang có bệnh: phun 2–3 lần liên tiếp.
                  </p>
                </div>
                <div className="step">
                  <div className="num">2</div>
                  <div className="sicon2"><img src="/img/ic-flask.png" alt="" /></div>
                  <h4>Pha dung dịch</h4>
                  <p>Bón lá: pha 1.000 lần (20ml/20L). Phun thuốc: pha 2.000 lần.</p>
                </div>
                <div className="step">
                  <div className="num">3</div>
                  <div className="sicon2"><img src="/img/ic-spray.png" alt="" /></div>
                  <h4>Phun đều hai mặt lá</h4>
                  <p>Tránh phun khi nhiệt độ &gt; 30°C hoặc nắng gắt.</p>
                </div>
                <div className="step">
                  <div className="num">4</div>
                  <div className="sicon2">📅</div>
                  <h4>Lặp lại định kỳ</h4>
                  <p>
                    Cách 5–7 ngày/lần, 2 lần nồng độ thấp hiệu quả hơn 1 lần nồng độ
                    cao.
                  </p>
                </div>
              </div>
              <div className="note">
                ⚠️ Lưu ý: Lắc kỹ trước khi dùng. Bảo quản 5–30°C sau khi mở. Thử
                nghiệm trước kỳ thu hoạch.
              </div>
            </div>
          </section>

    
          <section>
            <div className="container">
              <h2 className="section-title">Được kiểm chứng bởi khoa học</h2>
              <div className="science-grid">
                <div className="stats">
                  <div className="stat">
                    <div className="num">&gt;23%</div>
                    <div className="lbl">S</div>
                    <div className="sub">Lưu huỳnh sinh học</div>
                  </div>
                  <div className="stat">
                    <div className="num">14%</div>
                    <div className="lbl">Si</div>
                    <div className="sub">Silic Nano ion hóa</div>
                  </div>
                  <div className="stat">
                    <div className="num">8+</div>
                    <div className="lbl">loại</div>
                    <div className="sub">Sâu bệnh phòng trị hiệu quả</div>
                  </div>
                  <div className="stat">
                    <div className="num">2 lần</div>
                    <div className="lbl"></div>
                    <div className="sub">Phun nồng độ thấp hiệu quả hơn 1 lần cao</div>
                  </div>
                </div>
                <div>
                  <div className="science-img">
                    <img src="/img/science.png" alt="Saturn Bio Tech research lab" />
                  </div>
                  <div className="science-cap">
                    Nghiên cứu Saturn Bio Tech / Silicate Crop Research Institute,
                    Korea
                  </div>
                </div>
              </div>
            </div>
          </section>

    
          <div className="form-wrap" id="dangky">
            <div className="container">
              <div className="form-grid">
                <div className="form-left">
                  <h3>Nhận sản phẩm mẫu miễn phí</h3>
                  <p>
                    Điền thông tin — chúng tôi sẽ liên hệ sắp xếp gửi mẫu khi sản phẩm
                    có quyết định lưu hành chính thức.
                  </p>
                  <ul>
                    <li>Hoàn toàn miễn phí</li>
                    <li>Kỹ thuật viên hỗ trợ</li>
                    <li>Không ràng buộc mua hàng</li>
                  </ul>
                </div>
                <LegacyForm>
                  <div className="row">
                    <div>
                      <label>Họ và tên</label
                      ><input name="hoten" placeholder="Nhập họ và tên" required />
                    </div>
                    <div>
                      <label>Số điện thoại</label
                      ><input name="sdt" placeholder="Nhập số điện thoại" required />
                    </div>
                  </div>
                  <div style={{marginBottom: '14px'}}>
                    <label>Email</label
                    ><input name="email" type="email" placeholder="Nhập email" />
                  </div>
                  <div style={{marginBottom: '14px'}}>
                    <label>Tên công ty / Trang trại</label
                    ><input name="cty" placeholder="VD: Trang trại Hữu Phát" />
                  </div>
                  <div style={{marginBottom: '14px'}}>
                    <label>Mục đích sử dụng</label
                    ><input
                      name="mucdich"
                      placeholder="VD: Vườn xoài 3ha tại Đồng Tháp..."
                    />
                  </div>
                  <input
                    type="hidden"
                    name="san_pham"
                    value="K-SON Sulfur Silicate Liquid"
                  />
                  <button className="btn" type="submit">Đăng ký nhận mẫu</button>
                  <div className="form-foot">san_pham = K-SON Sulfur Silicate Liquid</div>
                </LegacyForm>
          
              </div>
            </div>
          </div>

    
          <footer>
            <div className="container">
              <div className="footer-grid">
                <div className="brand">
                  <div className="logo">Si</div>
                  <div>
                    <b>CÔNG TY TNHH SILICA</b>
                    <small
                      >3F2 Đường 22, Khu phố 2, P. An Khánh, TP. Thủ Đức, TP.
                      HCM</small
                    ><br />
                    <small>huunx@silica.vn</small>
                  </div>
                </div>
                <div className="call">
                  <div className="ph">📞</div>
                  <div><small>Gọi ngay</small>0932 047 055</div>
                </div>
                <div className="foot-icons">
                  <span>💧</span><span>🛡️</span><span>⚗️</span><span>🌿</span>
                </div>
              </div>
              <div className="copyright">© 2026 Silica. All rights reserved.</div>
            </div>
          </footer>
    </div>
  );
}

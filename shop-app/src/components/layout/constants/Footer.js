import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="full">
              <div className="logo_footer">
                <a href="/"><img width="210" src="images/logoUku.png" alt="#" /></a>
              </div>
              <div className="information_f">
                <p><strong>Địa chỉ:</strong> Biên Hòa, Vietnam</p>
                <p><strong>Số điện thoại:</strong> 034 833 5241</p>
                <p><strong>Email:</strong> sopheo2407@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget_menu">
                      <h3>Danh sách</h3>
                      <ul>
                        <li><a href="/home">Trang chủ</a></li>
                        <li><a href="/about">Về chúng tôi</a></li>
                        <li><a href="/">Dịch vụ</a></li>
                        <li><a href="/testimonial">Chứng thực</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget_menu">
                      <h3>Tài Khoảng</h3>
                      <ul>
                        <li><a href="/">Tài khoảng</a></li>
                        <li><a href="/">Thanh toán</a></li>
                        <li><a href="/">Đăng nhập</a></li>
                        <li><a href="/">Đăng ký</a></li>
                        <li><a href="/">Mua sắm</a></li>
                        <li><a href="/">Tiện ích</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="widget_menu">
                  <h3>Bản tin</h3>
                  <div className="information_f">
                    <p>Đăng ký để nhận ưu đãi giảm giá.</p>
                  </div>
                  <div className="form_sub">
                    <form>
                      <fieldset>
                        <div className="field">
                          <input type="email" placeholder="Nhập email của bạn" name="email" />
                          <input type="submit" value="Đăng ký" />
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cpy_">
        <p className="mx-auto">Facebook: <a href="https://www.facebook.com/thaonguyenukulele">thaonguyenukulele</a><br />
          Shopee: <a href="https://shopee.vn/thaoheo2407?smtt=0.0.9&fbclid=IwAR2uz80lh3gIGMascBwTHQ0hIiLW_X5Ls-rge204PaoPRlZMfiMfX4H14IE" >thaoheo2407</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

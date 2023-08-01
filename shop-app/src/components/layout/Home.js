import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Whyus from "./constants/Whyus";
import Client from "./constants/Client";
import Footer from "./constants/Footer";

class Home extends Component {
  render() {
    return (
      <div className="container-flut">
        <div className="hero_area">
          {/*header section*/}
          <Navbav></Navbav>
          {/*slider section*/}
          <section className="slider_section">
            <div className="slider_bg_box">
              <img src="images/done3.png" alt="" />
            </div>
            <div
              id="customCarousel1"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            Ukulele
                          </h1>
                          <p>Viết gì đó</p>
                          <div className="btn-box">
                            <a href="/" className="btn1">
                              Mua ngay!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            Ukulele
                          </h1>
                          <p>Viết gì đó</p>
                          <div className="btn-box">
                            <a href="/" className="btn1">
                              Mua ngay!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            Ukulele
                          </h1>
                          <p>Viết gì đó</p>
                          <div className="btn-box">
                            <a href="/" className="btn1">
                              Mua ngay!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <ol className="carousel-indicators">
                  <li
                    data-target="#customCarousel1"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#customCarousel1" data-slide-to="1"></li>
                  <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </section>
        </div>
        {/*why section*/}
        <Whyus></Whyus>

        {/*product section*/}
        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Sản Phẩm <span>Của chúng tôi</span>
              </h2>
            </div>
            <div className="row">
              {/* Product*/}
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="/products" className="option1">
                           Xem chi tiết
                           </a>
                           <a href="/products" className="option2">
                           Mua ngay
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src="images/p1.png" alt=""/>
                     </div>
                     <div className="detail-box" style={{display: "flex" ,justifyContent: "center"}}>
                        <h5>
                           Ukulele màu đen
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                          <a href="/" className="option1">
                          Xem chi tiết
                          </a>
                          <a href="/" className="option2">
                          Mua ngay
                          </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src="images/p4.jpg" alt=""/>
                     </div>
                     <div className="detail-box" style={{display: "flex" ,justifyContent: "center"}}>
                        <h5>
                           Ukulele Vitage
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                          <a href="/" className="option1">
                          Xem chi tiết
                          </a>
                          <a href="/" className="option2">
                          Mua ngay
                          </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src="images/p3.jpg" alt=""/>
                     </div>
                     <div className="detail-box" style={{display: "flex" ,justifyContent: "center"}}>
                        <h5>
                           Ukulele màu gỗ
                        </h5>
                     </div>
                  </div>
               </div>
            </div>
            <div className="btn-box">
              <a href="/products">Xem tất cả sản phẩm</a>
            </div>
          </div>
        </section>
        {/*subscribe section*/}
        <section className="subscribe_section">
          <div className="container-fuild">
            <div className="box">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="subscribe_form">
                    <div className="heading_container heading_center">
                      <h3>Đăng ký để nhận ưu đãi giảm giá</h3>
                    </div>
                    <p>Rất hân hạnh vì điều này!</p>
                    <form action="/register">
                      <button type="submit">Đăng ký</button>
                    </form>
                    <form action="/login">
                      <button type="submit">Đăng Nhập</button>
                      <span>Nếu bạn đã có tài khoảng!</span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*client section*/}
        <Client></Client>

        {/*Footer section*/}
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;

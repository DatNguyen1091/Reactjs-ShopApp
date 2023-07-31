import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Whyus from "./constants/Whyus";
import ProductList from "./constants/ProductList";

class Home extends Component {
  render() {
    return (
      <div className="container-flut">
        <div className="hero_area">
          { /*header section*/ }
          <Navbav></Navbav>
          { /*slider section*/ }
          <section className="slider_section">
            <div className="slider_bg_box">
              <img src="images/done3.png" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>
                            <span>
                              Sale 20% Off
                            </span>
                            <br />
                            Ukulele
                          </h1>
                          <p>
                            Viết gì đó
                          </p>
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
                            <span>
                              Sale 20% Off
                            </span>
                            <br />
                            Ukulele
                          </h1>
                          <p>
                            Viết gì đó
                          </p>
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
                            <span>
                              Sale 20% Off
                            </span>
                            <br />
                            Ukulele
                          </h1>
                          <p>
                            Viết gì đó
                          </p>
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
                  <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                  <li data-target="#customCarousel1" data-slide-to="1"></li>
                  <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </section>
        </div>
        { /*why section*/ }
        <Whyus></Whyus>

        { /*product section*/ }
        <ProductList></ProductList>

        { /*subscribe section*/ }
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
                    <form action="">
                      <input type="email" placeholder="Nhập email của bạn" />
                      <button>
                        Đăng ký
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

import React from 'react';

const Footer2 = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Liên lạc...</h4>
              <div className="contact_link_box">
                <a href="/">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Địa chỉ</span>
                </a>
                <a href="/">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>SDT: 034 833 5241</span>
                </a>
                <a href="/">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>sopheo2407@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="index.html" className="footer-logo">
                Ukulele Shop
              </a>
              <p>
                Viết gì đó
              </p>
              <div className="footer_social">
                <a href="/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="/">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="map_container">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

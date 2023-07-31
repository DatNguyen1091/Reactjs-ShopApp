import React from 'react';

export const Client = () => {

  return (
    <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
            Khách hàng và Ukulele 
        </h2>
      </div>
      <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src="images/a7.jpg" alt="" />
                  </div>
                </div>
              </div>
                    <div className="detail-box">
                        <h5>
                        Ronaldo
                        </h5>
                        <h6>
                        Khách hàng thân thuộc
                        </h6>
                        <p>
                        Siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu!
                        </p>
                    </div>
                </div>
           </div>
          {/* Thêm các carousel-item khác tương tự ở đây */}
          
        </div>
        <div className="carousel_btn_box">
          <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Client;


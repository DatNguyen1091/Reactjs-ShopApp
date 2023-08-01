import React, { Component } from "react";
import Navbav from "./constants/Navbav";
import Footer2 from "./constants/Footer2";
import {ApiUrl} from "./constants/ApiUrl";
class Contact extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    fetch(ApiUrl.Api + "Feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Gửi tin nhắn thành công!");
        console.log(data);
      })
      .catch((error) => {
        alert("Lỗi khi gửi tin nhắn!");
        console.error(error);
      });
  };
  render() {
    return (
      <div className="hero_area">
        { /*header section*/ }
        <Navbav></Navbav>
        
        { /*inner page section*/ }
        <section className="inner_page_head">
          <div className="container_fuild">
              <div className="row">
                <div className="col-md-12">
                    <div className="full">
                      <h3>Liên hệ với chúng tôi</h3>
                    </div>
                </div>
              </div>
          </div>
        </section>
        { /*contact section*/ }
        <section className="why_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="full">
                  { /*POST section*/ }
                  <form onSubmit={this.handleSubmit}>
                    <fieldset>
                      <input type="text" placeholder="Nhập tên đầy đủ của bạn" name="name" required />
                      <input type="email" placeholder="Nhập địa chỉ email của bạn" name="email" required />
                      <input type="text" placeholder="Nhập chủ đề" name="subject"/>
                        <textarea placeholder="Nhập tin nhắn của bạn" name="message" required></textarea>
                      <input type="submit" value="Gửi tin" />
                    </fieldset>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
        { /*Footer section*/ }
        <Footer2></Footer2>
        
      </div>
    );
  }
}

export default Contact;

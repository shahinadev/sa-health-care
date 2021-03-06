import React from "react";
import Banner from "./../../Shared/Banner/Banner";

const Contact = () => {
  return (
    <>
      <Banner></Banner>
      <section className=" my-5 we_are_ready_sectoion we_are_ready_two we_are_ready_three">
        <div className="container">
          <div className="we_are_content">
            <div className="online_booking">
              <h2>Contact With us</h2>
              <form className="booking_form">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 form-group">
                    <select className=" form-control">
                      <option selected="">Select Department</option>
                      <option value="1">Medicine</option>
                      <option value="2">Oparation</option>
                      <option value="3">Ecg</option>
                    </select>
                  </div>
                  <div className="col-lg-12 col-sm-12 form-group">
                    <textarea
                      className="form-control text_area"
                      placeholder="Your Massage"
                      spellcheck="false"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-sm-12 form-group custom_button">
                    <button type="submit" className="custom_btn2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

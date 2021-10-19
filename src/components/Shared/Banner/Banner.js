import React from "react";
import "./Banner.css";
import { HashLink } from "react-router-hash-link";
const Banner = () => {
  return (
    <section className="banner_section_tow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner_content">
              <h2>
                Dental <span className="red">hospital</span> Company best in The
                <span>world</span>
              </h2>
              <p>
                The field of dentistry or dental medicine includes teeth as well
                as other aspects of the craniofacial complex including the
                temporomandibular joint and other.
              </p>
              <HashLink smooth to="/home#team" className="custom_btn1">
                Expoert Team
              </HashLink>
              <HashLink smooth to="/home#services" className="custom_btn2">
                Our Services
              </HashLink>
            </div>
          </div>
          <div className="col-lg-6 my-md-0 my-5">
            <div className="banner_images">
              <img
                src="https://mohsinalam.com/medicit/images/banner-images.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

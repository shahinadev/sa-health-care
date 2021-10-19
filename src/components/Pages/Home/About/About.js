import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about_section_two" id="about">
      <div className="container">
        <h1>About us</h1>
        <hr width="15%" />
        <div className="row">
          <div className="col-lg-6">
            <div className="about_video">
              <img src="https://i.ibb.co/6m5L0j9/about-video.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_content">
              <h2>
                Know medical about <span>Medicit</span> hospital
              </h2>
              <p>
                A world-class quaternary care facility with multiple Centers of
                Excellence. Nepal Mediciti combines the finest medical minds and
                advanced technology to provide holistic treatment within a
                Multi-Disciplinary Framework. Nepal Mediciti aspires to evolve
                as the health-care destination of choice in South Asia. We will
                provide a platform for practicing safe and evidence based
                medicine driven by international guidelines and protocols. We
                will foster research, education and a distinctive work culture
                that will set high ethical and social standards
              </p>
              <div className="media">
                <img
                  src="https://i.ibb.co/1GXHBLc/01.png"
                  className="mr-3"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">William James</h5>
                  <small>Founder CEO</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

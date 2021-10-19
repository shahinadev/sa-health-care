import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Service.css";
const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((serv) => serv.id === parseInt(id)));
      });
  }, []);
  const { title, img, disc } = service;
  return (
    <section className="services_details_section my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="services_details">
              <div className="title_images">
                <img src={img} className="w-100" alt="" />
              </div>
              <div className="title_content">
                <h4>{title}</h4>
                <p>{disc}</p>
                <br />
              </div>
              <div className="row professional_medical_doctor">
                <div className="col-lg-5">
                  <div className="images">
                    <img
                      src="https://i.ibb.co/dp5cVkv/medicat-images.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="professional_content">
                    <h2>Professional Medical Doctor</h2>
                    <p>
                      A physician (American English), medical practitioner
                      (Commonwealth English), medical doctor, or simply doctor,
                      is a professional who practices medicine, which is
                      concerned with promoting, maintaining or restoring health
                      through the study, diagnosis, prognosis and treatment of
                      disease, injury, and other physical and
                    </p>
                    <ul className="row">
                      <li className="col-lg-6 col-md-6">
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        100% Expert Doctor
                      </li>
                      <li className="col-lg-6 col-md-6">
                        <div className="icon one">
                          <i className="fas fa-check"></i>
                        </div>
                        Instant oparetion
                      </li>
                      <li className="col-lg-6 col-md-6">
                        <div className="icon two">
                          <i className="fas fa-check"></i>
                        </div>
                        Instant Medicine
                      </li>
                      <li className="col-lg-6 col-md-6">
                        <div className="icon three">
                          <i className="fas fa-check"></i>
                        </div>
                        24/7 advanced care
                      </li>
                    </ul>
                    <div className="signature">
                      <img src="images/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row professional_medical_doctor medical_two">
                <div className="col-lg-5 order-lg-last">
                  <div className="images">
                    <img src="https://i.ibb.co/k3gjM6H/images.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="professional_content">
                    <h2>Professional Medical Doctor</h2>
                    <p>
                      A physician (American English), medical practitioner
                      (Commonwealth English), medical doctor, or simply doctor,
                      is a professional who practices medicine, which is
                      concerned with promoting, maintaining or restoring health
                      through the study, diagnosis, prognosis and treatment of
                      disease, injury, and other physical and
                    </p>
                    <ul className="row">
                      <li className="col-lg-6">
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        100% Expert Doctor
                      </li>
                      <li className="col-lg-6">
                        <div className="icon one">
                          <i className="fas fa-check"></i>
                        </div>
                        Instant oparetion
                      </li>
                      <li className="col-lg-6">
                        <div className="icon two">
                          <i className="fas fa-check"></i>
                        </div>
                        Instant Medicine
                      </li>
                      <li className="col-lg-6">
                        <div className="icon three">
                          <i className="fas fa-check"></i>
                        </div>
                        24/7 advanced care
                      </li>
                    </ul>
                    <div className="signature">
                      <img src="images/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-first">
            <div className="category widget">
              <h2>Quick Links</h2>
              <ul>
                <li className="media">
                  <Link className="media-body" to="/home#services">
                    Services
                    <span>
                      <i className="far fa-arrow-right"></i>
                    </span>
                  </Link>
                </li>
                <li className="media">
                  <Link className="media-body" to="/">
                    Home
                    <span>
                      <i className="far fa-arrow-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleService;

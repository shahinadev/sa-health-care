import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((serv) => serv.id == id));
      });
  }, []);
  const { title, img, disc } = service;
  console.log(title);
  return (
    <section class="services_details_section my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="services_details">
              <div class="title_images">
                <img src={img} alt="" />
              </div>
              <div class="title_content">
                <h4>{title}</h4>
                <p>{disc}</p>
                <br />
              </div>
              <div class="row professional_medical_doctor">
                <div class="col-lg-5">
                  <div class="images">
                    <img
                      src="https://i.ibb.co/dp5cVkv/medicat-images.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="professional_content">
                    <h2>Professional Medical Doctor</h2>
                    <p>
                      A physician (American English), medical practitioner
                      (Commonwealth English), medical doctor, or simply doctor,
                      is a professional who practices medicine, which is
                      concerned with promoting, maintaining or restoring health
                      through the study, diagnosis, prognosis and treatment of
                      disease, injury, and other physical and
                    </p>
                    <ul class="row">
                      <li class="col-lg-6 col-md-6">
                        <div class="icon">
                          <i class="fas fa-check"></i>
                        </div>
                        100% Expert Doctor
                      </li>
                      <li class="col-lg-6 col-md-6">
                        <div class="icon one">
                          <i class="fas fa-check"></i>
                        </div>
                        Instant oparetion
                      </li>
                      <li class="col-lg-6 col-md-6">
                        <div class="icon two">
                          <i class="fas fa-check"></i>
                        </div>
                        Instant Medicine
                      </li>
                      <li class="col-lg-6 col-md-6">
                        <div class="icon three">
                          <i class="fas fa-check"></i>
                        </div>
                        24/7 advanced care
                      </li>
                    </ul>
                    <div class="signature">
                      <img src="images/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row professional_medical_doctor medical_two">
                <div class="col-lg-5 order-lg-last">
                  <div class="images">
                    <img src="https://i.ibb.co/k3gjM6H/images.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="professional_content">
                    <h2>Professional Medical Doctor</h2>
                    <p>
                      A physician (American English), medical practitioner
                      (Commonwealth English), medical doctor, or simply doctor,
                      is a professional who practices medicine, which is
                      concerned with promoting, maintaining or restoring health
                      through the study, diagnosis, prognosis and treatment of
                      disease, injury, and other physical and
                    </p>
                    <ul class="row">
                      <li class="col-lg-6">
                        <div class="icon">
                          <i class="fas fa-check"></i>
                        </div>
                        100% Expert Doctor
                      </li>
                      <li class="col-lg-6">
                        <div class="icon one">
                          <i class="fas fa-check"></i>
                        </div>
                        Instant oparetion
                      </li>
                      <li class="col-lg-6">
                        <div class="icon two">
                          <i class="fas fa-check"></i>
                        </div>
                        Instant Medicine
                      </li>
                      <li class="col-lg-6">
                        <div class="icon three">
                          <i class="fas fa-check"></i>
                        </div>
                        24/7 advanced care
                      </li>
                    </ul>
                    <div class="signature">
                      <img src="images/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-first">
            <div class="category widget">
              <h2>Quick Links</h2>
              <ul>
                <li class="media">
                  <Link class="media-body" to="/home#services">
                    Services
                    <span>
                      <i class="far fa-arrow-right"></i>
                    </span>
                  </Link>
                </li>
                <li class="media">
                  <Link class="media-body" to="/">
                    Home
                    <span>
                      <i class="far fa-arrow-right"></i>
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

export default Service;

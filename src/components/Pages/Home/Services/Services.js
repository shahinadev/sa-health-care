import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services_section_two" id="services">
      <div className="container">
        <h1>Services</h1>
        <hr width="15%" />
        <div className="services_header">
          <div className="content">
            <h2>International Quality Services</h2>
          </div>
          <Link to="/services" className="custom_btn1">
            View all
          </Link>
        </div>
        <div className="row">
          {!services.length > 0 ? (
            <div class="d-flex justify-content-center my-20">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            services.map((service, index) => (
              <Service key={index} service={service}></Service>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;

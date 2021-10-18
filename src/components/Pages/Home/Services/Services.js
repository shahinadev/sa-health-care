import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
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
          <a href="services-v2.html" className="custom_btn1">
            View all
          </a>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <Service key={index} service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

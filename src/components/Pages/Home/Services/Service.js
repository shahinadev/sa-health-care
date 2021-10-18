import React from "react";

const Service = ({ service }) => {
  const { title, img, disc } = service;
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="media">
        <div className="icon">
          <img src={img} alt="service img" />
        </div>
        <div className="media-body">
          <h5>{title}</h5>
          <p>{disc.slice(0, 100)}....</p>
          <a href="services-details.html">
            <i className="fa fa-arrow-right"></i>Load More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;

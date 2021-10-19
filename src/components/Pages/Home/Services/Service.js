import React from "react";
import { useHistory } from "react-router";

const Service = ({ service }) => {
  const { title, icon, disc, id } = service;
  const history = useHistory();
  const handleSingleService = (id) => {
    history.push(`/service/${id}`);
  };
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="media">
        <div className="icon">
          <img src={icon} alt="service img" />
        </div>
        <div className="media-body">
          <h5>{title}</h5>
          <p>{disc.slice(0, 100)}....</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleSingleService(id)}
          >
            <i className="fa fa-arrow-right"></i>Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ member }) => {
  const { name, deg, img } = member;
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="team_item">
        <div className="images">
          <img src={img} alt="team members img" />
        </div>
        <div className="content">
          <Link to="dedicated-team.html">{name}</Link>
          <p>{deg}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

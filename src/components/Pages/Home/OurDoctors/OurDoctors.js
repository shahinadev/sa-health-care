import React, { useEffect, useState } from "react";
import "./OurDoctors.css";
import Doctor from "./Doctor";
import Loading from "../../../Loading/Loading";
const OurDoctors = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/teammembers.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <section className="our_team_two_section" id="team">
      <div className="container">
        <div className="team_header py-3">
          <h2>Specialist Doctors</h2>
        </div>
        <div className="row">
          {!members.length > 0 ? (
            <Loading></Loading>
          ) : (
            members.map((member, index) => (
              <Doctor member={member} key={index}></Doctor>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;

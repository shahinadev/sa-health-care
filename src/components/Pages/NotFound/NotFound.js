import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-10 text-center">
      <img
        src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-11371.jpg"
        alt="not found 404"
        className="img-fluid w-50 rounded-3"
      />
      <h1 className="text-warning">404 Page Not Found</h1>
      <Link className="btn btn-danger my-3" to="/">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

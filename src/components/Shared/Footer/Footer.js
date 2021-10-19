import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-main bg-success text-light py-5 px-0 ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>About us</h3>
              <hr />
              <p>
                This is medical center website. Where you will get any help and
                treatment about your body and health.
              </p>
              <div className="follow-us">
                <p>Following us:</p>
                <a target="_blank" href="https://www.fb.com/shahinadev">
                  <i className="fab social-icon mr-5 fa-facebook"></i>{" "}
                </a>
                <a target="_blank" href="https://www.fb.com/shahinadev">
                  <i className="fab social-icon mr-5 d-inline fa-twitter"></i>
                </a>
                <a target="_blank" href="https://www.fb.com/shahinadev">
                  <i className="fab social-icon mr-5 d-inline fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.fb.com/shahinadev">
                  <i className="fab social-icon mr-5 d-inline fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 my-md-0 my-5">
              <h3>Quick Links</h3>
              <hr />
              <div className="follow-us">
                <Link className="d-block my-2 text-light" to="/about">
                  About
                </Link>
                <Link className="d-block my-2 text-light" to="/services">
                  Our Services
                </Link>
                <Link className="d-block my-2 text-light" to="/blog">
                  Our Blogs
                </Link>
                <Link className="d-block my-2 text-light" to="/contact">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="col-md-3 my-md-0 my-5">
              <h3>Our Services</h3>
              <hr />
              <div className="follow-us">
                <Link className="d-block my-2 text-light" to="/services/1">
                  Dental Care
                </Link>
                <Link className="d-block my-2 text-light" to="/services/2">
                  Instand Medicine
                </Link>
                <Link className="d-block my-2 text-light" to="/services/3">
                  Kideyes Solution
                </Link>
                <Link className="d-block my-2 text-light" to="/services/4">
                  Eye Care
                </Link>
                <Link className="d-block my-2 text-light" to="/services/5">
                  Surery
                </Link>
              </div>
            </div>
            <div className="col-md-3 my-md-0 my-5">
              <h3>Contact info</h3>
              <hr />
              <div className="follow-us">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Chinora Naogaon 6530{" "}
                  <br />
                  Bangladesh
                </p>
                <p>
                  <i className="fa fa-envelope"></i> dev.shahin2@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone"></i> +8801318965415
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <p>&copy; 2021 Shahin Alam</p>
          <div>
            <Link to="/terms-services" className="text-light m-3">
              Terms of Services
            </Link>
            <Link to="/privacy" className="text-light">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

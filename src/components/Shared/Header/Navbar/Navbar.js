import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
const Navbar = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-custom">
        <div className="container-fluid">
          <NavLink className="navbar-brand mx-5" exact to="/">
            <img
              src="https://i.ibb.co/Hgs8Wmg/Logo.png"
              className="img-fluid logo"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <HashLink
                  activeClassName="nav-active"
                  className="nav-link"
                  smooth
                  to={"/home#services"}
                >
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  to="/about"
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <HashLink
                  activeClassName="nav-active"
                  className="nav-link"
                  smooth
                  to={"/home#pricing"}
                >
                  Pricing
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="nav-link"
                  to="/appointment"
                >
                  Make appointment
                </NavLink>
              </li>
              {user?.email ? (
                <>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link border-0 bg-custom dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user?.displayName}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile/edit">
                          Edit profile
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-danger text-light p-2"
                      onClick={logOut}
                    >
                      <i class="fa fa-sign-out m-0 px-1" aria-hidden="true"></i>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-active"
                      className="nav-link"
                      to="/login"
                    >
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

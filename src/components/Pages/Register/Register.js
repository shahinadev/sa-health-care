import React from "react";
import useAuth from "./../../../hooks/useAuth";

import { Link } from "react-router-dom";
import "./Register.css";
import { useForm } from "react-hook-form";
const Register = () => {
  const { signInWithGoogle, createAccountEmailAndPassword, error, message } =
    useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {});
  };
  const regx = {
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createAccountEmailAndPassword(data);
  };
  return (
    <div className="container my-5">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p className="hint-text">
          Sign up with your social media account or email address
        </p>
        <div className="social-btn text-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-danger btn-lg"
          >
            <i className="fab fa-google"></i> Google
          </button>
        </div>
        <div className="or-seperator">
          <b>or</b>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error ? error : message}
          <div className="form-group">
            <input
              type="text"
              className="form-control input-lg"
              {...register("username", {
                required: true,
                minLength: { value: 3, message: "username at lest 3 letter" },
                maxLength: {
                  value: 20,
                  message: 'username can"t be 20 letter max ',
                },
              })}
              placeholder="username"
            />
            {errors.username && (
              <span className="text-danger">
                {errors.username?.message
                  ? errors.username.message
                  : "This filed is required"}
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control input-lg"
              {...register("email", {
                required: true,
                pattern: {
                  value: regx.email,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="text-danger">
                {errors.email?.message
                  ? errors.email.message
                  : "This filed is required"}
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input-lg"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password minimum length must be 6",
                },
                pattern: {
                  value: regx.password,
                  message:
                    "Password must contain 1 Upper Latter, 1 Lower Latter 1 spacial character",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-danger">
                {errors.password?.message
                  ? errors.password.message
                  : "This filed is required"}
              </span>
            )}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block signup-btn"
            >
              SignUp
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInWithGoogle, signInWithEmailPassword, error, message } =
    useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.form || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const regx = {
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailPassword(data);
  };
  return (
    <div className="container my-5">
      <div class="signup-form">
        <h2>Welcome Back Login </h2>
        <p class="hint-text">
          Login up with your social media account or email address
        </p>
        <div class="social-btn text-center">
          <button onClick={handleGoogleSignIn} class="btn btn-danger btn-lg">
            <i class="fab fa-google"></i> Google
          </button>
        </div>
        <div class="or-seperator">
          <b>or</b>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <span className="text-danger d-block my-2">
              {error.includes("wrong-password") ? (
                <>
                  "Password Not match" <span>did Forgot password?</span>
                  <Link to="/reset_password">reset here.</Link>
                </>
              ) : (
                error
              )}
            </span>
          )}
          <span>{message && message}</span>
          <div class="form-group">
            <input
              type="email"
              class="form-control input-lg"
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
          <div class="form-group">
            <input
              type="password"
              class="form-control input-lg"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password minimum length must be 6",
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
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-lg btn-block signup-btn"
            >
              Login
            </button>
          </div>
        </form>
        <div class="text-center">
          Need an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading)
    return (
      <div class="d-flex justify-content-center my-20">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { form: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;

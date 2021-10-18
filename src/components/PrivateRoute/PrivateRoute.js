import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <h1>Page is Loading</h1>;
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

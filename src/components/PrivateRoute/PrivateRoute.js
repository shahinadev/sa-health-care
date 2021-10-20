import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loading></Loading>;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.displayName ? (
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

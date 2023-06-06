import React from "react";
import { Redirect } from "react-router";
import { useEffect, useState } from "react/cjs/react.production.min";
import { GET_USER } from "../graphql/Query/GetUser";
import _ from "lodash";
import Cookies from "js-cookie";
import { useQuery } from "@apollo/client";

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  const [hasFetchedUser, setHasFetchedUser] = React.useState(false);

  const { data, error } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    onError: (error) => {
      const errorMessage = _.get(error, "message", "Internal Error");
      if (errorMessage !== "you must be logged in to query this schema") {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    },
  });

  React.useEffect(() => {
    if (data && !hasFetchedUser && !error) {
      setUser(data.getUser);
      setHasFetchedUser(true);
    }
  }, [data, error, hasFetchedUser]);

  if (user) {
    return React.cloneElement(children, { user });
  } else return <Redirect to="/" />;
};

export default AppProvider;

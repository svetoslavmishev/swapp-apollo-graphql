import React from "react";
import { Redirect } from "react-router-dom";
import { Home, SignIn, Header, Protected, Error } from "../components/index";

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/signin" />
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/header",
    component: Header
  },
  {
    path: "/signin",
    component: SignIn
  },
  {
    path: "/protected",
    component: () =>
      localStorage.getItem("token") ? <Protected /> : <Redirect to="/signin" />
  },
  {
    path: "*",
    component: Error
  }
];

export default routesConfig;

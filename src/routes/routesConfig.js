import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/episodes" />
  },
  {
    path: "/signin",
    exact: true,
    component: lazy(() => import("../components/SignIn/SignIn"))
  },
  {
    path: "/episodes",
    exact: true,
    component: lazy(() => import("../components/Episodes/Episodes"))
  },
  {
    path: "/episodes/:episodeId",
    exact: true,
    component: lazy(() =>
      import("../components/Episodes/EpisodeDetails/EpisodeDetails")
    )
  },
  {
    path: "/characters",
    exact: true,
    component: lazy(() => import("../components/Characters/Characters"))
  },
  {
    path: "/characters/:characterId",
    exact: true,
    component: lazy(() =>
      import("../components/Characters/CharProfile/CharProfile")
    )
  },
  {
    path: "/starships/:starshipId",
    exact: true,
    component: lazy(() => import("../components/Starship/Starship"))
  },
  {
    path: "*",
    component: lazy(() => import("../components/Error/Error"))
  }
];

export default routesConfig;

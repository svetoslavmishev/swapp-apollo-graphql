import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routesConfig";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            // render={props =>
            //   localStorage.getItem("token") ? (
            //     <route.component {...props} routes={route.routes} />
            //   ) : (
            //     <Redirect to="/signin" />
            //   )
            // }
            render={props =>
              route.render ? (
                route.render(props)
              ) : (
                <route.component {...props} route={route} />
              )
            }
            // strict={route.strict}
          />
        ))}
      </Switch>
    </Router>
  );
}

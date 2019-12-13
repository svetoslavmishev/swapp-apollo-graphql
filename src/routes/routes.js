import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import allRoutes from './routesConfig';
import { SignIn, Loading } from '../components';

const Routes = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          {allRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props =>
                isAuthenticated ? (
                  <route.component {...props} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Routes;

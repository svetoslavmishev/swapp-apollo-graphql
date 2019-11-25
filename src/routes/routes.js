import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import privateRoutes from './routesConfig';
import { SignIn } from '../components';

const Routes = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        {privateRoutes.map((route, index) => (
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
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Routes;

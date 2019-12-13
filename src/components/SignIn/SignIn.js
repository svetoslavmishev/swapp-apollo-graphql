import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Paper,
  Button
} from '@material-ui/core';

import { SIGN_IN } from '../../queries/queries';
import { ThemeContext } from '../../themeContext';
import styles from './SignInStyles';
import Loading from '../shared/Loading/Loading';

function SignIn({ history }) {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const [fields, setFields] = useState({
    email: 'demo@st6.io',
    password: 'demo1234'
  });
  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: { token } }) => {
      localStorage.setItem('token', token);
      client.writeData({ data: { isAuthenticated: true } });
      history.push('/episodes');
      setFields({ email: '', password: '' });
    },
    onError: e => {
      console.log(e);
    }
  });

  const handleChange = ({ target: { value, name } }) => {
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    signIn({ variables: { ...fields } });
    setFields({ email: '', password: '' });
  };

  if (loading) return <Loading />;

  const hasError = error && error.message ? true : false;

  return (
    <Container className={classes.root} maxWidth="xl">
      <div className="md:w-1/3">
        <div className={`${classes.logo} text-center`}>
          {process.env.REACT_APP_TITLE}
        </div>
        <Paper className={classes.paper}>
          <FormControl error={hasError}>
            {hasError && (
              <FormLabel component="legend">{error.message}</FormLabel>
            )}
            <Input
              className={`${classes.inputs} mt-2 mb-2`}
              id="email-component-helper"
              type="text"
              name="email"
              value={fields.email}
              onChange={handleChange}
              aria-describedby="component-helper-text"
              placeholder="email"
            />
          </FormControl>
          <FormControl>
            <Input
              className={`${classes.inputs} mt-2 mb-2`}
              id="password-component-helper"
              type="password"
              name="password"
              value={fields.password}
              onChange={handleChange}
              aria-describedby="component-helper-text"
              placeholder="password"
            />
          </FormControl>
          <Button
            className={`${classes.solidButton} ${classes.button}`}
            variant="contained"
            onClick={handleSubmit}
            disabled={!fields.email && !fields.password}
          >
            Login
          </Button>
        </Paper>
      </div>
    </Container>
  );
}

SignIn.propTypes = {
  history: PropTypes.object
};

export default SignIn;

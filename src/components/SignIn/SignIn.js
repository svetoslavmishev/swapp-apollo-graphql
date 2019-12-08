import React, { useState, useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Paper,
  Button,
  LinearProgress
} from '@material-ui/core';

import { SIGN_IN } from '../../queries/queries';
import { ThemeContext } from '../../themeContext';
import styles from './SignInStyles';

function SignIn({ history }) {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const [fields, setFields] = useState({
    email: 'demo@st6.io',
    password: 'demo1234'
  });
  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted({ signIn: { token } }) {
      localStorage.setItem('token', token);
      client.writeData({ data: { isAuthenticated: true } });
      history.push('/episodes');
      setFields({ email: '', password: '' });
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

  if (loading)
    return (
      <LinearProgress
        classes={{
          bar: classes.progress
        }}
      />
    );

  const hasError = error && error.message ? true : false;

  return (
    <Container className={classes.root} maxWidth="xl">
      <Paper className={classes.paper}>
        <FormControl error={hasError}>
          {hasError && (
            <FormLabel component="legend">{error.message}</FormLabel>
          )}
          <Input
            className={classes.inputs}
            id="email-component-helper"
            type="text"
            name="email"
            value={fields.email}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            placeholder="email"
          />
          <Input
            className={classes.inputs}
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
          color="default"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
}

export default SignIn;

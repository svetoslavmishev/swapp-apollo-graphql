import React, { useState, useCallback, useContext } from 'react';
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

import { SIGN_IN } from '../../client/queries';
import { ThemeContext } from '../../themeContext';
import styles from './SignInStyles';

function SignIn({ history }) {
  // email: 'demo@st6.io'
  // password: 'demo1234'

  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const [fields, setFields] = useState({ email: '', password: '' });
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
    <Container maxWidth="xs">
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid red',
          padding: 28
        }}
      >
        <FormControl error={hasError}>
          {hasError && (
            <FormLabel component="legend">{error.message}</FormLabel>
          )}
          <Input
            id="email-component-helper"
            type="text"
            name="email"
            value={fields.email}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            placeholder="email"
          />
          <Input
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
          className={`${classes.solidButton} ${classes.outlineButton}`}
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

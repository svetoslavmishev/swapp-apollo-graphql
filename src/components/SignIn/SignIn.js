import React, { useState, useCallback } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Paper,
  Button
} from "@material-ui/core";
// import { useMutation } from "@apollo/react-hooks";
// import { SIGN_IN } from "../SignIn/SignIn";

function SignIn() {
  const [fields, setFields] = useState({
    email: "",
    password: ""
  });
  //const [signIn, { data }] = useMutation(SIGN_IN);

  const handleChange = useCallback(
    ({ target: { value, name } }) => {
      setFields({ ...fields, [name]: value });
    },
    [fields]
  );

  const handleSubmit = () => {
    console.log(fields);
    setFields({ email: "", password: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ display: "flex", flexDirection: "column" }}>
        <FormControl>
          <InputLabel htmlFor="component-helper">Email</InputLabel>
          <Input
            id="component-helper"
            name="email"
            value={fields.email}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            name="password"
            value={fields.password}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <Button variant="contained" color="default" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}

export default SignIn;

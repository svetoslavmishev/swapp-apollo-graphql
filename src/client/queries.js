import gql from 'graphql-tag';

export const AUTH = gql`
  query AuthQuery {
    isAuthenticated @client
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

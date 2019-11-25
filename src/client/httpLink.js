import { createHttpLink } from 'apollo-link-http';

console.log(process.env);
console.log(process.env.REACT_APP_SWAPP);

const httpLink = createHttpLink({
  uri: 'https://swapp.st6.io/graphql'
});

export default httpLink;

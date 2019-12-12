import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SWAPP_ENDPOINT
});

export default httpLink;

import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: process.env.REACT_SWAPP_GRAPHQL_ENDPOINT
});

export default httpLink;

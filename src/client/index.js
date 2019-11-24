import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import authLink from './authLink';
import httpLink from './httpLink';
import typeDefs from './local';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, httpLink]),
  typeDefs
});

cache.writeData({
  data: {
    isAuthenticated: !!localStorage.getItem('token')
  }
});

export default client;

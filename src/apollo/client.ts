import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  //uri: 'http://localhost:8010/proxy/api/graphql?token=xyz',
  uri: process.env.CLIENT_API_URL,
  cache: new InMemoryCache(),
});

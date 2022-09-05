import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://kananga.stepzen.net/api/nihilist-goose/__graphql',
  headers: {
    Authorization: `${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
  },
  cache: new InMemoryCache(),
});

export default client;
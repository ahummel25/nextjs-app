import withApollo, { InitApolloOptions } from 'next-with-apollo';
import ApolloClient, {
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-boost';

export default withApollo(
  (initialState: NormalizedCacheObject = {}) =>
    new ApolloClient<NormalizedCacheObject>({
      uri: 'https://api.graphql.jobs/',
      cache: new InMemoryCache().restore(initialState || {})
    })
);

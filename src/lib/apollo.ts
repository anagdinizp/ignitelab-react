import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u50z0x0lno01t73gfcd2rk/master',
  cache: new InMemoryCache()
})
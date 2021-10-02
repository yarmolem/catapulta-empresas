import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://tracking.softaki.com/graphql',
  cache: new InMemoryCache()
})

export default client

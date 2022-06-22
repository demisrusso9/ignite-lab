import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pwnp1z2h9l01xscyfj1bl8/master?query=query%20Test%20%7B%0A%20%20lessons%20%7B%0A%20%20%09id%2C%20title%0A%09%7D%0A%7D&operationName=Test',
  cache: new InMemoryCache()
})

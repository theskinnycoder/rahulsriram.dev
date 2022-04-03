import { GraphQLClient } from 'graphql-request'

export const graphqlClient = (url: string, apiKey: string) =>
  new GraphQLClient(url, {
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })

export async function fetcher(url: string) {
  const res = await fetch(url)
  return res.json()
}

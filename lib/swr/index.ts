import { DocumentNode } from 'graphql'
import request, { GraphQLClient, RequestDocument } from 'graphql-request'

export const graphqlClient = (url: string, apiKey: string) =>
  new GraphQLClient(url, {
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })

export function getGqlString(doc: DocumentNode) {
  return doc?.loc?.source?.body!
}

export async function graphqlFetcher(
  url: string,
  query: RequestDocument,
  variables: any = {},
) {
  return request(url, query, variables)
}

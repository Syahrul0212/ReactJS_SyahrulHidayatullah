import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://tops-muskrat-80.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "ZGceYAdE0QB82r7E7YzbgOXN159s0Ye71ZD3mx3pZZiC1wa7DGyY63tzYpEcUsCN",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://tops-muskrat-80.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
        "ZGceYAdE0QB82r7E7YzbgOXN159s0Ye71ZD3mx3pZZiC1wa7DGyY63tzYpEcUsCN",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
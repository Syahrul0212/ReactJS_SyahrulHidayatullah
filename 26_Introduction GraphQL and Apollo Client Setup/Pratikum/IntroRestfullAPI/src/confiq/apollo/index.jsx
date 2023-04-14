import { ApolloClient , HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://tops-muskrat-80.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "ZGceYAdE0QB82r7E7YzbgOXN159s0Ye71ZD3mx3pZZiC1wa7DGyY63tzYpEcUsCN",
    },
  }),
  cache: new InMemoryCache(),
});
export default apolloClient;

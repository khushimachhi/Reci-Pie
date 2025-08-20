import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/clients";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  );
}

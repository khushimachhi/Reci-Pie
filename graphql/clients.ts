import { ApolloClient, InMemoryCache } from "@apollo/client";

const clients = new ApolloClient({
  uri: "http://YOUR_LOCAL_IP:4000/",  
  cache: new InMemoryCache(),
}); 


export default clients;

import React from "react";
import { createRoot } from "react-dom/client";

/***********************************************************************/
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const clientInstance11 = new ApolloClient({
    uri: 'http://localhost:3083/person',
    cache: new InMemoryCache(),         // apollo client uses to cache query results after fetching them
});

/***********************************************************************/
import App from "./App";
/***********************************************************************/

const root = createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={clientInstance11}>
        <App />
    </ApolloProvider>
);

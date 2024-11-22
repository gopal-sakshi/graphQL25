import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost"; //connect with our server which is running at backend
import { ApolloProvider } from "react-apollo";
import GettingGraphQLData from "./components/GettingGraphQLData";
import GettingStuff_1 from "./components/GettingStuff_1";

const client = new ApolloClient({
	uri: "http://localhost:3083/person"
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<GettingGraphQLData />
        <GettingStuff_1 />
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

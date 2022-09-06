import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./components/Home";

export const client = new ApolloClient({
	uri: "https://countries.trevorblades.com/",
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Home />
		</ApolloProvider>
	);
};
export default App;

import React, { useState } from "react";
import { client } from "../App";
import { useQuery } from "@apollo/react-hooks";
import { LIST_COUNTRIES } from "../GraphQl/query";
import Header from "./Header";
import SelectedCountries from "./SelectedCountries";
import s from "./Home.module.css";
const Home = () => {
	//state that will be filled with the countries selected
	const [countries, setCountries] = useState([]);
	const [errorSearching, setErrorSearching] = useState("");
	const [options, setOptions] = useState("Continent");

	// executes the query
	const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

	function searchCountries(word) {
		if (data) {
			if (word.trim() !== "") {
				let countriesFiltered = [];
				if (data.countries.length) {
					countriesFiltered = data.countries.filter((e) =>
						e.name.toLowerCase().includes(word.toLowerCase())
					);
					if (countriesFiltered.length) {
						setCountries(countriesFiltered);
						setErrorSearching("");
					} else {
						setCountries([]);
						setErrorSearching("There is no country with those letters");
					}
				}
			}
		}
	}

	function changeOptions(option) {
		setOptions(option);
	}

	return (
		<div className="container">
			<Header onClick={searchCountries} changeOptions={changeOptions} />
			<SelectedCountries
				countries={countries}
				error={errorSearching}
				options={options}
			/>
		</div>
	);
};

export default Home;

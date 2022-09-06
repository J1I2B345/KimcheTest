import React from "react";

const Country = ({ options, country }) => {
	if (options === "Language") {
		return (
			<div>
				<h1>{country.languages[0].name}</h1>
				<h2>{country.name}</h2>
				<h3>{country.continent.name}</h3>
			</div>
		);
	} else
		return (
			<div>
				<h1>{country.continent.name}</h1>
				<h2>{country.name}</h2>
				<h3>{country.languages[0].name}</h3>
			</div>
		);
};

export default Country;

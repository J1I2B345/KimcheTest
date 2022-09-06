import React, { useState } from "react";
import Country from "./Country";

export const SelectedCountries = ({ countries, options, error }) => {
	console.log("countries", options);
	if (countries.length != 0) {
		return (
			<div>
				{countries.map((e) => (
					<Country key={e.id} country={e} options={options} />
				))}
			</div>
		);
	}
	return <div> {error}</div>;
};

export default SelectedCountries;

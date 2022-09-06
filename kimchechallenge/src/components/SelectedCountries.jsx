import React, { useState } from "react";
import Country from "./Country";

export const SelectedCountries = ({ countries, options, error }) => {
	if (countries.length != 0) {
		return (
			<div>
				{countries.map((e) => (
					<Country key={e.code} country={e} options={options} />
				))}
			</div>
		);
	}
	return <div> {error}</div>;
};

export default SelectedCountries;

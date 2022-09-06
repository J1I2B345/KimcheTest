import React from "react";
import Country from "./Country";
import s from "./SelectedCountries.module.css";

export const SelectedCountries = ({ countries, options, error }) => {
	if (countries.length != 0) {
		return (
			<div className={s.container}>
				{countries.map((e) => (
					<Country key={e.code} country={e} options={options} />
				))}
			</div>
		);
	}
	return <div> {error}</div>;
};

export default SelectedCountries;

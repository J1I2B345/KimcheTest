import React from "react";
import s from "./Country.module.css";

const Country = ({ options, country }) => {
	if (options === "Language") {
		return (
			<div className={s.container}>
				<h1>
					{country.languages.length
						? country.languages.map((e) => <span key={e.name}> {e.name}</span>)
						: ""}
				</h1>
				<div className={s.containerInt}>
					<h2>{country.name}</h2>
					<h3>{country.continent.name}</h3>
				</div>
			</div>
		);
	} else
		return (
			<div className={s.container}>
				<h1>{country.continent.name}</h1>
				<div className={s.containerInt}>
					<h2>{country.name}</h2>
					<h3>
						{country.languages.length
							? country.languages.map((e) => (
									<span key={e.name}> {e.name}</span>
							  ))
							: ""}
					</h3>
				</div>
			</div>
		);
};

export default Country;

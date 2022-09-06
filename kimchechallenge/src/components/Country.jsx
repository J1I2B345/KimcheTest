import React from "react";
import s from "./Country.module.css";

const Country = ({ options, country }) => {
	console.log(country.country);
	if (!Array.isArray(country.currency) && country.currency) {
		country.currency = country.currency.split(",");
	}
	if (options === "Language") {
		return (
			<div className={s.container}>
				<h2 className={s.externalH2}>
					{country.languages.length
						? country.languages.map((e) => <span key={e.name}> {e.name}</span>)
						: ""}
				</h2>
				<div className={s.containerInt}>
					<h3 className={s.mg0}>
						{" "}
						<span className={s.emoji}>{country.emoji}</span>
						<span className={s.name}>{country.name}</span>
					</h3>

					<h5 className={s.mg0}>
						{" "}
						<p> {country.continent.name}</p>
					</h5>

					<h5 className={s.mg0}>
						{" "}
						<p>Capital:</p>
						<span className={s.span}>{country.capital}</span>
					</h5>
					<h5 className={s.mg0}>
						{" "}
						<p>Currency</p>{" "}
						{country.currency?.map((e, i) => (
							<span className={s.span} key={i}>
								{e}
							</span>
						))}
					</h5>
				</div>
			</div>
		);
	} else
		return (
			<div className={s.container}>
				<h2 className={s.externalH2}>{country.continent.name}</h2>
				<div className={s.containerInt}>
					<h3 className={s.mg0}>
						{" "}
						<span className={s.emoji}>{country.emoji}</span>
						<span className={s.name}>{country.name}</span>
					</h3>
					<h5 className={s.mg0}>
						<p>Language</p>
						{country.languages.length
							? country.languages.map((e) => (
									<span className={s.span} key={e.name}>
										{" "}
										{e.name}
									</span>
							  ))
							: ""}
					</h5>
					<h5 className={s.mg0}>
						{" "}
						<p>Capital:</p>
						<span className={s.span}>{country.capital}</span>
					</h5>
					<h5 className={s.mg0}>
						{" "}
						<p>Currency</p>{" "}
						{country.currency?.map((e, i) => (
							<span className={s.span} key={i}>
								{e}
							</span>
						))}
					</h5>
				</div>
			</div>
		);
};

export default Country;

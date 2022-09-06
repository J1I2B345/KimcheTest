import React, { useState } from "react";
import s from "./Header.module.css";

const Header = ({ onClick, changeOptions }) => {
	let continent = document.getElementById("Continent");
	let language = document.getElementById("Language");
	function activeStyled(e) {
		if (e.target.value === "Language") {
			continent.classList.remove("active");
			language.classList.add("active");
		}
		if (e.target.value === "Continent") {
			language.classList.remove("active");
			continent.classList.add("active");
		}
	}

	return (
		<header>
			<h1> Country search </h1>
			<form>
				<input id="text" type="text" />
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						onClick(document.getElementById("text").value);
					}}
				>
					{" "}
					Search{" "}
				</button>
			</form>
			<div>
				<h3>Group by:</h3>
				<button
					className="active"
					id="Continent"
					value="Continent"
					onClick={(e) => {
						changeOptions(e.target.value);
						activeStyled(e);
					}}
				>
					{" "}
					Continent
				</button>
				<button
					id="Language"
					value="Language"
					onClick={(e) => {
						changeOptions(e.target.value);
						activeStyled(e);
					}}
				>
					{" "}
					Language
				</button>
			</div>
		</header>
	);
};

export default Header;

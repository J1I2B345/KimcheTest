import React from "react";
import s from "./Header.module.css";

const Header = ({ onClick, changeOptions }) => {
	let continent = document.getElementById("Continent");
	let language = document.getElementById("Language");
	function activeStyled(e) {
		if (e.target.value === "Language" && continent && language) {
			continent.classList.remove("active");
			language.classList.add("active");
		}
		if (e.target.value === "Continent" && continent && language) {
			language.classList.remove("active");
			continent.classList.add("active");
		}
	}

	return (
		<header className={s.headerContainer}>
			<h1> Country search </h1>
			<div className={s.formContainer}>
				<form className={s.from}>
					<input id="text" type="text" className={s.input} />
					<button
						className={`${s.buttonForm} ${s.button}`}
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							onClick(document.getElementById("text").value);
						}}
					>
						{" "}
						<i className="fa-solid fa-magnifying-glass"></i>{" "}
					</button>
				</form>
			</div>
			<div className={s.buttonsContainer}>
				<h3>Group by:</h3>
				<button
					className={`active ${s.button}`}
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
					className={s.button}
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

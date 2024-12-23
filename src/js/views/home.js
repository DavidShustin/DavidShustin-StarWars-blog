import React, {useContext} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import Card from "../component/card.js";

export const Home = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="container main-div">
			<div className="d-flex flex-column w-100 align-item-center mt-3">
				<h1>Characters</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll">
					{store.characters.map((item, index) => {
						return (
							<Card item = {item} index = {index} key = {index} category = "characters" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 align-item-center mt-3">
				<h1>Planets</h1>
				<div id="cardDiv" className="d-flex flex-no-wrap overflow-scroll ">
					{store.planets.map((item, index) => {
						return (
							<Card item = {item} index = {index} key = {index} category = "planets" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 align-item-center mt-3">
				<h1>StarShips</h1>
				<div id="cardDiv" className="d-flex flex-no-wrap overflow-scroll ">
					{store.starships.map((item, index) => {
						return (
							<Card item = {item} index = {index} key = {index} category = "starships" />
						)
					})}
				</div>
			</div>
		</div>
	)
}

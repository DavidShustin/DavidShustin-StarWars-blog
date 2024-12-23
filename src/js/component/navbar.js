import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFavorite = (index) => actions.deleteFavorites(index);



	return (
		<nav className="navbar navbar-dark mx-3 mb-3">
			<Link className="logoDiv" to="/">
				<img src={logo} alt="https://www.freepnglogos.com/images/star-wars-logo-1002.html" style={{ height: '80px' }} />
			</Link>
			<div className="ml-auto dropdown">
					<button className="btn btn-danger dropdown-toggle" id="favBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites [{store.favorites.length}]</button>
					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-1">
						{store.favorites.length > 0 ? (
							store.favorites.map((favs, index) => (
								<li className="dropdown-item d-flex justify-content-between" key={index}>
									<Link to = {"/details/" + favs.category + "/" + favs.index} className="favlink text-white">
										<span>{favs.name}</span>
									</Link>
									<span onClick={() => handleDeleteFavorite(index)}>
										<i className="fa-regular fa-trash-can"></i>
									</span>
								</li>
							))
						) : (
							<li className="dropdown-item text-centered">(empty)</li>
						)}
					</ul>
			</div>
		</nav>
	);
};

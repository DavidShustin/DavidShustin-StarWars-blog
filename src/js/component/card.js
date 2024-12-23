import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import emptyPicImg from "../../img/empty.jpg";
import tatooine from "../../img/tatooine.jpg";
import bespin from "../../img/bespin.jpg";

// addToFavorites function is called when clicking on the heart icon. This function is going to add that item to the store.favorites.
// Inside of the same functions have a way to delete the favorite if it is already a favorite.
// for the <h5> tags bring in item.name variable. for the <p> use ternary operator depending on what the category is.
// card button group div linked to the details page, button for icon for add to favorites



const Card = ({item, index, category}) => {
    const {store, actions} = useContext(Context);
    const [imgErr, setImgErr] = useState(false);

    const handleImgErr = () => setImgErr(true);

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
    const getImgUrl = () => {
        if (imgErr && item.name === "Tatooine") {
            return tatooine;
        } else if (item.name === "Bespin") {
            return bespin;
        } else if (category === "starships") {
            return store.starshipImages[index] || emptyPicImg;
        }  return `${GUIDE_URL}${category}/${index + 1}.jpg`
    }
    const imgStyle = {
        height: category === "starships" ? "180px" :
            category === "planets" ? "254px" :
                "auto",
    };

const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
const handleFavorites = () => {
    const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
    if (isFavorite) {
        const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category)
        if (indexToDelete !== -1) {
            actions.deleteFavorites(indexToDelete)
        } 
    } else {
        actions.addFavorites({name: item.name, index, category})
    }
}
    
    return(
        <div className="card">
            <img src={getImgUrl()} onError={handleImgErr} style={imgStyle} className="card-img-top" alt="Couldn't load Image"/>
            <div className="card-body d-flex flex-column " id="cardBody">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <p className="card-text">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                            category == "planets" ? "Population: " + item.population :
                                "Crew: " + item.crew
                    }
                </p>
                <p className="card-text">
                    {
                        category == "characters" ? "Eye Color: " + item.eye_color :
                            category == "planets" ? "Rotation Period: " + item.rotation_period :
                                "Manufacturer: " + item.manufacturer
                    }
                    {/* finish the planets and starships */}
                </p>
                <p className="card-text">
                    {
                        category == "characters" ? "Hair Color: " + item.hair_color :
                            category == "planets" ? "Climate: " + item.climate :
                                "Hyperdrive Rating: " + item.hyperdrive_rating
                    }
                </p>
                    <div id="cardButtonGroup" className="d-flex mt-auto justify-content-between">
                        <Link to={"/details/" + category + "/" + index}>
                            <button className="btn btn-danger" type="button">Learn More!!!</button>
                        </Link>
                        <button className="btn btn-dark btn-star" onClick={handleFavorites} type="button">
                        <i className="fa-solid fa-star" style={{color: isFavorite?"red" : "yellow"}}></i>
                        </button>
                    </div>
            </div>

        </div>
    );
};


export default Card;
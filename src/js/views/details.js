import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
// import "../../styles/details.css"
import emptyPic from "../../img/empty.jpg";
import tatooine from "../../img/tatooine.jpg";
import bespin from "../../img/bespin.jpg";



export const Details = ({ category }) => {
    const { store } = useContext(Context)
    const [imgErr, setImgErr] = useState(false)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        setImgErr(false)
    }, [location])

    const character = store.characters.find((item, index) => index == params.theid)
    const planet = store.planets.find((item, index) => index == params.theid)
    const starship = store.starships.find((item, index) => index == params.theid)

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";
    const getImgUrl = () => {
        if (imgErr && planet.name === "Tatooine") {
            return tatooine;
        } else if (planet.name === "Bespin") {
            return bespin;
        } else if (category === "starships") {
            return store.starshipImages[parseInt(params.theid)] || emptyPic;
        } return `${GUIDE_URL}${category}/${parseInt(params.theid) + 1}.jpg`
    }

    const handleImgErr = () => setImgErr(true)


    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-dark text-light my-5" style={{ minWidth: "75%", maxWidth: "75%", boxShadow: "0 8px 12px rgba(255, 255, 255, 0.2)" }}>
                <div className="row g-0">
                    <div className="col-md-4 p-3 d-flex align-item-center justify-content-center">
                        <img
                            src={getImgUrl()}
                            onError={handleImgErr}
                            className="img-fluid rounded-start rounded"
                            alt="img not available"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body mp-5">
                            <h2 className="card-title text-center mb-5" style={{ fontSize: "3rem" }}>
                                <u>
                                    {
                                        category == "characters" ? character.name :
                                            category == "planets" ? planet.name :
                                                starship.name
                                    }
                                </u>
                            </h2>
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Age:" :
                                            category == "planets" ? "Terrain:" :
                                                "Crew Size:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                    category == "characters" ? character.birth_year :
                                    category == "planets" ? planet.terrain :
                                    starship.crew
                                    }
                                </p>
                                
                            </div>
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Height:" :
                                            category == "planets" ? "Rotational Period:" :
                                                "Manufacturer:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                    category == "characters" ? character.height :
                                    category == "planets" ? planet.rotation_period :
                                    starship.manufacturer
                                    }
                                </p>
                                
                            </div>
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Hair Color:" :
                                            category == "planets" ? "Climate:" :
                                                "Passengers:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                    category == "characters" ? character.hair_color :
                                    category == "planets" ? planet.climate :
                                    starship.passengers
                                    }
                                </p>
                                
                            </div>
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Eye Color:" :
                                            category == "planets" ? "Orbital Period:" :
                                                "Cargo Capacity:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                    category == "characters" ? character.eye_color :
                                    category == "planets" ? planet.orbital_period :
                                    starship.cargo_capacity
                                    }
                                </p>
                                
                            </div>
                            <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                <u className="w-50 text-end pe-2">
                                    {
                                        category == "characters" ? "Gender:" :
                                            category == "planets" ? "Diameter:" :
                                                "Hyperdrive Rating:"
                                    }
                                </u>
                                <p className="ps-2">
                                    {
                                    category == "characters" ? character.gender :
                                    category == "planets" ? planet.diameter :
                                    starship.hyperdrive_rating
                                    }
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
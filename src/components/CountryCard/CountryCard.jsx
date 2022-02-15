import React from "react";
import {useNavigate} from 'react-router-dom'
import "./countryCard.scss";

export const CountryCard = ({
  img="",
  name="",
  population="",
  region="",
  capital=""
}) => {

  const navigate= useNavigate()
  function handleNavigation() {
    navigate(`/country/${name}`)
    
  }

  return (
    <section className="card" onClick={ handleNavigation } >
      <img className="img" src={img} alt={name} />
      <div className="information_Card">
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital:  {capital || "No capital found it"} </p>
      </div>
    </section>
  );
};

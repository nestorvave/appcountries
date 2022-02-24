import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom'
import { DataContext } from "../../context/DataContext";
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
  const{isDark}= useContext( DataContext )

  return (
    <section className="card" onClick={ handleNavigation } >
      <img className="img" src={img} alt={name} />
      <div className={`information_Card ${isDark && "info-dark"}`}>
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital:  {capital || "No capital found it"} </p>
      </div>
    </section>
  );
};

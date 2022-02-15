import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Input } from "../Input/Input";

import './searcher.scss'


export const Searcher = () => {
  const{country,setCountry}= useContext( DataContext )

  function handleInput({target}) {
    setCountry(target.value)
  }
  


  return (
    <div className="searchInput dark_searchInput">
      <div className="red"></div>
      <Input
        placeholder="Search for a country..."
        className="input_MainScreen dark_input_MainScreen"
        onChange={handleInput}
        value={country}

      />
    </div>
  );
};

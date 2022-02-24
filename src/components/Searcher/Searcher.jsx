import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Input } from "../Input/Input";

import './searcher.scss'


export const Searcher = () => {
  const{isDark,setIsDark,country,setCountry}= useContext( DataContext )

  function handleInput({target}) {
    setCountry(target.value)
  }
  


  return (
    <div className={`searchInput ${isDark && "dark_searchInput"} `}>
      <div className="search-icon">
        <img src="/Images/search-icon.svg" alt="search-icon"  />
      </div>
      <Input
        placeholder="Search for a country..."
        className={`input_MainScreen ${isDark && "dark_input_MainScreen"}`}
        onChange={handleInput}
        value={country}
      />
    </div>
  );
};

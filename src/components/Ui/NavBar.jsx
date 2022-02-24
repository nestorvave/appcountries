import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import './navBar.scss'

export const NavBar = () => {

  const{isDark,setIsDark}=useContext( DataContext )

  function handleTheme(){
    setIsDark(!isDark)
    console.log(isDark)
  }

  return (
    <nav className={`navBar ${isDark ? "dark_bar":"light_bar"}`}>
      <Link to="/" className={`navBar_Topic ${isDark ? "dark_link":"light_link"}`} >Where in the world?</Link>
      <div className="btn-theme" onClick={handleTheme}> 
      <img src={`/Images/${isDark ? "moon-icon.svg" : "sun-icon.svg"}`} alt="" srcset="" />
      <p> {`${isDark ? "Dark" : "Light"}`}</p>
      </div>
    </nav>
  );
};

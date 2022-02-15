import React from "react";
import { Searcher } from "../Searcher/Searcher";
import { RegionSelector } from "../RegionSelector/RegionSelector";
import { useFetch } from "../../hooks/useFetch";
import { CountryCard } from "../CountryCard/CountryCard";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { filterByRegion } from "../../helpers/filterByRegion";
import { filterByCountry } from "../../helpers/filterByCountry";

import "./listCountries.scss";

export const ListCountries = () => {
  
  let [data]=useFetch()
  const {region,country}=useContext( DataContext )
  data=filterByRegion(data,region)
  data=filterByCountry(data,country)




  return (
    <main className="container dark_Container">
      <section className="container_MainScreen">
        <Searcher />
        <RegionSelector />
      </section>
      <section className="card-container">
        {
          data!==null&& data.map(item=>(
            <CountryCard
              img={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              key={item.name.common}
                     

            />
          ))
            
        }
      </section>
    </main>
  );
};

import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { filterByCountrySelected } from "../../helpers/filterByCountrySelected";
import { useFetch } from "../../hooks/useFetch";
import { CardSelected } from "../CardSelected/CardSelected";

import "./InfoCard.scss"
export const InfoCard = () => {

  const {countryselected} = useParams();
  const navigate=useNavigate();
  const [data]=useFetch()
  const country=filterByCountrySelected(data,countryselected);

  





  return (
    <section className="infoCard">
      <div className="infoCard-Container">
        <div>
          <button onClick={()=>navigate(-1)}>Back</button>
        </div>
          { country!=null?
            country.map(item=>
              <CardSelected 
                key={item.name.common}
                img={item.flags.png}
                countryName={item.name.common}
                nativeName={item.name.nativeName}
                population={item.population}
                region={item.region}
                subRegion={item.subregion}
                capital={item.capital}
                currencies={item.currencies}
                languages={item.languages}
                tld={item.tld}
                borders={item.borders}
                fifa={item.fifa}
                data={data}
              />
   
            ): <div className="loader" >Cargando</div>
          }
        </div>
    </section>
  );
};

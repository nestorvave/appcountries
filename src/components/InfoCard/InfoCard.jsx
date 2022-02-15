import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { filterByCountrySelected } from "../../helpers/filterByCountrySelected";
import { useFetch } from "../../hooks/useFetch";
import { CardSelected } from "../CardSelected/CardSelected";
export const InfoCard = () => {

  const {countryselected} = useParams();
  const navigate=useNavigate();
  const [data]=useFetch()

  const country=filterByCountrySelected(data,countryselected);
  console.log(country)

  return (
    <section>
      <div>
        <button onClick={()=>navigate(-1)}>Back</button>
      </div>
      <div>
        {country!=null&&
          country.map(item=>
            <CardSelected 
              key={item.name.common}
              img={item.flags.png}
              countryName={item.name.common}
            
            />
            
              
          )
        }
      </div>
    </section>
  );
};
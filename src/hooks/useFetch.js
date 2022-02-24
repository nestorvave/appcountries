import { useEffect,useState } from "react";

export const useFetch = () => {


  const url="https://restcountries.com/v3.1/all"
  const [data,setData]=useState(null)
  
  useEffect(() => {
    async function fetchingApi (){
      let response = await fetch(url);
      response = await response.json();
      setData(response.map((item)=>{
        const{
              flags,region,
              area,capital,
              population,name,
              subregion,tld,
              currencies,languages
              ,borders,cca3
            } =item;
        return {flags,region,area,capital,population,name,subregion,tld,currencies,borders,languages,cca3}
        })
      )
    }
    fetchingApi()

  }, [url,setData])
  
  return [data]
}
  

import React from 'react'

export const CardSelected = ({
    img="",
    countryName="",
    nativeName="",
    population="",
    region="",
    subRegion="",
    capital="",
    currencies="",
    languages="",
    tld=""

}) => {
    console.log(languages)
  return (
    <section>
        <h1>Card</h1>
        <div>
         <img src={img} alt="" />
        </div>
        <div>
            <h1> { countryName } </h1>
        </div>
        <div>
            <p> <b>Native Name:</b> {nativeName}  </p>
            <p><b>Population:</b> {population} </p>
            <p><b>Region:</b> {region}  </p>
            <p><b>Sub Region:</b> {subRegion}  </p>
            <p><b>Capital:</b> {capital} </p>
        </div>
        <div>
            <p><b>Top Level Domain:</b> {tld[0]}</p>
            <p><b>Currencies:</b> {currencies.name} </p>
            <p><b>Languages:</b>  </p>
        </div>
        <div>
            <p><b>Border Countries: </b> </p>
      
        </div>

    </section>
  )
}

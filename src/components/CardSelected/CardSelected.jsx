import React from 'react'
import  {filterByBorder}  from '../../helpers/filterByBorder'
import './CardSelected.scss'
import {useNavigate} from 'react-router-dom'


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
    tld="",
    borders="",
    cca3="",
    data=[]

}) => {
    console.log(cca3)
    const language = Object.values(languages)
    const native = Object.values(nativeName)
    const kindOfCurrencies = Object.values(currencies)
    console.log(kindOfCurrencies[0].name)
    const navigate= useNavigate()
    
    function handleBorder(border) {
        console.log(border)
        let country=filterByBorder(data,border)
        console.log(country[0].name.common)
        navigate(`/country/${country[0].name.common}`)

        
    }



  return (
    <section>
        <div className='img-country' >
         <img src={img} alt="" />
        </div>
        <div className='country-container' >
        <div className='country-name'>
            <h2> { countryName } </h2>
        </div>
        <div  className='country-main'>
            <p> <b>Native Name:</b> {native[0].common}  </p>
            <p><b>Population:</b> {population} </p>
            <p><b>Region:</b> {region}  </p>
            <p><b>Sub Region:</b> {subRegion}  </p>
            <p><b>Capital:</b> {capital} </p>
        </div>
        <div>
            <p><b>Top Level Domain:</b> {tld[0]}</p>
            <p><b>Currencies:</b> {kindOfCurrencies[0].name} </p>
            <div><b>Languages:</b> {language.map(item => <span key={item}> {item} </span>)} </div>
        </div>
        <div className='border' >
            <p><b>Border  Countries: </b> </p>
            <div className="grid-borders">
            {
                borders.length &&  
                    borders.map( item => (<button onClick={()=> handleBorder(item)} key={item} >{item}</button>))
            }

            </div>
        </div>

        </div>

    </section>
  )
}

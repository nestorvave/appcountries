import React from 'react'

export const CardSelected = ({
    img="",
    countryName=""

}) => {
    console.log(img)
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
            <p> <bold>Native Name:</bold>  </p>
            <p><bold>Population:</bold></p>
            <p><bold>Region:</bold> </p>
            <p><bold>Sub Region:</bold> </p>
            <p><bold>Capital:</bold> </p>
        </div>
        <div>
            <p><bold>Top Level Domain:</bold></p>
            <p><bold>Currencies:</bold> </p>
            <p><bold>Languages: </bold> </p>
        </div>
        <div>
            <p><bold>Border Countries: </bold> </p>
      
        </div>

    </section>
  )
}

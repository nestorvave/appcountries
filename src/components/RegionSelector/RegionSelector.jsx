import React,{ useContext} from 'react'
import {DataContext} from "../../context/DataContext"
import './regionSelector.scss'

export const RegionSelector = () => {

    const{setRegion}=useContext( DataContext )

    function handleSelector({target}) {
        setRegion(target.value)
        
    }

 

    return (
        <select className='selector selector_Dark' onChange={handleSelector}>
            <option value="all">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            
        </select>
    )
}


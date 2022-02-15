import React from 'react'
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { ListCountries } from '../components/Countries/ListCountries';
import { InfoCard } from '../components/InfoCard/InfoCard';

import { NavBar } from '../components/Ui/NavBar';

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={ <ListCountries/> }/>
              <Route path="/country/:countryselected" element={ <InfoCard /> }/>
            </Routes>

        </BrowserRouter>
    )
}

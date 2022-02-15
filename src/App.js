import React from 'react'
import { DataProvider } from './context/DataContext'
import { MainRoute } from './Routes/MainRoute'

export const App = () => {

  return (
    <DataProvider >
      <MainRoute />
    </DataProvider>
  )
}

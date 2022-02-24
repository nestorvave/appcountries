import React, { createContext,useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [region, setRegion] = useState("all");
  const [country, setCountry] = useState("");
  const [isDark, setIsDark]=useState(false)

  return (
    <DataContext.Provider
      value={{
        region,
        setRegion,
        country, 
        setCountry,
        isDark, 
        setIsDark
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

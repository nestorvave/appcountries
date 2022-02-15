
export const filterByRegion = (dataFiltered = null, region = "") => {
  switch (region) {
    case "all":
      return dataFiltered;
    case "africa":
      return dataFiltered.filter((item) => item.region === "Africa");
    case "america":
      return dataFiltered.filter((item) => item.region === "Americas");
    case "asia":
      return dataFiltered.filter((item) => item.region === "Asia");
    case "europe":
      return dataFiltered.filter((item) => item.region === "Europe");
    case "oceania":
      return dataFiltered.filter((item) => item.region === "Oceania");

    default:
      return dataFiltered;
  }
  
};

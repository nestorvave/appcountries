export const filterByCountry = (dataFiltered = null, country = "") => {
  let data = dataFiltered;
  if (country.length > 0 && dataFiltered !== null) {
    data = data.filter((item) =>
      item.name.common.toLowerCase().includes(country.toLowerCase())
    );
  }
  return data;
};


export const filterByCountrySelected = (data=null,country) => {
  return (data!=null?data.filter(item=>item.name.common===country):data)
}

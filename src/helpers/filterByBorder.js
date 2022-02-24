export const filterByBorder = (data=null,border) => {
    return (data!=null?data.filter(item=>item.cca3===border):data)
  }
  
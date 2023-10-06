const FormatPrice=({price})=>{
   let number=
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
      price/100
      )
      return(
        <>
    {number}
        </>
      )

}
 export default FormatPrice;
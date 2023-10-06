import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Components/Context/ProductContext";
import Myimage from "../Components/SingleProduct/Myimage";
import Stars from "../Components/SingleProduct/Stars";
import FormatPrice from "../Components/FormatPrice/FormatPrice";
import AddToCart from "../Components/Cart/AddToCart";
const API="https://api.pujakaitem.com/api/products"
const SingleProduct=()=>{
    const{getsingleproduct,singleproduct}=useProductContext()
   const {id}=useParams()
 
console.log(id)


const{
    
    category,
    colors,
    company,
    name,
    price,
    reviews,
    stock,
    stars,
    image,
    description

}=singleproduct;


   useEffect(()=>{
    getsingleproduct(`${API}?id=${id}`)
   },[])
//   
      return(
        <>
           
           <section className="px-8 md:px-16 xl:px-32  py-5">
             <div className="grid grid-cols-1  lg:grid-cols-2 text-gray-500">
             <Myimage image={image}/>
                    <div className="space-y-4 py-5 px-3">
                    <h1 className="text-3xl font-bold">{name}</h1>

                    <Stars stars={stars} reviews={reviews}/>
                    <h1 className="font-bold">MRP: <del><FormatPrice price={price}/></del></h1>
                     <h1 className="txt font-semibold">Deal of the Day : <span><FormatPrice price={price+2500}/></span></h1>
                     <p className=" ">{description} </p>
                     <p className="">Available: <span className="font-semibold">{stock>0 ? "available": "not availabel"}</span></p>
                     <p className="">ID:<span className="font-semibold">{id}</span></p>
                     <p className="">Brand:<span className="font-semibold">{company}</span></p>

                     <AddToCart product={singleproduct}/>
                    </div>
             </div>
           </section>
        </>
      )
}

export default SingleProduct;
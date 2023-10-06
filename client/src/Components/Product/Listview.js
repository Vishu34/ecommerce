import { NavLink } from "react-router-dom"
import { useFilterContext } from "../Context/FilterProducts"
import FormatPrice from "../FormatPrice/FormatPrice"
import React from "react"





const Listview=()=>{
  
    const {filterdata}=useFilterContext()
   
    return(
        <>

<div className="grid gap-5 md:grid-cols-2">
{
    filterdata.map((elm,index)=>{
        const { id, image, name, category, price, company,description } = elm;
       
        return(
            <React.Fragment key={index}>
            <div className="">
               <NavLink to={`/singleproduct/${id}`}>
                 <div className="flex-none sm:flex items-center text-gray-500 bg-white p-2 rounded-md " key={id}>
                    <div className="overflow-hidden">
                        <img src={image} alt="imga" className="rounded-md w-[100%]  h-[350px] sm:h-[200px] object-cover hover:scale-150 hover:transition-all"/>

                    </div>
                     <div className="space-y-3 px-3 py-3 sm:py-0">
                        <h1 className="capitalize text-lg font-bold ">{category}</h1>
                        <p className="txt font-semibold "><FormatPrice price={price/10}/></p>
                        <p>{description.slice(0,90)}....</p>
                       <button className="border-2 border-blue-600 rounded-md txt px-3 py-2">Read More</button>
                     </div>
                 </div>
               </NavLink>
               </div>
            </React.Fragment>
        )
    })
}
</div>
        </>
    )
}







export default Listview
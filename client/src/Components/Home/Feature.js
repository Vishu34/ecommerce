
import React from "react"
import { useProductContext } from "../Context/ProductContext"

const Feature=()=>{
const {featureproduct}=useProductContext()

    return(
        <>
<section className="px-8 md:px-16 xl:px-32 first-slide">
    <div className="py-5 ">
        <div className="">
            <p className="txt text-sm font-semibold">Check Now!</p>
            <h1 className="font-bold text-5xl"> Our Feature Service</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
            {
                featureproduct.map((elm,index)=>{
                    const{id,name,price,image,company}=elm
                    return(
                       <React.Fragment key={index}>

                       <div className="">
                        <div className="bg-white relative rounded-md" >
                           
                           <div className="overflow-hidden">  <img src={image} alt="img" className="w-[100%] h[100%] rounded-md hover:scale-150 hover:transition-all"/></div>
                            <p className="absolute top-2 right-2 txt bg-white px-4 py-2 rounded-full ">{company}</p>
                            <div className="flex justify-between items-center p-3">
                                <p className="font-semibold">{name}</p>
                                <p className="txt font-semibold ">{price}</p>
                            </div>
                         </div>   
                        </div>
                       </React.Fragment>
                    )
                })
            }
        </div>
    </div>
</section>
        </>
    )
}

export default Feature
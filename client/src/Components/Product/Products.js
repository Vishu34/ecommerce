import { BsGrid3X3GapFill } from "react-icons/bs";
import {FaList} from 'react-icons/fa'
import Filter from "./Filter";
import Sort from "./Sort";
import { FilterProducts, useFilterContext } from "../Context/FilterProducts";
import Gridview from "./Gridview";

import Listview from "./Listview";


const Products=()=>{
   const {setsearch,search,gridbtn,listbtn,grid,filterdata}=useFilterContext()
   
   
   return(
        <>
<section className="px-8 md:px-16 xl:px-32  py-5 first-slide">
<div className="">
            <input
              type="text"
              value={search}
              placeholder="search here"
              className="border-2 border-blue-600  w-[100%] px-3 py-2 rounded-md .input-search"
              onChange={(event) => setsearch(event.target.value)}
            />
          </div>
    <div className="flex-none sm:flex content-center pt-10 ">
        <Filter/>
        
      
      
     
     
     <div className=" px-3 py-2">
     <div className="flex justify-between font-semibold text-gray-500 items-center">
           
           <div className="space-x-5">
           <button className={`${grid ? `bg-black  text-white p-2 rounded-sm`:`bg-none` }`} onClick={gridbtn}><BsGrid3X3GapFill/></button>
            <button className={`${grid ? `bg-none`: `bg-black text-white p-2 rounded-sm` }`}  onClick={listbtn}><FaList/></button>
           </div>
           <p className="text-lg">{filterdata.length } products</p>
            <Sort/>
          
         </div>
        
          <div className="pt-10">
          {
        grid ?<Gridview/> : <Listview/>
       }
          </div>
    </div>

     </div>
  
</section>
        </>
    )
}

export default Products;
import { NavLink } from "react-router-dom";
import { useFilterContext } from "../Context/FilterProducts";
import FormatPrice from "../FormatPrice/FormatPrice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishContext } from "../Context/WishContext";
import React from "react";

const Gridview = () => {
  const { filterdata } = useFilterContext();

  const { AddheartItems, RemoveheartItems, wishdata,wish } = useWishContext();

 
const updatedArray = filterdata.map((obj) => ({ ...obj, data: 1 }));

  return (
    <>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {updatedArray.map((productfilter,index) => {
          const {data,id, image, name, category, price, company } = productfilter;
     
      console.log({id})
          
          return (
           <React.Fragment key={index}>
           <div>
             <div
                className="bg-white text-gray-500 capitalize rounded-md"
               
             >
                <div className="p-1 relative overflow-hidden">
                  <img
                    src={image}
                    alt="img"
                    className="rounded-md hover:scale-150 hover:transition-all cursor-pointer"
                  />
                  <p
                    className="font-semibold absolute top-3 right-4 bg-white px-2 py-1 rounded-full
                  "
                  >
                    {name}
                  </p>
                </div>

                <div className="flex justify-between items-center  px-2">
                  <div className="">
                
                        
                     <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/wishlist" onClick={()=>AddheartItems(id,productfilter)}> <p>
                      {/* <FaRegHeart className="cursor-pointer hover:text-red-500"  /> */}
                        <FaHeart className="cursor-pointer hover:text-red-500 hover:active"  /> 

                      
                      </p>
                      </NavLink>
                    
                   
                       
                      
                
                    <p className="font-semibold text-xs">{category}</p>
                  </div>

                  <NavLink to={`/singleproduct/${id}`}>
                   
                    <div className="text-center py-2">
                      <button
                        className="bg-txt text-white p-2 text-center rounded-md font-semibold md:text-xs
                d-none d-sm-block"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </NavLink>


                  <p className="txt font-semibold text-xs">
                    <FormatPrice price={price / 10} />
                  </p>
                </div>

               <NavLink to={`/singleproduct/${id}`}>
               <div className="text-center py- flex justify-center pb-2">
                  <button
                    className="bg-txt text-white p-2 text-center rounded-md font-semibold md:text-xs
                d-block d-sm-none"
                  >
                    Add To Cart
                  </button>
                </div>
               </NavLink>
              </div>
             </div>
            
           </React.Fragment>
             
          );
        })}
      </div>
    </>
  );
};

export default Gridview;

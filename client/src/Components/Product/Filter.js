import React from "react";
import { useFilterContext } from "../Context/FilterProducts";
import { useProductContext } from "../Context/ProductContext";
import Pagination from "./Pagination";


const Filter = () => {
  const { products } = useProductContext();
  const { setcategory,category,company,color, setcolor, setcompany, search } =
    useFilterContext();

  const getmydata = (data, attr) => {
    let newval = data.map((elm) => {
      return elm[attr];
      // return elm.category
    });

    if (attr === "colors") {
      // cancatenate the different array into one array
      newval = newval.flat();
    }
    // all ko add kiye aur duplicate attr delete due to method of set
    return (newval = ["all", ...new Set(newval)]);
  };

  let categorydata = getmydata(products, "category");
  let companydata = getmydata(products, "company");
  let colordata = getmydata(products, "colors");

  return (
    <>
      <section className="">
        <div className="space-y-10  pl-2 pr-24 py-2">
          <div className="">
            <h1 className="font-bold text-lg text-gray-600">Category</h1>
            {categorydata.map((elm,index) => {
              return (
                
                 
                
                <React.Fragment key={index}>
                <div className="">
                 <div className="cursor-pointer" >
                    <p
                      className={`${elm===category ? `border-b-2 border-blue-600 w-[20%]`:`border-none`} text-md font-semibold text-gray-500 capitalize`}
                      onClick={() => setcategory(elm)}
                    >
                      {elm}
                    </p>
                  </div>
                 </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="">
            <h1 className="font-bold text-lg text-gray-600">Company</h1>
            {companydata.map((elm,index) => {
              return (
               <React.Fragment key={index}>
               <div className="">
                 <div className="cursor-pointer" >
                    <p
                      className={`${elm===company ? `border-b-2 border-blue-600 w-[20%]`:`border-none`} text-md font-semibold text-gray-500 capitalize`}
                      onClick={() => setcompany(elm)}
                    >
                      {elm}
                    </p>
                  </div>
                 </div>
               </React.Fragment>
              );
            })}
          </div>

          <div className="">
            <h1 className="font-bold text-lg text-gray-600">Colors</h1>
            <div className="flex md:flex-col  md:space-x-0 space-x-2 cursor-pointer">
              {colordata.map((elm,index) => {
                if (elm === "all") {
                  return (
                    <React.Fragment key={index}>
                    <div className="">
                      <div className="">
                      <p
                        className={`${elm===color ? `border-b-2 border-blue-600`:`border-none`} text-md font-semibold text-gray-500 capitalize`}
                        onClick={() => setcolor(elm)}
                      >
                        {elm}
                      </p>
                      </div>
                      </div>
                    </React.Fragment>
                  );
                }
                return (
                 <React.Fragment key={index}>
                 <div className="">
                    <div className="p-1 cursor-pointer" >
                      <p
                        style={{ backgroundColor: elm }}
                        className="w-5 h-5 rounded-full "
                        onClick={() => setcolor(elm)}
                      ></p>
                    </div>
                    </div>
                 </React.Fragment>
                );
              })}
              
            </div>
            
          </div>
          
          
        </div>
       
      </section>
    </>
  );
};

export default Filter;

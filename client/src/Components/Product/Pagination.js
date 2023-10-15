import React, { useEffect, useState } from "react";
import { useFilterContext } from "../Context/FilterProducts";


const Pagination=()=>{
    const { filterdata } = useFilterContext();
   
    let itemperpage=3
    const [data,setdata]=useState([])
    const[totalpage,setotalpage]=useState(1)
    const[currentpage,setcurrentpage]=useState(1)


 useEffect(()=>{

 setotalpage(Math.ceil(filterdata.length/itemperpage))
  setdata(filterdata.slice(0,itemperpage))
 },[filterdata])

 const getpage=(i)=>{

    setcurrentpage(i)
    let startindex= currentpage*totalpage-totalpage
    let endindex=startindex+totalpage
   setdata(data.slice(startindex,endindex))
   console.log(data)
 }

const renderpagination=()=>{

    let pages=[]
    let maxvisiblepage=2;
    let startpage=1

    let endpage=startpage+maxvisiblepage-1

    for(let i=startpage;i<=endpage;i++){
    pages.push(
        <button
        onClick={()=>getpage(i)}>
           {i}
        </button>
    )
    }
   
    return pages
}


    return(
       <>
         

                
             <React.Fragment>
           <div className="">{renderpagination()}</div>
       </React.Fragment>

       </>
    )
}

export default Pagination;
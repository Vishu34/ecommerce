import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const TopScroll=()=>{
  const[top,settop]=useState()

  const Topscrollbtn=()=>{
    if(window.scrollY>450){
      settop(true)
    }else{
      settop(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',Topscrollbtn)
  })

  const topbtn=()=>{
    window.scrollTo({
      behavior:"smooth",
      top:"0"
    })
  }
    return(
        <>
     {
      top ? ( <div className="fixed bottom-10 right-8">
         <button className=" p-3 rounded-full bg-white text-blue-500 hover:text-black hover:scale-90 hover:transition-all" onClick={topbtn}>
            <FaAngleUp/>
         </button>
      </div>) :null
     }
        </>
    )
}
export default TopScroll;
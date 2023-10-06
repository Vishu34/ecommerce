// const CartItem=({id,amount,image,max,name,price})=>{
// elm k andar sabhi object aa chuka hai 
// esliye upr jaisa likha vaise likh sakte hai 

import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import FormatPrice from "../FormatPrice/FormatPrice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

// nahi to niche jo likha hai vaisa fir define kr skte ho
const CartItem=(elm)=>{
  
const {id,amount,image,max,name,price}=elm
const {RemoveItem,Increment,Decrement,Clearitems,Total_price,Gst}=useCartContext()
    return(
        <>
    
          <div className="flex items-center space-x-2 justify-between pb-5">
            
             <div className="space-y-3 md:space-y-0 md:flex md:space-x-2">
             <div className="">
             <img src={image} alt="image" className="w-8 "/>
             </div>
                <div className="">
                <p>{name} </p>
            </div>
             </div>
           <p className="d-none d-md-block"><FormatPrice price={price}/></p>
           <div className="flex items-center justify-between space-x-5">
            <button  onClick={()=>Decrement(id)}><FaMinus/></button>
            <p className="font-semibold ">{amount}</p>
            <button onClick={()=>Increment(id)}><FaPlus/></button>
           </div>
            <div className="d-none d-md-block"><FormatPrice price={price*amount}/></div>
            <div className="text-red-500 cursor-pointer" onClick={()=>RemoveItem(id)}><AiFillDelete/></div>
          </div>
    
      <hr className=""/>
     

        </>
    )
}

export default CartItem;
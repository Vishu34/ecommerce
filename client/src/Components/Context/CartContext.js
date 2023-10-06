import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../Reducer/CartReducer";

let AppContext1=createContext()
 

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("vishu");
    if (localCartData === []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };
  let initialstate={
    cart:getLocalCartData(),
    Gst:50000,
    Total_price:'',
    Total_items:""
}  

const CartContext=({children})=>{
    
       
    const [state,dispatch]=useReducer(reducer,initialstate)
   
const Addtocart=(id,color,amount,product)=>{
  dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
}

const RemoveItem=(id)=>{
dispatch({type:"REMOVE_ITEM",payload:id})
localStorage.removeItem("vishu")
}

const Increment=(id)=>{
    dispatch({type:"INCRMENT_ITEM",payload:id})
}

const Decrement=(id)=>{
    dispatch({type:"DECREMENT_ITEM",payload:id})
}

const Clearitems=()=>{
    dispatch({type:"CLEAR_ITEMS"})
}




useEffect(()=>{
   dispatch({type:"TOTAL_ITEMS"})
   dispatch({type:"TOTAL_PRICE"})
 localStorage.setItem(
    "vishu",JSON.stringify(state.cart)
 )
},[state.cart])

    return(
        <>
<AppContext1.Provider value={{
...state,
Addtocart,
RemoveItem,
Increment,
Decrement,
Clearitems,

}}>
{children}
</AppContext1.Provider>
        </>
    )
}


const useCartContext=()=>{
   return useContext(AppContext1)
}
export {CartContext,useCartContext,AppContext1}
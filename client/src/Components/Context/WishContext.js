import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/WishReducer";

const AppContext=createContext()

// const getLocalCartData = () => {
//     let localCartData = localStorage.getItem("visu");
//    if(localCartData===[]){
//     return []
   
// }
// else{
//     return JSON.parse(localCartData);
//    } 
   
   
//   };
// VM82:1 Uncaught SyntaxError: "undefined" is not valid JSON
// aisa kuchh error aaya to esko likha dena
  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("visu");
    if (localCartData === null || localCartData === undefined) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };

const initialvalue={
    wishdata:getLocalCartData(),
   totalwish:'',
   wish:true
}

const WishContext=({children})=>{
  const [state,dispatch]=useReducer(reducer,initialvalue)










    const AddheartItems=(id,productfilter)=>{
   dispatch({type:"ADD_WISH_LIST",payload:{id,productfilter}})

// if(wishdata.indexOf(productfilter)===-1){
//     let exist=wishdata.find(elm=>{
//         return elm.id===id
//     })
//     if(exist){
//        setwish(false)
//     }else{
//          setwishdata([...wishdata,productfilter])
//          setwish(true)
//       }
    }
  
    const RemoveheartItems=(id)=>{
 dispatch({type:"REMOVE_WISH_LIST",payload:id})

//     let updatedata=wishdata.filter(elm=>{
//        return elm.id!==id
//     })
//    setwishdata(updatedata)
}

 const RemoveWish=(id)=>{
    dispatch({type:"REMOVE_WISH",payload:id})
    // let updatedata=wishdata.filter(elm=>{
    //     return elm.id!==id
    // })
    // setwishdata(updatedata)
 }
  
 const ClearWishlist=()=>{
    dispatch({type:"CLEAR_WISH_LIST"})
    // setwishdata([])
 }
   useEffect(()=>{
    dispatch({type:"TOTAL_WISH"})
    
// const totalData = wishdata.reduce((acc, obj) => acc + obj.data, 0);
//  settotal(totalData)
//  console.log(totalData)
    
        localStorage.setItem("visu",JSON.stringify(state.wishdata))
    
   },[state.wishdata])
    
    return(
        <>
<AppContext.Provider value={{
    ...state,
   RemoveWish,

   ClearWishlist,
  
AddheartItems,
RemoveheartItems
}}>
    {children}
</AppContext.Provider>
        </>
    )
}


const useWishContext=()=>{
    return useContext(AppContext)
}

 export {WishContext,AppContext,useWishContext};
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext=createContext();
const initialstate={
featureproduct:[],
isloading:false,
iserror:false,
products:[],
singleload:false,
singleproduct:{},
iserrror:false,
}

const API="https://api.pujakaitem.com/api/products"
const ProductContext=({children})=>{
 

const[state,dispatch]=useReducer(reducer,initialstate)
   
   

   const getmydata=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try{
        let res=await axios.get(url);
        let product= await res.data;
        dispatch({type:"SET_DATA",payload:product})
      
    }
    catch(error){
        dispatch({type:"SET_ERROR"})
    }
   }


   
   useEffect(()=>{
  getmydata(API)
   },[])

const getsingleproduct=async(url)=>{
    dispatch({type:"SET_SINGLE_LOAD"})
    try{
        let res=await axios.get(url)
        let data=await res.data
       
        dispatch({type:"SET_SINGLE_DATA",payload:data})
       
    }catch(error){
        console.log("error")
        dispatch({type:"SET_ERRROR"})
    }
}

    return(
        <>
<AppContext.Provider value={{
    ...state,
getsingleproduct
}}>
{children}
</AppContext.Provider>
        </>
    )
}

const useProductContext=()=>{
    return useContext(AppContext)
}
export  {ProductContext,useProductContext,AppContext};
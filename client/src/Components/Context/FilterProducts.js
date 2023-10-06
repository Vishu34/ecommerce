import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { useProductContext } from "./ProductContext"

let AppContext=createContext()
const initialstate={
    grid:true,
   
}

const FilterProducts=({children})=>{
     
    const {products}=useProductContext()
    
      const [state,setstate]=useState(initialstate)
    const [search,setsearch]=useState('');
   
    const[category,setcategory]=useState('all')
    const[company,setcompany]=useState('all')
    const[color,setcolor]=useState('all')
    const [filterdata,setfilterdata]=useState([])
    const[selectinput,setselect]=useState()

let gridbtn=()=>{
    setstate((prevstate)=>({
        ...prevstate,
        grid:true
    }))
 }
 let listbtn=()=>{
setstate((prevstate)=>({
    ...prevstate,
    grid:false
}))
  }      

const selectchange =(e)=>{
   setselect(e)
}




    useEffect(()=>{
        
        let templatedata=[...products]
 if(search){
    templatedata=templatedata.filter(elm=>{
        return (elm.name.toLowerCase().includes(search.toLowerCase())
    || elm.category.toLowerCase().includes(search.toLowerCase())
      )
    })  
}

if(company!=="all"){
   templatedata=templatedata.filter(elm=>{
    return elm.company===company
   })
}

if(category!=="all"){
    templatedata=templatedata.filter(elm=>{
     return elm.category===category
    })
 }

 if(color!=="all"){
    templatedata=templatedata.filter(elm=>{
     return elm.colors.includes(color)
    })
 }
 if(selectinput==="lowest"){
   templatedata=[...templatedata].sort((a,b)=>{
     return   a.price-b.price
   })
 }else if(selectinput==="highest"){
    templatedata=[...templatedata].sort((a,b)=>{
        return  b.price-a.price
      })
 }else if(selectinput==="a-z"){
    templatedata=[...templatedata].sort((a,b)=>{
        return  a.name.localeCompare(b.name)
      })
}else if(selectinput==="z-a"){
    templatedata=[...templatedata].sort((a,b)=>{
        return  b.name.localeCompare(a.name)
      })
 }
   setfilterdata(templatedata)
        },
    [search,company,category,color,products,selectinput])

   
    
   
   
    return(
        <>
<AppContext.Provider value={{
   
    ...state,
    selectinput,
    selectchange,
    gridbtn,
    listbtn,
    search,
    filterdata,
    color,
    company,
    category,
setcategory,
setcolor,
setcompany,
setsearch
}}>
{children}
</AppContext.Provider>
        </>
    )
}

const useFilterContext=()=>{
    return useContext(AppContext)
}
export  {FilterProducts,AppContext,useFilterContext}
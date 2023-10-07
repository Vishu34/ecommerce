import { useEffect, useState } from "react";
import AdsPhone from "../Components/Home/AdsPhone";
import Feature from "../Components/Home/Feature";
import Gaming from "../Components/Home/Gaming";
import Parteners from "../Components/Home/Parteners";
import Section1 from "../Components/Home/Section1";
import Swiper1 from "../Components/Home/Swiper1";
import axios from "axios";
import { useFilterContext } from "../Components/Context/FilterProducts";
console.log(process.env.REACT_APP_SECRET_KEY)

const Home=()=>{
      

  const {setusername}=useFilterContext()

     const [user,setuser]=useState('')
     const [show,setshow]=useState(false)
    useEffect(() => {

        const gethome = async () => {
          // Get the token from the cookie
         
          try{
            const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('tokenvishu='))
            ?.split('=')[1];
    
          // Make a request to the protected route with the token
          const response = await fetch('http://localhost:7000/', {
            method:"GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type":"apllication/json"
            },
          });
        
            const{data}=await response.json()
           
            setuser(data.name)
            setusername(data.email.charAt(0))
            setshow(true)
        }catch(e){
            console.log(e)
          
        }
    
          }
        gethome();
      }, []);
   
    return(
        <>
       
<Swiper1/>

<Section1 show={show} user={user.toUpperCase()}/>
<AdsPhone/>
<Feature/>
<Gaming/>
<Parteners/>

        </>
    )
}

export default Home;
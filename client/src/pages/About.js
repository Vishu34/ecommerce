import { useEffect, useState } from "react";
import Category from "../Components/About/Category";
import Section1 from "../Components/About/Section1";
import Swiper1 from "../Components/About/Swiper1";


const About = () => {

useEffect(() => {
    const fetchAboutData = async () => {
      // Get the token from the cookie
     
      try{
        const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('tokenvishu='))
        ?.split('=')[1];

      // Make a request to the protected route with the token
      const response = await fetch('http://localhost:7000/aboutauth', {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":"apllication/json"
        },
      });

        if(response.ok){
            const data = await response.json();
            console.log(data)
         
        }else{
            window.location.href = '/login';
        }
     

    }catch(e){
        console.log("token is not equal")
        window.location.href = '/login';
    }
    

      }
      
    fetchAboutData();
  }, []);

  return (
    <>
      <Swiper1 />
      <Section1 />
      <Category />
    </>
  );
};

export default About;

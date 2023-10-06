
import {  useNavigate,Link, json } from 'react-router-dom'; // version 5.2.0

import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const navigate=useNavigate()
   
    const[formdata,setdata]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    })

    const handlechange=(event)=>{
        setdata( {...formdata,[event.target.name]:event.target.value})
    }



    const {name,email,password,cpassword}=formdata;
   

    const handlesubmit=async(e)=>{
e.preventDefault()
if(!name || !email || !password|| !cpassword){
    
    return toast.warning('all field are reuired', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 100, // 3000 milliseconds = 3 seconds
       
      });
  }
     else if(password===cpassword){
        try{
    //         const res= await axios.post('http://localhost:7000/signup',{
    //             name:name,
    //             email:email,
    //             password:password,
    //             cpassword:cpassword
    //         })
    // // axios me res.data hota hai aur fetch me res.json hota hai
    //        console.log(res.data)


            const response=await fetch("http://localhost:7000/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name,email,password,cpassword})
            });
            if(response.ok) {
                const {token,data,message} = await response.json();
              
              
       
            toast.success('Registration successful!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000, // 3000 milliseconds = 3 seconds
                onClose: () => {
                setTimeout(() => {
                    navigate("/login")
                }, 1000);
                  // Redirect after toast message
                },
              });
        
          
          }
     

               
         }
         
         catch(e){
            console.log(e);
         }
         
     }
     
     else{
        console.log("password are not matching")
        toast.error('password are not matching!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // 3000 milliseconds = 3 seconds
           
          });
     }
     
    }
  return (
    <>
     
      <section className="px-8 md:px-16 xl:px-32 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-500 p-5">
            <img src="/login/mock-up-1.png" alt="img" />
          </div>

          <div className="bg-gray-200 p-5">
            <h1 className="font-bold text-4xl p-1">SignUp</h1>
            <p className="font-semibold text-slate-500 p-1">
              See your Growth and get consulting support!
            </p>
            <form className="flex flex-col space-y-5 py-5"
            onSubmit={handlesubmit}>
              <label className="font-semibold px-2">Name*</label>
              <input
                type="name"
                name="name"
                value={name}
                placeholder="Enter your Name"
                className="px-4 py-3 border-2 border-blue-200  rounded-3xl "
                onChange={handlechange}
               
              />
              <label className="font-semibold px-2">Email*</label>
              <input
                type="email"
                name="email"
                value={email}
                
                placeholder="Enter your email"
                className="px-4 py-3 border-2 border-blue-200 rounded-3xl "
                onChange={handlechange}
               
              />
              <label className="font-semibold px-2">Password*</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                className="px-4 py-3 border-2 border-blue-200 rounded-3xl "
                onChange={handlechange}
               
              />
              <label className="font-semibold px-2">Confirm Password*</label>
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                placeholder="Enter your password"
                className="px-4 py-3 border-2 border-blue-200 rounded-3xl "
                onChange={handlechange}
               
              />
              <div className="space-y-5 mt-5">
                <button
                  type="submit"
                  className="bg-blue-600 p-2 text-white  text-xl font-bold rounded-md w-[100%]"
                >
                  SignUp
                </button>
                <p className="text-center font-bold text-md">
                  Already have an Account{" "}
                  <Link
                    to="/login"
                    className="txt hover:text-blue-700 border-b-2 border-blue-600 p-1"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignUp;

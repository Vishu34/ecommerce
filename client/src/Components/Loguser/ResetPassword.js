
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ResetPassword=()=>{
   
    const {id,token}=useParams()
console.log(id)
    
    const[password,setpassword]=useState('')
    const[cpassword,setcpassword]=useState('')

const handlesubmit=async(event)=>{
event.preventDefault()
  
 try{
const res= await axios.post(`http://localhost:7000/${id}/${token}`,{
    password:password , cpassword:cpassword
})

    const data= res.post
    console.log("reset pas ka"+data)
    // window.location.href="/login"

 }catch(e){
    console.error(e)
 }
 
}



useEffect(()=>{

const getresetpassword=async()=>{
             
    try{
        const res=await axios.get(`http://localhost:7000/resetpassword/${id}/${token}`)

    }catch(e){
        console.log(e)
    }


            }

getresetpassword()
},[])

  return (
    <>
      <section className="px-8 md:px-16 xl:px-32 py-10">
        <form className="bg-slate-200 p-3 space-y-10 rounded-md"
         onSubmit={handlesubmit}>
         
           <div className="text-center space-y-2">
           <h1 className="font-bold text-xl">Reset password </h1>
          <p className="text-slate-500">Please enter your registered email id</p>
           </div>
          <input type="password" placeholder="enter your password" value={password} className="w-[100%] py-2 px-4 rounded-3xl border-2 border-blue-200"
            onChange={e=>{setpassword(e.target.value)}}
          />
           <input type="password" placeholder="enter your confirm password" value={cpassword} className="w-[100%] py-2 px-4 rounded-3xl border-2 border-blue-200"
            onChange={e=>{setcpassword(e.target.value)}}
          />
        
           <div className="text-center ">
           <button type="submit" className=" text-white  text-lg  font-bold bg-blue-600 w-[100%] py-2 rounded-md">Send</button>
           </div>
        </form>
      </section>
    </>
  );
};

export default ResetPassword;

       


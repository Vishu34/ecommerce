import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FotgetPassword = () => {

    const [email,setemail]=useState('')

const handlesubmit=async(event)=>{
event.preventDefault()

setemail("")
    try{
        const res= await fetch("http://localhost:7000/forgetpassword",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:email})

        })

        if(res.status===201){
            const data=await res.json()
            const{status,message}=data
            console.log( message)
            toast.success(`${message}`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000, // 3000 milliseconds = 3 seconds
               
              });
        }
    }catch(e){
        console.error(e)
    }



}

const handlechange=(e)=>{
     setemail(e.target.value)
     console.log(email)
}
  return (
    <>
    <ToastContainer/>
      <section className="px-8 md:px-16 xl:px-32 py-10">
        <form className="bg-slate-200 p-3 space-y-10 rounded-md"
         onSubmit={handlesubmit}>
         
           <div className="text-center space-y-2">
           <h1 className="font-bold text-xl">Forgot password </h1>
          <p className="text-slate-500">Please enter your registered email id</p>
           </div>
          <input type="email" placeholder="enter your email" value={email} className="w-[100%] py-2 px-4 rounded-3xl border-2 border-blue-200"
            onChange={handlechange}
          />
        
           <div className="text-center ">
           <button type="submit" className=" text-white  text-lg  font-bold bg-blue-600 w-[100%] py-2 rounded-md">Send</button>
           </div>
        </form>
      </section>
    </>
  );
};

export default FotgetPassword;

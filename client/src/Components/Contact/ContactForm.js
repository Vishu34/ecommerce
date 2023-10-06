import { useEffect, useState } from "react"



const ContactForm=({user})=>{
   
  
const[formdata,setformdata]=useState({
    name:user.name,
  email:user.email,
  messagetext:""

})



 const {name,email, messagetext}=formdata;


console.log(name,email)



    const handlesubmit=async(e)=>{
        e.preventDefault()
        
        try{

            const res=await fetch("http://localhost:7000/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,messagetext
                })
            })

             const data=await res.json();
             console.log(data)
        }catch(e){
            console.error(e)
        }

    }




    return(
        <>
 <section className="px-8 md:px-16 xl:px-32  py-5">
     <div className="">
     <h1 className="font-bold text-xl text-center py-3 ">Contact us {user.name}</h1>
        <div className="  first-slide py-3 px-2 rounded-md">
           
           <form className="space-y-2"
           onSubmit={handlesubmit}>
           <div className="">
            <input type="text" name="name" value={name}  onChange={(e)=>{setformdata(e.target.value)}} placeholder="Enter your name" className="w-[100%] rounded-md p-2 border-2 border-blue-600"/>
            </div>
            <div className="">
            <input type="email" name="email" value={email} onChange={(e)=>{setformdata(e.target.value)}} placeholder="Enter your email" className="w-[100%] rounded-md p-2 border-2 border-blue-600"/>
            </div>
            <textarea rows={10} cols={20} value={messagetext}  onChange={(e)=>{setformdata(e.target.value)}} placeholder="enter your text" name="messagetext" className="w-[100%] rounded-md p-2 border-2 border-blue-600">text here...</textarea>
            <div className="">
                <button className="bg-blue-600 text-white  font-semibold rounded-md px-4 py-1"> Send </button>
            </div>
           </form>
        </div>
     </div>
 </section>
        </>
    )
}

export default ContactForm
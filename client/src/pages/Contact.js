import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [formdata, setformdata] = useState({
    _id:"",
    name:"",
    email:"",
    messagetext: "write your message",
  });
 
 

  const {_id, name, email, messagetext } = formdata;
 

  const handlechange = (e) => {
    setformdata({...formdata,[e.target.name]:e.target.value})
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
   setformdata({
      _id:"",
      name:"",
      email:"",
      messagetext: "",
    });

    try{

        const res=await fetch("http://localhost:7000/contactpost",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
              _id, name, email, messagetext
            })
        })

         
        if(res.ok) {
        const data =await res.json();
        
          
 
      toast.success('Message Sent successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000, // 3000 milliseconds = 3 seconds
         
         
        });
  
    
    }
        
          
        
    
    }catch(e){
        console.error(e)
    }

    
  };



  useEffect(() => {
    const getcontact = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("tokenvishu="))
          ?.split("=")[1];

        const res = await fetch("http://localhost:7000/contact", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "apllication/json",
          },
        });

        const { data } = await res.json();
        const {name,email,_id}=data
        
        setformdata({
          _id,
          name,
          email

        });
      } catch (e) {
        console.error(e);
      }
    };

    getcontact();
  }, []);
  return (
    <>
    
      <section className="py-5">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40008.45425589545!2d81.51457950966814!3d21.312702712702364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a291fd2fffae377%3A0xf87213e560d357bc!2sKapasda%2C%20Chhattisgarh%20490042!5e1!3m2!1sen!2sin!4v1693741497757!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="px-8 md:px-16 xl:px-32  py-5">
          <div className="">
            <h1 className="font-bold text-xl text-center py-3 ">
              Contact us 
            </h1>
            <div className="  first-slide py-3 px-2 rounded-md">
              <form className="space-y-2" onSubmit={handlesubmit}>
                <div className="">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handlechange}
                    placeholder="Enter your name"
                    className="w-[100%] rounded-md p-2 border-2 border-blue-600"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handlechange}
                    placeholder="Enter your email"
                    className="w-[100%] rounded-md p-2 border-2 border-blue-600"
                  />
                </div>
                <textarea
                  rows={10}
                  cols={20}
                  value={messagetext}
                  onChange={handlechange}
                  placeholder="enter your text"
                  name="messagetext"
                  className="w-[100%] rounded-md p-2 border-2 border-blue-600"
                >
                  text here...
                </textarea>
                <div className="">
                  <button className="bg-blue-600 text-white  font-semibold rounded-md px-4 py-1">
                    {" "}
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
};

export default Contact;

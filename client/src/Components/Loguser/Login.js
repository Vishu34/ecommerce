import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const navigate=useNavigate()

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[user,setuser]=useState('')
       console.log(user)
  const handlesubmit=(e)=>{
e.preventDefault()

      const getlogin=async()=>{

          try{

        //    const res=await axios.post('http://localhost:7000/login',{
        //     email:email,
        //     password:password
        //    })
        //   console.log(res.data)

        const res=await fetch('http://localhost:7000/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ email:email,
                    password:password})
        });
        
       
          const {token,message,data}= await res.json()
          console.log(data)
         
         setuser(data.email)
          document.cookie = `tokenvishu=${token}; path=/`;

          toast.success('login successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000, // 3000 milliseconds = 3 seconds
            onClose: () => {
                setTimeout(() => {
                  navigate("/");
                }, 1000); // 60000 milliseconds = 1 minute
              }
          });
        

          }catch(e){
              console.error(e)
              toast.error('invalid login details', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000, // 3000 milliseconds = 3 seconds
               
              });
              console.log("mathc nahi kr rha hai")
          }
      }
      getlogin()
}

  return (
    <>
     <ToastContainer/>
      <section className="px-8 md:px-16 xl:px-32 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-500 p-5">
            <img src="/login/bg34-1.png" alt="img" />
          </div>

          <div className="bg-gray-200 p-5">
            <h1 className="font-bold text-4xl p-1">LOGIN</h1>
            <p className="font-semibold text-slate-500 p-1">
              Login to see your Growth and get consulting support!
            </p>
            <form className="flex flex-col space-y-5 py-5"
            onSubmit={handlesubmit}>
              <div className="font-semibold px-2">Email*</div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 border-2 border-blue-200 rounded-3xl "
              />
              <div className="font-semibold px-2">Password*</div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="Enter your password"
                className="px-4 py-3 border-2 border-blue-200 rounded-3xl "
              />
              <div className="space-y-2 mt-5">
                <button
                  type="submit"
                  className="bg-blue-600 p-2 text-white  text-xl font-bold rounded-md w-[100%]"
                >
                  Login
                </button>
                <p className="text-center font-bold text-sm">
                  New Member?{" "}
                  <Link
                    to="/signup"
                    className="txt hover:text-blue-700 border-b-2 border-blue-600 p-1"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="text-center font-bold text-sm">
                 Forget Password
                  <Link
                    to="/forgetpassword"
                    className="text-gray-500 hover:text-blue-700  p-1"
                  >
                   click here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Login;

import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
import { FaList, FaTimes } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFilterContext } from '../Context/FilterProducts';

const Mobilenav=()=>{
    const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('tokenvishu='))
    ?.split('=')[1];
    console.log(token)

     const{username}=useFilterContext()
 const [email,setemail]=useState(username)
    
   
    
    
    const [nav,setnav]=useState(false)
    const[top,settop]=useState()
    const[userlogin,setuserlogin]=useState(token)

    const topnav=()=>{
        if(window.scrollY>150){
               settop(true)
        }else{
            settop(false)
        }
    }
    useEffect(()=>{
     window.addEventListener('scroll',topnav)
     setuserlogin(token)
setemail(username)
    },[token,username])

    const aboutclick=()=>{
        setnav(false)
    }

        

    const handleclick=()=>{
        setnav(false)

        document.cookie=`tokenvishu= ; expires=1000 ; path=/`
       
       
    }

   
    
    

    
    return(
        <>
        <section  className={`bg-white py-2  z-50 w-[100%] d-md-none ${top ? `fixed top-0 w-[100%] `:`static`}`}>
            <div className="flex justify-between items-center px-8 md:px-16 xl:px-32">
                <div className="">
                    <img src="/navbar/logo.svg" alt="img" className='w-36'/>
                </div>

                <div className="">
               
                 
                   {
                    nav ? (

                       
                        <motion.div 
                        initial={{x:500}}
                        animate={{x:0}}
                        transition={{duration:0.5,stiffness:300}}

                        className=" first-slide p-4 fixed top-0 right-0 w-[100%] h-[100%] z-50">
         <ul className=" space-y-8  font-bold text-left">
                           
        
                        <div className="flex justify-between items-center">
                        {
              email ? (<h1 className="p-2 bg-red-800 rounded-3xl w-8 h-8 border-2 border-blue-400
              flex items-center justify-center text-white font-bold capitalize">{username}</h1>
    ) : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="img" className="w-8 h-8 rounded-3xl
    border-2 border-blue-500"/> 
             
             }  


                        <li className=' flex justify-end'><FaTimes className="text-lg cursor-pointer" onClick={aboutclick}/></li>
                        </div>
                      <ul 
                   
                      className="space-y-8">
                      <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={aboutclick} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={aboutclick} to="/aboutauth">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={aboutclick} to="/product">Products</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={aboutclick} to="/contact">Contacts</NavLink></li>
                       
                       {
                        userlogin ? (<li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={handleclick} to="/login">Logout</NavLink></li>)
                        : (<li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={aboutclick} to="/login">Login</NavLink></li>)
                       }
                     
                       <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/wishlist" onClick={aboutclick}>  <li><AiOutlineHeart className='text-2xl font-bold'/></li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/cart" onClick={aboutclick}> <li><AiOutlineShoppingCart className='text-2xl font-bold'/></li></NavLink>
                        </ul>
                   </ul> 
         </motion.div>
                    ): <FaList className="text-lg cursor-pointer"  onClick={()=>setnav(true)}/>
                   }
                  
                </div>
            </div>
        </section>
       
        </>
    )
}
export default Mobilenav;




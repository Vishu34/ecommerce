import {  NavLink, json } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import { useCartContext } from "../Components/Context/CartContext";
import FormatPrice from "../Components/FormatPrice/FormatPrice";
import PaymentForm from "../Components/PaymentGateway/PaymentGeteway";
import { useEffect, useState } from "react";

const Cart=()=>{

    const {cart,Total_price,Clearitems,Gst}=useCartContext()

    const[formdata,setformdata]=useState({
  name:"",
  email:"",
  contact:""
    })

    const{name,email,contact}=formdata
    
    console.log(name,email,contact)

    useEffect(()=>{
        const Fetchlogindata=async()=>{
     
        
            const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('tokenvishu='))
            ?.split('=')[1];
          try{
     
         const res= await fetch("http://localhost:7000/cart",{
           method:"GET",
           headers:{
          
             Authorization: `Bearer ${token}`,
     
           },
     
         })
     
         if(res.status===201){
           const data=await res.json()
           const {name,email,phone}=data.data
           
           setformdata({
            name:name,
            email:email,
            contact:phone
           })
         }
           
          }catch(e){
           console.log(e)
     
          }
     
        }
     
     Fetchlogindata()
       },[])
    

    return(
        <>
          <section className="px-8 md:px-16 xl:px-32 py-5 text-gray-500">
             <div className="">

            
             <div className="">
             <div className="pb-5">
                <ul className="flex space-x-5 justify-between font-semibold">
                    <li>Items</li>
                    <li className="d-none d-md-block">Price</li>
                    <li>Quantity</li>
                    <li className="d-none d-md-block">Subtotal</li>
                    <li>Remove</li>
                </ul>
                <hr className="my-2"/>
             </div>
            
            <div className="">
            {
            cart.map(elm=>{
                console.log(elm)
             return <CartItem key={elm.id} {...elm}/>
            })
           }
            </div>
             </div>

            <div className="py-4 flex justify-between items-center">
        <NavLink to="/product"> <button className="bg-txt p-2 text-white rounded-md font-semibold">Continue Shopping</button></NavLink>
         <button className="bg-red-400 text-white p-2 rounded-md font-semibold" onClick={Clearitems}>Clear Items</button>
      </div>

        <div className="font-semibold py-2">
            <div className="">Subtotal: <FormatPrice price={Total_price}/></div>
            <div className="">Gst:<FormatPrice price={Gst}/></div>
            <hr className="my-2"/>

           <div className="flex justify-between items-center py-2">
           <div className="">Order Total: <FormatPrice price={Total_price+Gst}/></div>
          <div className="">
         
         
         <PaymentForm price={Total_price+Gst} logindata={formdata}/>
          </div>
           </div>
            <div>
      
    </div>
        </div>
             
             
             </div>
          </section>
        </>
    )
}

export default Cart;
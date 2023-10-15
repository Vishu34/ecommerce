
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../Context/CartContext';

const PaymentForm = ({price,logindata}) => {
    console.log(price,logindata)

    const{name,email,phone}=logindata
    const {cart,Total_price,Clearitems,Gst}=useCartContext()

    

    


    


  const handlePayment = async () => {
    const response = await fetch('http://localhost:7000/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount:price, currency: 'INR',
    name,email,phone,cart}),
    });

    const { order_id } = await response.json();
    console.log("eee"+order_id)
    
    const options = {
      key: 'rzp_test_FziSijI6imJ17g',
   amount:price,
      currency: 'INR',
      name: 'Vishu Mernstack developer',
      description: 'Payment Gateway Demo',
      image: 'https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png',
      order_id: order_id,
     
      prefill: {
        // jo bhi user login karega uska emial name phone
        
        name: {name},
        email: {email},
        contact: {phone},
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <button onClick={handlePayment}
      className="bg-green-700 px-4 py-2 rounded-md text-white font-bold">Pay Now</button>
     
    </div>
  );
};

export default PaymentForm;

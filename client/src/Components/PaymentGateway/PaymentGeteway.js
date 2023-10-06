
import React, { useState } from 'react';

const PaymentForm = ({price}) => {
    console.log(price)
  const [paymentId, setPaymentId] = useState(18);

  const handlePayment = async () => {
    const response = await fetch('http://localhost:7000/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount:price, currency: 'INR' }),
    });

    const { order_id } = await response.json();
    console.log("eee"+order_id)
    
    const options = {
      key: 'rzp_test_FziSijI6imJ17g',
    amount:price,
      currency: 'INR',
      name: 'Your Company',
      description: 'Payment Gateway Demo',
      image: 'https://your-company-logo.png',
      order_id: order_id,
     
      prefill: {
        // jo bhi user login karega uska emial name phone
        
        name: 'vishu sahu',
        email: 'sahuvishu26@gmail.com',
        contact: '8889645606',
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

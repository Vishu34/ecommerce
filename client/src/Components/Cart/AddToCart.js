import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ product }) => {
 const{Addtocart}=useCartContext()
 console.log(product)
  const { colors, id, stock ,price} = product;
  const [amount, setamount] = useState(1);
  const[color,setcolor]=useState("#0000")
 const[value,setvalue]=useState(price)
 console.log(price)
 console.log(value)
  const increase=()=>{
  
amount <stock ? setamount(amount+1) : setamount(stock)
   
  }
  const decrease=()=>{
    amount > 1 ?  setamount (amount-1): setamount(1)
  }
const addbtn=()=>{
  setvalue(amount*price)
}
  return (
    <>
      <div className="">
        <div className="flex items-center space-x-3  ">
          <button
            className="font-extrabold text-4xl  text-center"
            onClick={decrease}
          >
            <FaMinus className="text-lg"/>
          </button>
          <h1 className="font-bold text-xl">{amount}</h1>
          <button
            className="font-extrabold text-3xl  text-center"
            onClick={increase}
          >
           <FaPlus className="text-lg"/>
          </button>
        </div>

      <NavLink to="/cart" onClick={()=>Addtocart(id,color,amount,product)}>
      <button className="font-bold bg-txt text-white py-2 px-4 rounded-sm my-4" onClick={addbtn}>
          Add To Cart
        </button>
      </NavLink>
      </div>
    </>
  );
};

export default AddToCart;

import { AiFillDelete } from "react-icons/ai";
import FormatPrice from "../FormatPrice/FormatPrice";
import { useWishContext } from "../Context/WishContext";

const Wish=(elm)=>{
   
    const{ RemoveWish}=useWishContext()
    const{id,image,data,price,description,company,category,name}=elm
    return(
        <>
     
     
     <div className=" m-2">
     <div className="flex justify-between items-center text-sm font-semibold capitalize ">
     <div className="">
         <img src={image} alt="imag" className="w-16"/>
          <div className="">
            <p>{name}</p>
            <p>{category}</p>
           
          </div>
      </div>
      <p className="d-none d-md-block"><FormatPrice price={price/10}/></p>
       <p className="d-none d-md-block">{data}</p>
       <p>{company}</p>
       <div className="">
          <button className="text-red-500 text-lg" onClick={()=> RemoveWish(id)}>
          <AiFillDelete/>
          </button>
       </div>
     </div>
     </div>
        </>
    )
}

export default Wish;
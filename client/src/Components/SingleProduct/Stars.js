
import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'
    const Stars=({stars,reviews})=>{
    console.log(stars)
    console.log(reviews)

   let ratingstar= Array.from({length:5},(elm,index)=>
       
{
   let number=index+0.5
       return(
        <>
  {
   
   stars>=index+1 ? (<FaStar className="text-orange-400"/>) 
    : stars>=number ? (<FaStarHalfAlt className="text-orange-400"/>)
    : (<FaRegStar className="text-orange-400"/>)
 
  }
        </>
       )
        

        })
        return(
            <>
              
                  <div className="flex space-x-2 items-center">
                 { ratingstar}
                 <p>({reviews} customer reviews)</p>
                  </div>
              
            </>
        )
}

export default Stars;
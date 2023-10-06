import {BsCheck} from 'react-icons/bs'
import Header from '../Header'

const Section1=({data})=>{
     data={
        bgcolor:"#f6f6f6",
        first:"ABUOT US",
        second:"You Can Entrust Your Business to Us",
        third:"We took care of the space around. So that nothing prevents you from enjoying nature and freedom, the territory of the complex will be closed for cars. Underground parking is provided for cars.",
        btn:"Read More",
        img:"about/w-corp-img-1.jpg.webp"
    }
    return(
        
        <>
      
      <section className=''>
      <Header mydata={data}/>
      </section>

        </>
    )
}

export default Section1
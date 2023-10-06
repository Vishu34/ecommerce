import {BsCheck} from 'react-icons/bs'
import Header from '../Header'
const Section1=({data,show,user})=>{
     data={
        bgcolor:"#f5f3f1",
        first:`${show ? `WELCOME ${user} `  : "WELCOME TO WOODMART"}`,
        second:"YOU CAN ENTRUST YOUR SHOPPING TO US",
        third:"Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs with.",
        btn:"Shop Now",
        img:"home/w-investment-apartments-opt.jpg.webp"

    }
    return(
        <>
        
        <section className='pb-5'>
        <Header mydata={data}/>
        </section>

        </>
    )
}

export default Section1
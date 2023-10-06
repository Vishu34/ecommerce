import Ads from "../Ads";
import {motion} from 'framer-motion'

const right={
show:{x:-50},
hide:{x:0}
}

const left={
  show:{x:50},
  hide:{x:0}
}

const AdsPhone = ({ data1, data2 }) => {
  data1 = {
    bgcolor:"#f6f6f6",
    color1:"text-blue-600",
    color2:"black",
    btncolor:"bg-blue-700",
    btncolor1:"text-white",
    content1: "NEW TECHNOLOGIEIS",
    content2: "WEBCAMPS 2023",
    content3:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque repellendus quaerat mollitia quia officia voluptatem ut reiciendis ipsum delectus numquam.",
    btn:"Shop More",
img:"home/phone.jpg" 
};
  data2 = {
    bgcolor:"rgb(165 213 236)",
    color1:"text-blue-600",
    color2:"text-white",
    btncolor:"bg-white",
    btncolor1:"text-black",
    content1: "APPLE ACCESSORIES",
    content2: "LEATHER CASES",
    content3:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque repellendus quaerat mollitia quia officia voluptatem ut reiciendis ipsum delectus numquam.",
    btn:"Shop More",
img:"home/laptop3.avif",

  };
  return (
    <>
      <section className="px-8 md:px-16 xl:px-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 overflow-hidden" >
         
          <motion.div 
          initial="show"
          whileInView="hide"
          variants={right}
          transition={{type:"spring", stiffness:300,delay:0.1}}
          
          className="sm:flex items-center space-y-6 sm:space-y-0 p-3 rounded-md" style={{backgroundColor:'#f6f6f6'}}>
          <Ads mydata={data1} /> </motion.div>
          <motion.div 
          initial="show"
          whileInView="hide"
          variants={left}
          transition={{type:"spring", stiffness:300,delay:0.1}}
          className="sm:flex items-center space-y-6 sm:space-y-0 p-3 rounded-md " style={{backgroundColor:'rgb(165 213 236)'}}>
           <Ads mydata={data2} />
           </motion.div>
        </div>
      </section>
    </>
  );
};
export default AdsPhone;

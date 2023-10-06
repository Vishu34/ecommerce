
import {motion} from 'framer-motion'

const head={
  show:{x:50},
  hide:{x:0}
}
    const Footer = () => {
  return (
    <>
      <section className="px-8 md:px-16 xl:px-32 bg-black py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-500 gap-5 cursor-pointer">
            <div className="">
              <div className="space-y-4">
               
               <motion.div 
               initial="show"
                whileInView="hide"
                variants={head}
                transition={{type:"spring", stiffness:300}}
               className=""> <img src="navbar/logo.svg" alt="img" style={{filter:"invert(1)"}}/></motion.div>
                <p>
                  Condimentum adipiscing vel neque dis nam parturient orci at
                  scelerisque neque dis nam parturient.
                </p>
                <p className='flex items-center space-x-2'>451 Wall Street, UK, London</p>
                <p className='flex items-center space-x-2'>Phone: (064) 332-1233</p>
                <p className='flex items-center space-x-2'>Fax: (099) 453-1357</p>
              </div>
              </div>
              <div className="">
                <motion.h1 
                initial="show"
                whileInView="hide"
                variants={head}
                transition={{type:"spring", stiffness:300}}
                className="text-white font-bold text-lg">RECENT POSTS</motion.h1>
                <div className="flex items-center space-y-4 space-x-4 py-3 lg:py-1">
                  <img src="https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=" alt="img" className="w-14 h-14 rounded-md" />
                  <div className="">
                    <p>A companion for extra sleeping</p>
                    <p>July 23, 2016 1 Comment</p>
                  </div>
                </div>
                <hr className='bg-gray-500 text-gray-500 my-4  h-[1.5px]'/>
                <div className="flex items-center space-y-4 space-x-4">
                  <img src="https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=" alt="img" className="w-14 h-14 rounded-md" />
                  <div className="">
                    <p>A companion for extra sleeping</p>
                    <p>July 23, 2016 1 Comment</p>
                  </div>
                </div>
                </div>
            </div>


             <div className="grid grid-cols-1 sm:grid-cols-3 text-gray-500 cursor-pointer gap-5">
                  <div className="">
                  <motion.h1 
                  initial="show"
                  whileInView="hide"
                  variants={head}
                  transition={{type:"spring", stiffness:300}}
                  className="font-bold text-lg text-white"> OUR STORES</motion.h1>
                     <ul className="pt-3 space-y-2">
                    

                        <li>New York</li>
                        <li>London SF</li>
                        <li>Edinburgh</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Las Vegas</li>
                     </ul>
                  </div>

                  <div className="">
                  <motion.h1 
                  initial="show"
                  whileInView="hide"
                  variants={head}
                  transition={{type:"spring", stiffness:300}}
                  className="font-bold text-lg text-white"> USEFUL LINKS</motion.h1>
                     <ul className="pt-3 space-y-2">
                    

                        <li>New York</li>
                        <li>London SF</li>
                        <li>Edinburgh</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Las Vegas</li>
                     </ul>
                  </div>

                  <div className="">
                  <motion.h1 
                  initial="show"
                  whileInView="hide"
                  variants={head}
                  transition={{type:"spring", stiffness:300}}
                  className="font-bold text-lg text-white"> FOOTER MENU</motion.h1>
                     <ul className="pt-3 space-y-2">
                    

                        <li>New York</li>
                        <li>London SF</li>
                        <li>Edinburgh</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Las Vegas</li>
                     </ul>
                  </div>
             </div>
         
        </div>
        <hr className='bg-gray-500 text-gray-500 my-4  h-[1.5px]'/>
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
        <p className='text-sm text-gray-500'>WOODMART  2023 CREATED BY <span className='text-red-600'>X</span>TEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS</p>
            <img src='footer/payments.png' alt='img'/>
        </div>
      </section>
    </>
  );
};

export default Footer;

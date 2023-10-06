import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"

const head={
  show:{x:-100},
  hide:{x:0},
 
}
const paragh={
  show:{x:100},
  hide:{x:0},
 
}
const button={
  show:{x:100},
  hide:{x:0},
 
}
const Swiper1 = () => {
  return (
    <>
     <div className="d-none d-md-block">
     <div className="">
     {" "}
      <Swiper
        loop={true}
        autoplay={{
          delay:3300,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
         
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=" ">
          <div className="first-slide overflow-hidden  flex items-center  relative px-8 md:px-16 xl:px-32 py-32">
            <div className="w-[50%] space-y-5">
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-2xl txt font-medium">SMART WATCHED</motion.p>
              <motion.h1 
              initial="show"
              whileInView="hide"
              variants={head}
              transition={{type:"spring",stiffness:200, delay:0.3}}
              className="text-4xl font-bold">HEALTH CARE MONITOR.</motion.h1>
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, laborum. Maxime doloribus neque suscipit omnis!
                Ratione, deleniti! Quasi maxime at a debitis suscipit nihil
                
                facere, dolores asperiores quisquam placeat? Nihil, architecto
                in? Quisquam nemo magni exercitationem illo officiis?
              </motion.p>

              <motion.button 
               initial="show"
               whileInView="hide"
               variants={button}
               transition={{type:"spring", stiffness:200, delay:0.1}}
              className="bg-txt text-white font-semibold text-sm py-2 px-3 flex items-center rounded-full">
                <p
                className=" p-1">949$ </p>
                <p
                className="items-center">|</p>
                <p
                className="p-1">BUT NOW</p>
              </motion.button>
            </div>
           
           <div className="">
           <img
              src="home/accessories_large.jpg"
              alt="img"
              className="h-[100%] w-[50%] absolute top-0 right-0 object-cover"
            />
           </div>
           
          </div>
         
            
            
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="second-slide  overflow-hidden  flex items-center  relative px-8 md:px-16 xl:px-32 py-32">
            <div className="w-[50%] space-y-5">
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-2xl txt font-medium">APPLIE INNOVATION</motion.p>
              <motion.h1 
              initial="show"
              whileInView="hide"
              variants={head}
              transition={{type:"spring",stiffness:200, delay:0.3}}
              className="text-4xl font-bold text-white">HIGHER LEVEL SMARTPHONE.</motion.h1>
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, laborum. Maxime doloribus neque suscipit omnis!
                Ratione, deleniti! Quasi maxime at a debitis suscipit nihil
                
                facere, dolores asperiores quisquam placeat? Nihil, architecto
                in? Quisquam nemo magni exercitationem illo officiis?
              </motion.p>

              <motion.button 
               initial="show"
               whileInView="hide"
               variants={button}
               transition={{type:"spring", stiffness:200, delay:0.1}}
              className="bg-txt text-white font-semibold text-sm py-2 px-3 flex items-center rounded-full">
                <p
                className=" p-1">949$ </p>
                <p
                className="items-center">|</p>
                <p
                className="p-1">BUT NOW</p>
              </motion.button>
            </div>
            
            <div className="">
            <img
              src="home/hero_large.jpg"
              alt="img"
              className="w-[50%] h-[100%]  absolute top-0 right-0"
            />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="first-slide overflow-hidden  flex items-center  relative px-8 md:px-16 xl:px-32 py-32">
            <div className="w-[50%] space-y-5">
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-2xl txt font-medium">TOP SMARTPHONES</motion.p>
              <motion.h1 
              initial="show"
              whileInView="hide"
              variants={head}
              transition={{type:"spring",stiffness:200, delay:0.3}}
              className="text-4xl font-bold">PERFORMANCE WONDERFUL</motion.h1>
              <motion.p 
              initial="show"
              whileInView="hide"
              variants={paragh}
              transition={{type:"spring",stiffness:300, delay:0.3}}
              className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, laborum. Maxime doloribus neque suscipit omnis!
                Ratione, deleniti! Quasi maxime at a debitis suscipit nihil
                
                facere, dolores asperiores quisquam placeat? Nihil, architecto
                in? Quisquam nemo magni exercitationem illo officiis?
              </motion.p>

              <motion.button 
               initial="show"
               whileInView="hide"
               variants={button}
               transition={{type:"spring", stiffness:200, delay:0.1}}
              className="bg-txt text-white font-semibold text-sm py-2 px-3 flex items-center rounded-full">
                <p
                className=" p-1">949$ </p>
                <p
                className="items-center">|</p>
                <p
                className="p-1">BUT NOW</p>
              </motion.button>
            </div>
           
            <div className="">
           <img
              src="home/accessories_large.jpg"
              alt="img"
              className="h-[100%] w-[50%] absolute top-0 right-0 object-cover"
            />
           </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
     </div>
     </div>
    </>
  );
};

export default Swiper1;

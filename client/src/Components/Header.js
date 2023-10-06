import { BsCheck } from "react-icons/bs";
import { motion } from "framer-motion";
const para1 = {
  show:{ x:-80 },
  hide:{ x:0 }
};
const para2 = {
  show:{ x:-80 },
  hide:{ x:0 }
};
const head = {
    show:{ x:-80 },
    hide:{ x:0 }
  };
  const list = {
    show:{ x:-80 },
    hide:{ x:0 }
  };
  const button = {
    show:{ x:-80 },
    hide:{ x:0 }
  };
  const img1 = {
    show:{ x:50 },
    hide:{ x:0 }
  };
const Header = ({ mydata }) => {
  const { bgcolor, first, second, third, btn, img } = mydata;
  return (
    <>
      <section
        className="px-8 md:px-16 xl:px-32 md:pt-20"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="py-5  grid xs:gridcol1 md:grid-cols-2 gap-3">
          <div className=" space-y-8 p-2 sm:w-[90%]">
            <motion.p
              initial="show"
              whileInView="hide"
              variants={para1}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="font-bold txt"
            >
              {first}
            </motion.p>
            <motion.h1 
            initial="show"
            whileInView="hide"
            variants={head}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            className="font-bold text-4xl sm:text-5xl">
              {second}
            </motion.h1>
            <motion.p
              initial="show"
              whileInView="hide"
              variants={para2}
              transition={{ type: "spring", stiffness: 300, delay:0.3 }}
              className="text-gray-500"
            >
              {third}
            </motion.p>
            <motion.div 
             initial="show"
             whileInView="hide"
             variants={list}
             transition={{ type: "spring", stiffness: 300, delay:0.4 }}
            className="flex items-center space-x-10 text-gray-500 font-semibold">
              <ul>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
              </ul>
              <ul>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
                <li className="flex items-end space-x-4">
                  <BsCheck className="txt font-bold text-xl mr-2" />
                  lorem
                </li>
              </ul>
            </motion.div>

            <motion.button 
            initial="show"
            whileInView="hide"
            variants={button}
            transition={{ type: "spring", stiffness: 300, delay:0.5 }}
            
            className="bg-txt text-white font-bold text-sm px-4 py-2 rounded-full">
              {btn}
            </motion.button>
          </div>
          <motion.div 
          initial="show"
          whileInView="hide"
          variants={img1}
          transition={{ type: "spring", stiffness: 300, delay:0.1 }}
            
          className="p-2">
            <img src={img} alt="img" className="h-[100%] w-[100%]" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header;

import { useRef } from "react";
import { motion } from "framer-motion";

function Drag() {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hover: {
      opacity: 1,
    },
    drag:{
      scale: 1.1,
      boxShadow: '3px 10px 15px'
    } 
  };
  const parentRef = useRef(null);
  return (
    <>
      <div
        ref={parentRef}
        className=" border border-red-600 size-[500px] flex justify-center items-center"
      >
        <motion.div
          className="size-60 bg-indigo-600 rounded-lg"
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
          // dragSnapToOrigin
          // dragElastic={0.9}
          // dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragConstraints={parentRef}
          whileDrag="drag"
        ></motion.div>
      </div>
    </>
  );
}

export default Drag;

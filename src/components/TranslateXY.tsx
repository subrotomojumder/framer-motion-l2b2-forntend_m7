import { motion } from "framer-motion";

const TranslateXY = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 300],
      transition: {
        ease: "linear",
        duration: 3,
        repeat: Infinity,
        opacity: {
          duration: 0.5,
        },
        rotate: { // specific animation type transition property
          delay: 1,
          duration: 2,
          repeat: Infinity,
        },
      },
    },
  };
  return (
    <>
      <div className=" border border-red-600 size-[500px] flex justify-center items-center">
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </>
  );
};

export default TranslateXY;

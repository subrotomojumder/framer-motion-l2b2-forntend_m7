import { motion } from "framer-motion";

const HoverAndTap = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 1 },
    },
    tap: { scale: 1, rotate: 45 },
  };
  return (
    <>
      <motion.div
        className="size-60 bg-indigo-600 rounded-lg"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        // onHoverStart={() => console.log("Hovered")}
        // onHoverEnd={() => console.log("Hovered End")}
      ></motion.div>
    </>
  );
};

export default HoverAndTap;

import { motion } from "framer-motion";

const HiddenToVisible = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div>
      <motion.div
        className="size-60 bg-indigo-600 rounded-lg flex flex-wrap justify-center items-center gap-4 p-5"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          className="size-20 bg-fuchsia-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-fuchsia-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-fuchsia-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-fuchsia-400 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default HiddenToVisible;

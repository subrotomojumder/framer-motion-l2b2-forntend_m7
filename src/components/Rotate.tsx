import { motion } from "framer-motion";

const Rotate = () => {
  const parent = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  return (
    <div>
      <motion.div
        className="size-60 bg-indigo-600 rounded-lg"
        variants={parent}
        initial="initial"
        animate="animate"
        transition={{
          // type: "spring",
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* hello */}
      </motion.div>
    </div>
  );
};

export default Rotate;

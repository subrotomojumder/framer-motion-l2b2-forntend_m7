import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AnimationPresenceToggle = () => {
  const [visible, setVisible] = useState(true);
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="border-2 border-red-400 size-[500px] flex flex-col justify-center items-center">
        <AnimatePresence>
          <motion.button
            layout
            onClick={() => setVisible((c) => !c)}
            className="bg-blue-400 rounded-md px-2 m-2 text-md py-0.5"
          >
            Toggle
          </motion.button>
          {visible && (
            <motion.div
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="size-48 bg-indigo-500 rounded-lg"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimationPresenceToggle;

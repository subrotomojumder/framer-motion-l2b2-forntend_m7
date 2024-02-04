import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const UseAnimationControlsHook = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      controls.start({ x: 200 });
    } else {
      controls.start({ x: -200 });
    }
  };

  useEffect(() => {
    controls.start((i) => ({ // i motion tag custom parameter value
      x: 200,
      transition: {
        delay: i * 1,
        duration: 1,
      },
    }));
  }, []);

  return (
    <>
      <div className=" border border-red-600 size-[500px] flex flex-col justify-center items-center">
        {/* <button
          onClick={handleToggle}
          className="bg-green-400 px-3 py-3 mb-10 "
        >
          Forward
        </button> */}
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          animate={controls}
          custom={1}
          onClick={() => controls.stop()}
        ></motion.div>
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          animate={controls}
          custom={2}
          onClick={() => controls.set({ x: 0 })}
        ></motion.div>
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          animate={controls}
          custom={3}
        ></motion.div>
      </div>
    </>
  );
};

export default UseAnimationControlsHook;

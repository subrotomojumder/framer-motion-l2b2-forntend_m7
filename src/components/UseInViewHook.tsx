import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function UseInViewHook() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true }); // true use korle ekbar return korbe .
  console.log(inView);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-red-400 h-[200vh] w-full"></div>
      <div className=" size-[500px] flex flex-col justify-center items-center">
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          ref={ref}
          animate={
            inView
              ? { x: 0, opacity: 1, transition: { x: { duration: 1 } } }
              : { x: -500, opacity: 0 }
          }
        ></motion.div>
      </div>
    </div>
  );
}

export default UseInViewHook;

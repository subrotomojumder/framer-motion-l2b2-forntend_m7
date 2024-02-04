import { motion, inView, ElementOrSelector } from "framer-motion";
import { useEffect, useRef } from "react";

function InView() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inView(ref.current as ElementOrSelector, (info) => {
      console.log("inView", info.target);
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-red-400 h-[200vh] w-full"></div>
      <div className=" border border-red-600 size-[500px] flex flex-col justify-center items-center">
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          ref={ref}
        ></motion.div>
      </div>
    </div>
  );
}

export default InView;
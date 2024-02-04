import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const UseScrollHook = () => {
  const { scrollY, scrollYProgress } = useScroll();

  //   useMotionValueEvent(scrollY, "change", (e) => {
  //     console.log("scrollY :", e);
  //   });
  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     console.log("scrollYProgress :", e);
  //   });

  return (
    <div>
      <div className="h-[1500px] bg-red-500">
        <motion.div
          className="fixed h-3 w-full bg-yellow-300 "
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
      </div>
    </div>
  );
};

export default UseScrollHook;

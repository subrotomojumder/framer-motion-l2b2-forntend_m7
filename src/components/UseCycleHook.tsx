import { motion, useCycle } from "framer-motion";

const  UseCycleHook = () =>{
  const boxAnimations = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.5 },
    { x: -100, y: -100, opacity: 0.25 },
    { x: 0, y: 0, opacity: 1 },
  ];
  const [animate, cycle] = useCycle(...boxAnimations);
  // const [x, cycle] = useCycle(0,100, -100,200, -200, 0);
  return (
    <>
      <div className=" border border-red-600 size-[500px] flex flex-col justify-center items-center">
        <motion.div
          className="size-52 bg-indigo-600 rounded-lg"
          // animate={{ x: x }}
          animate={animate}
          onTap={() => cycle()}
        ></motion.div>
      </div>
    </>
  );
}

export default UseCycleHook;
import { motion, useMotionValue, useTransform } from "framer-motion";

function UseMotionValue_UseTransform_Hook() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-800, 400], [0, 1]);
  const scale = useTransform(x, [-400, 400], [0.5, 1.5]);
  const rotate = useTransform(x, [-400, 400], [0, 360]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="border-2 border-red-400 size-[400px] flex flex-col justify-center items-center">
        <motion.div
          drag="x"
          style={{ x, opacity, scale, rotate }}
          dragConstraints={{ left: -400, right: 400 }}
          dragSnapToOrigin
          className="size-52 bg-indigo-600 rounded-lg"
        ></motion.div>
      </div>
    </div>
  );
}

export default UseMotionValue_UseTransform_Hook;

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

function UseAnimateHook() {
  const [scope, animate] = useAnimate();
  // const handleClick = () => {
  //   animate(scope.current, {rotate: 45}) //single animation
  // };
  useEffect(() => {
    animate([ // multi animation
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0.5 }, { duration: 1 }],
      [scope.current, { x: -300 }, { duration: 1 }],
      [scope.current, { x: 0 }, { duration: 1 }],
      [scope.current, { opacity: 1 }, { duration: 1 }],
      [scope.current, { rotate: -45 }],
      [scope.current, { x: 300 }, { duration: 1 }],
      [scope.current, { x: 0 }, { duration: 1 }],
      [scope.current, { rotate: 0 }],
    ]);
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" size-[500px] flex flex-col justify-center items-center">
        <div
          ref={scope}
          // onClick={handleClick}
          className="size-52 bg-indigo-600 rounded-lg"
        ></div>
      </div>
    </div>
  );
}

export default UseAnimateHook;
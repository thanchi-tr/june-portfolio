import { MotionValue } from "framer-motion";
import { useState, useEffect, use } from "react";

let useAnimationProgress = (value: MotionValue, delay: number) => {
  const [AnimationProgress, setAnimationProgress] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setAnimationProgress(value.get());
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return AnimationProgress;
};

export default useAnimationProgress;

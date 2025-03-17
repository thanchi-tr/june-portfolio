"use client";

import { useState, useEffect, RefObject } from "react";

const useSlideInput = (
  container: RefObject<HTMLDivElement>,
  toRightHandler: () => void,
  toLeftHandler: () => void
) => {
  const [downX, setDownX] = useState<number | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const downLog = (e: MouseEvent) => {
      setDownX(e.clientX);
    };

    const upLog = (e: MouseEvent) => {
      if (downX === null) return;

      if (downX - e.clientX > 150) {
        toRightHandler();
      }
      if (downX - e.clientX < -150) {
        toLeftHandler();
      }
      setDownX(null);
    };

    const element = container.current;
    element.addEventListener("mousedown", downLog);
    document.addEventListener("mouseup", upLog); // `mouseup` should still be on `document`

    return () => {
      element.removeEventListener("mousedown", downLog);
      document.removeEventListener("mouseup", upLog);
    };
  }, [downX, container, toRightHandler, toLeftHandler]);

  return { downX };
};

export default useSlideInput;

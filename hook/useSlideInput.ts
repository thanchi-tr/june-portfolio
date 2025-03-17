"use client";

import { useState, useEffect, RefObject, useCallback } from "react";

const useSlideInput = (
  container: RefObject<HTMLDivElement>,
  toRightHandler: () => void,
  toLeftHandler: () => void
) => {
  const [downX, setDownX] = useState<number | null>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => setDownX(e.clientX);

    const handleMouseUp = (e: MouseEvent) => {
      if (downX === null || !element) return;

      const deltaX = downX - e.clientX;
      const threshold = element.clientWidth / 5;

      if (deltaX > threshold) toRightHandler();
      if (deltaX < -threshold) toLeftHandler();

      setDownX(null);
    };

    const handleTouchStart = (e: TouchEvent) => {
      setDownX(e.touches[0].clientX);
      e.preventDefault(); // Prevents unwanted scrolling during swipes
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (downX === null || !element) return;

      const deltaX = downX - e.changedTouches[0].clientX;
      const threshold = element.clientWidth / 5;

      if (deltaX > threshold) toRightHandler();
      if (deltaX < -threshold) toLeftHandler();

      setDownX(null);
    };

    element.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [container, toRightHandler, toLeftHandler]);

  return { downX };
};

export default useSlideInput;

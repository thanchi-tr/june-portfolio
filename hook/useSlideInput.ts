"use client";

import { useState, useEffect, RefObject } from "react";

type ScrollDirection = "up" | "down" | null;

const useSlideInput = (
  container: RefObject<HTMLDivElement>,
  toRightHandler: () => void,
  toLeftHandler: () => void
) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      setStartX(e.clientX);
      setStartY(e.clientY);
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (startX === null || startY === null || !element) return;

      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      const threshold = element.clientWidth / 5;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        if (deltaX > 0) toRightHandler();
        else toLeftHandler();
      } else if (Math.abs(deltaY) > 5) {
        setScrollDirection(deltaY > 0 ? "up" : "down");
      }

      setStartX(null);
      setStartY(null);
    };

    const handleTouchStart = (e: TouchEvent) => {
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null || startY === null || !element) return;

      const deltaX = startX - e.changedTouches[0].clientX;
      const deltaY = startY - e.changedTouches[0].clientY;
      const threshold = element.clientWidth / 5;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        if (deltaX > 0) toRightHandler();
        else toLeftHandler();
      } else if (Math.abs(deltaY) > 5) {
        setScrollDirection(deltaY > 0 ? "up" : "down");
      }

      setStartX(null);
      setStartY(null);
    };

    element.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [container, toRightHandler, toLeftHandler]);

  return { scrollDirection };
};

export default useSlideInput;

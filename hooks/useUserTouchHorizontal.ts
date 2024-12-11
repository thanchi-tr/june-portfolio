"use client";

import { useCallback, useEffect, useState } from "react";

const useUserDragHorizontal = (
  actionTarget: React.RefObject<HTMLDivElement>
) => {
  const [downLocation, setDownLocation] = useState(-1);
  const [upLocation, setUpLocation] = useState(-1);
  const [currentRelativePos, setCurrentRelativePos] = useState(0);
  const [movement, setMovement] = useState(0);
  const [isManualOveride, setIsManualOveride] = useState<boolean>(false);
  const [lock, setLock] = useState(false);

  if (!window || !actionTarget) return { isManualOveride };

  const handleMouseDownMove = useCallback(
    (event: TouchEvent) => {
      if (
        actionTarget?.current?.contains(event.target as Node) &&
        event.type === "touchstart"
      ) {
        if (lock) {
          console.log("lock==");
          return;
        }
        setDownLocation(event.touches[0]?.clientX ?? 0);
        setIsManualOveride(true);
        setMovement(0);
      }
    },
    [actionTarget] // Dependencies
  );
  const handleMouseMove = useCallback((event: TouchEvent) => {
    if (event.type == "touchmove") {
      if (lock) {
        console.log("lock==");
        return;
      }
      setCurrentRelativePos(event.touches[0]?.clientX ?? 0);
    }
  }, []);
  const handleMouseUpMove = useCallback((event: TouchEvent) => {
    if (event.type === "touchend" || event.type == "mouseout") {
      setUpLocation(event.touches[0]?.clientX ?? 0);
      setIsManualOveride(false);
      setLock(true);
      setTimeout(() => setLock(false), 400);
    }
  }, []);
  useEffect(() => {
    console.log(isManualOveride);
  }, [isManualOveride]);

  useEffect(() => {
    actionTarget?.current?.addEventListener("touchstart", handleMouseDownMove);
    actionTarget?.current?.addEventListener("touchend", handleMouseUpMove);
    actionTarget?.current?.addEventListener("touchmove", handleMouseMove);

    return () => {
      actionTarget?.current?.removeEventListener(
        "touchstart",
        handleMouseDownMove
      );
      actionTarget?.current?.removeEventListener("touchend", handleMouseUpMove);
      actionTarget?.current?.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (upLocation != -1 && downLocation != -1) {
      setDownLocation(-1);
      setUpLocation(-1);
      setCurrentRelativePos(0);
      setMovement(0);
    }
  }, [upLocation]);
  useEffect(() => {
    if (downLocation != -1) {
      if (lock) {
        console.log("lock==");
        return;
      }
      setMovement(
        Math.abs(currentRelativePos - downLocation) < window.innerWidth * 0.3
          ? ((currentRelativePos - downLocation) / (window.innerWidth * 0.3)) *
              30
          : Math.sign(currentRelativePos - downLocation) * 30
      );
    }
  }, [currentRelativePos]);

  return { isManualOveride, movement };
};

export default useUserDragHorizontal;

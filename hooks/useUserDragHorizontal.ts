"use client";

import { useCallback, useEffect, useState } from "react";

const useUserDragHorizontal = (
  actionTarget: React.RefObject<HTMLDivElement>
) => {
  const [downLocation, setDownLocation] = useState(-1);
  const [upLocation, setUpLocation] = useState(-1);
  const [currentRelativePos, setCurrentRelativePos] = useState(0);
  const [displacement, setDisplacement] = useState(0);
  const [movement, setMovement] = useState(0);
  const [isManualOveride, setIsManualOveride] = useState<boolean>(false);
  const [lock, setLock] = useState(false);

  if (!window || !actionTarget) return { isManualOveride };

  const handleMouseDownMove = useCallback(
    (event: MouseEvent) => {
      if (
        actionTarget?.current?.contains(event.target as Node) &&
        event.type === "mousedown"
      ) {
        console.log("mouse down");
        if (lock) {
          console.log("lock==");
          return;
        }

        setDownLocation(event.clientX ?? 0);
        setIsManualOveride(true);
        setMovement(0);
        setDisplacement(0);
      }
    },
    [actionTarget] // Dependencies
  );
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const displacement =
        (event.clientX - currentRelativePos) / window.innerWidth;
      console.log(displacement);
      if (event.type === "mousemove") {
        console.log("here");
        if (lock) {
          console.log("lock==");
          return;
        }
        if (isManualOveride) {
          const displacement =
            (event.clientX - currentRelativePos) / window.innerWidth;
          console.log(displacement);
          setDisplacement(displacement);
        }
        setCurrentRelativePos(event.clientX ?? 0); // Update current position
      }
    },
    [lock, isManualOveride, currentRelativePos, setDisplacement] // Dependencies
  );

  const handleMouseUpMove = useCallback((event: MouseEvent) => {
    if (event.type === "mouseup" || event.type == "mouseout") {
      setUpLocation(event?.clientX ?? 0);
      setIsManualOveride(false);
      setLock(true);
      setTimeout(() => setLock(false), 400);
    }
  }, []);
  useEffect(() => {
    // console.log(isManualOveride);
  }, [isManualOveride]);

  useEffect(() => {
    actionTarget?.current?.addEventListener("mousedown", handleMouseDownMove);
    actionTarget?.current?.addEventListener("mouseup", handleMouseUpMove);
    actionTarget?.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      actionTarget?.current?.removeEventListener(
        "mousedown",
        handleMouseDownMove
      );
      actionTarget?.current?.removeEventListener("mouseup", handleMouseUpMove);
      actionTarget?.current?.removeEventListener("mousemove", handleMouseMove);
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
        Math.abs(currentRelativePos - downLocation) < window.innerWidth
          ? ((currentRelativePos - downLocation) / window.innerWidth) * 100
          : Math.sign(currentRelativePos - downLocation) * 100
      );
    }
  }, [currentRelativePos]);

  return { isManualOveride, movement, displacement };
};

export default useUserDragHorizontal;

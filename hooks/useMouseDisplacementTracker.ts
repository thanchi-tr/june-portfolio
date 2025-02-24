"use client";
import { useReducer, useEffect, useCallback, useState } from "react";

export const LEFT = -1;
export const RIGHT = 1;
export const STATION = 0;
interface mouseCoordDetail {
  displacement: number;
  initTriggerX: number;
  prevTriggerX: number;
  direction: number;
}
type ActionT =
  | { type: "trigger"; payload: MouseEvent }
  | { type: "detrigger" }
  | { type: "move"; payload: MouseEvent };

type reducerT = (state: mouseCoordDetail, action: ActionT) => mouseCoordDetail;
const useMouseDisplacementTracker = (
  actionTarget: React.RefObject<HTMLDivElement>
) => {
  const [isTracking, setIsTracking] = useState(false);
  const [lock, setLock] = useState(false);
  const initState: mouseCoordDetail = {
    displacement: 0,
    initTriggerX: 0,
    prevTriggerX: 0,
    direction: STATION,
  };

  const reducer: reducerT = (state, action) => {
    switch (action.type) {
      case "trigger": {
        setIsTracking(true);
        return {
          ...initState,
          displacement: 0,
          initTriggerX: action.payload.clientX,
          prevTriggerX: action.payload.clientX,
        };
      }
      case "detrigger": {
        setIsTracking(false);
        return { ...initState };
      }
      case "move": {
        let displacement_ = action.payload.clientX - state.prevTriggerX;
        let direction_ =
          displacement_ < 0 ? LEFT : displacement_ > 0 ? RIGHT : STATION;

        displacement_ = Math.floor(
          (Math.abs(displacement_) / window.innerWidth) * 300
        );
        return {
          ...initState,
          prevTriggerX: action.payload.clientX ?? state.prevTriggerX,
          direction: direction_,
          displacement: Math.abs(2),
        };
      }

      default:
        return state;
    }
  };

  const [coordDetail, dispatch] = useReducer(reducer, initState);
  const mouseDownHandler = (event: MouseEvent) => {
    if (
      actionTarget?.current?.contains(event.target as Node) &&
      event.type == "mousedown"
    ) {
      if (lock) {
        console.log("lock==");
        return;
      }
      event.preventDefault;
      dispatch({ type: "trigger", payload: event });
    }
  };
  const mouseUpHandler = (event: MouseEvent) => {
    if (
      actionTarget?.current?.contains(event.target as Node) &&
      event.type == "mouseup"
    ) {
      dispatch({ type: "detrigger" });
      setLock(true);
    }
  };
  const mouseOutHandler = useCallback(
    (event: MouseEvent) => {
      if (
        actionTarget?.current?.contains(event.target as Node) &&
        event.type == "mouseout"
      ) {
        dispatch({ type: "detrigger" });
      }
    },
    [coordDetail]
  );

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    if (
      actionTarget?.current?.contains(event.target as Node) &&
      event.type == "mousemove"
    ) {
      event.preventDefault;
      dispatch({ type: "move", payload: event });
    }
  }, []);
  useEffect(() => {
    actionTarget?.current?.addEventListener("mousedown", mouseDownHandler);
    actionTarget?.current?.addEventListener("mouseup", mouseUpHandler);
    actionTarget?.current?.addEventListener("mouseout", mouseOutHandler);

    return () => {
      actionTarget?.current?.removeEventListener("mousedown", mouseDownHandler);
      actionTarget?.current?.removeEventListener("mouseup", mouseUpHandler);
      actionTarget?.current?.removeEventListener("mouseout", mouseOutHandler);
    };
  }, []);

  useEffect(() => {
    if (isTracking) {
      actionTarget?.current?.addEventListener("mousemove", mouseMoveHandler);
    } else {
      actionTarget?.current?.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, [isTracking]);

  if (!window || !actionTarget) return { coordDetail };

  return { coordDetail, isTracking };
};

export default useMouseDisplacementTracker;

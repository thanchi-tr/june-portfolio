"use client";

import { useState } from "react";

// the location of
interface dragConfig {
  cb: (displacement: number) => {};
  maxWidth_: number;
}

const useLoopedScreenSlider = (maxWidth_: number) => {
  const [displacement, setDisplacement] = useState(0);
  const maxWidth = maxWidth_;

  /**
   * Handle updating the location ensure it loop over
   */
  const updateDisplacement = (realDisplacement: number) => {
    setDisplacement((prev) => (realDisplacement + prev) % maxWidth);
  };

  /**
   * get the new coordinate (1 direction: X) in percentage of card (1 card width == 100)
   */
  const getCardCoordinate = (cardInitIndex: number) => {
    let cardInitCoord = cardInitIndex * 100;
    return (cardInitCoord + displacement * 100) % maxWidth_;
  };
  return { getCardCoordinate, updateDisplacement };
};

export default useLoopedScreenSlider;

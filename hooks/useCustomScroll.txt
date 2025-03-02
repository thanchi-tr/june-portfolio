"use client";

import { useEffect, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { NavButtonT } from "@/app/page_";

export interface SectionScrollDefition {
  lowerBound: number;
  upperBound: number;
}

const useCustomScroll = (pageSections: NavButtonT) => {
  const { scrollY } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const pageScrollMap: SectionScrollDefition[] =
    pageSections.length === 0
      ? []
      : pageSections.map((_, index) => ({
          lowerBound: (100 / pageSections.length) * index,
          upperBound: (100 / pageSections.length) * (index + 1),
        }));

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const documentHeight = document.body.scrollHeight - window.innerHeight;

    if (documentHeight > 0) {
      const percentage = (latest / documentHeight) * 100;
      let scrollProgress = parseFloat(percentage.toFixed(2));
      setScrollPercentage(scrollProgress);
    }
  });

  // Retrieve the section definition based on the index
  const getSectionDefition = (index: number): SectionScrollDefition => {
    if (index < 0 || index >= pageScrollMap.length) {
      console.warn(`Invalid index: ${index}`);
      return { lowerBound: Number.MAX_SAFE_INTEGER, upperBound: -1 };
    }
    return pageScrollMap[index];
  };
  const scrollToPercentage = (percentage: number) => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = (percentage / 100) * scrollHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };

  const scrolToSection = (sectionIndex: number) => {
    scrollToPercentage(pageScrollMap[sectionIndex].lowerBound + 1);
  };
  return {
    scrollPercentage,
    scrollToPercentage,
    getSectionDefition,
    scrolToSection,
  };
};

export default useCustomScroll;

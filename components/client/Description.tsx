"use client";

import TypedTextEntity from "@/components/client/Animation/TypedText";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { motion } from 'framer-motion'

const Discription = () => {
    const [state, setState] = useState(0);
    const TEXT_ANIMATION_WRAPUP = 3;
    useEffect(() => {
        if (state == TEXT_ANIMATION_WRAPUP) {
            setTimeout(() => setState(4), 1000)
        }
        if (state == 4) {
            setTimeout(() => setState(0), 1800)
        }
        if (state == 5) {
            setTimeout(() => setState(6), 1500)
        }

    }, [state])
    const displayTexts = [
        { text: "front dev", timesMap: [1, 1, 1, 1, 1, 1, 1, 0.6, 0.7, 1], scale: 0.19 },
        { text: "back dev", timesMap: [1.3, 1, 1, 1, 0.5, 1, 1, 1, 1], scale: 0.19 },
        {
            text: "full stack engineer!",
            timesMap: [0.5, 0.7, 0.9, 0.8, 0.5, 1.8, 1, 1, 0.4, 0.5, 0.1, 1.1, 0.9, 0.6, 0.7, 0.5, 0.8, 0.4, 0.9, 1.5],
            scale: 0.17
        }
    ]
    const updateState = useCallback(
        () => setState(prev => prev + 1), [state]
    )
    const displayText = "ful";

    const variants = {
        "passive": { scaleY: 1, scaleX: 1 },
        "pre-movement": {
            scale: [1, 1, 1.1, 1.1, 1.1, 1],
            transition: { duration: 1, ease: "anticipate" }
        },
    }
    return (
        <>

            <motion.div className={`absolute z-20 h-[8vh] w-1/2 text-2xl bg-white transition-all delay-75 duration-200 overflow-clip rounded-md
            ${state == 4 ? "drop-shadow-sm shadow-highlight border-2 " : " border-2  "}
          `}
                variants={variants}
                animate={
                    state == 4 ? "pre-movement" : "passive"
                }
            >
                {(state >= TEXT_ANIMATION_WRAPUP) ?
                    <div className={`uppercase font-mainfont font-medium text-center 
              ${state >= 4
                            ? "text-midground transition-all duration-500 text-4xl text-center"
                            : `text-4xl transition-all duration-200 ease-in-out
                `
                        }
              `}
                    >{(state >= 5) ? "" : "June trinh"}</div> :
                    <TypedTextEntity
                        text={displayTexts[state].text}
                        typingSimilationInSecond={displayTexts[state].timesMap.map(num => num * displayTexts[state].scale)}
                        isReverse={(state == 2) ? false : true} callback={updateState} />
                }


            </motion.div>
            <motion.div className={`absolute z-0 h-[32vh] w-[115%] text-2xl
            
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                from-yellow-400/20  via-pink-400/0 to-pink/0 
                
                transition-all delay-45 duration-200 overflow-clip rounded-md
                ${state == 4 ? "drop-shadow-sm shadow-highlight " : " "}
                `}
                animate={
                    (state >= 4)
                        ? { scale: [0.5, 1, 1, 0] }
                        : { scale: 0 }
                }
                transition={
                    { duration: 1, ease: "anticipate" }
                }
            />
        </>

    )
}
export default Discription;
'use client';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AnimatedTextCursor from "./AnimatedTextCursor";
interface config {
    text: string,
    isReverse?: boolean, //indicate if the text will be clear after complet
    typingSimilationInSecond: number[] // time take for each character to appear
    callback: () => void,
}
const INIT = -1;
const TERMINATE = -2;
const TypedText = ({ text, typingSimilationInSecond, isReverse, callback }: config) => {
    const idRef = useRef(uuidv4());
    const charSet = text.replaceAll(" ", "\u00A0").split("");
    const timeMap = useRef<number[]>(typingSimilationInSecond);

    const isDeletePath = useRef(false);
    const cursorIndexOffset = useRef(0);
    const [curIndex, setCurIndex] = useState(-1);
    const reset = () => {
        callback();
        setCurIndex(TERMINATE)
    }
    useEffect(
        () => {
            timeMap.current = typingSimilationInSecond
        },
        [typingSimilationInSecond]
    )
    useEffect(
        () => {
            isDeletePath.current = false;
            cursorIndexOffset.current = 0;
            setCurIndex(INIT)
        }, [text]
    )
    useEffect( // input text
        () => {
            if (isDeletePath.current) { return; } // make sure effect take place when simulate text typing
            if ((curIndex) < charSet.length) {
                const timer = setTimeout(
                    () => {
                        setCurIndex(prev => prev + 1);
                        if ((curIndex + 1) == charSet.length) {

                        }
                    },
                    timeMap.current[curIndex + 1] * 700
                );

                return () => clearTimeout(timer);
            }

            if (isReverse) {
                const timer = setTimeout(() => {
                    isDeletePath.current = true;
                    cursorIndexOffset.current += 1;
                    setTimeout(
                        () => setCurIndex(charSet.length - 1),
                        timeMap.current[charSet.length - 1] * 700
                    );
                }, timeMap.current[charSet.length - 1] * 800)
                return () => clearTimeout(timer);
            }
            setTimeout(
                () => {
                    reset()
                },
                1200
            );
        }
        , [curIndex])
    useEffect( //delete text
        () => {
            if (!isDeletePath.current) { return; } // make sure effect take place when simulate text deleting
            if (curIndex == 0) {
                const timer = setTimeout(
                    () => setCurIndex(prev => prev - 1),
                    timeMap.current[0] * 200
                );

                return () => clearTimeout(timer);
            }
            if (curIndex > 0) {
                const timer = setTimeout(
                    () => setCurIndex(prev => prev - 1),
                    timeMap.current[curIndex - 1] * 500
                );

                return () => clearTimeout(timer);
            } else {
                setTimeout(
                    () => {
                        reset();
                    },
                    1000
                );
            }


        }
        , [curIndex])

    const characterVariants = {
        hidden: { opacity: 0, transition: { duration: 0.2, ease: "anticipate" } },
        visible: { opacity: 1, transition: { duration: 0.2, ease: "anticipate" } },
        startVisible: { opacity: 1, transition: { duration: 0.2, ease: "anticipate", delay: 0.3 } }
    };
    return (

        <div className={`relative translate-x-[1vw]
            flex flex-row gap-[1.3px]
             h-full w-full 
             uppercase font-mainfont font-semibold
             `}

        >
            <motion.span

                className={`relative h-full w-auto `}
                variants={characterVariants}
                initial="hidden"
                animate="visible"
            > {""}
                <AnimatedTextCursor isShow={curIndex == -2} isDeleting={isDeletePath.current} />
            </motion.span>
            {
                charSet
                    .map(
                        (char, index) => (
                            <div key={`${idRef.current}-${index}`}>

                                <motion.span
                                    key={`${idRef.current}-${index}`}
                                    className={`relative h-full w-auto 
                                    flex items-center justify-center flex-col text-center
                                        ${(char == "\u00A0")

                                            ? "pl-[1.2px]"
                                            : ""
                                        }
                                    `}
                                    variants={characterVariants}
                                    initial={"hidden"}
                                    animate={
                                        (index <= curIndex)
                                            ? "visible"
                                            : "hidden"
                                    }
                                > {char}
                                    <AnimatedTextCursor isShow={curIndex == (index - cursorIndexOffset.current)} isDeleting={isDeletePath.current} />

                                </motion.span>
                            </div>

                        )
                    )}
            <motion.span

                className={`relative h-full w-auto  `}
                variants={characterVariants}
                initial="hidden"
                animate="visible"
            > {""}
                <AnimatedTextCursor isShow={curIndex == charSet.length} isDeleting={isDeletePath.current} />
            </motion.span>
            {/* This is the animated cursor position */}

        </div >
    )
}



export default TypedText;
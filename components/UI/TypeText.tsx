'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const TypedText = ({ options, className }: { options: string[], className: string }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % options.length);
        }, index != 0 ? 2500 : 4000);
        return () => clearTimeout(timer);
    }, [index]);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.35,
            },
        },
    }
    const items = {
        hidden: { opacity: 0, },
        show: { opacity: [0, 1, 1], display: "inline-block" },
    }


    return (

        <motion.div
            className={`flex ${className} select-none`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{}}
            key={index}>
            {options[index].split("").map((char, cIndex) => (

                <motion.h3
                    key={cIndex}
                    variants={items}
                    className={`hidden whitespace-pre w-auto text-2xl`}
                >
                    {char === " " ? "\u00A0" : char} {/* handle spaces */}
                </motion.h3>

            ))}

            <h3 className="h-full  animate-pulse bg-white w-auto text-2xl"> |</h3>
        </motion.div>
    );
}
export default TypedText;
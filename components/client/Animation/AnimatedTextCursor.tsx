'use client'
import { motion } from "framer-motion"

const AnimatedTextCursor = ({ isShow, isDeleting }: { isShow: boolean, isDeleting: boolean }) => {
    return (

        < motion.p
            className={`
                absolute z-10 
                top-[15%] right-[-11px]
                h-[70%] w-[10px]
                ${isDeleting ? "transition-all delay-[1s]" : ""}
                ${isShow ? "flex opacity-100" : "hidden opacity-0"}
                 bg-background/90`}
            initial={{ opacity: 1 }}
            animate={{
                x: ["-2px", "0"],
                opacity: [1, 1, 1, 1, 0.2, 0.2], // Opacity animation: stays 1, then fades out
            }
            }
            transition={{
                opacity: {
                    duration: 0.85,
                    repeat: Infinity, // Infinite loop
                    repeatType: "loop", // Restart the animation from the beginning
                    ease: "anticipate",
                }, // Opacity animation duration
            }}
        />

    )
}

export default AnimatedTextCursor;
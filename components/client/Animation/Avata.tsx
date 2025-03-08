'use client';
import { motion } from "framer-motion";

const Avata = () => {
    return (
        <div className="relative h-full w-full items-end lg:z-[120] hidden lg:flex">
            {/* <div className="absolute 2xl:hidden md:bg-gray-400/10 h-5/6 md:h-3/5 w-[95%] rounded-full scale-y-105"></div>
            <div className="absolute 2xl:hidden md:bg-secondary h-2/3 md:h-3/5 w-[70%] rounded-full left-[12%]"></div> */}
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <motion.div className="
                        absolute group hover:cursor-pointer
                        bottom-[1.6rem] right-[1rem] 2xl:right-[-15.4rem] 2xl:bottom-[-12vh]
                        rotate-12 text-2xl xl:text-3xl 2xl:text-4xl
                        text-white md:text-white lg:text-white/60 text-shadow-lg shadow-secondary
                        font-mainfont z-10 will-change-transform
                        font-[1000] 
                        2xl:translate-y-[150vh] 2xl:scale-105
                        "
                    initial={{ scale: 1, rotate: "-0deg" }}
                    animate={{ scale: [1, 1.6, 1.5, 1], rotate: ["0deg", "12deg", "0deg"] }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                >

                    <motion.div
                        className="will-change-transform"
                        initial={{
                            translateX: "0"
                        }}
                        animate={{
                            translateX: ["-0.6vw", "-6.6vw", "-3.5vw", "-2.9vw", "-4vw", "-0.6vw"],
                            y: ["0.3rem", "2.1rem", "-1rem", "0.3rem", "0.3rem", "1.1rem", "-1.1rem", "0.3rem"],
                            rotateZ: ["0", "-5deg", "-2deg", "3deg", "0"]
                        }}
                        transition={{ delay: 0.2, duration: 19, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >Solution-oriented
                            <p className="gradient-text text-3xl hidden group-hover:block">Click for CV</p>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-white opacity-60 2xl:opacity-30 blur-3xl"></div>

                        </motion.div>
                    </motion.div>
                </motion.div>
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">

                <motion.div className="
                    absolute z-120 group cursor-pointer
                    bottom-[5vh] right-0 will-change-[transform,opacity]
                    text-2xl xl:text-3xl 2xl:text-4xl 2xl:bottom-[22%] 2xl:-right-[9%]
                    text-white md:text-white lg:text-white/60 md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ x: "39vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.65, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            y: ["-1.5rem", "-1.1rem", "-2.5rem", "-1.5rem"],
                            x: ["0", "0.6vw", "1vw", "0", "-5vw", "-1.3vw", "0"],
                            rotateZ: ["0", "0", "-3deg", "0", "5deg", "0"]
                        }}
                        transition={{ delay: 1.2, duration: 11, repeat: Infinity }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-white opacity-60 2xl:opacity-30 blur-3xl"></div>

                        Innovative
                        <p className="gradient-text text-3xl hidden group-hover:block">Click for CV</p>
                    </motion.div>
                </motion.div>
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <motion.div className="
                    absolute z-110 group cursor-pointer will-change-[transform,opacity]
                    bottom-[-8vh] right-[-25vw] translate-x-[-140%] md:translate-x-[-75%] lg:translate-x-0
                    text-2xl xl:text-3xl 2xl:text-4xl 2xl:bottom-[-5%] 2xl:-right-[10%] 2xl:translate-y-[10vh]
                    text-white md:text-white lg:text-white/60 md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ translate: "39vw", opacity: 0 }}
                    animate={{ translate: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.2, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            y: ["-4.2rem", "-0.5rem", "-1.1rem", "-2.5rem", "-4.2rem"],
                            x: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                            rotateZ: ["0", "2deg", "-3deg", "0", "5deg", "0"]
                        }}
                        transition={{ delay: 0.3, duration: 8, repeat: Infinity }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-white opacity-60 2xl:opacity-30 blur-3xl"></div>

                        Team-player
                        <p className="gradient-text text-3xl hidden group-hover:block">Click for CV</p>
                    </motion.div>
                </motion.div>
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <motion.div className="
                    absolute z-[100] group hover:cursor-pointer 2xl:z-[300]
                    top-0 md:top-8 right-0 2xl:translate-x-[14vw] will-change-[transform,opacity]
                    text-4xl xl:text-5xl 2xl:text-6xl 2xl:bottom-[20%] 2xl:-right-[10%]
                    text-background md:text-white md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ x: "39vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.42, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            y: ["-1.5rem", "-3.5rem", "-1.1rem", "-1.5rem"],
                            x: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                            rotateZ: ["0", "-3deg", "0", "5deg", "0", "0"]
                        }}
                        transition={{ delay: 1.25, duration: 6, repeat: Infinity }}
                    >

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 2xl:opacity-30 blur-3xl"></div>

                        FULLSTACK ENGINEER
                        <p className="gradient-text text-5xl hidden group-hover:block">Click for CV</p>
                        <p className="gradient-text text-4xl group-hover:hidden">Let&#39;s Build The Experience</p>
                    </motion.div>
                </motion.div>
            </a>

        </div >

    )
}

export default Avata;
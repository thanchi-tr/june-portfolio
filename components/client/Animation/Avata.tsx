'use client';
import { motion } from "framer-motion";

const Avata = () => {
    return (
        <div className="relative flex h-full w-full items-end lg:z-[120]">
            {/* <div className="absolute 2xl:hidden md:bg-gray-400/10 h-5/6 md:h-3/5 w-[95%] rounded-full scale-y-105"></div>
            <div className="absolute 2xl:hidden md:bg-secondary h-2/3 md:h-3/5 w-[70%] rounded-full left-[12%]"></div> */}
            {/*Picture */}
            <motion.div className="
                    absolute 
                    scale-[120%] md:scale-[85%]
                    right-0 top-0   z-[220] 2xl:right-[-10vw]
                    h-full aspect-square  
                     overflow-clip
                    translate-x-[38%] -translate-y-[50%]
                    md:-translate-y-[12%] md:translate-x-[5%] sm:translate-x-[10%] 
                    rounded-[100%] 2xl:rounded-bl-[120%] 2xl:rounded-br-[0%] lg:border-b-4 2xl:border-b-8 
                    border-white/40 md:border-white/0 
                    2xl:-translate-x-[100%] min-h-[190px] max-h-[500px]
                    "
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.18, delay: 0.87, ease: "anticipate" }}
            >


            </motion.div>

            <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <motion.div className="
                        absolute group hover:cursor-pointer
                        bottom-[1.6rem] right-[1rem] 2xl:right-[-15.4rem] 2xl:bottom-[-12vh]
                        rotate-12 text-2xl xl:text-3xl 2xl:text-4xl
                        text-white md:text-white lg:text-white/60 text-shadow-lg shadow-secondary
                        font-mainfont z-10
                        font-[1000] 
                        2xl:translate-y-[150vh] 2xl:scale-105
                        "
                    initial={{ scale: 1, rotate: "-0deg" }}
                    animate={{ scale: [1, 1.6, 1.5, 1], rotate: ["0deg", "0deg", "12deg"] }}
                    transition={{ duration: 1 }}
                >

                    <motion.div
                        initial={{
                            translateX: "0"
                        }}
                        animate={{
                            translateX: ["0", "-6.2vw", "-3.2vw", "-3.2vw", "-3vw", "-4vw", "0"],
                            y: ["0", "2vw", "-1vw", "0", "0", "2.3vw", "-1.2vw", "0"],
                            rotateZ: ["0", "-5deg", "-2deg", "0", "3deg", "0"]
                        }}
                        transition={{ delay: 0.9, duration: 19, repeat: Infinity }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
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
                    bottom-[5vh] right-0 
                    text-2xl xl:text-3xl 2xl:text-4xl 2xl:bottom-[22%] 2xl:-right-[9%]
                    text-background md:text-white lg:text-white/60 md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ translate: "39vw", opacity: 0 }}
                    animate={{ translate: ["39vw", 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.6, delay: 0.95, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            translateY: ["-1.5vw", "-1.1vw", "-3.5vw", "-1.5vw"],
                            translateX: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                            rotateZ: ["0", "0", "-3deg", "0", "5deg", "0"]
                        }}
                        transition={{ delay: 1.6, duration: 11, repeat: Infinity }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-white opacity-60 2xl:opacity-30 blur-3xl"></div>

                        Inovative
                        <p className="gradient-text text-3xl hidden group-hover:block">Click for CV</p>
                    </motion.div>
                </motion.div>
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <motion.div className="
                    absolute z-110 group cursor-pointer
                    bottom-[-8vh] right-[-25vw] translate-x-[-50%] md:translate-x-[-75%] lg:translate-x-0
                    text-2xl xl:text-3xl 2xl:text-4xl 2xl:bottom-[20%] 2xl:-right-[10%] 2xl:translate-y-[10vh]
                    text-white md:text-white lg:text-white/60 md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ translate: "39vw", opacity: 0 }}
                    animate={{ translate: ["39vw", 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.9, delay: 1.25, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            y: ["-4.5vw", "-0.5vw", "-1.1vw", "-2.5vw", "-4.5vw"],
                            x: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                            rotateZ: ["0", "2deg", "-3deg", "0", "5deg", "0"]
                        }}
                        transition={{ delay: 0.8, duration: 8, repeat: Infinity }}
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
                    top-0 md:top-8 right-0 2xl:translate-x-[14vw] 
                    text-4xl xl:text-5xl 2xl:text-6xl 2xl:bottom-[20%] 2xl:-right-[10%]
                    text-background md:text-white md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    initial={{ translate: "39vw", opacity: 0 }}
                    animate={{ translate: ["39vw", 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.6, delay: 0.65, ease: "anticipate" }}
                >

                    <motion.div

                        animate={{
                            translateY: ["-1.5vw", "-3.5vw", "-1.1vw", "-1.5vw"],
                            x: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                            rotateZ: ["0", "-3deg", "0", "5deg", "0", "0"]
                        }}
                        transition={{ delay: 2, duration: 10, repeat: Infinity }}
                    >

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 2xl:opacity-30 blur-3xl"></div>

                        FULLSTACK ENGINEER
                        <p className="gradient-text text-5xl hidden group-hover:block">Click for CV</p>
                    </motion.div>
                </motion.div>
            </a>

        </div >

    )
}

export default Avata;
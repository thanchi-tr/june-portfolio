'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const Avata = () => {
    return (
        <div className="relative flex h-full w-full items-end">
            {/* <div className="absolute 2xl:hidden md:bg-gray-400/10 h-5/6 md:h-3/5 w-[95%] rounded-full scale-y-105"></div>
            <div className="absolute 2xl:hidden md:bg-secondary h-2/3 md:h-3/5 w-[70%] rounded-full left-[12%]"></div> */}
            {/*Picture */}
            <motion.div className="
                    absolute 
                    scale-[120%] md:scale-[85%] 2xl:scale-[60%]
                    right-0 top-0   z-[220] 
                    h-full aspect-square  
                     overflow-clip
                    translate-x-[38%] -translate-y-[50%]
                    md:-translate-y-[12%] md:translate-x-[5%] sm:translate-x-[10%] 
                    rounded-[100%] 2xl:rounded-bl-[120%] 2xl:rounded-br-[0%] lg:border-b-4 2xl:border-b-8 
                    border-white/40 md:border-white/0 
                    2xl:-translate-x-[30%] min-h-[190px] max-h-[500px]
                    "
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.18, delay: 0.87, ease: "anticipate" }}
            >


            </motion.div>

            <motion.div className="
                        absolute 
                        bottom-[1.6rem] right-[5rem] 2xl:right-[5.4rem]
                        rotate-12 text-8xl 2xl:text-9xl
                        text-white/40 md:text-white text-shadow-lg shadow-secondary  md:text-primary md:shadow-primary
                        font-signaturefont z-10
                        font-[1000]
                        2xl:-translate-y-[5%] 2xl:scale-105
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
                        translateY: ["0", "2vw", "-1vw", "0", "0", "2.3vw", "-1.2vw", "0"],
                        rotateZ: ["0", "-5deg", "-2deg", "0", "3deg", "0"]
                    }}
                    transition={{ delay: 0.9, duration: 19, repeat: Infinity }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >June
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 2xl:opacity-30 blur-3xl"></div>

                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="
                    absolute z-10
                    bottom-0 right-0 
                    text-6xl xl:text-7xl 2xl:text-8xl 2xl:bottom-[20%] 2xl:-right-[10%]
                    text-background md:text-white md:text-shadow-lg shadow-black
                    font-signaturefont"
                initial={{ translate: "39vw", opacity: 0 }}
                animate={{ translate: ["39vw", 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.6, delay: 0.65, ease: "anticipate" }}
            >

                <motion.div

                    animate={{
                        translateY: ["0", "1.2vw", "-1.1vw", "0"],
                        translateX: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.3vw", "0"],
                        rotateZ: ["0", "0", "-3deg", "0", "5deg", "0"]
                    }}
                    transition={{ delay: 2, duration: 10, repeat: Infinity }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 2xl:opacity-30 blur-3xl"></div>

                    Trinh
                </motion.div>
            </motion.div>
        </div >

    )
}

export default Avata;
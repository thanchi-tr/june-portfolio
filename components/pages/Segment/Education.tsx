"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Education = () => {
    return (
        <>
            <div className="
                        w-full h-[30%]  text-center
                        uppercase  2xl:-translate-y-[40%]
                        mt-[20%] md:mt-0
                        text-4xl md:text-6xl text-white font-bold
                        tracking-[0.2em] font-mainfont
                        text-shadow-lg shadow-black/70
                ">education</div>
            <div className="w-full h-[6%]  text-center text-bold text-white/80 translate-y-1/4">2018-2023</div>
            <motion.div className="
                        w-full h-[20%] font-mainfont
                        text-center text-5xl z-10 
                        text-shadow-sm shadow-primary
                        text-primary font-semibold"

                initial={{ translateY: "20vh" }}
                whileInView={{ translateY: "0" }}
                transition={{ duration: 0.44, delay: 0.12, ease: "easeIn" }}
                viewport={{ once: true }}
            >University of Melbourne</motion.div>
            <div className="
                        flex flex-row justify-evenly
                        w-full
                        -translate-y-[35%] 2xl:-translate-y-[60%]
                "

            >
                <motion.div className="
                            relative h-[12vh] aspect-square 
                            rounded-full overflow-clip
                            bg-blue-950 border-white
                            md:scale-150 border-4
                    "
                    initial={{ translateY: "10vh" }}
                    whileInView={{ translateY: ["10vh", "0vh", "0vh", "0vh"], rotate: [0, 360], scale: [1, 1, 2.6, 1] }}
                    transition={{ duration: 1.2, delay: 0, ease: "anticipate" }}
                    viewport={{ once: true }}
                >
                    <Image src={"/icons/Unimelb.png"} alt={""} fill className="object-contain"></Image>
                </motion.div>
            </div>
            <div className=" flex flex-row justify-evenly h-[30%] w-full self-end z-10 translate-y-[30%]">

                <div className="
                            flex flex-row 
                            2xl:translate-x-[30%]
                            h-full w-2/5">
                    <motion.div className="
                                relative flex flex-col justify-end 
                                h-full w-auto font-extrabold
                                text-5xl tracking-widest
                                font-signaturefont 
                        "
                        animate={{
                            translateY: ["0", "1.2vw", "-1.3vw", "0"],
                            translateX: ["0", "0.6vw", "1vw", "0", "-2vw", "-1.6vw", "0"],
                            rotateZ: ["0", "0", "-3deg", "0", "5deg", "0"]

                        }}
                        transition={{ repeat: Infinity, duration: 15 }}
                    >

                        <p className="absolute bottom-[2px] text-accent opacity-80"> June Trinh</p>
                        <p className="absolute -bottom-[1.2px] text-descent opacity-80"> June Trinh</p>
                        June Trinh
                    </motion.div>
                    <div className="flex flex-col justify-end ml-4 font-mainfont font-light"

                    >
                        @2025</div>
                </div>

            </div>
        </>
    )
}

export default Education;
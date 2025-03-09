"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Education = () => {
    return (
        <>
            <div className="
                        w-full h-[30%]  text-center
                        uppercase  2xl:-translate-y-[40%]
                        mt-[20%] md:mt-0 z-10
                        text-4xl md:text-6xl text-white font-bold
                        tracking-[0.2em] font-mainfont
                        text-shadow-lg shadow-black/70
                ">education</div>
            <div className="w-full h-[6%]  text-center font-extrabold text-white/80 md:text-black z-10 translate-y-1/4">2018-2023</div>
            <motion.div className="
                        w-full h-[20%] md:h-[16.5%] font-mainfont
                        text-center text-5xl z-10 will-change-transform
                        text-shadow-lg shadow-black/80
                        text-primary font-semibold"

                initial={{ y: "20rem" }}
                whileInView={{ y: "0" }}
                transition={{ duration: 0.44, delay: 0.12, ease: "easeIn" }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="will-change-transform hidden lg:block"
                    animate={{
                        y: ["0", "-0.6rem", "0.9rem", "-1.1rem", "0.6rem", "0"],
                        x: ["0", "0.6vw", "-1vw", "0", "2vw", "-1.6vw", "0"],
                        rotateZ: ["0", "0", "-3deg", "0", "2deg", "0"]
                    }}
                    transition={{ repeat: Infinity, duration: 12, delay: 0.7 }}
                >
                    University of Melbourne

                </motion.div>
                <div
                    className="will-change-transform lg:hidden"
                >
                    University of Melbourne

                </div>
            </motion.div>
            <div className="
                        flex flex-row justify-evenly
                        w-full z-10
                        -translate-y-[35%] 2xl:-translate-y-[60%]
                "
            >
                <motion.div className="
                            hidden lg:block
                            relative h-[12vh] aspect-square will-change-transform
                            rounded-full overflow-clip shadow-inner shadow-black
                            bg-blue-950 border-white 
                            md:scale-150 border-4 z-10
                    "
                    initial={{ y: "12vh" }}
                    whileInView={{ y: ["12vh", "0vh", "0vh", "0vh"], rotate: [0, 360], scale: [1, 1, 2.6, 1] }}
                    transition={{ duration: 1.2, delay: 0, ease: "anticipate" }}
                    viewport={{ once: true }}
                >
                    <Image src={"/icons/Unimelb.png"} alt={""} fill className="object-contain z-10"></Image>
                </motion.div>
                {/* simpler animation for mobile */}
                <motion.div className="lg:hidden
                            relative h-[12vh] aspect-square will-change-transform
                            rounded-full overflow-clip shadow-inner shadow-black
                            bg-blue-950 border-white 
                            md:scale-150 border-4 z-10
                    "
                    initial={{ y: "12vh" }}
                    whileInView={{ y: ["12vh", "0vh"] }}
                    transition={{ duration: 1.2, delay: 0, ease: "anticipate" }}
                    viewport={{ once: true }}
                >
                    <Image src={"/icons/Unimelb.png"} alt={""} fill className="object-contain z-10"></Image>
                </motion.div>
            </div>
            <div className=" flex-row justify-evenly h-[30%] w-full self-end z-10 translate-y-[30%] hidden lg:flex">

                <div className="
                            flex flex-row 
                            2xl:translate-x-[30%]
                            h-full w-2/5">
                    <motion.div className="
                                relative flex flex-col justify-end 
                                h-full w-auto font-extrabold
                                text-5xl tracking-widest
                                font-signaturefont will-change-[transform, opacity]
                        "
                        animate={{
                            y: ["0", "1.2rem", 0],
                            x: ["0", "-2vw", "0"],
                            rotateZ: ["0", "-3deg", "0"]

                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >

                        <p className="absolute bottom-[2px] text-accent opacity-80"> June Trinh</p>
                        <p className="absolute -bottom-[1.2px] text-descent opacity-80"> June Trinh</p>
                        June Trinh
                    </motion.div>
                    <div className="flex flex-col justify-end ml-4 font-mainfont font-light text-white/80"

                    >
                        <p className=" bg-secondary px-3 rounded-lg">@2025</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education;
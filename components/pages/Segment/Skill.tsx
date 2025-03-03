"use client";
import PopUp from "@/components/client/Functional/PopUp";
import Image from "next/image";
import { motion } from "framer-motion";
const Skill = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, // Each child will animate 0.3s after the previous one
                delayChildren: 0.6, // Delay before children start animating
            }
        },
    };

    const itemVariants = {
        hidden: {},
        show: {
            translateY: ["6px", "0"],
            opacity: [0, 1],
            transition: {
                duration: 0.4,
            }
        },
    };
    return (
        <div className="h-full w-full bg-background">
            <div className="flex items-center justify-center h-0 w-full">
                <div className="
                                text-white uppercase z-50 
                                text-6xl md:text-6xl font-bold font-mainfont
                                md:-translate-x-[8%] tracking-[0.8rem]
                                
                                "
                >
                    <div className="text-shadow-lg shadow-black md:shadow-transparent md:translate-y-[49%] md:text-primary md:scale-110">Skill</div>
                    <div className="hidden md:block text-background  overflow-clip scale-110">
                        <div className="-translate-y-[50%] scale-y-110">Skill</div></div>
                </div>
            </div>
            <div className="
                    flex flex-col md:flex-row overflow-x-clip
                    h-full 
                    w-[90%] md:w-full 
                    mx-[5%] md:mx-0 
            ">

                <div className="
                        flex flex-col
                        h-[40%] mt-[15%] md:mt-0 md:h-full w-full md:w-1/3
                ">
                    <div className="h-[10%] ">
                    </div>
                    <div className="
                            h-auto md:h-[14%] 2xl:h-[12%] text-center uppercase 
                            font-bold underline md:no-underline
                            text-3xl md:text-3xl lg:text-4xl sm:text-4xl text-primary"> Framework</div>
                    <div className="w-[60%] h-auto
                            flex flex-col
                            gap-y-6 2xl:gap-y-3
                            ml-[20%] 2xl:ml-[28%]
                    "
                    >
                        <div className="
                                flex flex-row justify-between
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                                mt-[15%] md:mt-[25%] text-lg md:text-xl
                        ">

                            <motion.div className="hidden md:block w-1/8 aspect-square rounded-full overflow-clip border-2 scale-150 md:scale-100"
                                initial={{ translate: "0" }}
                                whileInView={{ translate: ["0", "250%", "0"] }}
                                transition={{ duration: 1.3, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image src={"/icons/dotnetCore.png"} alt={""} fill className="object-contain z-10"></Image>
                            </motion.div>
                            <motion.div className="md:hidden w-1/8 aspect-square rounded-full overflow-clip border-2 scale-150 md:scale-100"
                                initial={{ translate: "0" }}
                                whileInView={{ translate: ["0", "40vw", "0"] }}
                                transition={{ duration: 1.3, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image src={"/icons/dotnetCore.png"} alt={""} fill className="object-contain z-10"></Image>
                            </motion.div>
                            <motion.div className="
                                    flex flex-col justify-evenly
                                    w-5/8 h-full
                                    uppercase text-white/80  text-center font-bold
                            "
                                initial={{ opacity: "0" }}
                                whileInView={{ opacity: ["0", "1"] }}
                                transition={{ duration: 1.3, delay: 1.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                .net core
                            </motion.div>
                        </div>
                        <div className="flex flex-row justify-between
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                        ">
                            <motion.div className="hidden md:block w-1/8 aspect-square rounded-full overflow-clip border-2 scale-150 md:scale-100"
                                initial={{ translate: "0" }}
                                whileInView={{ translate: ["0", "250%", "0"] }}
                                transition={{ duration: 1.3, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image src={"/icons/nextjs.png"} alt={""} fill className="object-contain z-10"></Image>
                            </motion.div>
                            <motion.div className="md:hidden w-1/8 aspect-square rounded-full overflow-clip border-2 scale-150 md:scale-100"
                                initial={{ translate: "0" }}
                                whileInView={{ translate: ["0", "40vw", "0"] }}
                                transition={{ duration: 1.3, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image src={"/icons/nextjs.png"} alt={""} fill className="object-contain z-10"></Image>
                            </motion.div>
                            <motion.div className="
                                    flex flex-col justify-evenly
                                    w-5/8 h-full
                                    uppercase text-white/80  text-center font-bold
                            "
                                initial={{ opacity: "0" }}
                                whileInView={{ opacity: ["0", "1"] }}
                                transition={{ duration: 1.3, delay: 1.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                next.js
                            </motion.div>
                        </div>
                        <motion.div className="flex flex-col justify-evenly
                                w-full 2xl:w-[70%] h-[10vh] 
                                uppercase text-white/80 text-2xl text-center font-bold
                        "
                            initial={{ opacity: 0, translateY: "5vh" }}
                            whileInView={{ opacity: 1, translateY: "0vh" }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeIn" }}
                            viewport={{ once: true }}
                        >
                            Express.js
                        </motion.div>
                    </div>
                </div>
                <div className="
                        relative flex-col z-10
                        h-[50%] md:h-full w-[94%] md:w-2/3
                        -translate-y-[20%] md:translate-y-0
                        md:ml-3  shadow-xl shadow-black/70
                        bg-gradient-to-b from-primary to-background 2xl:bg-transparent
                        rounded-2xl md:rounded-none
                ">
                    <div className="h-[10%]"></div>
                    <div className="
                            relative h-[14%] text-center uppercase font-bold 
                            text-3xl md:text-4xl text-background 2xl:text-background
                            
                            underline md:no-underline
                    ">
                        <div className="absolute h-full w-full 2xl:bg-primary bottom-[72%] z-0
                                rounded-bl-3xl
                        " >

                            <span className="opacity-0 2xl:opacity-100 absolute bottom-0 text-center -translate-x-[50%]
                                    pr-[20%] box-border border-r-8 border-white/40
                            ">Tech-stack</span>
                        </div>

                        Tech-stack

                    </div>

                    {/* teck stack icon list */}
                    <motion.div className="
                            flex flex-row 
                            flex-wrap flex-shrink-0 flex-grow-0 
                            gap-[5%] 2xl:gap-[4%] md:gap-[8%] gap-y-6 md:gap-y-[6vh] 2xl:gap-y-6
                            justify-evenly
                            h-auto 
                            w-4/5 md:w-[65%] 2xl:w-3/5
                            mx-[15%] 2xl:mx-[10%]
                            pt-[5%] border-b-8 pb-10 border-white/40
                        "
                        variants={containerVariants}
                        whileInView={"show"}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-row w-full h-auto justify-between">
                            <motion.div variants={itemVariants} className="w-[22vw] font-extrabold uppercase text-background ">Database💾:</motion.div>
                            <div className="w-full h-full flex flex-row justify-end gap-4">
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img={`/icons/postgres.png`}>Postgres</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/mongo db.png">MongoDB</PopUp>
                                </motion.div>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">
                            <motion.div variants={itemVariants} className="w-[22vw] font-extrabold uppercase text-background">Back⚙️:</motion.div>
                            <div className="w-full h-full flex flex-row justify-end gap-4 flex-wrap">
                                <motion.div variants={itemVariants} className="
                                w-[15%] 2xl:w-[10%]
                                aspect-square h-auto
                                rounded-full bg-white 
                                border-2">
                                    <PopUp img={"/icons/signalR.png"} >SignalR</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="
                                w-[15%] 2xl:w-[10%]
                                aspect-square h-auto
                                rounded-full bg-white 
                                border-2">
                                    <PopUp img={"/icons/open API.png"} >OpenAPI</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/serilog.png">Serilog</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/redis.png">Redis</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/xunit.jpg">xUnit</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/efCore.png">EFCore</PopUp>

                                </motion.div>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">

                            <motion.div variants={itemVariants} className="w-[22vw] font-extrabold uppercase text-background">Front📱:</motion.div>
                            <div className="w-full h-full flex flex-row justify-end gap-4 flex-wrap">
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/jest.png">JestJS</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/Auth0.jpg">Auth0</PopUp>
                                </motion.div>

                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/framerMotion.png">Motion</PopUp>
                                </motion.div>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">

                            <motion.div variants={itemVariants} className="w-[22vw] font-extrabold uppercase text-background">Cloud💭:</motion.div>
                            <div className="w-full h-full flex flex-row justify-end gap-4 flex-wrap">
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/eks.jpg"> EKS</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/ec2.jpg">Ec2</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/s3.png">s3</PopUp>
                                </motion.div>

                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">
                            <motion.div variants={itemVariants} className="w-[22vw] font-extrabold uppercase text-background">CI & CD🚀:</motion.div>
                            <div className="w-full h-full flex flex-row justify-end gap-4 flex-wrap">
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img="/icons/github.jpg">Github</PopUp>
                                </motion.div>
                                <motion.div variants={itemVariants} className="w-[15%] 2xl:w-[10%] aspect-square rounded-full bg-white border-2">
                                    <PopUp img={"/icons/docker.png"} >Docker</PopUp>
                                </motion.div>

                            </div>



                        </div>
                        {/* ⭐ */}
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Skill;
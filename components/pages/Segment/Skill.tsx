"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Skill = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3, // Delay before children start animating
            }
        },
    };

    const itemVariants = {
        hidden: {},
        show: {
            y: ["6px", "0"],
            opacity: [0, 1],
            transition: {
                duration: 0.45,
            }
        },
    };
    return (
        <div className="relative-screen bg-background select-none">
            <div className="flex items-center justify-center h-0 w-full"
            >
                <motion.div className="
                        text-white z-50 
                        md:-translate-x-[8%] tracking-[0.8rem]
                        will-change-transform"

                    initial={{ x: "-20vw" }}
                    whileInView={{ x: "0vw" }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-shadow-lg shadow-black md:shadow-transparent md:translate-y-[49%] md:text-primary ">SKILLS</h1>
                    <div className="hidden md:block text-background  overflow-clip -translate-y-[15%] scale-y-90">
                        <h1 className="-translate-y-[35%]">SKILLS</h1>
                    </div>
                </motion.div>
            </div>
            <div className="
                    flex flex-col md:flex-row overflow-x-clip
                    h-full md:h-[90%]
                    w-[90%] md:w-full 
                    mx-[5%] md:mx-0 
            ">

                <div className="
                        flex flex-col z-10
                        h-auto  my-[10%] md:mt-0 md:h-full w-full md:w-1/3
                ">

                    <h5 className="h-auto text-center 
                            font-bold my-14 lg:my-24 text-2xl
                            text-primary"> FRAMEWORKS</h5>
                    <div className="w-[60%] h-auto
                            flex flex-col 
                            gap-y-6  ml-[20%]"
                    >
                        <div className="
                                flex flex-row justify-between flex-shrink-0 flex-grow-0
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                                mt-[15%] md:mt-[5%]
                                max-h-[70px] lg:max-h-none
                        ">

                            <motion.div
                                className="
                                    relative will-change-transform 
                                    w-[70px] h-[70px] aspect-square 
                                    rounded-full overflow-clip"
                                initial={{ x: "0" }}
                                whileInView={{ x: ["0", "250%", "0"] }}
                                transition={{ duration: 0.55, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={"/icons/dotnetCore.png"}
                                    alt={"Microsoft Dotnet Core icon"} fill
                                    quality={40}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain z-10 " />
                            </motion.div>

                            <motion.p
                                className="
                                    flex flex-col justify-evenly text-lg 
                                    gradient-text will-change-opacity uppercase"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.55, delay: 0.55, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                .net core
                            </motion.p>
                        </div>
                        <div className="flex flex-row justify-between
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                                max-h-[70px] lg:max-h-none
                        ">
                            <motion.div
                                className="
                                    relative will-change-transform 
                                    w-[70px] h-[70px] aspect-square 
                                    rounded-full overflow-clip"
                                initial={{ x: "0" }}
                                whileInView={{ x: ["0", "250%", "0"] }}
                                transition={{ duration: 0.55, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={"/icons/nextjs.png"}
                                    alt={"Next Js logo"} fill
                                    className="object-contain z-10"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={40}
                                />
                            </motion.div>

                            <motion.p className="
                                    flex flex-col justify-evenly text-lg 
                                    gradient-text will-change-opacity uppercase
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{}}
                                transition={{ duration: 0.55, delay: 0.55, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                next.js
                            </motion.p>

                        </div>
                        <div className="flex flex-row justify-between
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                                max-h-[70px] lg:max-h-none
                        ">
                            <motion.div
                                className="
                                    relative will-change-transform 
                                    w-[70px] h-[70px] aspect-square 
                                    rounded-full overflow-clip"
                                initial={{ x: "0" }}
                                whileInView={{ x: ["0", "250%", "0"] }}
                                transition={{ duration: 0.55, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={"/icons/express.png"}
                                    alt={"Express Js logo"} fill
                                    className="object-contain z-10"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={40}
                                />
                            </motion.div>

                            <motion.p className="
                                    flex flex-col justify-evenly text-lg 
                                    gradient-text will-change-opacity uppercase
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{}}
                                transition={{ duration: 0.55, delay: 0.55, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                express.js
                            </motion.p>

                        </div>
                        <div className="flex flex-row justify-between
                                w-[80%] 2xl:w-[70%] md:w-full h-auto md:h-[10vh] 
                                max-h-[70px] lg:max-h-none
                        ">
                            <motion.div
                                className="relative will-change-transform 
                                    w-[70px] h-[70px] aspect-square 
                                    rounded-full overflow-clip"
                                initial={{ x: "0" }}
                                whileInView={{ x: ["0", "250%", "0"] }}
                                transition={{ duration: 0.55, delay: 0.3, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={"/icons/angular.png"}
                                    alt={"Express Js logo"} fill
                                    className="object-cover z-10"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={40}
                                />
                            </motion.div>
                            <motion.p className="
                                    flex flex-col justify-evenly text-lg 
                                    gradient-text will-change-opacity uppercase
                            "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.55, delay: 0.55, ease: "anticipate" }}
                                viewport={{ once: true }}
                            >
                                Angular
                            </motion.p>

                        </div>
                    </div>

                </div>
                <motion.div className="
                        relative flex-col z-10
                        h-auto md:h-[70%] lg:h-[75%] w-[94%] md:w-2/3 lg:w-[90%] pb-[8%]
                        -translate-y-[20%] md:translate-y-0
                        md:ml-2  shadow-xl shadow-black/70 will-change-transform
                        bg-gradient-to-b from-primary to-background 2xl:bg-transparent
                        rounded-2xl md:rounded-none
                "
                    id="skill"
                    initial={{ x: "90%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 0.3, delay: 0.02, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >

                    <h5 className="
                            relative text-center uppercase font-bold my-14 lg:my-24
                            text-background 2xl:text-background
                            text-2xl
                    ">
                        Tech-stacks
                    </h5>

                    {/* teck stack icon list */}
                    <motion.div className="
                            flex flex-row 
                            flex-wrap flex-shrink-0 flex-grow-0 
                            gap-[5%] 2xl:gap-[4%] md:gap-[8%] gap-y-3 md:gap-y-[4vh] lg:gap-y-4 2xl:gap-y-5
                            justify-evenly text-white
                            h-auto font-bold 
                            w-4/5 md:w-[75%]
                            mx-[15%] 
                            2xl:mx-[13%] 2xl:pl-[2%]
                        "
                        variants={containerVariants}
                        whileInView={"show"}
                        viewport={{ once: true }}
                    >
                        <div className="absolute-0 gradient-bg opacity-20 "></div>


                        <div className="flex flex-row w-full h-auto justify-between">
                            <motion.h6 variants={itemVariants} className="w-[15vw]  text-white">DB:</motion.h6>
                            <div className="w-full h-full flex flex-row justify-end gap-4  flex-wrap">
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    PostGresSQL
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    MsSQL
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    MongoDB
                                </motion.p>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">
                            <motion.h6 variants={itemVariants} className="w-[15vw] text-white">Back:</motion.h6>
                            <div className="relative-screen flex flex-row justify-end gap-4 flex-wrap">
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    SignalR
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    ASP.Net
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    GraphQL
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    NodeJS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    RESTFul API
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    OpenAPI
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Serilog
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Redis
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    xUnit
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    EFCore
                                </motion.p>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">

                            <motion.h6 variants={itemVariants} className="w-[15vw] text-white">Front:</motion.h6>
                            <div className="relative-screen flex flex-row justify-end gap-4 flex-wrap">
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    JestJS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Auth0
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    HTML & CSS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Javascript
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    JQuery
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    AJax
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Tailwind CSS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Typescript
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Framer Motion
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    React
                                </motion.p>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">

                            <motion.h6 variants={itemVariants} className="w-[15vw] text-white/80">Cloud:</motion.h6>
                            <div className="w-full h-full flex flex-row justify-end gap-4 flex-wrap">
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    EKS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Ec2
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    s3
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    RDS
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    ELB
                                </motion.p>
                            </div>

                        </div>
                        <div className="flex flex-row w-full h-auto">
                            <motion.h6 variants={itemVariants} className="w-[15vw] text-white/60">CI&CD:</motion.h6>
                            <div className="relative-screen flex flex-row justify-end gap-4 flex-wrap">
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Github
                                </motion.p>
                                <motion.p variants={itemVariants} className="w-auto  rounded-xl bg-background p-0.5 border-[1px]">
                                    Docker
                                </motion.p>

                            </div>



                        </div>
                        {/* ⭐ */}
                        <motion.div
                            animate={{ scaleX: [1, 1.7, 0.7, 1.4, 1] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="h-[0.8vh] w-1/4 bg-white/60 mt-10 will-change-transform"
                        />
                    </motion.div>



                </motion.div>
            </div>
        </div >

    )
}

export default Skill;
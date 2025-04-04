"use client";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import PopUp from "@/components/client/Functional/PopUp";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const Experience = () => {
    const containerVariants = {
        "init": {},
        "playout": {
            transition: {
                staggerChildren: 0.2, // Each child will animate 0.3s after the previous one
                delayChildren: 0.3, // Delay before children start animating
            }
        },
    };

    const itemVariants = {
        "init": {},
        "playout": {
            y: [0, "1.6rem", 0],
            transition: {
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
            }
        },
    };

    return (
        <div
            className="overflow-hidden relative-screen my-[20vh]"
        >

            <div className={`
                        flex items-end w-full text-center tracking-widest`}>
                <motion.h2
                    className="
                        tracking-wider text-white w-full uppercase z-50
                        text-shadow-lg shadow-black/70
                       "
                    initial={{ x: "-100%", scale: 1.1, y: "50%" }}
                    whileInView={{ x: 0, scale: 1, y: "50%" }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                    viewport={{ once: true }}

                >Experiences</motion.h2>

            </div>

            <div className="
                        relative flex-standard md:flex-row
                        h-[90%] pb-[20%]
                        shadow-inner md:shadow-none
                        shadow-black/60 overflow-clip
                        w-[82%] md:w-full mx-[8%] md:mx-0
                        bg-gradient-to-b from-secondary   to-background md:from-[#43262230]
            ">

                <div className="
                            relative-screen md:w-[27%] ml-[8%] z-10
                           ">
                    <motion.div className="
                            flex flex-col will-change-[transform,opacity]
                            opacity-0 md:opacity-100
                            justify-center 
                            w-full md:w-[80%] md:ml-[20.8%] md:rounded-l-2xl
                            h-full bg-transparent  border-r-4 
                            shadow-xl 2xl:shadow-inner shadow-black 
                            "
                        initial={{ x: "-148%" }}
                        animate={{ x: -80 + 0.245 * 390 + "%" }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute-0 gradient-bg opacity-30 md:opacity-20 2xl:opacity-35 2xl:scale-x-125 scale-y-125"></div>

                        <div className="flex flex-col h-2/6 w-full justify-evenly relative">
                            <h6 className="
                                hidden lg:block ml-[10%] 2xl:ml-[2%] relative
                                w-[90%] 2xl:w-[98%] text-center text-white border-t-2 pt-4
                                ">
                                <span className="absolute top-0 right-0 h-[40px] aspect-square bg-primary rounded-full border-8 border-white translate-x-[50%] -translate-y-[50%]" />
                                <p className="relative text-base text-primary">

                                    Jan 2023 - current</p>
                                Fullstack Engineer</h6>
                            <h6 className="
                                hidden lg:block ml-[10%] 2xl:ml-[2%] relative
                                w-[90%] 2xl:w-[98%] text-center text-gray-400 border-t-2 pt-4
                                ">
                                <span className="absolute top-0 right-0 h-[40px] aspect-square bg-white rounded-full translate-x-[50%] -translate-y-[50%]" />
                                <p className="relative text-base ">

                                    Feb 2022 - Jan 2023
                                </p>
                                Backend Developer</h6>
                        </div>
                        <div className="hidden lg:block h-[4.2%] w-full ">
                            <motion.div className="
                                        flex flex-row text-white will-change-transform
                                        h-full w-[85%] flex-grow-0 flex-shrink-0 flex-wrap gap-y-4 2xl:gap-y-6 gap-x-1 ml-[8%]"
                                variants={containerVariants}
                                animate="playout"
                            >
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/dotnetCore.png"} >.Net Core</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/nextjs.png"} >NextJs</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/docker.png"} >Docker</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/efCore.png"} >EFCore</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/postgres.png"} >posgres</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/graphQl.png"} >graphQl</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/serilog.png"} >Serilog</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/Auth0.jpg"} >Auth0</PopUp>
                                </motion.div>
                                <motion.div className="h-full circle-h bg-black will-change-transform"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/signalR.png"} >SignalR</PopUp>
                                </motion.div>

                            </motion.div >

                        </div>
                    </motion.div>

                </div>
                <div className="h-full md:w-2/3 md:ml-3">
                    <div className="
                            relative-screen flex flex-col mt-[45vh] z-10">
                        <motion.div className="flex flex-col justify-evenly md:justify-between h-2/6 w-full -translate-x-[5%] will-change-[transform,opacity]"

                            initial={{ translate: "105%)" }}
                            whileInView={{ translate: "5%" }}
                            transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="relative flex flex-row h-1/3 w-[90%] self-center md:w-full z-10 ">

                                <motion.div
                                    className="
                                        h-[100px] xl:h-[120px] z-[80] will-change-[transform,opacity]
                                        scale-[125%] 2xl:scale-[115%] circle-h
                                        -translate-y-[15%] shadow-lg shadow-black/70"
                                >
                                    <motion.div className="relative-screen"
                                        animate={{ scale: ["100%", "110%", "100%"] }}
                                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.jungtalents.com/"} >
                                            <Image src="/icons/jungTalent.jpg"
                                                alt="Jung Talents Logo" fill
                                                className=" object-fill "
                                                quality={100}
                                            />
                                        </ExternalCircularButton>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="
                                        hidden lg:flex md:w-9/12
                                        2xl:w-8/12 h-[120px]  rounded
                                        bg-gradient-to-l from-primary via-primary to-transparent  text-center 
                                        z-10 border-b-2 
                                        shadow-2xl shadow-black/30
                                "
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.25, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="relative-screen -translate-y-2/3  will-change-[opacity]">
                                        <motion.p
                                            className="h-3/5 text-gray-400 tracking-tight md:text-lg"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.55, duration: 0.22, ease: easeIn }}
                                        >Feb 2022 - <span className="inline font-extrabold text-primary">Current</span>


                                        </motion.p>
                                        <motion.h6
                                            className="translate-x-[6%] pr-1 text-white lg:hidden will-change-[opacity]"
                                            initial={{ opacity: 0 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: [0, 0.3, 1] }}
                                            transition={{ delay: 0.6, duration: 0.25, ease: easeIn }}
                                        >
                                            Full-Stack Engineer
                                        </motion.h6>
                                        <motion.div className="relative will-change-[transform,opacity] flex items-center justify-end md:justify-center w-full md:w-[90%] h-[190%] text-white"
                                            initial={{ opacity: 0, scale: 1.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, scale: [1.8, 1.5, 1] }}
                                            transition={{ delay: 0.3, duration: 0.36, ease: "anticipate" }}
                                        >
                                            <h2 className="flex flex-col
                                                    will-change-[opacity] text-white text-shadow-lg shadow-primary
                                                    "><strong className="shadow-primary text-shadow-none text-background">JUNG</strong> Talents</h2>
                                        </motion.div>
                                        <motion.div className="absolute-0 top-[25%] gradient-bg opacity-40 scale-y-50"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: [0, 0.8] }}
                                            transition={{ duration: 1.2, delay: 0.38, ease: "anticipate" }}
                                            viewport={{ once: true }}

                                        ></motion.div>
                                    </motion.div>


                                </motion.div>
                                <motion.div className="
                                        w-[85%] lg:hidden
                                        2xl:w-8/12 h-[120px]  rounded
                                        md:bg-gradient-to-l from-primary via-primary to-transparent text-center 
                                        z-10 border-b-2 
                                        shadow-2xl shadow-black/30
                                "
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full -translate-y-2/3  will-change-[opacity]">
                                        <motion.p
                                            className="h-3/5 text-gray-400 tracking-tight text-xl md:text-lg"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.35, duration: 0.26, ease: easeIn }}
                                        >Feb 2022 - <span className="inline font-extrabold text-primary">Current</span>


                                        </motion.p>
                                        <motion.h6
                                            className="translate-x-[6%] pr-1 font-bold text-white lg:hidden will-change-[opacity]"
                                            initial={{ opacity: 0 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: [1] }}
                                            transition={{ delay: 0.6, duration: 0.25, ease: easeIn }}
                                        >
                                            Full-Stack Engineer
                                        </motion.h6>
                                        <motion.div className="relative will-change-[transform,opacity] flex items-center justify-end md:justify-center w-full md:w-[90%] h-[190%] text-white"
                                            initial={{ opacity: 0, scale: 1.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, scale: [1.8, 1.5, 1] }}
                                            transition={{ delay: 0.3, duration: 0.36, ease: "anticipate" }}
                                        >
                                            <h2 className="flex flex-col
                                                    will-change-[opacity] text-white
                                                    text-shadow-lg shadow-primary
                                                    md:text-6xl font-semibold md:font-mainfont"><strong className="shadow-primary text-shadow-none text-background">JUNG</strong> Talents</h2>
                                        </motion.div>
                                        <motion.div className="absolute-0 top-[25%] gradient-bg opacity-40 scale-y-50"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.8 }}
                                            transition={{ duration: 0.7, delay: 0.22, ease: "anticipate" }}
                                            viewport={{ once: true }}

                                        ></motion.div>
                                    </motion.div>


                                </motion.div>
                                <motion.div className="will-change-[opacity] absolute-0 gradient-bg opacity-30 scale-y-50 z-[300]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 0.3] }}
                                    transition={{ duration: 0.7, delay: 0.15, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                            <motion.ul className="pl-[8%] pr-[10%] w-[95%] md:w-[90%] 2xl:w-[70%] translate-x-[10%]
                                    translate-y-[15%] md:translate-y-[15%] 2xl:translate-y-[25%] 
                                    list-disc text-lg md:text-sm lg:text-lg 2xl:text-xl text-white/80 
                                    "
                            >

                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto mb-2 2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-white/10 bg-black/55 pl-2 rounded-3xl
                                     border-x-[#ad9547]/15 
                                    pt-[%] 5ill-change-transform
                                    border-b-black/20  "
                                    initial={{ translateY: "20vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.36 }}
                                >Architected and deployed a high-performance .NET application, leveraging
                                    <span className="relative font-bold underline px-2">Test-Driven Development (TDD) for faster, bug-free
                                    </span>
                                    releases</motion.li>
                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto mb-2 2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-white/10 bg-black/55 pl-2 rounded-3xl
                                     border-x-[#ad9547]/15 
                                    pt-[%] 5ill-change-transform
                                    border-b-black/20  "
                                    initial={{ translateY: "15vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.36 }}
                                >Revamped Landing Page UI/UX, leading to a
                                    <span className="relative inline text-primary font-extrabold px-2">
                                        22% increase in average conversion rate


                                    </span>

                                    through modern design and performance optimizations.
                                </motion.li>
                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto mb-2 2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-white/10 bg-black/55 pl-2 rounded-3xl
                                     border-x-[#ad9547]/15 
                                    pt-[%] 5ill-change-transform
                                    border-b-black/20  "
                                    initial={{ translateY: "24vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.36 }}
                                >Optimized database queries, improving API response times and increasing overall
                                    <span className="relative inline text-primary font-extrabold mx-2">application speed by 35%

                                    </span>.
                                </motion.li>
                                <motion.li
                                    className=" w-auto mb-2 2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-white/10 bg-black/55 pl-2 rounded-3xl
                                     border-x-[#ad9547]/15 
                                    t-[5%] will-change-transform
                                    border-b-black/20  "
                                    initial={{ translateY: "28vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.36 }}
                                >Maintained and enhanced a critical production application, ensuring
                                    <span className="relative inline text-primary font-extrabold mx-2">99.9% uptime and seamless

                                    </span>
                                    user experience.</motion.li>
                                <motion.li
                                    className=" w-auto mb-2 2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-white/10 bg-black/55 pl-2 rounded-3xl
                                     border-x-[#ad9547]/15 
                                    t-[5%] will-change-transform
                                    border-b-black/20  "
                                    initial={{ translateY: "32vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.36 }}
                                >Integrated Docker-based CI/CD pipelines, reducing
                                    <span className="relative inline text-primary font-extrabold mx-2">deployment time by 40%

                                    </span>
                                    and improving development efficiency.</motion.li>
                                <motion.ul
                                    animate={{ scaleX: [1, 1.7, 0.7, 1.4, 1] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="h-[0.8vh] w-2/4 bg-white/60 mt-10 ml-[21%]"
                                />
                            </motion.ul>


                        </motion.div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default Experience;
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
                staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
                delayChildren: 0.5, // Delay before children start animating
            }
        },
    };

    const itemVariants = {
        "init": {},
        "playout": {
            translateY: [0, "1.6vh", 0],
            transition: {
                duration: 3.2,
                repeat: Infinity,
            }
        },
    };
    return (
        <div className="
                    overflow-hiddenq
                    h-full w-full
                    
                    ">

            <div className={`
                        flex items-end
                        h-[40vh] w-full text-center tracking-widest`}>
                <span
                    className="
                        text-4xl md:text-6xl tracking-wider font-bold 
                        text-white w-full scale-x-125 scale-y-110
                        translate-y-1/2 uppercase font-mainfont z-50
                        text-shadow-lg shadow-black/70
                       "
                >Experience</span>

            </div>

            <div className="
                        relative flex flex-col-reverse md:flex-row
                        h-[220vh] sm:h-[200vh] md:h-[200vh] 
                        shadow-inner md:shadow-none
                        shadow-black/60 overflow-clip
                        w-[82%] md:w-full mx-[8%] md:mx-0
                        bg-secondary md:bg-background
            ">

                <div className="
                            h-full w-full md:w-[27%]
                            md:ml-[8%] z-10
                           ">
                    <div className="
                            flex flex-col 
                            md:p-0 md:justify-evenly 
                            w-full 2xl:w-[80%] 2xl:ml-[20.8%] 2xl:rounded-l-2xl
                            h-full bg-gradient-to-b from-secondary to-background    2xl:via-secondary 2xl:to-transparent 
                            2xl:bg-background
                            shadow-xl 2xl:shadow-inner shadow-black 
                            ">

                        <div className="flex flex-col h-full md:h-2/6 w-full ">
                            <div className="
                                hidden md:block ml-[15%] 2xl:ml-[2%]
                                w-3/5 2xl:w-4/5 
                                text-3xl 2xl:text-2xl font-bold text-center 
                                text-white
                                ">  Full-Stack Engineer</div>
                            <span className="md:border-t-8 border-black/20 w-4/5" />
                        </div>
                        <div className="hidden md:block h-12 md:h-[4.2%] w-full">
                            <motion.div className="
                                        flex flex-row justify-evenly text-white 
                                        h-full w-[85%] flex-grow-0 flex-shrink-0 flex-wrap gap-y-3
                                        -translate-y-[8vh] sm:-translate-y-[28vh] md:-translate-y-[76vh] lg:-translate-y-[58vh]  2xl:-translate-y-[42vh]
                                        ml-[8%]"
                                variants={containerVariants}
                                animate="playout"
                            >
                                <motion.div className="h-full rounded-full aspect-square bg-black"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/docker.png"} >Docker</PopUp>
                                </motion.div>
                                <motion.div className="h-full rounded-full aspect-square bg-black"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/dotnetCore.png"} > .Net Core</PopUp>
                                </motion.div>
                                <motion.div className="h-full rounded-full aspect-square bg-black"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/nextjs.png"} >NextJs</PopUp>
                                </motion.div>
                                <motion.div className="h-full rounded-full aspect-square bg-black"
                                    variants={itemVariants}
                                >
                                    <PopUp img={"/icons/signalR.png"} >SignalR</PopUp>
                                </motion.div>
                            </motion.div >

                        </div>
                    </div>

                </div>
                <div className="
                            h-full md:w-2/3
                            md:ml-3
                           ">
                    <div className="
                            relative flex flex-col justify-evenly w-full h-full z-10">
                        <div className="absolute top-0 h-[80%] w-[80%]  " >
                            <motion.div className="hidden md:block h-[25%] w-full relative translate-y-[180%] rounded-2xl overflow-clip "

                                animate={{
                                    y: ["90%", "112%", "85%", "117%", "90%"],
                                    x: ["0%", "-10%", "4%", "19%", "-12%", "0%"]
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity
                                }}
                            >
                                <Image
                                    src={"/jungtalentBg.png"}
                                    alt={""}
                                    fill
                                    className="h-full w-full object-contain z-10 opacity-30 " />
                            </motion.div>
                        </div>
                        <div className="flex flex-col justify-evenly md:justify-between h-2/6 w-full -translate-x-[5%] ">
                            <div className="relative flex flex-row h-1/3 w-[90%] self-center md:w-full z-10">
                                <motion.div
                                    className="
                                        h-5/6 md:hidden
                                        scale-[125%] 
                                        aspect-square bg-white rounded-full 
                                        -translate-y-[15%]
                                        z-[80] shadow-lg shadow-black/70"

                                    initial={{ translate: "35vw" }}
                                    whileInView={{ translate: ["35vw", "60vw", "0vw"] }}
                                    transition={{ duration: 0.55, delay: 0.2, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full"
                                        animate={{ scale: ["100%", "110%", "100%"] }}
                                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.jungtalents.com/"} >
                                            <Image src="/icons/jungTalent.jpg" alt="Jung Talents Logo" fill className=" object-fill " />
                                        </ExternalCircularButton>
                                    </motion.div>

                                </motion.div>
                                <motion.div
                                    className="
                                        h-5/6 hidden md:block z-[80]
                                        scale-[170%] md:scale-[125%] 2xl:scale-[115%] 
                                        aspect-square bg-white rounded-full 
                                        -translate-y-[15%]
                                        shadow-lg shadow-black/70"

                                    initial={{ translate: "0" }}
                                    whileInView={{ translate: ["0", "50vw", "0vw"] }}
                                    transition={{ duration: 0.7, delay: 0.3, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full"
                                        animate={{ scale: ["100%", "110%", "100%"] }}
                                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.jungtalents.com/"} >
                                            <Image src="/icons/jungTalent.jpg" alt="Jung Talents Logo" fill className=" object-fill" />
                                        </ExternalCircularButton>
                                    </motion.div>
                                </motion.div>
                                <div className="
                                        w-[80%] md:w-8/12
                                        2xl:w-7/12 h-3/5  
                                        md:bg-primary text-center 
                                        z-10 border-b-2 
                                        shadow-2xl shadow-black/30
                                ">
                                    <div className="h-full w-full -translate-y-2/3  ">
                                        <motion.div
                                            className="h-3/5 text-gray-400 tracking-tight text-xl md:text-lg"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.75, duration: 0.36, ease: easeIn }}
                                        >Jan 2023 - <span className="inline font-extrabold text-primary">Current</span>


                                        </motion.div>
                                        <motion.div
                                            className="text-2xl translate-x-[15%] font-bold text-white md:hidden"
                                            initial={{ opacity: 0 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: [0, 0.3, 1] }}
                                            transition={{ delay: 0.8, duration: 0.42, ease: easeIn }}
                                        >
                                            Full-Stack Engineer
                                        </motion.div>
                                        <motion.div className="relative flex items-center justify-end md:justify-center w-full md:w-[90%] h-[190%] bg-gold text-white"
                                            initial={{ opacity: 0, scale: 1.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, scale: [1.8, 1.5, 1] }}
                                            transition={{ delay: 0.5, duration: 0.72, ease: "anticipate" }}
                                        >
                                            <span className="
                                                    text-4xl font-signaturefont 
                                                    text-primary md:text-white
                                                    text-shadow-lg shadow-primary
                                                    md:text-6xl font-semibold md:font-mainfont"><div className="shadow-primary md:text-shadow-none md:text-background">Jung</div> Talents</span>
                                        </motion.div>
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-10 blur-3xl scale-y-50"></div>
                                    </div>


                                </div>
                                <div className="hidden md:block 2xl:hidden aspect-square h-3/5 bg-primary rounded-full -translate-x-[50%] z-50"></div>
                            </div>
                            <ul className="pl-[8%] pr-[10%] w-[95%] md:w-[90%] 2xl:w-[70%] translate-x-[10%]
                                    translate-y-[15%] md:translate-y-[15%] 2xl:translate-y-[25%] md:bg-background rounded-3xl
                                    list-disc text-lg md:text-sm lg:text-lg 2xl:text-xl text-white/80 
                                    2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-[#ad9547]
                                     border-x-[#ad9547]/15 overflow-clip
                                    pt-[7%]
                                    border-b-black/20  
                                    ">
                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto rounded-xl mb-2"
                                    initial={{ translateY: "16vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Revamped Landing Page UI/UX, leading to a
                                    <span className="relative inline text-primary font-extrabold"> 22% increase in conversion rate
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 scale-y-50 blur-3xl"></div>

                                    </span>

                                    through modern design and performance optimizations.
                                </motion.li>
                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto rounded-xl mb-2"
                                    initial={{ translateY: "20vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Architected and deployed a high-performance .NET application, leveraging
                                    <span className="relative font-bold underline">Test-Driven Development (TDD) for faster, bug-free
                                    </span>
                                    releases</motion.li>
                                <motion.li
                                    className=" opacity-60 scale-y-50 w-auto rounded-xl mb-2"
                                    initial={{ translateY: "23vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Optimized database queries, improving API response times and increasing overall
                                    <span className="relative inline text-primary font-extrabold">application speed by 32%
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 scale-y-50 blur-3xl"></div>
                                    </span>.
                                </motion.li>
                                <motion.li
                                    className=" w-auto rounded-xl mb-2"
                                    initial={{ translateY: "26vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Maintained and enhanced a critical production application, ensuring
                                    <span className="relative inline text-primary font-extrabold">99.9% uptime and seamless
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 scale-y-50 blur-3xl"></div>
                                    </span>
                                    user experience.</motion.li>
                                <motion.li
                                    className=" w-auto rounded-xl mb-2"
                                    initial={{ translateY: "29vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Integrated Docker-based CI/CD pipelines, reducing
                                    <span className="relative inline text-primary font-extrabold">deployment time by 40%
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 scale-y-50 blur-3xl"></div>
                                    </span>
                                    and improving development efficiency.</motion.li>
                                <motion.ul
                                    animate={{ scaleX: [1, 1.7, 0.7, 1.4, 1] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="h-[0.8vh] w-2/4 bg-white/60 mt-10 ml-[21%]"
                                />
                            </ul>

                        </div>
                        <div className="h-[6%] w-full">


                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Experience;
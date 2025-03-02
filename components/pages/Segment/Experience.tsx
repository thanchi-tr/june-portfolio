"use client";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import PopUp from "@/components/client/Functional/PopUp";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
const Experience = () => {
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
                        h-[160vh] 
                        shadow-inner md:shadow-none
                        shadow-black/60
                        w-[82%] md:w-full mx-[8%] md:mx-0
                        bg-secondary md:bg-background
            ">
                <div className="
                            h-full w-full md:w-[27%]
                            md:ml-[8%] 
                           ">
                    <div className="
                            flex flex-col 
                            md:p-0 md:justify-evenly 
                            w-full 2xl:w-[80%] 2xl:ml-[20.8%] 2xl:rounded-l-2xl
                            h-full bg-gradient-to-b from-secondary via-secondary to-background 
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
                        <div className="h-12 md:h-[4.2%] w-full">
                            <div className="
                                        flex flex-row justify-evenly text-white
                                        h-full w-[85%] 
                                        -translate-y-[28vh]  2xl:-translate-y-[42vh]
                                        ml-[8%]">
                                <div className="h-full rounded-full aspect-square bg-black">
                                    <PopUp img={"/icons/docker.png"} >Docker</PopUp>
                                </div>
                                <div className="h-full rounded-full aspect-square bg-black">
                                    <PopUp img={"/icons/dotnetCore.png"} > .Net Core</PopUp>
                                </div>
                                <div className="h-full rounded-full aspect-square bg-black">
                                    <PopUp img={"/icons/nextjs.png"} >NextJs</PopUp>
                                </div>
                                <div className="h-full rounded-full aspect-square bg-black">
                                    <PopUp img={"/icons/signalR.png"} >SignalR</PopUp>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="
                            h-full md:w-2/3
                            md:ml-3
                           ">
                    <div className="
                            flex flex-col justify-evenly w-full h-full ">

                        <div className="flex flex-col justify-evenly md:justify-between h-2/6 w-full -translate-x-[5%] ">
                            <div className="relative flex flex-row h-1/3 w-[90%] self-center md:w-full ">
                                <motion.div
                                    className="
                                        h-5/6 md:hidden
                                        scale-[170%] md:scale-[160%] 2xl:scale-[120%] 
                                        aspect-square bg-white rounded-full 
                                        -translate-y-[15%] md:-translate-x-[20%] 
                                        z-20 shadow-lg shadow-black/70"

                                    initial={{ translate: "35vw" }}
                                    whileInView={{ translate: ["35vw", "70vw", "0vw"] }}
                                    transition={{ duration: 0.55, delay: 0.2, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full"
                                        animate={{ rotate: ["0deg", "360deg"] }}
                                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.https://www.jungtalents.com/"} >
                                            <Image src="/icons/jungTalent.jpg" alt="Jung Talents Logo" fill className=" object-fill translate-x-[2px]" />
                                        </ExternalCircularButton>
                                    </motion.div>

                                </motion.div>
                                <motion.div
                                    className="
                                        h-5/6 hidden md:block z-[80]
                                        scale-[170%] md:scale-[155%] 2xl:scale-[115%] 
                                        aspect-square bg-white rounded-full 
                                        -translate-y-[15%] md:-translate-x-[20%] 
                                        shadow-lg shadow-black/70"

                                    initial={{ translate: "0" }}
                                    whileInView={{ translate: ["0", "50vw", "0vw"] }}
                                    transition={{ duration: 0.7, delay: 0.3, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full"
                                        animate={{ rotate: ["0deg", "360deg"] }}
                                        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.jungtalents.com/"} >
                                            <Image src="/icons/jungTalent.jpg" alt="Jung Talents Logo" fill className=" object-fill translate-x-[2px]" />
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
                                    <div className="h-full w-full -translate-y-2/3">
                                        <motion.div
                                            className="h-3/5 text-gray-400"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.75, duration: 0.36, ease: easeIn }}
                                        >Jan 2023 - Current


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
                                    </div>


                                </div>
                                <div className="hidden md:block 2xl:hidden aspect-square h-3/5 bg-primary rounded-full -translate-x-[50%] z-50"></div>
                            </div>
                            <ul className="pl-[15%] 2xl:pl-[15%] pr-[10%] 2xl:pr-[35%] w-full md:w-[90%]
                                    translate-y-[35%] md:translate-y-[55%] 2xl:translate-y-[5%] 
                                    list-disc text-lg md:text-xl text-white/80">
                                <motion.li
                                    initial={{ translateY: "18vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Modernise Landing page, help increase convertion rate by 22%</motion.li>
                                <motion.li
                                    initial={{ translateY: "18vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Build and deploy Dotnet application Fast under TDD.</motion.li>
                                <motion.li
                                    initial={{ translateY: "18vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Optimised Database, lead to an average increase speed by 32%</motion.li>
                                <motion.li
                                    initial={{ translateY: "18vh", opacity: 0 }}
                                    whileInView={{ translateY: "0vh", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >Maintain a run application.</motion.li>
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
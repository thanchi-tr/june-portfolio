"use client";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const MobileExperience = () => {


    return (
        <div className="realtive-screen">

            <div className={`
                        flex items-end mt-[20vh]
                         w-full text-center tracking-widest`}>
                <motion.h1
                    className="
                         tracking-wider text-white w-full uppercase font-mainfont z-50
                        text-shadow-lg shadow-black/70
                       "
                    initial={{ x: "-100%", scale: 1.1, y: "50%" }}
                    whileInView={{ x: 0, scale: 1, y: "50%" }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}

                >Experience</motion.h1>

            </div>

            <div
                className="
                        relative flex flex-col-reverse  h-auto
                        shadow-inner md:shadow-none mb-[25vh]
                        shadow-black/60 overflow-clip
                        w-[82%] md:w-full mx-[8%] md:mx-0
                        bg-gradient-to-b from-secondary   to-background md:from-[#43262230]
            ">

                <div className="
                            relative-screen md:w-[27%]
                            md:ml-[8%] z-10
                           ">
                    <motion.div className="
                            flex flex-col will-change-[transform,opacity]
                            opacity-0 md:opacity-100
                            md:p-0 md:justify-evenly 
                            w-full md:w-[80%] md:ml-[20.8%] md:rounded-l-2xl
                            h-full bg-gradient-to-b from-secondary to-background  2xl:via-secondary 2xl:to-transparent 
                            2xl:bg-background
                            shadow-xl 2xl:shadow-inner shadow-black 
                            "
                        initial={{ x: "-148%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute-0 gradient-bg opacity-30 md:opacity-20 2xl:opacity-25 scale-y-125"></div>

                        <div className="flex flex-col relative-screen md:h-2/6 ">
                            <span className="md:border-t-8 border-black/20 w-4/5" />
                        </div>

                    </motion.div>

                </div>
                <div className="
                            h-auto md:w-2/3
                            md:ml-3
                           ">
                    <div className="
                            relative flex flex-col justify-evenly w-full h-auto z-10 pt-[32vh]">
                        <motion.div className="flex flex-col justify-evenly md:justify-between h-2/6 w-full -translate-x-[5%] will-change-[transform,opacity]"

                            initial={{ translate: "105%)" }}
                            whileInView={{ translate: "5%" }}
                            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="relative flex flex-row h-1/3 w-[90%] self-center md:w-full z-10 ">
                                <motion.div
                                    className="
                                        max-w-[120px] max-h-[120px]
                                        h-5/6 lg:hidden 
                                        scale-[125%] will-change-transform
                                        aspect-square bg-white rounded-full 
                                        
                                        z-[80] shadow-lg shadow-black/70"

                                    initial={{ x: "30vw" }}
                                    animate={{ x: ["30vw", "0vw"] }}
                                    transition={{ duration: 0.55, delay: 0.2, ease: "anticipate" }}
                                >
                                    <motion.div className="h-full w-full"
                                        animate={{ scale: ["100%", "110%", "100%"] }}
                                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                    >
                                        <ExternalCircularButton link={"https://www.jungtalents.com/"} >
                                            <Image
                                                src="/icons/jungTalent.jpg"
                                                alt="Jung Talents Logo" fill
                                                className=" object-fill"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </ExternalCircularButton>
                                    </motion.div>

                                </motion.div>



                                <motion.div className="
                                        w-[85%] h-3/5  rounded-r-full rounded-tl-full
                                        md:bg-primary text-center 
                                        z-10 
                                "
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="relative-screen -translate-y-2/3  will-change-[opacity]">
                                        <motion.div
                                            className="h-3/5 text-gray-400 tracking-tight text-xl md:text-lg"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.75, duration: 0.36, ease: easeIn }}
                                        >Jan 2023 - <span className="inline font-extrabold text-primary">Current</span>


                                        </motion.div>
                                        <motion.div
                                            className="text-2xl translate-x-[6%] pr-1 font-bold text-white lg:hidden will-change-[opacity]"
                                            initial={{ opacity: 0 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: [1] }}
                                            transition={{ delay: 0.8, duration: 0.42, ease: easeIn }}
                                        >
                                            Full-Stack Engineer
                                        </motion.div>
                                        <motion.div className="relative will-change-[transform,opacity] flex items-center justify-end md:justify-center w-full md:w-[90%] h-[190%] text-white"
                                            initial={{ opacity: 0, scale: 1.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, scale: [1.8, 1.5, 1] }}
                                            transition={{ delay: 0.5, duration: 0.72, ease: "anticipate" }}
                                        >
                                            <span className="
                                                    text-4xl font-signaturefont  will-change-[opacity]
                                                    text-primary md:text-white
                                                    text-shadow-lg shadow-primary
                                                    md:text-6xl font-semibold md:font-mainfont"><div className="shadow-primary md:text-shadow-none md:text-background">Jung</div> Talents</span>
                                        </motion.div>
                                        <motion.div className=" -translate-y-1/3 absolute-0 gradient-bg opacity-5 scale-y-50 z-[300]"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: [0, 0.8] }}
                                            transition={{ duration: 1.2, delay: 0.38, ease: "anticipate" }}
                                            viewport={{ once: true }}

                                        ></motion.div>
                                    </motion.div>


                                </motion.div>
                                <motion.div className="absolute-0 -translate-y-1/3 translate-x-1/3 will-change-[opacity] gradient-bg opacity-5 scale-50  z-[300]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 0.3] }}
                                    transition={{ duration: 1.2, delay: 0.27, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                            <ul className="pl-[8%] pr-[10%] w-[95%] md:w-[90%]  translate-x-[10%]
                                    md:bg-background rounded-3xl
                                    list-disc text-lg md:text-sm lg:text-lg text-white/80 
                                     shadow-black/30  border-t-[#ad9547]
                                     border-x-[#ad9547]/15 
                                    pt-[7%] will-change-transform
                                    border-b-black/20
                                    "

                            >

                                <li key="0"
                                    className="  w-auto rounded-xl mb-2"

                                >Architected and deployed a high-performance .NET application, leveraging
                                    <span className="relative font-bold underline px-2">Test-Driven Development (TDD) for faster, bug-free

                                    </span>
                                    releases</li>
                                <li key={1}
                                    className="  w-auto rounded-xl mb-2"

                                >Revamped Landing Page UI/UX, leading to a
                                    <span className="relative inline text-primary font-extrabold px-2">
                                        22% increase in conversion rate


                                    </span>

                                    through modern design and performance optimizations.
                                </li>
                                <li key={2}
                                    className="  w-auto rounded-xl mb-2"

                                >Optimized database queries, improving API response times and increasing overall
                                    <span className="relative inline text-primary font-extrabold mx-2">application speed by 32%

                                    </span>.
                                </li>
                                <li key={3}
                                    className=" w-auto rounded-xl mb-2"

                                >Maintained and enhanced a critical production application, ensuring
                                    <span className="relative inline text-primary font-extrabold mx-2">99.9% uptime and seamless

                                    </span>
                                    user experience.</li>
                                <li key={4}
                                    className=" w-auto rounded-xl mb-2"

                                >Integrated Docker-based CI/CD pipelines, reducing
                                    <span className="relative inline text-primary font-extrabold mx-2">deployment time by 40%

                                    </span>
                                    and improving development efficiency.</li>

                            </ul>

                        </motion.div>
                        <div className="h-[100px] w-full">


                        </div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default MobileExperience;
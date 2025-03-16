"use client";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const MobileExperience = () => {


    return (
        <div className="
                    
                    h-full w-full
                    "
        >

            <div className={`
                        flex items-end 
                        h-[40vh] w-full text-center tracking-widest`}>
                <motion.span
                    className="
                        text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl tracking-wider font-bold 
                        text-white w-full uppercase font-mainfont z-50
                        text-shadow-lg shadow-black/70
                       "
                    initial={{ x: "-100%", scale: 1.1, y: "50%" }}
                    whileInView={{ x: 0, scale: 1, y: "50%" }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}

                >Experience</motion.span>

            </div>

            <div className="
                        relative flex flex-col-reverse md:flex-row
                        h-[220vh] sm:h-[200vh] md:h-[200vh] 
                        shadow-inner md:shadow-none
                        shadow-black/60 overflow-clip
                        w-[82%] md:w-full mx-[8%] md:mx-0
                        bg-gradient-to-b from-secondary   to-background md:from-[#43262230]
            ">

                <div className="
                            h-full w-full md:w-[27%]
                            md:ml-[8%] z-10
                           ">
                    <motion.div className="
                            flex flex-col will-change-[transform,opacity]
                            opacity-0 md:opacity-100
                            md:p-0 md:justify-evenly 
                            w-full md:w-[80%] md:ml-[20.8%] md:rounded-l-2xl
                            h-full bg-gradient-to-b from-secondary to-background   2xl:via-secondary 2xl:to-transparent 
                            2xl:bg-background
                            shadow-xl 2xl:shadow-inner shadow-black 
                            "
                        initial={{ x: "-148%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-20 2xl:opacity-25 blur-3xl scale-y-125"></div>

                        <div className="flex flex-col h-full md:h-2/6 w-full ">
                            <div className="
                                hidden lg:block ml-[10%] 2xl:ml-[2%]
                                w-3/5 2xl:w-4/5 
                                text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-center 
                                text-white
                                ">  FullStack Engineer</div>
                            <span className="md:border-t-8 border-black/20 w-4/5" />
                        </div>

                    </motion.div>

                </div>
                <div className="
                            h-full md:w-2/3
                            md:ml-3
                           ">
                    <div className="
                            relative flex flex-col justify-evenly w-full h-full z-10">
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
                                        -translate-y-[15%]
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
                                        w-[85%] lg:hidden
                                        2xl:w-8/12 h-3/5  rounded-r-full rounded-tl-full
                                        md:bg-primary text-center 
                                        z-10 border-b-2 
                                        shadow-2xl shadow-black/30
                                "
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div className="h-full w-full -translate-y-2/3  will-change-[opacity]">
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
                                        <motion.div className="absolute top-[25%] left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-80 blur-3xl scale-y-50 z-[300]"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: [0, 0.8] }}
                                            transition={{ duration: 1.2, delay: 0.38, ease: "anticipate" }}
                                            viewport={{ once: true }}

                                        ></motion.div>
                                    </motion.div>


                                </motion.div>
                                <motion.div className="absolute will-change-[opacity] top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 blur-3xl scale-y-50 z-[300]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 0.3] }}
                                    transition={{ duration: 1.2, delay: 0.27, ease: "anticipate" }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                            <ul className="pl-[8%] pr-[10%] w-[95%] md:w-[90%] 2xl:w-[70%] translate-x-[10%]
                                    translate-y-[15%] md:translate-y-[15%] 2xl:translate-y-[25%] md:bg-background rounded-3xl
                                    list-disc text-lg md:text-sm lg:text-lg 2xl:text-xl text-white/80 
                                    2xl:shadow-2xl shadow-black/30 2xl:border-2 2xl:border-t-4 border-t-[#ad9547]
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
                        <div className="h-[6%] w-full">


                        </div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default MobileExperience;
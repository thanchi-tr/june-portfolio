'use client';

import { ReactNode } from "react";
import Introduction from "@/components/pages/Segment/Introduction";
import Experience from "@/components/pages/Segment/Experience";
import Skill from "@/components/pages/Segment/Skill";
import Project from "@/components/pages/Segment/Project";
import Education from "@/components/pages/Segment/Education";
import Footer from "@/components/client/Animation/Footer";
import { useRef } from "react";
export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/client/Animation/ParticlesComponent";
import Image from "next/image";
const Page = () => {

    const desRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    return (
        <div className="h-auto w-full box-border -z-[100] overflow-clip"
        >
            <motion.div className="
                    opacity-15 hover:opacity-100 z-[300] pointer-events-none
                    sticky  origin-center border-r-4 border-white
                    h-0 top-0  text-sm bg-black border-2
                    font-bold hover:cursor-pointer
                    text-center"
                initial={{ y: "3vh", x: "-45vw" }}
                transition={{ duration: 3, repeat: Infinity, ease: "anticipate" }}
            >
                <p className="absolute pointer-events-auto top-[4vh] hover:bg-black  text-primary opacity-80  scale-[150%] md:scale-100 left-[44vw] sm:left-[42vw]  md:left-[45vw] translate-x-[50%] font-[900] text-shadow-lg shadow-primary"
                    onClick={() => desRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Description</p>
                <p className="absolute pointer-events-auto hover:bg-white top-[16vh] text-descent opacity-80 scale-[150%] md:scale-100 left-[44vw] sm:left-[42vw]  md:left-[45vw] translate-x-[50%] font-[900] text-shadow-lg shadow-primary border-2 bg-background"
                    onClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Project</p>
                <p className="absolute pointer-events-auto hover:bg-primary top-[8vh] text-black opacity-80   scale-[150%] md:scale-100 left-[44vw] sm:left-[42vw]  md:left-[45vw] translate-x-[50%] font-[900] text-shadow-lg shadow-white bg-background rounded-2xl"
                    onClick={() => expRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Experience</p>
                <p className="absolute pointer-events-auto top-[12vh] hover:bg-secondary p-1 text-white opacity-80  scale-[150%] md:scale-100 left-[44vw] sm:left-[42vw]  md:left-[45vw] translate-x-[50%] font-[900] text-shadow-lg shadow-primary"
                    onClick={() => skillRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Skill</p>

            </motion.div>
            <a href={"mailto:dev.june.trinh@outlook.com"}>
                <motion.div className="
                    
                    sticky  origin-center translate-x-[85vw] 2xl:translate-x-[90vw] translate-y-[80vh] 2xl:translate-y-[80vh]
                    h-0 top-2 z-[200] text-2xl bg-black 
                    font-signaturefont text-center"
                >

                    <div className="relative w-[8vw] md:w-[5vw] 2xl:w-[3vw] h-[8vw] md:h-[5vw] 2xl:h-[3vw] scale-[200%] md:scale-[150%] lg:scale-[200%]">
                        <p className="border-2 text-white font-mainfont text-xs text-center translate-y-[5%] scale-75 -z-[10]">HIRE ME? </p>
                        <motion.div className="
                            group flex flex-col
                            h-full w-full
                            
                            "
                            animate={{ opacity: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >


                            <Image src={"/logo.png"} alt={""} className="object-contain scale-105 " fill></Image>

                        </motion.div>



                    </div>

                </motion.div>
            </a>

            <div
                className={`
                relative
                transition-all duration-150
                h-auto max-full 
                bg-background
                
                `}
                ref={desRef}
            >
                <Introduction />

            </div>

            {/* testing */}
            {/*200vh for experience */}
            <div className="
                            h-[260vh] sm:h-[240vh] md:h-[240vh] w-full
                        bg-background -z-50
                        "
                ref={expRef}

            >

                <Experience />
            </div>

            {/* 200vh for Skill */}
            <div className="
                    h-[200vh] w-full 
            "
                ref={skillRef}
            >

                <Skill></Skill>
            </div>
            {/* Project */}
            <div className="h-auto"
                ref={projectRef}
            >
                <Project />
            </div>
            {/* Education */}
            <div className="
                    flex flex-col z-20
                    items-center h-[80vh] 
                    max-w-full bg-background
                    ">
                <Education />
            </div>
            <div className="h-auto bg-gradient-to-t from-secondary to-background translate-y-[15%] scale-y-150 2xl:scale-y-100 z-30">
                <Footer />
            </div>
            <div className="
            `       relative text-xs border-t-8
                    flex flex-col text-background
                    h-auto max-w-full 
                    bg-primary font-semibold 
                    tracking-wider z-50">



                <div className="flex flex-row md:flex-row justify-evenly w-auto pb-2 text-background ">

                    <div className="hidden md:flex w-[35%]">www.junetrinh.dev</div>
                    <div className="">
                        Power by Vercel

                    </div>
                    <div className="text-center"> JUNE TRINH @2025- all right preserved</div>

                    <div></div>
                </div>
            </div>
            <div className="absolute top-0 h-full w-full hidden lg:block "><ParticlesComponent /></div>
        </div >


    )
}

export default Page;
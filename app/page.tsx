'use client';

import { ReactNode } from "react";
import Introduction from "@/components/pages/Segment/Introduction";
import Experience from "@/components/pages/Segment/Experience";
import Skill from "@/components/pages/Segment/Skill";
import Project from "@/components/pages/Segment/Project";
import Education from "@/components/pages/Segment/Education";
import Footer from "@/components/client/Animation/Footer";
export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];
import { motion } from "framer-motion";
const Page = () => {

    // const navs: NavButtonT = [
    //     {
    //         tag: "About", className_: `bg-background/0`
    //     },
    //     { tag: "Exp", className_: `bg-shadow/40` },
    //     { tag: "Edu", className_: `bg-shadow/40` },
    //     { tag: "Project", className_: `bg-pink-300/50` },
    //     { tag: "Contact", className_: `bg-background` },
    // ]

    return (
        <div className="h-auto w-full box-border -z-[100] overflow-clip"
        >
            <motion.div className="
                    
                    sticky  origin-center
                    h-0 top-2  z-[200] text-2xl 
                    translate-y-[100vh]
                    font-signaturefont text-center"
                initial={{ y: "85vh", x: "42vw" }}
                animate={{ y: ["85vh", "81vh", "85vh"], x: "42vw" }}
                transition={{ duration: 3, repeat: Infinity, ease: "anticipate" }}
            >

                <p className="absolute top-[1.5px] text-accent opacity-80 left-[28vw] md:left-[42vw] translate-x-[50%] font-[900] text-shadow-lg shadow-primary border-2 bg-background"> JuneTR</p>
                <p className="absolute top-0 text-black opacity-80  left-[28vw] md:left-[42vw] translate-x-[50%] font-[900] text-shadow-lg shadow-white bg-background rounded-2xl"> JuneTR</p>
                <p className="absolute top-[2.5px] text-descent opacity-80 left-[28vw] md:left-[42vw] translate-x-[50%] font-[900] text-shadow-lg shadow-primary"> JuneTR</p>

            </motion.div>
            <div
                className={`
                relative
                transition-all duration-150
                h-screen max-full 
                bg-background
                
                `}

            >

                <Introduction />

            </div>

            {/* testing */}
            {/*200vh for experience */}
            <div className="
                   h-[260vh] sm:h-[240vh] md:h-[240vh] w-full
                bg-background -z-50
             ">

                <Experience />
            </div>

            {/* 200vh for Skill */}
            <div className="
                    h-[200vh] w-full 
            ">

                <Skill></Skill>
            </div>
            {/* Project */}
            <div className="h-auto">
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
            <div className="h-auto bg-gradient-to-t from-secondary to-background z-50 translate-y-[15%] scale-y-150 2xl:scale-y-100">
                <Footer />
            </div>
            <div className="
            `       relative text-xs 
                    flex flex-col text-background
                    h-auto max-w-full 
                    bg-primary font-semibold 
                    tracking-wider z-50">

                <div className="text-center  my-3 2xl:my-1"> all right preserved</div>

                <div className="flex flex-col md:flex-row justify-evenly gap-5 w-auto pb-5 ">
                    <div className="hidden md:flex w-[35%]">www.junetr.dev</div>

                    <div className="flex flex-row md:flex-col w-full 
                            justify-evenly 
                            md:w-auto">
                        <div className="flex flex-row justify-between">
                            <div className="underline pr-[5%]">Written with NextJs: by June</div>
                            <div>Power by Vercel</div>
                        </div>

                    </div>
                </div>
            </div>
        </div >


    )
}

export default Page;
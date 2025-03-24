'use client';

import { ReactNode, useEffect, useState } from "react";
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
import MobileExperience from "@/components/pages/Segment/MobileExperience";
import Commercialproject from "@/components/pages/Segment/Commercialproject";
import NavBar from "@/components/client/Functional/NavBar";
import ContactForm from "@/components/client/Functional/Form";
const Page = () => {
    const [email, setEmail] = useState<string | null>(null);
    useEffect(() => {
        setEmail(process.env.NEXT_EMAIL || "dev.xuan.trinh@outlook.com");
    }, []);
    const desRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const skillRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const eduRef = useRef<HTMLDivElement>(null);
    const ContactRef = useRef<HTMLDivElement>(null);
    return (
        <div className="h-auto w-full box-border -z-[100] overflow-clip"
        >

            <NavBar desRef={desRef} expRef={expRef} skillRef={skillRef} projectRef={projectRef} eduRef={eduRef} contactRef={ContactRef} />
            <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}>
                <motion.div className="
                    
                    sticky  origin-center translate-x-[85vw] 2xl:translate-x-[90vw] translate-y-[80vh] 2xl:translate-y-[80vh]
                    h-0 top-2 z-[200] text-2xl bg-black 
                    font-signaturefont text-center"
                >

                    <div className="
                            relative w-[8vw] md:w-[5vw] 2xl:w-[3vw] h-[8vw] md:h-[5vw] 2xl:h-[3vw] scale-[200%] md:scale-[150%] lg:scale-[200%]
                            group-hover:shadow-xl shadow-white group
                            active:scale-90
                    ">

                        <motion.div className="
                            relative 
                            group flex flex-col 
                            w-full aspect-square
                            group-hover:border-t-8 group-hover:border-black
                            "
                            animate={{
                                opacity: [0.2, 1, 1, 1, 0.2]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "anticipate" }}
                        >


                            <Image
                                src={"/logo.png"}
                                alt={"Miniture Version of Logo, include brand slogan"}
                                className=" object-contain scale-125 "
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                                quality={50}
                                fill
                            />

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

            {/*200vh for experience */}
            <div className="
                            h-[260vh] sm:h-[240vh] md:h-[240vh] w-full
                        bg-background -z-50
                        "
                ref={expRef}

            >
                <div className="h-full w-full hidden lg:block">
                    <Experience />
                </div>
                <div className="h-auto w-full lg:hidden">
                    <MobileExperience />
                </div>
            </div>

            {/* 200vh for Skill */}
            <div className="
                    h-[280vh] sm:h-[220vh] md:h-[180vh] lg:h-[185vh] 2xl:h-[150vh] w-full 
            "
                ref={skillRef}
            >

                <Skill />
            </div>
            {/* Project */}
            <div className="h-auto"
                ref={projectRef}
            >
                <Project />
            </div>
            <div className="h-auto"
                ref={projectRef}
            >
                <Commercialproject />
            </div>
            {/* Education */}
            <div className="
                    flex flex-col z-20
                    items-center h-[80vh] 
                    max-w-full bg-background
                    "
                ref={eduRef}
            >
                <Education />
            </div>
            <div className="absolute top-0 h-full w-full "><ParticlesComponent /></div>

            <div className="h-auto bg-black z-50">
                <ContactForm />
            </div>
            <div className="h-auto bg-gradient-to-t from-secondary to-background translate-y-[15%] scale-y-150 2xl:scale-y-100 z-30">
                <Footer />
            </div>

            <div className="
            `       relative text-xs border-t-8
                    flex flex-col text-background
                    h-auto max-w-full 
                    bg-primary font-semibold 
                    tracking-wider z-50"
                ref={ContactRef}
            >



                <div className="flex flex-row md:flex-row justify-evenly w-auto pb-2 text-background ">

                    <div className="hidden md:flex w-[35%]">www.junetrinh.dev</div>
                    <div className="">
                        Power by Vercel

                    </div>
                    <div className="text-center"> JUNE TRINH @2025- all right preserved</div>

                    <div></div>
                </div>
            </div>

        </div >


    )
}

export default Page;
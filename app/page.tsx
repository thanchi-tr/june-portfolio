'use client';

import { ReactNode, useEffect, useState } from "react";
import Introduction from "@/components/pages/Segment/Introduction";
import Experience from "@/components/pages/Segment/Experience";
import Skill from "@/components/pages/Segment/Skill";
import Project from "@/components/pages/Segment/Project";
import Education from "@/components/pages/Segment/Education";
import Footer from "@/components/client/Animation/Footer";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/client/Animation/ParticlesComponent";
import Image from "next/image";
import MobileExperience from "@/components/pages/Segment/MobileExperience";
import Commercialproject from "@/components/pages/Segment/Commercialproject";
import NavBar from "@/components/client/Functional/NavBar";
import ContactForm from "@/components/client/Functional/Form";
import HeroSection from "@/components/UI/HeroSection";
import Icon from "@/components/UI/ResponsiveIcon";
import ScrollHint from "@/components/client/Animation/ScrollHint";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const [email, setEmail] = useState<string | null>(null);
    useEffect(() => {
        setEmail(process.env.NEXT_EMAIL || "dev.xuan.trinh@outlook.com");
    }, []);

    const container = useRef<HTMLDivElement>(null);
    const hero = useRef<HTMLDivElement>(null);
    const light = useRef<HTMLDivElement>(null);
    const logo = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        if (!light.current) return;
        gsap.to(light.current, {
            width: "100%",
            opacity: 0.3,
            scrollTrigger: {
                trigger: container.current,
                start: "2%",
                end: "14%",
                scrub: true,
            },
        });
        gsap.to(hero.current, {
            transform: "translateX(-255%) translateY(85%)",
            rotate: 45,
            scrollTrigger: {
                trigger: container.current,
                start: "20%",
                end: "220%",
                scrub: true,
            },
        });
        gsap.to(logo.current, {
            rotate: -45,
            scrollTrigger: {
                trigger: container.current,
                start: "20%",
                end: "220%",
                scrub: true,
            },
        });
        gsap.to(".hint", {
            scale: 0,
            scrollTrigger: {
                trigger: container.current,
                start: "5%",
                end: "50%",
                scrub: true,
            },
        });
        gsap.to(logo.current, {
            transform: "scale(210%) translateY(-80%) ",

            scrollTrigger: {
                trigger: container.current,
                start: "5%",
                end: "50%",
                scrub: true,
            },
        });
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            gsap.set(".project", {
                opacity: 0
            });

            gsap.to(".project", {
                opacity: 1,
                rotate: 0,
                scrollTrigger: {
                    trigger: ".main",
                    start: "38%",
                    end: "52%",
                    scrub: true,
                },
            });
        });
    }, []);
    return (
        <div className="main bg-background">
            <div ref={container} className="text-white h-[50vh] flex flex-col items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)] select-none">
                <section ref={hero} className="hero hero-section sticky top-0 z-[1000] bg-background  pb-[10vh] shadow-2xl shadow-black overflow-clip">
                    <h4 className="text-secondary1 animate-fade-in border-debug text-2xl
                    "> hello</h4>
                    <HeroSection />
                    <div
                        ref={light}
                        className="light absolute-0 gradient-bg w-0 opacity-5"
                    />
                    <div ref={logo} className="flex justify-center scale-0 z-10"><Icon iconStr={"Logo"} href={""} />

                    </div>
                    <div className="absolute bottom-[21vh] h-auto w-auto z-0 hint"><ScrollHint /></div>
                </section>
            </div>
            <div className="h-auto w-full box-border -z-[100] overflow-clip"
            >

                <NavBar />
                <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}>
                    <motion.div className="
                    
                    sticky  origin-center translate-x-[85vw] 2xl:translate-x-[90vw] translate-y-[80vh] 2xl:translate-y-[80vh]
                    h-0 top-2 z-[200] text-2xl bg-black  text-center"
                    >

                        <div className="
                            relative w-[8vw] md:w-[5vw] 2xl:w-[3vw] h-[8vw] md:h-[5vw] 2xl:h-[3vw] scale-[200%] md:scale-[150%] lg:scale-[200%]
                            group-hover:shadow-xl shadow-white group
                            active:scale-90
                    ">

                            <motion.div className="
                                relative will-change-auto
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
                        relative transition-all duration-150
                        h-auto max-full bg-background
                    `}
                >
                    <Introduction />

                </div>

                {/*200vh for experience */}
                <div className="
                            w-full
                        bg-background -z-50
                        "
                    id="experience"
                >
                    <div className=" h-[260vh] sm:h-[240vh] md:h-[240vh] w-full hidden md:block">
                        <Experience />
                    </div>
                    <div className="h-auto w-full md:hidden">
                        <MobileExperience />
                    </div>
                </div>

                {/* 200vh for Skill */}
                <div className="h-auto w-full">
                    <Skill />
                </div>
                {/* Project */}
                <div className="h-auto"
                >
                    <Project />
                </div>
                <div className="h-auto"
                >
                    <Commercialproject />
                </div>
                {/* Education */}
                <div className="
                    flex flex-col z-20
                    items-center h-[80vh] 
                    max-w-full bg-background
                    "
                >
                    <Education />
                </div>
                <div className="absolute top-0 h-full w-full "><ParticlesComponent /></div>

                <div className="h-auto bg-black z-50" id="contact">
                    <ContactForm />
                </div>
                <div className="h-auto bg-gradient-to-t from-secondary to-background translate-y-[15%]  z-30">
                    <Footer />
                </div>

                <div className="
            `       relative text-xs border-t-8
                    flex flex-col text-background
                    h-auto max-w-full 
                    bg-primary font-semibold 
                    tracking-wider z-50"
                >



                    <div className="flex flex-row justify-evenly w-auto pb-2 text-background ">

                        <div className="hidden md:flex w-[35%]">www.junetrinh.dev</div>
                        <div className="">
                            Power by Vercel

                        </div>
                        <div className="text-center"> JUNE TRINH @2025- all right preserved</div>

                        <div></div>
                    </div>
                </div>

            </div >
        </div>


    )
}

export default Page;
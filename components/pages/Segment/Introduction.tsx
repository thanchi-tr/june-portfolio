"use clients"
import Image from "next/image";
import Avata from "@/components/client/Animation/Avata";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const Introduction = () => {
    const selfRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: selfRef });
    const [refresh, setRefresh] = useState(false);
    const AnimationProgress = useMotionValue(0);
    const [email, setEmail] = useState<string | null>(null);
    useEffect(() => {
        setEmail(process.env.NEXT_EMAIL || "dev.xuan.trinh@outlook.com");
    }, []);
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {

        // Additional logic based on scroll progress
        if (refresh) {
            AnimationProgress.set(latest)
            setRefresh(false);
        };
        setTimeout(() => {
            setRefresh(true);
        }, 20);
    });
    return (
        <div className={`
                relative h-full w-full
                bg-background 
                overflow-x-clip`}
            ref={selfRef}
        >
            <div className="hidden 2xl:h-[10vh] bg-transparent w-full" />
            <div
                className="
                    relative flex
                    flex-col
                    lg:flex-row
                    h-auto w-full 2xl:w-[90%] 2xl:pl-[5%]
                    bg-background 
                    ">
                <div className={`
                        flex flex-col 
                        w-full lg:w-7/12 h-full
                        
                        `}>
                    <div className="
                            relative flex 
                            justify-center lg:justify-start
                            opacity-50 hover:opacity-100 lg:opacity-100
                        
                    ">
                        <div className="
                                opacity-0 h-[22vh]
                                scale-[45%] lg:scale-[40%] 
                                 lg:-translate-x-[25%] lg:-translate-y-[20%]">


                        </div>

                    </div>

                    <div className="
                                relative 
                                flex flex-wrap 
                                items-center
                                h-[80vh] w-full">

                        <div className="
                                    relative flex flex-row 
                                    flex-wrap justify-center
                                    w-full h-3/5
                                    
                            ">
                            {/* avatar + link */}
                            <div className="
                                    flex z-[220]
                                    w-4/5 h-full
                                    justify-center items-center text-3xl //@delete_line">
                                <motion.div
                                    className="h-full w-full"
                                >

                                    <Avata />
                                </motion.div>

                                {/* Link holder */}
                                <div className="
                                        absolute flex flex-row z-[300]
                                         origin-top-left
                                        lg:translate-x-0 lg:rotate-0 lg:translate-y-0
                                        top-0 2xl:-translate-y-5 2xl:translate-x-[45%]
                                        w-[90%] lg:w-4/5 2xl:w-1/3
                                        h-[80%] sm:h-[90%] lg:h-3/5
                                    ">
                                    <div className="2xl:hidden h-full w-2/3" />
                                    <div className=" 
                                                w-[110%] md:w-full pl-[5%] md:-translate-x-[8vw] lg:translate-x-0
                                                flex flex-row justify-evenly
                                                text-lg uppercase text-center 
                                    ">
                                        {/* CV */}
                                        <div className=" 
                                                relative max-w-[90px] max-h-[90px]
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full  bg-white">
                                            <ExternalCircularButton link={"/cv.pdf"} >
                                                <Image
                                                    src="/icons/cv.png"
                                                    alt="URL to Download Xuan's CV" fill
                                                    className="scale-75 object-contain"
                                                    priority
                                                    quality={20}
                                                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
                                                />
                                            </ExternalCircularButton>
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block">resume</p>
                                        </div>
                                        {/* Twitter */}
                                        <div className="z-[200] lg:z-10 hover:scale-110 active:scale-90
                                                 -translate-y-[250%] group max-w-[90px] max-h-[90px]
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full">
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block -translate-y-[100%]">Twitter</p>
                                            <ExternalCircularButton link={"https://x.com/devjunetrinh"} >
                                                <Image
                                                    src="/icons/twitter.avif"
                                                    alt="github" fill
                                                    className="object-fill"
                                                    priority
                                                    quality={30}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </ExternalCircularButton>
                                        </div>
                                        {/* Seek */}
                                        <div className=" 
                                                relative max-w-[90px] max-h-[90px]
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full  bg-white">
                                            <ExternalCircularButton link={"https://www.seek.com.au/profile/xuan-trinh-trhbqWtn3B"} >
                                                <Image
                                                    src="/icons/seek.webp"
                                                    alt="URL to Download Xuan's CV" fill
                                                    className="scale-105 object-contain"
                                                    priority
                                                    quality={20}
                                                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
                                                />
                                            </ExternalCircularButton>
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block">Seek</p>
                                        </div>
                                        {/* GitHub */}
                                        <div className="z-[200] lg:z-10 hover:scale-110 active:scale-90
                                                 -translate-y-[250%] group max-w-[90px] max-h-[90px]
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full">
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block -translate-y-[100%]">Github</p>
                                            <ExternalCircularButton link={"https://github.com/thanchi-tr"} >
                                                <Image
                                                    src="/icons/github.jpg"
                                                    alt="github" fill
                                                    className="object-fill"
                                                    priority
                                                    quality={30}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </ExternalCircularButton>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
                <motion.div className={`
                        
                        flex flex-col relative  z-10 2xl:mt-4 border-black
                        w-full lg:w-5/12 xl:w-4/12 h-[120%] 2xl:border-2 2xl:translate-y-[10%]
                        rounded-bl-md xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                        lg:bg-gradient-to-b from-primary to-background 2xl:bg-transparent
                        will-change-transform
                        
                        `}
                    initial={{ x: "90vw" }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 700, // Controls the speed of the spring effect
                        damping: 32, // Reduces overshoot
                        delay: 0.2,
                    }}
                >
                    <div className="w-full h-[20%]"></div>
                    {/* description */}
                    <motion.div
                        className="
                            w-[90%] md:w-full ml-[3%] lg:ml-[5%] h-auto lg:h-4/5 group 
                            text-white lg:text-black 2xl:text-white    
                            z-40
                        "
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-20 blur-3xl "></div>

                        <div className={`
                                p-4 py-[8%] lg:py-[10vh] px-20 md:px-20 lg:p-6 leading-5 2xl:mt-4
                                text-sm lg:text-sm text-white
                                font-semibold tracking-wide
                                 rounded-t-2xl rounded-br-lg
                                lg:translate-y-[78%] lg:bg-gradient-to-b from-[#ff8c00]/40 to-[#8a2be2]/10
                                h-auto rounded-b-3xl
                            `}
                        >

                            Hi, I&#39;m
                            <span className="font-extrabold underline text-white mx-1"> June</span>, a passionate
                            <strong className="font-extrabold underline text-white mx-1"> Full Stack Developer</strong>, who build
                            <strong className="font-extrabold underline text-white mx-1">DotNet & NextJs application</strong> that is
                            <span className="font-extrabold underline text-white mx-1">designed with scalable architectures</span>, with a focus on
                            <span className="font-extrabold underline text-white mx-1">performance and seamless user experiences.</span>
                            <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}> <span className="font-extrabold underline text-white mx-1">Let chat !!!</span></a>

                        </div>



                    </motion.div>
                    {/* blur screen */}
                    <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}><div className="
                            relative lg:absolute group 
                            top-0 z-[100]
                            h-full w-full
                             lg:border-l-[10vw] 
                            border-l-0 border-violet-950/65
                            hover:cursor-pointer 
                            shadow-inner shadow-black group-hover:overflow-hidden
                            transition-all xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                            " >
                        {/* <span className="absolute left-0 top-0 h-full w-full bg-white blur-lg opacity-20"></span> */}

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-20 2xl:opacity-25 blur-3xl hover:bg-transparent"></div>

                        <div className="lg:absolute top-0 h-[250px] w-full lg:h-full lg:w-full backdrop-blur-sm opacity-100  lg:opacity-100
                                transition-all group-hover:duration-300 ease-in-out
                               lg:translate-y-0
                        ">

                            <div className="
                                absolute w-full top-0 left-0 h-[9vh] translate-x-[-21%] sm:translate-x-[-25%] md:translate-x-[-27%] rounded-2xl overflow-clip 
                               
                                transition-all duration-100 ease-in-out
                                " >
                                <Image
                                    src="/icons/logoLarge.png"
                                    alt="Full Version of Logo include brand slogan"
                                    className="object-contain h-full w-full"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                />
                            </div>
                            <div className="
                                    lg:hidden h-full w-full z-10 relative
                                    translate-y-[5%]
                                    rounded-3xl
                                    overflow-clip lg:border-x-2 lg:border-b-2 ">

                                <Image
                                    src="/ava3.png"
                                    alt="Avatar of the Developer"
                                    className="object-contain" fill
                                    priority
                                    quality={40}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                />

                            </div>
                            <div className="
                                    hidden lg:block h-full w-full z-10 relative
                                    translate-y-[5%]
                                    rounded-3xl transition-all duration-75
                                    overflow-clip lg:border-x-2 lg:border-b-2">

                                <Image
                                    src="/ava3.png"
                                    alt="Mid-level Full Stack Developer specializing in .NET, Next.js, and Angular, based in Melbourne, Australia."
                                    className="object-contain" fill

                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                />

                            </div>
                        </div>
                    </div></a>

                </motion.div>
            </div>

        </div >
    )
}

export default Introduction;
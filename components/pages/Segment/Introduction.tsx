"use clients"
import Image from "next/image";
import Avata from "@/components/client/Animation/Avata";
import ToggleButton from "@/components/client/Animation/ToggleButton";
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
                                opacity-0
                                scale-[45%] lg:scale-[40%] 
                                 lg:-translate-x-[25%] lg:-translate-y-[20%]">

                            <ToggleButton
                                onClick={() => { }}
                                isOn={false}
                            />
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
                                        {/* Linked In */}
                                        <div className=" z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group relative
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full  bg-white">
                                            <ExternalCircularButton link={"/cv.pdf"} >
                                                <Image
                                                    src="/icons/cv.png"
                                                    alt="URL to linkedin Profile" fill
                                                    className="scale-75 object-contain"
                                                    priority
                                                    quality={50}
                                                />
                                            </ExternalCircularButton>
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block">resume</p>
                                        </div>
                                        {/* GitHub */}
                                        <div className="z-[200] lg:z-10 hover:scale-110 active:scale-90
                                                 -translate-y-[250%] group
                                                aspect-square h-[17%] sm:h-[20%] lg:h-[26%] w-auto rounded-full">
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block -translate-y-[100%]">Github</p>
                                            <ExternalCircularButton link={"https://github.com/thanchi-tr"} >
                                                <Image
                                                    src="/icons/github.jpg"
                                                    alt="github" fill
                                                    className="object-fill"
                                                    priority
                                                    quality={50}
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
                            w-full h-auto lg:h-4/5 group 
                            text-white lg:text-black 2xl:text-white    
                            z-40
                        "
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-20 blur-3xl "></div>

                        <div className={`
                                p-3 py-[8%] lg:py-[10vh] px-12 md:px-20 lg:p-6 leading-5 2xl:mt-4
                                text-sm lg:text-sm text-white
                                font-semibold tracking-wide
                                 rounded-t-2xl rounded-br-lg
                                lg:translate-y-[78%] lg:bg-gradient-to-b from-[#ff8c00]/40 to-[#8a2be2]/10
                                h-auto rounded-b-3xl
                            `}
                        >

                            {/* I am a passionate
                            {<span className="font-extrabold underline text-white mx-1">FULL-STACK DEVELOPER</span>}
                            with <span className="font-extrabold underline text-white ">over 3 years of experience</span> in building high-quality applications using
                            {<span className="ml-1 font-extrabold underline text-white"> .NET </span>}and
                            {<span className="font-extrabold underline text-white"> Next.js</span>},
                            My expertise lies in designing scalable architectures, optimizing performance, and ensuring seamless user experiences. I thrive in fast-paced environments, solving complex problems with an
                            {<span className="font-extrabold underline text-white mx-1">innovative, solution-oriented approach</span>}
                            If you&#39;re looking for a developer who delivers
                            {<span className="font-extrabold underline text-white mx-1">on time, with precision, and a keen eye for detail Let me know how I can help you.</span>} */}
                            Hi, I&#39;m
                            <span className="font-extrabold underline text-white mx-1"> June</span>, a passionate
                            <span className="font-extrabold underline text-white mx-1"> Full Stack Developer</span>, who build
                            <span className="font-extrabold underline text-white mx-1">DotNet & NextJs application</span> that is
                            <span className="font-extrabold underline text-white mx-1">designed with scalable architectures</span>, with a focus on
                            <span className="font-extrabold underline text-white mx-1">performance and seamless user experiences.</span>
                            <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}> <span className="font-extrabold underline text-white mx-1">Let chat !!!</span></a>
                        </div>



                    </motion.div>
                    {/* blur screen */}
                    <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}><div className="
                            absolute group 
                            top-0 z-[100]
                            h-full w-full
                            lg:hover:border-l-0 lg:border-l-[10vw] 
                            border-l-0 border-violet-950/65
                            hover:cursor-pointer 
                            shadow-inner shadow-black group-hover:overflow-hidden
                            transition-all xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                            " >
                        {/* <span className="absolute left-0 top-0 h-full w-full bg-white blur-lg opacity-20"></span> */}

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-20 2xl:opacity-25 blur-3xl hover:bg-transparent"></div>

                        <div className="absolute top-0 h-full w-full backdrop-blur-sm opacity-100  lg:opacity-100
                                transition-all group-hover:duration-300 ease-in-out
                                -translate-y-[100%] lg:translate-y-0
                        ">

                            <div className="
                                absolute w-full top-0 left-0 h-[9vh] translate-x-[-30%] rounded-2xl overflow-clip 
                                lg:group-hover:scale-[210%]  2lg:group-hover:left-[5vw] lg:group-hover:top-[4vh]
                                transition-all duration-100 ease-in-out
                                " >
                                <Image
                                    src="/icons/logoLarge.png"
                                    alt="Full Version of Logo include brand slogan"
                                    className="object-contain" fill
                                    quality={100}
                                />
                            </div>
                            <div className="
                                    h-full w-full z-10 
                                    translate-y-[5%] lg:group-hover:-translate-y-[10%]
                                    rounded-3xl transition-all duration-75
                                    overflow-clip lg:border-x-2 lg:border-b-2 lg:group-hover:scale-125 lg:group-hover:border-0">
                                <Image
                                    src="/animatedAva.png"
                                    alt="Avatar of the Developer"
                                    className="object-contain translate-x-[42%] lg:group-hover:translate-x-[27%] scale-[150%] lg:group-hover:scale-[100%] -translate-y-[4%]" fill
                                    quality={100}
                                />
                                <Image
                                    src="/ava3.png"
                                    alt="Avatar of the Developer"
                                    className="object-contain" fill
                                    quality={100}
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
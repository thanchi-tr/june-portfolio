"use clients"
import Image from "next/image";
import Avata from "@/components/client/Animation/Avata";
import ToggleButton from "@/components/client/Animation/ToggleButton";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import { useThemeContext } from "@/hooks/context/useThemeContext";
import { easeIn, motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const Introduction = () => {
    const { isDark, toggleTheme } = useThemeContext();
    const selfRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: selfRef });
    const [AnimationProgress, setAnimationProgress] = useState(0);

    // Update the animation progress, where we can read later on
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            setAnimationProgress(latest)
        });

        return () => unsubscribe(); // Cleanup subscription
    }, [scrollYProgress]);

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
                                onClick={toggleTheme}
                                isOn={isDark}
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
                            <motion.div className="
                                    absolute lg:hidden
                                     w-full 
                                    bg-primary"
                                animate={{
                                    height: (AnimationProgress * 35) + 40 + "%",
                                    top: 75 - (AnimationProgress * 50) + "%"
                                }}
                            />
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
                                        absolute flex flex-row
                                        translate-x-[10%] -translate-y-[90%] origin-top-left rotate-90
                                        lg:translate-x-0 lg:rotate-0 lg:translate-y-0
                                        top-0 2xl:-translate-y-5 2xl:translate-x-[45%]
                                        w-[90%] lg:w-4/5 2xl:w-1/3
                                        h-[80%] sm:h-[90%] lg:h-3/5 
                                        pt-2 z-10
                                    ">
                                    <div className="2xl:hidden h-full w-2/3" />
                                    <div className="
                                                w-[80%] pl-[5%] 2xl:border-2 md:-translate-x-[8vw] lg:translate-x-0
                                                flex flex-row justify-evenly
                                                text-lg uppercase text-center
                                    ">
                                        {/* Linked In */}
                                        <div className=" z-[130]
                                                -rotate-90 lg:rotate-0 -translate-y-[250%] group relative
                                                aspect-square h-[22%] sm:h-[24%] lg:h-[26%] w-auto rounded-full  bg-white">
                                            <ExternalCircularButton link={"https://www.linkedin.com/in/xuan-trinh-27553334b/"} >
                                                <Image src="/icons/linkedin.png" alt="github" fill className="scale-75 object-fill" />
                                            </ExternalCircularButton>
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block">LinkedIn</p>
                                        </div>
                                        {/* GitHub */}
                                        <div className="z-[130]
                                                -rotate-90 lg:rotate-0 -translate-y-[250%] group
                                                aspect-square h-[22%] sm:h-[24%] lg:h-[26%] w-auto rounded-full">
                                            <p className="absolute gradient-text text-xl font-mainfont hidden group-hover:block -translate-y-[100%]">Github</p>
                                            <ExternalCircularButton link={"https://github.com/thanchi-tr"} >
                                                <Image src="/icons/github.jpg" alt="github" fill className="object-fill" />
                                            </ExternalCircularButton>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
                <div className={`
                        flex flex-col relative  z-10
                        w-full lg:w-5/12 xl:w-4/12 h-[120%] 2xl:border-2 2xl:translate-y-[10%]
                        rounded-bl-md xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                        lg:bg-gradient-to-b from-primary to-background 2xl:bg-transparent`} >
                    <div className="w-full h-[20%]"></div>
                    {/* description */}
                    <motion.div
                        className="
                            w-full h-auto lg:h-2/3 
                            text-white lg:text-black 2xl:text-white    
                            z-40
                    "
                        initial={{ translateY: "100%", opacity: 0 }}
                        whileInView={{ translateY: "0%", opacity: [0, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: easeIn }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-20 blur-3xl"></div>


                        <div className={`
                                p-2 pl-10 lg:p-6 leading-5 2xl:mt-4
                                text-sm lg:text-sm  
                                font-semibold tracking-wide
                                 rounded-t-2xl rounded-br-2xl 
                                xl:-translate-y-[10%]
                                h-auto
                            `}
                        >
                            I am a passionate
                            {<span className="font-extrabold underline text-white mx-1">FULL-STACK DEVELOPER</span>}
                            with <span className="font-extrabold underline text-white ">over 3 years of experience</span> in building high-quality applications using
                            {<span className="ml-1 font-extrabold underline text-white"> .NET </span>}and
                            {<span className="font-extrabold underline text-white"> Next.js</span>},
                            My expertise lies in designing scalable architectures, optimizing performance, and ensuring seamless user experiences. I thrive in fast-paced environments, solving complex problems with an
                            {<span className="font-extrabold underline text-white mx-1">innovative, solution-oriented approach</span>}
                            If you&#39;re looking for a developer who delivers
                            {<span className="font-extrabold underline text-white mx-1">on time, with precision, and a keen eye for detail</span>}

                        </div>



                    </motion.div>
                    {/* blur screen */}
                    <div className="
                            absolute group 
                            top-0 
                            h-full w-full 
                            lg:backdrop-blur-md hover:backdrop-blur-none 
                            hover:border-l-[18px] hover:cursor-pointer 
                            shadow-inner shadow-black 
                            transition-all xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                            " >
                        {/* <span className="absolute left-0 top-0 h-full w-full bg-white blur-lg opacity-20"></span> */}

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-20 2xl:opacity-25 blur-3xl"></div>

                        <div className="
                                        absolute  opacity-100 pointer-events-none 
                                        top-0 h-[100%] md:aspect-square w-full z-30 scale-125 -translate-x-[150.5%] lg:-translate-x-[95.5%] lg:translate-y-[30%]
                                        2xl:-translate-x-[180.5%]  2xl:translate-y-[75.5%] 
                                        
                            ">

                            <motion.div
                                className="flex flex-col justify-evenly h-[90%] w-[25vw] ml-[10%] rounded-lg backdrop-blur-sm
                                    origin-center transition-all shadow-inner shadow-black hover:z-[10]
                                    2xl:w-[50%] z-50
                                "
                            >

                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Introduction;
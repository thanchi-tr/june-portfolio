"use clients"
import Image from "next/image";
import Avata from "@/components/client/Animation/Slogan";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

const Introduction = () => {
    const [email, setEmail] = useState<string | null>(null);
    useEffect(() => {
        setEmail(process.env.NEXT_EMAIL || "dev.xuan.trinh@outlook.com");
    }, []);
    return (
        <div className={`
                relative-screen
                bg-background 
                overflow-x-clip`}
        >
            <div
                className="
                    relative flex-standard 2xl:mt-[10vh]
                    h-auto w-full 2xl:w-[90%] 2xl:pl-[5%]
                    ">
                <div className={`
                        flex flex-col relative-screen
                        lg:w-7/12
                        
                        `}>

                    <div className="
                                relative 
                                flex flex-wrap 
                                items-center
                                h-[40vh] min-h-[600px] xl:h-[55vh] mt-[15vh]
                                w-full
                                ">

                        <div className="
                                    relative flex flex-row 
                                    flex-wrap justify-center
                                    w-full h-3/5 
                                    
                            ">
                            {/* avatar + link */}
                            <div className="
                                    flex z-[220]
                                    w-4/5 h-full">
                                <Avata />

                                {/* Link holder */}
                                <div className="
                                        absolute-0 flex z-[300]
                                         2xl:-translate-y-5 2xl:translate-x-[45%]
                                        w-[90%] lg:w-4/5 2xl:w-1/3
                                        h-[80%] sm:h-[90%] lg:h-3/5
                                    ">
                                    <div className="h-full w-2/3 2xl:hidden" />
                                    <div className=" 
                                            w-[110%] md:w-full pl-[5%] md:-translate-x-[8vw] lg:translate-x-0
                                            flex justify-between">
                                        {/* CV */}
                                        <div className=" 
                                                relative
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group circle-h
                                                 h-[45px]">
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
                                            <p className="absolute gradient-text font-mainfont hidden group-hover:block">resume</p>
                                        </div>

                                        {/* Seek */}
                                        <div className=" 
                                                relative
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group circle-h
                                                 h-[45px]">
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
                                            <p className="absolute gradient-text hidden group-hover:block">Seek</p>
                                        </div>
                                        {/* GitHub */}
                                        <div className="relative
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group circle-h
                                                 h-[45px]">
                                            <p className="absolute gradient-text font-mainfont hidden group-hover:block -translate-y-[100%]">Github</p>
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
                                        {/* LinkedInIn */}
                                        <div className=" 
                                                relative
                                                z-[200] lg:z-10 hover:scale-110  active:scale-90
                                                 -translate-y-[250%] group circle-h
                                                 h-[45px]">
                                            <ExternalCircularButton link={"https://www.linkedin.com/in/june-trinh-792017358/"} >
                                                <Image
                                                    src="/icons/linkedin.png"
                                                    alt="June's LinkedInLinkedIn" fill
                                                    className="scale-75 object-contain"
                                                    priority
                                                    quality={20}
                                                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
                                                />
                                            </ExternalCircularButton>
                                            <p className="absolute gradient-text hidden group-hover:block">LinkedIn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <motion.div id="intro" className={`
                        
                        flex flex-col relative  z-10 2xl:mt-4 border-black
                        w-full lg:w-5/12 xl:w-4/12 h-[120%] 2xl:border-2 2xl:translate-y-[10%]
                        rounded-bl-md xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                        lg:bg-gradient-to-b from-primary to-background 2xl:bg-transparent
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
                            text-white 
                            z-40
                        "
                    >
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }} className="absolute-0 gradient-bg  opacity-20 " />

                        <div className={`
                                p-6  lg:py-[12vh] lg:p-6 leading-5 2xl:mt-4
                                
                                 rounded-t-2xl rounded-br-lg
                                lg:translate-y-[85%] lg:bg-gradient-to-b from-[#ff8c00]/40 to-[#8a2be2]/10
                                h-auto rounded-b-3xl
                            `}
                        >

                            Hi, I&#39;m
                            <span className="underline mx-0.5"> June</span>, a passionate
                            <span className="underline mx-0.5"> Full Stack Developer</span>, who build
                            <span className="underline mx-0.5">DotNet & NextJs application</span> that is
                            <span className="underline mx-0.5">designed with scalable architectures</span>, with a focus on
                            <span className="underline mx-0.5">performance and seamless user experiences.</span>
                            <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}> <span className="font-extrabold underline text-white mx-1">Let chat !!!</span></a>

                        </div>



                    </motion.div>
                    {/* blur screen */}
                    <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - June - Full Stack Developer")}&body=${"Hello June, ...."}`}><div className="
                            relative-screen lg:absolute-0 group z-[100]
                             lg:border-l-[10vw] origin-bottom-right
                             border-violet-950/65
                            hover:cursor-pointer 
                            shadow-inner shadow-black
                            transition-all xl:rounded-br-[3.5rem] 2xl:rounded-b-[0rem]
                            " >
                        {/* <span className="absolute left-0 top-0 h-full w-full bg-white blur-lg opacity-20"></span> */}

                        <div className="absolute-0 gradient-bg opacity-30 md:opacity-20 2xl:opacity-25 hover:bg-transparent"></div>

                        <div className="lg:absolute-0 h-[250px] w-full lg:h-full backdrop-blur-sm opacity-100 
                                transition-all group-hover:duration-300 ease-in-out
                        ">

                            <div className="
                                absolute-0 w-full h-[9vh] translate-x-[-21%] sm:translate-x-[-25%] md:translate-x-[-27%] rounded-2xl overflow-clip 
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
                                    lg:hidden z-10 relative-screen
                                    translate-y-[5%]
                                    rounded-3xl
                                    overflow-clip lg:border-x-2 lg:border-b-2 ">

                                <Image
                                    src="/ava3.png"
                                    alt="Avatar of the Developer"
                                    className="object-contain " fill
                                    priority
                                    quality={40}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                />

                            </div>
                            <div className="
                                    hidden lg:block  z-10 relative-screen
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
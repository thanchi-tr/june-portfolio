'use client';

import ToggleButton from "@/components/client/Animation/ToggleButton";
import Image from "next/image";
import ExternalCircularButton from "@/components/client/Functional/ExternalCircularButton";
import { useThemeContext } from "@/hooks/context/useThemeContext";
import Discription from "@/components/client/Description";
import { ReactNode } from "react";
import Avata from "@/components/client/Animation/Avata";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import FizzBuzzProject from "@/components/pages/FizzBuzzProject";
import MyToDoProject from "@/components/pages/MyToDoProject";
import LittleBanhMiProject from "@/components/pages/LittleBanhMiProject";
export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];

let Introduction = () => {
    let { isDark, toggleTheme } = useThemeContext();
    const navs: NavButtonT = [
        {
            tag: "About", className_: `bg-background/0`
        },
        { tag: "Exp", className_: `bg-shadow/40` },
        { tag: "Edu", className_: `bg-shadow/40` },
        { tag: "Project", className_: `bg-pink-300/50` },
        { tag: "Contact", className_: `bg-background` },
    ]
    return (
        <div className="h-auto w-full box-border">
            {/* nav bar */}
            {/* <div className={`
                    absolute flex flex-col
                    top-0  justify-end
                    w-full h-[10vh] border-2
                    text-black 
                `}>
                <div className={`
                        flex flex-row 
                        h-[10vh] -z-50
                        border-2 border-red-500
                    `}>

                </div>
            </div> */}
            <div
                className={`
                relative
                transition-all duration-150
                h-screen max-full 
                bg-background`}

            >

                {/* Introduction page */}
                <div className="
                    relative flex flex-row
                    h-full w-full 
                    bg-background 
                    ">
                    <div className={`
                        flex flex-col 
                        w-7/12 h-full`}>
                        <div className="
                            relative flex
                    ">
                            <div className="
                                scale-[40%] 
                                self-start -translate-x-[25%] -translate-y-[20%]">

                                <ToggleButton
                                    onClick={toggleTheme}
                                    isOn={isDark}
                                />
                            </div>

                        </div>

                        <div className="
                                flex flex-wrap 
                                items-center
                                h-4/5 w-full">
                            <div className="
                                    flex flex-row 
                                    flex-wrap justify-center
                                    w-full h-3/5
                                    
                            ">
                                {/* avatar + link */}
                                <div className="
                                    relative flex
                                    w-3/5 h-full 
                                    justify-center items-center text-3xl //@delete_line">
                                    <Avata />

                                    {/* Link holder */}
                                    <div className="
                                        absolute flex flex-row
                                        top-0 w-full h-full 
                                        pt-2
                                    ">
                                        <div className="w-1/2 flex flex-row justify-evenly
                                                text-lg uppercase text-center
                                    ">
                                            {/* Linked In */}
                                            <div className="aspect-square h-[20%] w-auto rounded-full  bg-white">
                                                <ExternalCircularButton link={""} >
                                                    <Image src="/icons/linkedin.png" alt="github" fill className="scale-75 object-fill" />
                                                </ExternalCircularButton>
                                            </div>
                                            {/* GitHub */}
                                            <div className="aspect-square h-[20%] w-auto rounded-full">
                                                <ExternalCircularButton link={""} >
                                                    <Image src="/icons/github.jpg" alt="github" fill className="object-fill" />
                                                </ExternalCircularButton>
                                            </div>
                                        </div>
                                        <div className="w-1/2 flex flex-row justify-end
                                                text-lg uppercase text-center pr-2
                                    ">
                                            {/* Portfolio website */}
                                            <div className=" aspect-square h-[20%] w-auto rounded-full">
                                                <ExternalCircularButton link={"https://www.junetr.dev"} >
                                                    <Image src="/icons/web.webp" alt="github" fill className="scale-125 object-fill translate-x-[2px]" />
                                                </ExternalCircularButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col w-5/12 rounded-bl-[2.5rem] bg-primary`} >
                        <div className="w-full h-1/3"></div>
                        {/* description */}
                        <div className="w-full h-2/3">
                            <div className={`hidden
                            h-[15vh] w-full
                            lg:flex 
                            lg:scale-75 2xl:top-[15vw] 
                            left-[0vw]   items-center justify-center`}>

                                <Discription />
                            </div>
                            <div className={`p-10 text-sm font-semibold tracking-wide
                            
                            `}>
                                As
                                {<span className="font-extrabold text-white"> FULL-STACK DEVELOPER </span>}
                                with 3+ years of experience specializing with Dotnet Application
                                and NEXTJs FrameWork. I am a
                                {<span className="font-extrabold text-white">DEDICATE</span>},
                                {<span className="font-extrabold text-white"> TIMELY</span>},
                                INNOVATIVE,
                                {<span className="font-extrabold text-white">SOLUTION-CENTRIC</span>}
                                Developer,
                                {<span className="font-extrabold text-white"> WHO </span>}
                                ready to tackle any problem head first within the project's life cycle.

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* testing */}
            {/*200vh for experience */}
            <div className="h-[200vh] max-w-full bg-background overflow-x-hidden">

                <div className={`
                        flex items-end
                        
                        h-[40vh] w-full text-center tracking-widest`}>
                    <span
                        className="
                        text-7xl tracking-wider font-bold 
                        text-white w-full scale-x-125 scale-y-110
                        translate-y-1/2 uppercase
                       "
                    >Experience</span>

                </div>
                <div className="
                        flex flex-row
                        h-[160vh] w-full 
                        g-background">
                    <div className="
                            h-full w-1/3
                            ml-3
                           ">
                        <div className="flex flex-col justify-evenly w-full h-full bg-secondary">

                            <div className="flex flex-col h-2/6 w-full ">
                                <div className="
                                ml-[20%]
                                w-3/5 text-3xl font-bold text-center 
                                text-white
                                ">  Full-Stack Engineer</div>
                                <span className="border-t-8 border-black/20 w-4/5" />
                            </div>
                            <div className="h-[6%] w-full">
                                <div className="
                                        flex flex-row justify-evenly
                                        h-full w-[85%] -translate-y-[28vh] ml-[8%]">
                                    <div className="h-full rounded-full aspect-square bg-black"></div>
                                    <div className="h-full rounded-full aspect-square bg-black"></div>
                                    <div className="h-full rounded-full aspect-square bg-black"></div>
                                    <div className="h-full rounded-full aspect-square bg-black"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="
                            h-full w-2/3
                            ml-3
                           ">
                        <div className="flex flex-col justify-evenly w-full h-full">

                            <div className="flex flex-col justify-between h-2/6 w-full -translate-x-[5%]">
                                <div className="relative flex flex-row h-1/3 w-full ">
                                    <div className="h-5/6 aspect-square bg-white rounded-full -translate-y-[15%] translate-x-[20%] z-20">
                                        <ExternalCircularButton link={"https://www.junetr.dev"} >
                                            <Image src="/icons/jungTalent.jpg" alt="Jung Talents Logo" fill className=" object-fill translate-x-[2px]" />
                                        </ExternalCircularButton></div>
                                    <div className="w-8/12 h-3/5 bg-primary text-center z-10">
                                        <div className="h-full w-full -translate-y-2/3">
                                            <div className="h-3/5 text-gray-400">Jan 2023 - Current</div>
                                            <div className="relative flex items-center justify-center w-full h-[200%] bg-gold text-white">
                                                <span className="text-6xl font-semibold">Jung Talents</span>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="aspect-square h-3/5 bg-primary rounded-full -translate-x-[50%]"></div>
                                </div>
                                <ul className="pl-[20%] pr-[10%] translate-y-[55%] list-disc text-lg text-white/80">
                                    <li>Modernise Landing page, help increase convertion rate by 22%</li>
                                    <li>Build and deploy Dotnet application Fast under TDD.</li>
                                    <li>Optimised Database, lead to an average increase speed by 32%</li>
                                    <li>Maintain a run application.</li>
                                </ul>
                            </div>
                            <div className="h-[6%] w-full">


                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 200vh for Skill */}
            <div className="
                    flex flex-row
                    h-[200vh] w-full 
                    bg-background
            ">

                <div className="
                        h-full w-1/3
                ">
                    <div className="h-[10%] ">
                    </div>
                    <div className="h-[15%]  text-center uppercase font-bold text-4xl text-primary"> Framework</div>
                    <div className="w-[70%] h-auto
                            flex flex-col
                            gap-y-6
                             ml-[15%]
                    "
                    >
                        <div className="
                                flex flex-row justify-between
                                w-full h-[10vh] 
                                mt-[25%]
                        ">

                            <div className="w-1/8 aspect-square  rounded-full bg-secondary" ></div>
                            <div className="
                                    flex flex-col justify-evenly
                                    w-5/8 h-full
                                    uppercase text-white text-xl text-center font-bold
                            ">
                                .net core
                            </div>
                        </div>
                        <div className="flex flex-row justify-between
                                w-full h-[10vh] 
                        ">
                            <div className="w-1/8 aspect-square  rounded-full bg-secondary"></div>
                            <div className="
                                    flex flex-col justify-evenly
                                    w-5/8 h-full
                                    uppercase text-white text-xl text-center font-bold
                            ">
                                next.js
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly
                                w-full h-[10vh] 
                                uppercase text-white text-2xl text-center font-bold
                        ">
                            Express.js
                        </div>
                    </div>
                </div>
                <div className="
                        relative
                        h-full w-2/3
                        ml-3 bg-primary
                ">
                    <div className="h-[10%] ">
                        <div className="text-white uppercase text-7xl font-bold -translate-y-[50%] -translate-x-[8%] tracking-[0.8rem]"
                        >Skill</div>
                    </div>
                    <div className="h-[15%]  text-center uppercase font-bold text-4xl text-secondary"> tech-stack</div>

                    {/* teck stack icon list */}
                    <div className="
                            flex flex-row 
                            flex-wrap flex-shrink-0 flex-grow-0 
                            gap-[8%] gap-y-5
                            justify-evenly
                            h-auto w-4/5 mx-[15%] 
                            pt-[5%]
                        ">
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>
                        <div className="w-[15%] aspect-square rounded-full bg-white border-2"></div>

                    </div>
                </div>
            </div>
            {/* Project */}
            <div className="flex flex-col h-[200vh] max-w-full bg-background">
                <div className="flex flex-row h-screen w-full">

                    <div className="h-screen w-1/3 bg-secondary ml-2"></div>
                    <div className="h-screen w-2/3 ">
                        <div className="
                                -translate-x-1/4 -translate-y-1/2 
                                uppercase
                                text-white text-7xl font-bold
                                tracking-widest 
                        ">
                            Project

                        </div>
                    </div>
                </div>
                <div className={`
                        h-[150vh] 
                        ml-[6%] 
                        w-[84%] xl:w-[80%] 
                        rounded-lg xl:rounded-xs 
                        -translate-y-[54%]
                `}>
                    <CollapsibleGallery

                        cards={
                            [
                                <div className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                    <FizzBuzzProject />
                                </div>,
                                <div className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                    <MyToDoProject />
                                </div>,
                                <div className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                    <LittleBanhMiProject />
                                </div>

                            ]} />

                </div>
            </div>
            {/* Education */}
            <div className="flex flex-col items-center h-[80vh] max-w-full bg-background ">
                <div className="
                        w-full h-[30%]  text-center
                        uppercase text-6xl text-white font-bold
                        tracking-[0.2em]
                ">education</div>
                <div className="w-full h-[6%]  text-center text-bold text-white/80 translate-y-1/4">2018-2023</div>
                <div className="w-full h-[20%]  text-center text-4xl text-primary font-semibold">The University of Melbourne</div>
                <div className="
                        flex flex-row justify-evenly
                        w-full 
                        -translate-y-[35%]
                ">
                    <div className="
                            h-[20vh] aspect-square 
                            rounded-full 
                            bg-blue-950 border-white
                    "></div>
                </div>
                <div className=" flex flex-row justify-evenly h-[20%] w-full self-end">

                    <div className="
                             flex flex-row
                            h-full w-2/5">
                        <div className="
                                flex flex-col justify-end 
                                h-full w-[68%]
                                text-4xl tracking-widest
                        "> June Trinh</div>
                        <div className="flex flex-col justify-end ml-4"

                        > @2025</div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col h-[20vh] max-w-full bg-primary  font-semibold tracking-wider">

                <div className="text-center text-xs my-3"> all right preserved</div>

                <div className="flex flex-row justify-evenly gap-5 w-full ">
                    <div className="flex  w-[35%]">www.junetr.dev</div>

                    <div className="flex flex-col w-[35%]">
                        <div className="flex flex-row justify-between">
                            <div>phone:</div>
                            <div>(+61) 432 002 486</div>
                        </div>
                        <div className="flex flex-row  justify-between">
                            <div>Email:</div>
                            <div>Thanchitr@outlook.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Introduction;
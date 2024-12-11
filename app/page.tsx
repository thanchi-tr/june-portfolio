'use client';

import Discription from "@/components/client/Description";
import useCustomScroll from "@/hooks/useCustomScroll";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];

const Home = () => {

  const navs: NavButtonT = [
    {
      tag: "About", className_: `bg-background/0`
    },
    { tag: "Exp", className_: `bg-shadow/40` },
    { tag: "Project", className_: `bg-pink-300/50` },
    { tag: "Edu", className_: `bg-shadow/40` },
    { tag: "Contact", className_: `bg-background` },
  ]
  const { scrollPercentage, scrollToPercentage, scrolToSection, getSectionDefition } = useCustomScroll(navs);
  const variants = {
    offView: { translateY: [`90vh`, `90vh`, `200vh`, `200vh`], translateX: [0, 0, `-200vw`] },
    inView: {
      translateY: [`-200vh`, `-200vh`, `90vh`, `90vh`],
      translateX: [`-200vw`, 0, 0, 0],
      transition: {
        duration: 0.75,
        ease: "easeIn"
      }
    }
  }


  // useEffect(() => { },)
  useEffect(() => console.log(scrollPercentage), [scrollPercentage])
  return (

    <div className={`relative w-[screen] h-[1200vh] flex flex-col overflow-clip mt-[5vh]
      
    `}
    >
      <div className={`sticky flex flex-row top-0 h-[2vh] w-[100%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] z-50 gap-[5%] self-center`}>

        <div className={`group
            sticky  transform origin-top-left rotate-90 md:rotate-0
            translate-x-10 md:overflow-clip
            group flex bg-highlight
            hover:cursor-pointer z-[100] rounded-full px-9
            flex-shrink-0 flex-grow justify-between items-center
            left-[15%] md:translate-x-0
            w-[80vh] md:w-[1vw]
            h-[7vw] md:h-[7vw] lg:h-[5vw] xl:h-[4vw] 2xl:h-[70px]
            m-[5%] shadow-xl shadow-foreground
             text-shadow/35 font-mainfont text-sm`}>
          {
            navs.map(
              (nav, index) => <>
                <div
                  key={`navlink-scroll-${index}`}
                  className={` hover:text-background/90  text-justify hover:underline transform origin-top-left
                   [&:not(:hover)]:group-hover:text-background/15`}
                  onClick={() => scrolToSection(index)}
                >

                  {nav.tag}
                </div>

              </>
            )
          }
          <div className={`text-shadow/70
                   absolute w-[10vw] aspect-square  -top-[25vh] -left-[2vw] text-2xl -rotate-90
                  `}><p className={`uppercase text-yellow-600 -translate-x-[4vw]`}>June</p> portfolio</div>
        </div>
      </div>
      <div className={`relative -top-[17vh] h-screen w-screen flex items-center justify-center
      
    `}>
        <div className="relative w-screen 2xl:w-[3200vw] 2xl:translate-x-[0vw] h-[50vh]">
          <Image
            className={`object-cover`}
            src={"/purpleForest.jpg"}
            alt={"Source:https://www.freepik.com/free-vector/magic-forest-landscape-with-trees-bushes-night-vector-cartoon-illustration-fantastic-scene-woods-with-mystic-purple-light-fantasy-garden-with-plants-stones-path-glade_25978221.htm#fromView=keyword&page=1&position=0&uuid=ae2ccbc4-05a3-456b-8bc0-18937830b786"}
            fill
          />
        </div>

        <div className={`relative flex flex-col h-[100vw] w-[90%] `}>
          <div className={`w-full h-[39.5vw] sm:h-[47.5vw] md:h-[37.5vw]`}></div>
          <div className={`hidden md:block text-shadow/70 lg:hidden
                    w-[10vw] aspect-square   text-3xl
                  `}>
            <p className="scale-y-90">portfolio</p>
            <p className={`uppercase text-4xl text-yellow-600 font-extrabold -translate-x-[3.9vw] w-auto`}>June</p></div>
          <div className=" 
              h-[79%] w-[120%] rounded-tl-2xl border-l-white/75 border-l-[12px] 
              xl:bg-background/0 xl:border-0 xl:shadow-none 
              bg-background shadow-md" >


            {/* <div className={`
              border-b-[8px] border-foregound/90 2xl:border-8
              rounded-2xl md:rounded-full
              translate-x-[50%] sm:opacity-0 lg:opacity-100 md:-translate-x-[120%]   lg:-translate-x-[180%]  xl:translate-x-[40%]  2xl:-translate-x-[70%]
              -translate-y-[80%]  md:translate-y-[20%] xl:-translate-y-[5%] 
              h-[45vw] 2xl:scale-[0.4] xl:scale-75  
              w-[25vw] backdrop-blur-sm
              overflow-clip xl:ov   aspect-auto z-100`}>
               <Image src={"/avata_3_nobg.png"} alt={""} fill className={`object-cover grayscale-[20%]`}></Image> 
            </div> */}


          </div>

        </div>

        <div className={`hidden 
          lg:flex 
          lg:scale-75
          absolute top-[35.5vw] 2xl:top-[5vw] left-[0vw] h-full w-full  items-center justify-center`}>

          <Discription >


          </Discription></div>





      </div>


    </div >
  )
}

export default Home;
'use client';

import Discription from "@/components/client/Description";
import useCustomScroll from "@/hooks/useCustomScroll";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import CardTranslationAnimation from "@/components/client/Animation/CardTranslationAnimation";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import FizzBuzzProject from "@/components/pages/FizzBuzzProject";
import MyToDoProject from "@/components/pages/MyToDoProject";
import LittleBanhMiProject from "@/components/pages/LittleBanhMiProject";
import ExperiencePage from "@/components/pages/ExperiencePage";

export type NavButtonT = { tag: string, data?: ReactNode, className_: string }[];

const Home = () => {

  const navs: NavButtonT = [
    {
      tag: "About", className_: `bg-background/0`
    },
    { tag: "Exp", className_: `bg-shadow/40` },
    { tag: "Edu", className_: `bg-shadow/40` },
    { tag: "Project", className_: `bg-pink-300/50` },
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

    <div className={`relative h-auto w-[screen] auto flex flex-col overflow-clip mt-[5vh]
      
    `}
    >
      <div className={`
        sticky 
        flex flex-row top-0 h-[2vh] w-[100%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] z-[60] hover:z-[90] md:z-[100] gap-[5%] self-center`}>
        {/* Navigation bar */}
        <div

          className={`sticky
            group opacity-25 hover:opacity-100 md:opacity-100
            transform origin-top-left rotate-90 md:rotate-0
            translate-x-8 md:overflow-clip
            group flex bg-highlight
            hover:cursor-pointer 
            z-[60] hover:z-[90] md:z-[100]
            rounded-full px-9
            flex-shrink-0 flex-grow justify-between items-center
            left-[15%] md:translate-x-0
            w-[80vh] md:w-[1vw]
            h-[7vw] md:h-[7vw] lg:h-[5vw] xl:h-[4vw] 2xl:h-[70px]
            m-[5%] shadow-xl shadow-foreground
             text-shadow/35 font-mainfont text-sm`}>
          {
            navs.map(
              (nav, index) => (
                <div
                  key={`navlink-scroll-${index}`}
                  className={`
                    flex flex-row
                    hover:text-background/90  text-justify lg:hover:underline transform origin-top-left
                    opacity-0 group-hover:opacity-100 md:opacity-100
                   [&:not(:hover)]:group-hover:text-background/15`}
                  onClick={() => scrolToSection(index)}
                >

                  {nav.tag.split(``)
                    .map(
                      (char, cIndex) => (
                        <p
                          key={`nav-${index}-${cIndex} `}>{char}</p>
                      )
                    )}
                </div>)


            )
          }
          {/* <div className={`text-shadow/70
                   absolute w-[10vw] aspect-square  -top-[25vh] -left-[2vw] text-2xl -rotate-90
                  `}><p className={`uppercase text-yellow-600 -translate-x-[4vw]`}>June</p> portfolio</div> */}
        </div>
      </div>

      <div className={`relative  h-auto w-screen flex items-center justify-center
      
      `}>
        <div className="relative w-screen 2xl:w-[3200vw] 2xl:translate-x-[0vw] h-[50vh]">
          <Image
            className={`object-cover`}
            src={"/purpleForest.jpg"}
            alt={"Source:https://www.freepik.com/free-vector/magic-forest-landscape-with-trees-bushes-night-vector-cartoon-illustration-fantastic-scene-woods-with-mystic-purple-light-fantasy-garden-with-plants-stones-path-glade_25978221.htm#fromView=keyword&page=1&position=0&uuid=ae2ccbc4-05a3-456b-8bc0-18937830b786"}
            fill
          />
        </div>

        <div className={`relative flex flex-col h-[80vw] w-[90%] `}>
          <div className={`w-full h-[39.5vw] sm:h-[47.5vw] md:h-[37.5vw]`}></div>

          <div className={` text-shadow/70 lg:hidden font-mainfont
                    w-[10vw] aspect-square   text-2xl pb-10 md:pb-1 
                  `}>

            <p className={`uppercase text-3xl md:text-5xl md:leading-[0.6] text-yellow-600  font-extrabold -translate-x-[3.9vw] w-auto`}>June</p>
            <p className="scale-y-90 md:text-3xl  font-thin">portfolio</p>
          </div>

          <div className=" 
              h-[79%] w-[120%] rounded-tl-2xl border-l-white/75 border-l-[12px]  min-h-[185px]
              xl:bg-background/0 xl:border-0 xl:shadow-none 
              bg-background shadow-md" >
          </div>

        </div>

        <div className={`hidden
          h-[20vh] w-full
          lg:flex  2xl:scale-[110%]
          lg:scale-75
          absolute  2xl:top-[15vw] left-[0vw]   items-center justify-center`}>

          <Discription />
        </div>




      </div>

      <div className={`h-screen w-full `}></div>

      <div className={`
        h-auto w-[95%] xl:w-[94%]
        pl-[5%]  mb-[10%] xl:pl-[10%]
        flex flex-col sm:flex-row flex-wrap justify-center 
        items-center gap-[5vw]`}>
        {/* Experience z*/}
        <div className={`
        self-center md:self-start
        font-mainfont  uppercase tracking-widest md:tracking-[0.4em] xl:tracking-[0.65em] 2xl:tracking-[0.52em] scale-y-110
          text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl
          `}> Experience</div>
        {/* actual experience */}
        {/* <CollapsibleGallery
          cards={
            [
              <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" />,
              <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" />,
              <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" />

            ]} /> */}
        <ExperiencePage />
      </div>

      <div className={`relative 
        flex flex-col xl:flex-row 
        items-center justify-center xl:justify-evenly 
        w-full h-auto 
        bg-transparent  mt-[7vh]`}>

        {/* Project */}
        <div className={` relative
          flex flex-row xl:flex-col xl:justify-evenly  xl:h-full
          self-center md:self-start md:pr-0 md:pl-[5%] pr-[5%]
          font-mainfont  uppercase tracking-widest lg:tracking-[1.1rem] sm:tracking-wide
          mb-4
          z-20`}> {`project`.split("").map(
          (char, index) => <p key={`project-${index}`} className={`text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl scale-y-110 xl:pb-[0.3em]`}> {char}</p>
        )}</div>

        <div className={`h-auto  w-[90%]  xl:w-[72%] rounded-lg xl:rounded-xs overflow-clip `}>
          <CollapsibleGallery

            cards={
              [
                <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" >
                  <FizzBuzzProject />
                </div>,
                <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" >
                  <MyToDoProject />
                </div>
                ,
                <div className="h-[80vh] md:h-[75vh] lg:h-[72vh]" >
                  <LittleBanhMiProject />
                </div>

              ]} />

        </div>

      </div>
      <div className={`h-[50vw] w-full bg-black/80 mt-[10%]`}></div>
    </div >
  )
}

export default Home;
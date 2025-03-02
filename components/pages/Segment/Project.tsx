"use client";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import FizzBuzzProject from "../FizzBuzzProject";
import MyToDoProject from "../MyToDoProject";
import LittleBanhMiProject from "../LittleBanhMiProject";


const Project = () => {

    return (
        <div className="relative h-auto w-full  flex flex-col max-w-full bg-secondary md:bg-background pb-[10%]"

        >
            <div className="md:hidden absolute h-[50vh] w-full  bg-secondary md:bg-background -translate-y-[100%] z-0">

            </div>
            <div className="
                    flex flex-row 
                    h-[30vh] border-t-8 md:border-t-0 border-white/50 2xl:w-[85%] 2xl:ml-[5%] md:h-screen w-full z-[30]">

                <div className="h-screen md:w-[27%]
                            md:ml-[8%]  bg-gradient-to-b from-secondary to-background  2xl:bg-transparent ml-2 md:shadow-3xl shadow-black"></div>
                <div className="h-screen w-2/3 ">
                    <div className="
                            md:-translate-x-1/4 -translate-y-1/2 
                            uppercase font-mainfont
                             text-white 
                            text-5xl md:text-7xl font-bold
                            tracking-widest text-shadow-lg shadow-black/70
                    ">
                        Project

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-20 md:hidden w-[90%] ml-[5%]">
                <div className="
                        overflow-clip relative border-8 border-primary
                        w-full h-auto lg:h-[128vh] bg-gray-400
                        rounded-3xl
                " >
                    <FizzBuzzProject />
                </div>
                <div className="
                        overflow-clip relative border-8 border-primary
                        w-full h-auto lg:h-[128vh] bg-gray-400
                        rounded-3xl
                " >
                    <MyToDoProject />
                </div>
                <div className="
                        overflow-clip relative border-8 border-primary
                        w-full h-auto lg:h-[128vh] bg-gray-400
                        rounded-3xl
                " >
                    <LittleBanhMiProject />
                </div>
            </div>
            <div className={`
                    hidden md:block
                    h-[150vh] 2xl:h-[80vh]
                    ml-[10%] z-50
                    w-[84%] xl:w-[80%] 
                    rounded-lg xl:rounded-xs 
                    -translate-y-[54%] 2xl:-translate-y-[85%]
                            `}>
                <CollapsibleGallery

                    cards={
                        [
                            <div key="card40" className="h-[140vh] md:h-[130vh] lg:h-[128vh] z-50" >
                                <FizzBuzzProject />
                            </div>,
                            <div key="card41" className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                <MyToDoProject />
                            </div>,
                            <div key="card42" className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                <LittleBanhMiProject />
                            </div>

                        ]} />

            </div>
        </div>

    )
}

export default Project;
"use client";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import CompareNSave from "../project/CarinaEye";
import CarinaEyeCare from "../project/ComparenSave";
import PTE from "../project/PTE";


const Commercialproject = () => {

    return (
        <div className="relative h-auto w-full  flex flex-col max-w-full bg-gradient-to-b from-secondary to-black md:bg-transparent pb-[10%]"

        >
            <div className=" absolute h-[50vh] w-full  bg-gradient-to-t from-secondary to-black md:bg-background -translate-y-[100%] z-0">

            </div>
            <div className="
                    flex flex-row 
                    h-[30vh] border-t-8 md:border-t-0 border-white/50 2xl:w-[85%] 2xl:ml-[5%] md:h-screen w-full z-[30]">

                <div className="h-screen md:w-[27%]
                            md:ml-[8%]  bg-gradient-to-b from-secondary to-background  2xl:bg-transparent ml-2 md:shadow-3xl shadow-black">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-20 2xl:opacity-25 blur-3xl"></div>

                </div>
                <div className="h-screen w-2/3 ">
                    <div className="
                            md:-translate-x-1/4 -translate-y-1/2 
                            uppercase font-mainfont
                             text-white 
                            text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-bold
                            tracking-widest text-shadow-lg shadow-black/70
                    ">
                        Commercial Projects

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-20 md:hidden w-[90%] ml-[5%]">

                <div className="
                        overflow-clip relative border-1 border-primary
                        w-full h-auto lg:h-[128vh] bg-background
                        rounded-3xl
                " >
                    <PTE />
                </div>
                <div className="
                        overflow-clip relative border-1  border-primary
                        w-full h-auto lg:h-[128vh] bg-background
                        rounded-3xl
                " >
                    <CompareNSave />
                </div>
                <div className="
                        overflow-clip relative border-1 border-b-2 shadow-2xl shadow-white/10 border-primary
                        w-full h-auto lg:h-[128vh] bg-background
                        rounded-3xl
                " >
                    <CarinaEyeCare />
                </div>
            </div>
            <div className={`
                    hidden md:block
                    h-[150vh] lg:h-[158vh] 2xl:h-[134vh]
                    ml-[10%] z-50
                    w-[84%] xl:w-[80%] 
                    rounded-lg xl:rounded-xs 
                    -translate-y-[54%] 2xl:-translate-y-[35%]
                            `}>
                <CollapsibleGallery

                    cards={
                        [
                            <div key="card40" className="h-[140vh] md:h-[130vh] lg:h-[128vh] z-50" >
                                <PTE />
                            </div>,
                            <div key="card42" className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                <CompareNSave />
                            </div>,
                            <div key="card42" className="h-[140vh] md:h-[130vh] lg:h-[128vh]" >
                                <CarinaEyeCare />
                            </div>
                        ]} />

            </div>
        </div>

    )
}

export default Commercialproject;
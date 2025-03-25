"use client";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import CompareNSave from "../project/CarinaEye";
import CarinaEyeCare from "../project/ComparenSave";
import PTE from "../project/PTE";


const Commercialproject = () => {

    return (
        <div className="relative-screen  flex flex-col max-w-full bg-gradient-to-b from-secondary to-black md:bg-transparent pb-[10%]"

        >
            <div className=" absolute-0 h-auto w-full bg-gradient-to-t from-secondary to-black md:bg-background -translate-y-[100%] z-0">

            </div>
            <div className="
                    flex flex-row h-auto border-t-8 md:border-t-0 border-white/50 2xl:w-[85%] 2xl:ml-[5%] w-full z-[30]">

                <div className="h-auto md:w-[27%]
                            md:ml-[8%]  bg-gradient-to-b from-secondary to-background  2xl:bg-transparent ml-2 md:shadow-3xl shadow-black">
                    <div className="absolute-0 gradient-bg opacity-30 md:opacity-20 2xl:opacity-25"></div>

                </div>
                <h1 className="
                            md:-translate-x-1/4 -translate-y-1/2 
                             text-white tracking-widest text-shadow-lg shadow-black/70
                    ">
                    Commercial Projects

                </h1>
            </div>
            <div className="flex flex-col gap-20 md:hidden w-[90%] ml-[5%] mt-[10vh]">

                <div className="
                        overflow-clip relative border-1 border-primary
                        w-full h-auto  bg-background
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
                    hidden md:flex
                    h-auto 
                    ml-[10%] z-50
                    w-[84%] xl:w-[80%] 2xl:w-[70%] 
                    rounded-lg xl:rounded-xs  
                            `}>
                <CollapsibleGallery

                    cards={
                        [
                            <div key="card40" className="h-[125vh] lg:h-[130vh] xl:h-[140vh] 2xl:h-[130vh] " >
                                <PTE />
                            </div>,
                            <div key="card42" className="h-[125vh] lg:h-[130vh] xl:h-[140vh] 2xl:h-[130vh] " >
                                <CompareNSave />
                            </div>,
                            <div key="card42" className="h-[125vh] lg:h-[130vh] xl:h-[140vh] 2xl:h-[130vh] " >
                                <CarinaEyeCare />
                            </div>
                        ]} />

            </div>
        </div>

    )
}

export default Commercialproject;
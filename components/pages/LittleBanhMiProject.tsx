import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const LittleBanhMiProject = () => (<>
    <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-ưhite/95`}>Website for The Little Banh mi Brand</h1>
    <div className={`
                      h-full w-full
                      flex flex-col md:flex-row flex-wrap
                      xl:justify-evenly
                    `}>
        <div className={`
                        flex flex-col md:flex-row items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100] 
                        pointer-events-auto`}>
            <CollapsibleGallery
                cards={[
                    <Image key="card10" src={"/asset/LilBM/home.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card11" src={"/asset/LilBM/home2.png"} alt={"Game Running"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card12" src={"/asset/LilBM/story.png"} alt={"Game Finish Display rank"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card13" src={"/asset/LilBM/menu.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card14" src={"/asset/LilBM/map.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                ]} />
        </div>
        <div className={`
                flex flex-col
                justify-evenly
                h-[550px] md:h-[620px]
                w-full md:w-[42%]
            `}>
            <div className={`mt-[10%] ml-[5%] w-[90%] `}>
                <h4 className={`underline font-mainfont pb-5`}>Description:</h4>
                <p className={`w-[90%] text-xs`}>
                    A website for The little Banh Mi house franchise.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-full md:ml-[30%] xl:ml-0
                    justify-evenly `}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Front</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>NextJS v14+</li>
                        <li>Tailwind css</li>
                        <li>Framer motion</li>
                        <li>Test with JEST</li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Back</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Web API Dotnet</li>
                        <li>Entity Framework core</li>
                        <li>Serilog</li>
                        <li>Test with xUnit</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</>)

export default LittleBanhMiProject;
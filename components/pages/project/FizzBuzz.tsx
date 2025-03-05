"use client"
import Image from "next/image";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery"

let FizzBuzz = () => {
    return (<div className="bg-gradient-to-b from-background to-black/20 text-white/90">
        <div className="flex gap-1 justify-stretch">
            {/* logo */}
            <div></div>
            <div className="font-semibold py-1">Personal Projec
            </div>

        </div>
        <h1 className={`font-mainfont text-2xl xl:text-xl 2xl:text-2xl text-center p-4 text-white/95 gradient-text`}>FizzBuzz RealTime Multi-player Game</h1>
        <div className={`
                      h-full w-full
                      flex lg:flex-row flex-wrap
                      xl:justify-evenly text-white/80
                    `}>
            <div className={`
                        flex flex-col md:flex-row items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100px] 
                        pointer-events-auto`}>

                <CollapsibleGallery
                    cards={[
                        <Image key="card0" src={"/asset/FizzBuzz/waitRoom.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                        <Image key="card1" src={"/asset/FizzBuzz/game.png"} alt={"Game Running"} className="object-contain h-full w-full pointer-events-none" fill />,
                        <Image key="card2" src={"/asset/FizzBuzz/score.png"} alt={"Game Finish Display rank"} className="object-contain h-full w-full pointer-events-none" fill />,
                        <Image key="card3" src={"/asset/FizzBuzz/add.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                    ]} />
            </div>
            <div className={`
                flex flex-col
                justify-evenly
                h-[550px] md:h-[620px]
                w-full md:w-[42%]
            `}>
                <div className={`mt-[10%] ml-[5%] w-[90%] pb-[18.5px] md:pb-[52px]`}>

                    <div className="flex flex-row w-full flex-wrap justify-between text-center text-xs font-extrabold pb-2 z-[100] pointer-events-auto">
                        <h3 className="pr-1 hover:cursor-pointer z-[100]">
                            <a href="https://github.com/thanchi-tr/FooBooRealTime-front-next">🔗Frontend(Next.js)</a>
                        </h3> |
                        <h3 className="pl-1 hover:cursor-pointer z-[100]">
                            <a href="https://github.com/thanchi-tr/FooBooRealTime-back-dotnet">🔗Backend(.NET)</a>
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        {/* Image and detail */}

                        <div className="flex flex-col gap-4 flex-shrink-0 justify-between">
                            <h1 className="text-xl font-semibold font-mainfont uppercase">Frontend:</h1>
                            <div className="flex gap-1 ">
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/nextjs.png" className="object-cover" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/ts.png" className="object-cover" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                                    <Image src="/icons/tailwind.png" className="object-contain" fill alt={""} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 flex-shrink-0 justify-between">
                            <h1 className="text-xl font-semibold font-mainfont uppercase">Backend:</h1>
                            <div className="flex gap-1 ">
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/dotnetCore.png" className="object-cover" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-black">
                                    <Image src="/icons/docker.png" className="object-cover scale-75" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                                    <Image src="/icons/mssql.png" className="object-cover scale-90" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/eks.jpg" className="object-cover" fill alt={""} />
                                </div>
                                <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/redis.png" className="object-cover" fill alt={""} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={`
                    flex md:flex-col xl:flex-row
                    w-[100%] xl:ml-0 p-4
                    justify-evenly`}>
                    <div>
                        <h2 className={`text-sm font-mainfont pt-2`}>✔️ Features & Achievements:</h2>
                        <ul className="flex flex-col list-disc list-inside px-1 gap-2 text-sm">
                            <li>Built a highly optimized SignalR WebSocket communication layer, reducing
                                <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg shadow-pink-300">
                                    network latency by 30%

                                </span>.</li>
                            <li>Optimized server-side game state management, reducing
                                <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg shadow-pink-300">
                                    redundant API calls by 40%.

                                </span>.</li>
                            <li>
                                <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg shadow-pink-300">
                                    Developed a fully responsive UI

                                </span> , ensuring seamless gameplay across all devices.</li>

                        </ul>
                    </div>


                </div>
            </div>


        </div></div>
    )
}

export default FizzBuzz;
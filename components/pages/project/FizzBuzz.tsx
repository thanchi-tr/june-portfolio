"use client"
import Image from "next/image";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery"

const FizzBuzz = () => {
    return (<div className="bg-gradient-to-b from-background to-black/20 text-white/90 h-auto pb-[10vh]">
        <div className="flex gap-1 justify-stretch">
            {/* logo */}
            <div></div>

        </div>
        <h4 className={`text-center p-4 text-white/95 gradient-text md:mb-[15%] select-none`}>FizzBuzz RealTime Multi-player Game</h4>
        <div className={`w-[90%] lg:w-full flex-standard md:flex-row flex-wrap xl:justify-evenly`}>
            <div className={`
                        flex flex-col md:flex-row items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100] 
                        pointer-events-auto`}>

                <CollapsibleGallery
                    cards={[
                        <Image key="card0" src={"/asset/FizzBuzz/waitRoom.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />,
                        <Image key="card1" src={"/asset/FizzBuzz/game.png"} alt={"Game Running"} className="object-contain h-full w-full pointer-events-none" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />,
                        <Image key="card2" src={"/asset/FizzBuzz/score.png"} alt={"Game Finish Display rank"} className="object-contain h-full w-full pointer-events-none" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />,
                        <Image key="card3" src={"/asset/FizzBuzz/add.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill />,
                    ]} />
            </div>
            <div className={`
                flex flex-col
                justify-evenly
                h-auto
                w-full md:w-[42%]
            `}>
                <div className={`mt-[10%] ml-[5%] w-full pb-[18.5px] md:pb-[52px] `}>

                    <div className="flex flex-row flex-wrap w-full  justify-end text-center pb-2 z-[100] pointer-events-auto ">
                        <a href="https://github.com/thanchi-tr/FooBooRealTime-front-next" className="pointer-events-auto"><p className="pr-1 hover:cursor-pointer z-[100]">
                            🔗Frontend(Next.js)
                        </p></a>
                        <a href="https://github.com/thanchi-tr/FooBooRealTime-back-dotnet" className="pointer-events-auto"><p className="pl-1 hover:cursor-pointer z-[100]">
                            🔗Backend(.NET)
                        </p></a>
                    </div>
                    <div className="flex flex-col text-end select-none">
                        {/* Image and detail */}

                        <div className="flex flex-col gap-4 flex-shrink-0 justify-between">
                            <h5 className="uppercase">Frontend:</h5>
                            <div className="flex gap-1 relative flex-wrap">
                                <div className="w-[60px] h-[60px] rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/nextjs.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <div className="w-[60px] h-[60px] rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/ts.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <div className="w-[60px] h-[60px] rounded-full relative overflow-clip flex-shrink-0 bg-white">
                                    <Image src="/icons/tailwind.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 flex-shrink-0 justify-between">
                            <h5 className="uppercase">Backend:</h5>
                            <div className="flex gap-1 flex-wrap">
                                <div className="w-[60px] h-[60px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/dotnetCore.png" className="object-cover" fill alt={""}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="w-[60px] h-[60px] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-black">
                                    <Image src="/icons/docker.png" className="object-cover scale-75" fill alt={""}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="w-[60px] h-[60px] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                                    <Image src="/icons/mssql.png" className="object-cover scale-90" fill alt={""}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="w-[60px] h-[60px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/eks.jpg" className="object-cover" fill alt={""}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="w-[60px] h-[60px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                                    <Image src="/icons/redis.png" className="object-cover" fill alt={""}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={`
                    flex md:flex-col xl:flex-row h-auto
                    w-full xl:ml-0 py-4 text-end select-none
                    justify-evenly`}>
                    <div>
                        <h5 >✔️ Features & Achievements:</h5>
                        <ul className="flex flex-col list-disc list-inside px-1 gap-2 h-auto ">
                            <li>Built a highly optimized SignalR WebSocket communication layer, reducing
                                <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:lg:lg:shadow-pink-300">
                                    network latency and enable real-time communication.

                                </span>.</li>

                            <li>
                                <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:lg:lg:shadow-pink-300">
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
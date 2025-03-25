"use client"
import Image from "next/image";
const PTE = () => {
    return (

        <div className="p-[5vw] bg-gradient-to-b from-background -black/20 text-white shadow-inner shadow-primary border-black gap-4">
            <a className="absolute bottom-0 right-0 p-2 z-50 pointer-events-auto" href="https://www.jungtalents.com/" target="_blank">
                <div className="h-[100px] aspect-square opacity-30 -translate-y-[40%] -translate-x-[40%] hover:opacity-100 z-50" >
                    <Image src={"/icons/external-link.png"} alt={""} fill />
                </div>
            </a>
            {/* Work place and role */}
            <div className="flex gap-1 justify-stretch">
                {/* logo */}
                <div className="h-auto w-auto">
                    <div className="relative w-[3vw] overflow-clip aspect-square rounded-xl  border-1 border-white">
                        <Image src="/icons/jungTalent.jpg" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>
                <h6 className="font-semibold py-1">Jung Talents | Full-Stack Engineer
                </h6>

            </div>

            <div className="flex flex-row h-auto w-auto gap-1 justify-evenly">
                <div className="relative w-[14vw] md:w-[10vw] h-[14vw] md:h-[10vw] overflow-clip  rounded-full">
                    <Image src="/icons/PTE-master.png" className="object-cover scale-125" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                <a href="https://www.masterpte.com.au/" className="pointer-events-auto z-[110]" target="_blank">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold font-mainfont text-center gradient-text flex-col">  <span className="text-lg">AI-Powered Learning System</span><span className="block">PTE Master 🔗</span></h2>
                </a>

            </div>
            <div className="h-[16vh] 2xl:h-[12vh]"></div>


            <div className="flex flex-col">
                {/* Image and detail */}

                <div className="flex gap-4 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h6 className="uppercase">Frontend:</h6>
                    <div className="flex gap-2 ">
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/nextjs.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/ts.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/tailwind.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/framerMotion.png" className="object-cover scale-[80%]" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div></div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h6 className="uppercase">Backend:</h6>
                    <div className="flex gap-1 ">
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/dotnetCore.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-black">
                            <Image src="/icons/docker.png" className="object-cover scale-75" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/postgres.png" className="object-cover scale-90" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="
                                w-[45px] h-[45px] 
                                xl:w-[3.2vw] xl:h-[3.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/eks.jpg" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-evenly px-[10%] xl:px-[18%]">
                    <h1 className="text-xl font-semibold font-mainfont uppercase" >Team Size:</h1>
                    <p className="font-extrabold">5</p>
                </div>
            </div>
            <div className="h-[12vh] "></div>

            <div>


                {/* Solution */}
                <div className={"px-[3%] xl:px-[12%] text-sm"}>
                    <h6 className="pb-4">Achievements & Trade-offs:</h6>
                    <ul className="flex flex-col list-disc list-inside px-4 md:px-8 gap-2">
                        <li>Built a .NET Core Microservices API with Load Balancer,
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                reducing server load by 40%

                            </span>
                            while maintaining modular scalability.</li>
                        <li>Optimized PostgreSQL queries,
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                reducing response times by 35%

                            </span> at the cost of additional initial indexing overhead.</li>
                        <li>Implemented CI/CD Pipelines using GitLab,
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                cutting deployment time by 40%

                            </span>, but requiring an increased DevOps learning curve.</li>
                        <li>Reduced cloud infrastructure
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                costs by 25%

                            </span> by optimizing compute resource allocation in AWS without sacrificing performance.</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default PTE;
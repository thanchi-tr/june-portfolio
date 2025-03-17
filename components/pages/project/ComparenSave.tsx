"use client"
import Image from "next/image";
const ComparenSave = () => {
    return (
        <div className="p-[5vw] bg-gradient-to-b from-background -black/20 text-white shadow-inner shadow-primary border-black  text-sm md:text-lg lg:text-lg gap-4">
            <a className="absolute bottom-0 right-0 p-2 z-50" href="https://www.jungtalents.com/" target="_blank">
                <div className="h-[11vw] aspect-square opacity-30 -translate-y-[40%] -translate-x-[40%] hover:opacity-100 z-50" >
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
                <div className="font-semibold py-1">Jung Talents |

                    <span> Full-Stack Engineer</span>
                </div>

            </div>

            <div className="flex flex-row h-auto w-auto gap-1 justify-evenly">
                <div className="h-auto w-auto">
                    <div className="relative w-[14vw] md:w-[10vw] overflow-clip aspect-square rounded-full">
                        <Image src="/icons/compareNSave.png" className="object-cover scale-125" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>

                <a href="https://comparensave.com.au/" className="pointer-events-auto z-[110]" target="_blank">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold font-mainfont text-center gradient-text flex-col">  <span className="text-lg">Loan Comparison Platform</span><span className="block">Compare n Save 🔗</span></h1>
                </a>

            </div>
            <div className="h-[16vh] 2xl:h-[12vh]"></div>


            <div className="flex flex-col">
                {/* Image and detail */}

                <div className="flex gap-4 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h1 className="text-xl font-semibold font-mainfont uppercase">Frontend:</h1>
                    <div className="flex gap-1 relative ">
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/nextjs.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/ts.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/tailwind.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/storyblock.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/graphQl.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h1 className="text-xl font-semibold font-mainfont uppercase">Backend:</h1>
                    <div className="flex gap-1 ">
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/dotnetCore.png" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-black">
                            <Image src="/icons/docker.png" className="object-cover scale-75" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/postgres.png" className="object-cover scale-90" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/eks.jpg" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[4.2vw] h-[4.2vw] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/redis.png" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-evenly px-[10%] xl:px-[18%]">
                    <h1 className="text-xl font-semibold font-mainfont uppercase" >Team Size:</h1>
                    <p className="text-2xl font-extrabold">3</p>
                </div>
            </div>
            <div className="h-[12vh]"></div>

            <div className="h-auto">


                {/* Solution */}
                <div className={"px-[3%] xl:px-[10%] h-auto text-sm"}>
                    <h1 className="text-xl font-semibold font-mainfont pb-4">Achievements & Trade-offs:</h1>
                    <ul className="flex flex-col list-disc list-inside px-4 md:px-8 gap-2 h-auto">
                        <li> Migrated to GraphQL, reducing
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                no-show rates by 16%

                            </span>
                            through automated appointment reminders, increasing SMS cost overhead.</li>
                        <li>Optimized SQL Server indexing, adopting GraphQL to aid in reduce
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                over-fetching by 60%

                            </span></li>
                        <li>Implemented Redis caching, cutting
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                API response time by 35%

                            </span> , at an increasing memory usage costs.</li>
                        <li>Optimized UI rendering,
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                decreasing FCP time by 43%

                            </span> via frontend refactoring</li>
                        <li>Integrated Storyblok CMS, allowing
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                non-technical staff to update content,

                            </span> via custom API integrations.</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ComparenSave;
"use client"
import Image from "next/image";
const CompareNSave = () => {
    return (
        <div className="p-[5vw] bg-gradient-to-b from-background -black/20 text-white shadow-inner shadow-primary border-black  gap-4">
            <a className="absolute bottom-4 right-10 p-2 z-50 pointer-events-auto " href="https://www.carinaeyecare.com.au/" target="_blank">
                <div className="w-[10vw] max-w-[80px] aspect-square opacity-30  hover:opacity-100 z-50 " >
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
                <h6 className="font-semibold py-1">Jung Talents |  Full-Stack Engineer
                </h6>

            </div>

            <div className="flex flex-row h-auto w-auto gap-1 justify-evenly">
                <div className="relative w-[14vw]  md:w-[10vw] h-[14vw]  md:h-[10vw] overflow-clip aspect-square rounded-full">
                    <Image src="/icons/carinaEye.jpg" className="object-cover scale-125" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                <a href="https://www.carinaeyecare.com.au/" className="pointer-events-auto z-[110]" target="_blank">
                    <h2 className="text-center gradient-text">  <span className="text-lg">Clinic Management & Booking System</span><span className="block">Carina Eye Care</span></h2>
                </a>

            </div>
            <div className="h-[16vh] 2xl:h-[12vh]"></div>


            <div className="flex flex-col h-auto">
                {/* Image and detail */}

                <div className="flex gap-4 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h6 className="uppercase">Frontend:</h6>
                    <div className="flex gap-1 relative ">
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/nextjs.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/ts.png" className="object-cover" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/tailwind.png" className="object-contain" fill alt={""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-between px-[10%] xl:px-[18%] pb-5">
                    <h6 className="uppercase">Backend:</h6>
                    <div className="flex gap-1 flex-wrap">
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/dotnetCore.png" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-black">
                            <Image src="/icons/docker.png" className="object-cover scale-75" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0 bg-white">
                            <Image src="/icons/mssql.png" className="object-cover scale-90" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/eks.jpg" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-[45px] h-[45px] aspect-square rounded-full relative overflow-clip flex-shrink-0">
                            <Image src="/icons/redis.png" className="object-cover" fill alt={""}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 justify-evenly px-[10%] xl:px-[18%]">
                    <h6 className="uppercase" >Team Size:</h6>
                    <p className="text-xl">3</p>
                </div>
            </div>
            <div className="h-[12vh]"></div>

            <div>


                {/* Solution */}
                <div className={"px-[3%] xl:px-[12%] text-sm 2xl:text-lg"}>
                    <h6 className="pb-4">Achievements & Trade-offs:</h6>
                    <ul className="flex flex-col list-disc list-inside px-4 md:px-8 gap-2">
                        <li>Reduced
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                no-show rates by 15%

                            </span>
                            through automated appointment reminders, increasing SMS cost overhead.</li>
                        <li>Optimized SQL Server indexing,
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                reducing query execution time by 30%,

                            </span>.</li>
                        <li>Migrated to Next.js, improving
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                page load speed by 50%,

                            </span> by optimising  server-side rendering (SSR).</li>
                        <li>
                            <span className="px-1 relative scale-105 inline text-primary gradient-text text-shadow-lg lg:shadow-pink-300">
                                Cut content update time by 70%

                            </span> through a user-friendly CMS, increasing staff efficiency.</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default CompareNSave;
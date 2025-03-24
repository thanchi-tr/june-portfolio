'use client';

const Avata = () => {
    return (
        <>

            <div className="relative h-full w-full items-end lg:z-[120] hidden lg:flex">
                {/* <div className="absolute 2xl:hidden md:bg-gray-400/10 h-5/6 md:h-3/5 w-[95%] rounded-full scale-y-105"></div>
            <div className="absolute 2xl:hidden md:bg-secondary h-2/3 md:h-3/5 w-[70%] rounded-full left-[12%]"></div> */}

                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    <div className="
                    absolute z-110 group cursor-pointer will-change-[transform,opacity]
                    bottom-[-8vh] right-[-25vw] translate-x-[-75%] lg:translate-x-0
                    2xl:visible invisible text-4xl 2xl:bottom-[-22%] 2xl:-right-[10%] 2xl:translate-y-[2vh]
                    text-white md:text-white lg:text-white/60 md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    >

                        <div
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-white opacity-60 2xl:opacity-30 blur-3xl flex gap-y-10"></div>

                            <p>Team-player</p>
                            <p className="mt-5">Problem-solver</p>
                            <p className="gradient-text text-3xl opacity-0 group-hover:opacity-100">Click for CV</p>
                        </div>
                    </div>
                </a>
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    <div className="
                    absolute z-[100] group hover:cursor-pointer 2xl:z-[300]
                    top-0 md:top-8 right-0 2xl:translate-x-[14vw] will-change-[transform,opacity]
                    text-4xl xl:text-xl 2xl:text-6xl 2xl:bottom-[20%] 2xl:-right-[10%]
                    text-background md:text-white md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    >

                        <div

                        >

                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-60 2xl:opacity-30 blur-3xl"></div>
                            <p className="text-start text-lg uppercase text-gray-400">Available for hire</p>
                            <h1> FULLSTACK ENGINEER</h1>
                            <h2 className="text-gray-400 text-2xl">
                                DOTNET | ANGULAR | NEXT.JS
                            </h2>

                            <div className="gradient-text text-4xl group-hover:hidden w-auto"

                            >

                                <p>Let&#39;s Build The Experience</p>
                            </div>

                        </div>
                    </div>
                </a>

            </div >
            <div className="relative h-full w-full items-end lg:hidden">
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    <div className="
                    absolute z-[100] group hover:cursor-pointer 
                    top-0 md:top-8 right-0
                    text-4xl 
                    text-primary  md:text-shadow-lg shadow-black
                    font-mainfont font-[900]"
                    >

                        <div>
                            <p className=" text-lg uppercase text-gray-400">Available for hire</p>
                            <h1> FULLSTACK ENGINEER</h1>
                            <h2 className="text-gray-400 text-2xl">
                                DOTNET | ANGULAR | NEXT.JS |

                            </h2>
                            <p
                                className="
                                    text-white underline 
                                    text-2xl w-full h-full
                                    bg-gradient-to-r from-[#ff8c00] to-violet-700 lg:to-[#8a2be2] 
                                     2xl:opacity-30 ">Let&#39;s Build The Experience</p>

                        </div>

                    </div>
                </a>
            </div>
        </>
    )
}

export default Avata;
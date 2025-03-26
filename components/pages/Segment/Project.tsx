"use client";
import FizzBuzz from "../project/FizzBuzz";


const Project = () => {

    return (
        <div className="relative h-auto w-full  flex flex-col max-w-full bg-gradient-to-b from-secondary to-black md:bg-transparent "

        >
            <div className="
                    flex flex-row 
                    h-auto border-t-8 md:border-t-0 border-white/50 2xl:w-[85%] 2xl:ml-[5%] w-full z-[30]">

                <div className="h-auto md:w-[27%]
                            md:ml-[8%]  bg-gradient-to-b from-secondary to-background  2xl:bg-transparent ml-2 md:shadow-3xl shadow-black">
                    <div className="absolute-0 gradient-bg opacity-30 md:opacity-20 2xl:opacity-25" />

                </div>
                <div
                    id="project"
                    className="h-auto w-full mb-4 ">
                    <h1 className="
                            md:-translate-x-1/4 -translate-y-1/2 
                            uppercase text-white 
                            tracking-widest text-shadow-lg shadow-black/70
                    ">
                        Personal Projects

                    </h1>
                    <div className="h-auto w-full  project rotate-[110deg] origin-bottom-right">
                        <FizzBuzz />

                    </div>
                </div>

            </div>



        </div>

    )
}

export default Project;
"use client";

import { useEffect, useState } from "react";

const NavBar = () => {
    const [navShow, setNavShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setNavShow(window.innerWidth >= 1024);
        };

        // Initial check
        handleResize();

        // Listen for resize events
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="sticky top-0 lg:w-full h-0 bg-white z-[500]">
            <div className={`
                    absolute  group
                    gap-1 lg:gap-3 lg:pt-8 flex-standard
                    top-0 left-0 w-auto h-auto bg-transparent text-white uppercase font-extrabold  p-3 text-lg lg:text-sm group border-l-4 lg:hover:border-l-8 z-[500]`}>
                <div
                    onClick={() => setNavShow(!navShow)}
                    className={`relative lg:hidden h-[7vw] w-[7vw] translate-y-[2vw] translate-x-[1vw] mb-3 z-[500] hover:cursor-pointer `}
                >
                    <span className={`absolute h-[0.85vw] w-full bg-primary transition-all duration-150 ${(navShow) ? "top-[3vw] -rotate-45" : "top-0"}`} />
                    <span className={`absolute h-[0.35vw] w-full top-[3vw] bg-white ${navShow ? "hidden" : ""}`} />
                    <span className={`absolute h-[0.85vw] transition-all duration-150 ${(navShow) ? "top-[3.8vw] rotate-45" : "bottom-0"} -translate-y-[100%] w-full bg-primary`} />
                </div>
                <a href="#contact"><div className={` ${(navShow) ? "" : "hidden"} rounded-lg text-center border-4 scale-110 text-primary px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-35`}

                > Contact Me</div></a>
                <a href="#intro"> <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}

                > Intro</div></a>
                <a href="#experience"> <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}

                > Exps</div></a>
                <a href="#skill"><div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}

                > Skills</div></a>
                <a href="#project"><div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}

                > Projects</div></a>
                <a href="#edu"><div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}

                > Edu</div></a>

            </div>

        </nav>
    )
}

export default NavBar;
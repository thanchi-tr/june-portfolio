"use client";

import { RefObject, useEffect, useState } from "react";

const NavBar = ({ desRef, eduRef, expRef, skillRef, projectRef, contactRef }: { desRef: RefObject<HTMLDivElement>, expRef: RefObject<HTMLDivElement>, skillRef: RefObject<HTMLDivElement>, projectRef: RefObject<HTMLDivElement>, eduRef: RefObject<HTMLDivElement>, contactRef: RefObject<HTMLDivElement> }) => {
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
        <nav className="sticky top-0 lg:w-full h-4 bg-white z-[500]">
            <div className={`
                    absolute  group
                    gap-1 lg:gap-3 lg:pt-8 flex flex-col 2xl:flex-row
                    top-0 left-0 w-auto h-auto bg-transparent text-white uppercase font-extrabold  p-3 text-lg lg:text-sm group border-l-4 lg:hover:border-l-8 z-[500]`}>
                <div
                    onClick={() => setNavShow(!navShow)}
                    className={`relative lg:hidden h-[7vw] w-[7vw] translate-y-[2vw] translate-x-[1vw] aspect-square mb-3 z-[500] hover:cursor-pointer opacity-100`}
                >
                    <span className={`absolute h-[0.85vw] w-full bg-primary transition-all duration-150 ${(navShow) ? "top-[3vw] -rotate-45" : "top-0"}`} />
                    <span className={`absolute h-[0.35vw] w-full top-[3vw] bg-white ${navShow ? "hidden" : ""}`} />
                    <span className={`absolute h-[0.85vw] transition-all duration-150 ${(navShow) ? "top-[3.8vw] rotate-45" : "bottom-0"} -translate-y-[100%] w-full bg-primary`} />
                </div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-lg text-center border-4 scale-110 text-primary px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-35`}
                    onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Contact Me</div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}
                    onClick={() => desRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Intro</div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}
                    onClick={() => expRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Exps</div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}
                    onClick={() => skillRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Skills</div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}
                    onClick={() => projectRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Projects</div>
                <div className={` ${(navShow) ? "" : "hidden"} rounded-2xl text-center border-2 px-2 bg-black hover:underline hover:cursor-pointer [&:not(:hover)]:group-hover:opacity-80 group-hover:opacity-100 opacity-5`}
                    onClick={() => eduRef.current?.scrollIntoView({ behavior: "smooth" })}
                > Edu</div>

            </div>

        </nav>
    )
}

export default NavBar;
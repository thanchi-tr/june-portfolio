


import TypedText from "./TypeText";

const HeroSection = () => {
    return (
        <div className="hero-section h-[108vh] flex flex-col justify-evenly">
            <h2 className="text-center flex flex-col justify-center
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold
            ">It's June

                <div className="flex justify-evenly"><TypedText options={["Backend", "Frontend", "Fullstack Engineer"]} className={""} /></div>
            </h2>

        </div>
    );
}
export default HeroSection;



import TypedText from "./TypeText";

const HeroSection = () => {
    return (
        <div className="hero-section h-[108vh] flex flex-col justify-evenly">
            <h3 className="text-center flex flex-col justify-center font-extrabold
            ">It&apos;s June

                <div className="flex justify-evenly"><TypedText options={["Fullstack Developer", "UI & UX", "Interest?"]} className={""} /></div>
            </h3>

        </div>
    );
}
export default HeroSection;


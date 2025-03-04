import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const FizzBuzzProject = () => (<>
    <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-white/95`}>FizzBuzz RealTime Multi-player Game</h1>
    <div className={`
                      h-full w-full
                      flex lg:flex-row flex-wrap
                      xl:justify-evenly text-white/80 md:text-black
                    `}>
        <div className={`
                        flex flex-col md:flex-row items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100px] 
                        pointer-events-auto`}>
            <CollapsibleGallery
                cards={[
                    <Image key="card0" src={"/asset/FizzBuzz/waitRoom.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card1" src={"/asset/FizzBuzz/game.png"} alt={"Game Running"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card2" src={"/asset/FizzBuzz/score.png"} alt={"Game Finish Display rank"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card3" src={"/asset/FizzBuzz/add.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                ]} />
        </div>
        <div className={`
                flex flex-col
                justify-evenly
                h-[550px] md:h-[620px]
                w-full md:w-[42%]
            `}>
            <div className={`mt-[10%] ml-[5%] w-[90%] pb-[18.5px] md:pb-[52px]`}>
                <div className="flex flex-row justify-between">
                    <h3 className={`font-mainfont pb-2 text-lg`}>📅Personal Project:</h3>

                </div>
                <div className="flex flex-row w-full flex-wrap justify-between text-center text-xs font-extrabold pb-2 z-[100] pointer-events-auto">
                    <h3 className="pr-1 hover:cursor-pointer z-[100]">
                        <a href="https://github.com/thanchi-tr/FooBooRealTime-front-next">🔗Frontend(Next.js)</a>
                    </h3> |
                    <h3 className="pl-1 hover:cursor-pointer z-[100]">
                        <a href="https://github.com/thanchi-tr/FooBooRealTime-back-dotnet">🔗Backend(.NET)</a>
                    </h3>
                </div>
                <div className="flex flex-row md:flex-col justify-between pb-2">
                    <h3 className={`font-mainfont pb-1 text-xs`}>📌Tech Stack:</h3>
                    <p className="text-xs">.NET Core, Next.js, SignalR, Redis, Auth0, PostgreSQL</p>
                </div>

                <h4 className={`underline font-mainfont pb-1 text-xs`}>Description:</h4>
                <p className={`w-[90%]  text-xs`}>
                    A real-time full-stack application showcasing instant updates, chat functionalities, and data synchronization between multiple users.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-[80%] md:ml-[10%] xl:ml-0 p-4
                    justify-evenly`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>✔️ Features & Achievements:</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Implemented real-time notifications & chat using SignalR.</li>
                        <li>Developed a highly optimized .NET API, handling thousands of concurrent users.</li>
                        <li>Integrated Redis caching, reducing response times by 40%.</li>
                        <li>Designed a fully responsive UI with Next.js and Tailwind CSS.</li>
                    </ul>
                </div>


            </div>
        </div>


    </div>
</>)

export default FizzBuzzProject;
import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const FizzBuzzProject = () => (<>
    <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-black/95`}>FizzBuzz RealTime Multi-player Game</h1>
    <div className={`
                      h-full w-full
                      flex flex-col md:flex-row flex-wrap
                      xl:justify-evenly
                    `}>
        <div className={`
                        flex items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100px] 
                        pointer-events-auto`}>
            <CollapsibleGallery
                cards={[
                    <Image src={"/asset/FizzBuzz/waitRoom.png"} alt={"Add Game rule"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image src={"/asset/FizzBuzz/game.png"} alt={"Game Running"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image src={"/asset/FizzBuzz/score.png"} alt={"Game Finish Display rank"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image src={"/asset/FizzBuzz/add.png"} alt={"Add Game rule"} className="object-cover h-full w-full pointer-events-none" fill />,
                ]} />
        </div>
        <div className={`
                flex flex-col
                justify-evenly
                h-[550px] md:h-[620px]
                w-full md:w-[42%]
            `}>
            <div className={`mt-[10%] ml-[5%] w-[90%] pb-[18.5px] md:pb-[52px]`}>
                <h4 className={`underline font-mainfont pb-5`}>Description:</h4>
                <p className={`w-[90%]  text-xs`}>
                    Follow the traditional, reowned Fizz Buzz games. Take it another step to allow your math skill to speak and take you up your "pyramid" of skill.
                    Create a game, wait for your friend to join.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-full md:ml-[30%] xl:ml-0
                    justify-evenly`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Front</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>NextJS v14+</li>
                        <li>Tailwind css</li>
                        <li>Framer motion</li>
                        <li>SignalR </li>
                        <li>Auth0</li>
                        <li>Test with JEST</li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Back</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Web API Dotnet</li>
                        <li>Signal R</li>
                        <li>Entity Framework core</li>
                        <li>Auth0</li>
                        <li>Serilog</li>
                        <li>Test with xUnit</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</>)

export default FizzBuzzProject;
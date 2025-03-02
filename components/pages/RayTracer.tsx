import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const RayTracer = () => (<>
    <h1 className={`font-mainfont text-lg text-center p-4 text-black/95`}>A Ray Tracer that turn Coordinate into a picture base off their material</h1>
    <div className={`
                      h-full w-full
                      flex flex-col md:flex-row flex-wrap
                      xl:justify-evenly
                    `}>
        <div className={`
                        flex items-center content-center
                        w-[95%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%] xl:pb-4
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100px] 
                        bg-white 
                        pointer-events-auto`}>
            <CollapsibleGallery
                cards={[
                    <Image key="card30" src={"/asset/FizzBuzz/waitRoom.png"} alt={"Add Game rule"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image key="card31" src={"/asset/FizzBuzz/game.png"} alt={"Game Running"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image key="card32" src={"/asset/FizzBuzz/score.png"} alt={"Game Finish Display rank"} className="object-cover h-full w-full pointer-events-none" fill />,
                    <Image key="card33" src={"/asset/FizzBuzz/add.png"} alt={"Add Game rule"} className="object-cover h-full w-full pointer-events-none" fill />,
                ]} />
        </div>
        <div className={`
                flex flex-col
                justify-evenly
                w-full md:w-[42%]
            `}>
            <div className={`mt-[10%] ml-[5%] w-[90%] pb-[18.5px] md:pb-[52px]`}>
                <h4 className={`underline font-mainfont pb-5`}>Description:</h4>
                <p className={`w-[90%] text-xs`}>
                    Follow the traditional, reowned Fizz Buzz games. Take it another step to allow your math skill to speak and take you up your &#34;pyramid&#34; of skill.
                    Create a game, wait for your friend to join.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-full md:ml-[30%] xl:ml-0
                    justify-evenly pb-[5vw]`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Technology</h2>
                    <ul className={`text-xs`}>
                        <li>DotNet 6.0</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</>)

export default RayTracer;
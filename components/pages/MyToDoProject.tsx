import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const MyToDoProject = () => (<>
    <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-black/95`}>Pop-art styled To do Timming List</h1>
    <div className={`
                      h-full w-full
                      flex flex-col md:flex-row flex-wrap
                      xl:justify-evenly
                    `}>
        <div className={`
                        flex flex flex-col md:flex-row items-center content-center
                        w-[90%] sm:w-[70%] md:w-[52%] xl:w-[38%] 2xl:w-[30%]
                        h-[540px] 
                        ml-[5%] sm:ml-[15%] md:ml-[3%]
                        z-[100px] 
                        pointer-events-auto`}>
            <CollapsibleGallery
                cards={[
                    <Image key="card20" src={"/asset/MyToDo/login.png"} alt={"Log in and register"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card21" src={"/asset/MyToDo/category.png"} alt={"Game Running"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card22" src={"/asset/MyToDo/todos.png"} alt={"Game Finish Display rank"} className="object-contain h-full w-full pointer-events-none" fill />,
                    <Image key="card23" src={"/asset/MyToDo/loading.png"} alt={"Add Game rule"} className="object-contain h-full w-full pointer-events-none" fill />,
                ]} />
        </div>
        <div className={`
                flex flex-col
                justify-evenly
                h-[550px] md:h-[620px]
                w-full md:w-[42%]
            `}>
            <div className={`mt-[10%] ml-[5%] w-[90%]`}>
                <h4 className={`underline font-mainfont pb-5`}>Description:</h4>
                <p className={`w-[92%] text-xs`}>
                    My Attempt to explore UI/UX color theme to convey a pop-art styled Basic todo application. The Todo is seperated by category.
                    The web is include all basic functionality such as: Add, Delete, View, Set Complete. My application also implement the Timer into the application.
                    Those time is build up into a category of skill (as you defined). This application is a study of UI/ UX animation of various speed, form and shape
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
                        <li>Test with JEST</li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>Back</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Web API Dotnet</li>
                        <li>Entity Framework core</li>
                        <li className="w-3/4 md:w-full">Self Authentication with refresh token</li>
                        <li>Serilog</li>
                        <li>Test with xUnit</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</>)

export default MyToDoProject;
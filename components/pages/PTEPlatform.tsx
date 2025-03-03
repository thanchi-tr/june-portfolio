
const PTEPlatform
    = () => (<>
        <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-black/95`}>💼 PTE Platform | AI-Powered Learning System</h1>
        <div className={`
                      h-full w-full
                      flex md:flex-row flex-wrap
                      xl:justify-evenly
                    `}>
            <div className={`mt-[10%] ml-[5%] w-[90%] pb-[18.5px] md:pb-[52px]`}>
                <div className="flex flex-row justify-between">
                    <h3 className={`font-mainfont pb-2 text-xs`}>📅 Jung Talents | Full-Stack Engineer</h3>

                </div>
                <div className="flex flex-row justify-between text-center text-xs font-extrabold pb-2">
                    🔗<h3 className="pr-1 hover:cursor-pointer z-[100]">
                        <a href="https://www.masterpte.com.au/">PTE Master</a>
                    </h3> |
                    <h3 className="pl-1 hover:cursor-pointer z-[100]">
                        <a href="https://pteplatform.com/#/">PTE Platform</a>
                    </h3>
                </div>
                <div className="flex flex-row justify-between">
                    <h3 className={`font-mainfont pb-3 text-xs`}>📌Tech Stack:</h3>
                    <p className="text-xs">.NET Core, Next.js, Docker, PostgreSQL, AWS, CI/CD</p>
                </div>

                <h4 className={`underline font-mainfont pb-1 text-xs`}>Description:</h4>
                <p className={`w-[90%]  text-xs`}>
                    A next-generation AI-powered PTE learning system that provides students with personalized learning paths and automated assessment using speech and text processing.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-[80%] md:ml-[10%] xl:ml-0
                    justify-evenly`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>✔️ Features & Achievements:</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Built a scalable .NET Web API serving thousands of students.</li>
                        <li>Integrated Docker-based CI/CD pipelines, cutting deployment time by 40%.</li>
                        <li>Optimized PostgreSQL queries, reducing database latency by 35%.</li>
                        <li>Implemented real-time AI-driven feedback, boosting student engagement by 50%.</li>
                    </ul>
                </div>


            </div>


        </div>
    </>)

export default PTEPlatform
    ;
import CollapsibleGallery from "../client/Animation/CollapsibleGallery";
import Image from "next/image";
const CompareNSave
    = () => (<>
        <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-black/95`}>🛍️ Compare n Save | Loan Comparison Platform</h1>
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
                        <a href="https://comparensave.com.au/">Compare n Save</a>
                    </h3>
                </div>
                <div className="flex flex-row justify-between">
                    <h3 className={`font-mainfont pb-3 text-xs`}>📌Tech Stack:</h3>
                    <p className="text-xs"> .NET Core, React.js, GraphQL, PostgreSQL, Storyblok CMS</p>
                </div>

                <h4 className={`underline font-mainfont pb-1 text-xs`}>💡Description:</h4>
                <p className={`w-[90%]  text-xs`}>
                    A web platform helping users compare home loans and investment loans from Australia’s most trusted lenders.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-[80%] md:ml-[10%] xl:ml-0
                    justify-evenly`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>✔️ Features & Achievements:</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Migrated legacy system to .NET Core & GraphQL, improving API response time by 37%.</li>
                        <li>Designed an intuitive React-based UI, increasing user retention by 28%.</li>
                        <li>Integrated Storyblok CMS, allowing seamless content updates by non-technical staff.</li>
                        <li>Boosted organic SEO rankings, leading to a 30% traffic increase.</li>
                    </ul>
                </div>


            </div>


        </div>
    </>)

export default CompareNSave
    ;
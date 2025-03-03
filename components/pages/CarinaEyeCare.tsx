
const CarinaEyeCare
    = () => (<>
        <h1 className={`font-mainfont text-lg xl:text-xl 2xl:text-2xl text-center p-4 text-black/95`}>🩺 Carina Eye Care | Clinic Management & Booking System</h1>
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
                        <a href="https://www.carinaeyecare.com.au/">Carina Eye Care</a>
                    </h3>
                </div>
                <div className="flex flex-row justify-between">
                    <h3 className={`font-mainfont pb-3 text-xs`}>📌Tech Stack:</h3>
                    <p className="text-xs"> .NET Core, Next.js, Headless CMS, SQL Server</p>
                </div>

                <h4 className={`underline font-mainfont pb-1 text-xs`}>💡Description:</h4>
                <p className={`w-[90%]  text-xs`}>
                    A modernized appointment booking & content management system for a leading eye-care clinic.
                </p>
            </div>
            <div className={`
                    flex md:flex-col xl:flex-row
                    w-[80%] md:ml-[10%] xl:ml-0
                    justify-evenly`}>
                <div>
                    <h2 className={`text-sm font-mainfont pt-2`}>✔️ Features & Achievements:</h2>
                    <ul className={`text-xs list-disc`}>
                        <li>Redesigned the website with Next.js, improving site speed by 47%.</li>
                        <li>Developed an online appointment booking system, reducing no-show rates by 15%.</li>
                        <li>Enhanced SEO, increasing organic traffic by 50%.</li>
                        <li>Built a secure CMS for staff, cutting content update time by 60%.</li>
                    </ul>
                </div>


            </div>


        </div>
    </>)

export default CarinaEyeCare
    ;
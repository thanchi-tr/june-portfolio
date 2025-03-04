"use client"

let CarinaEyeCare = () => {
    return (
        <div>
            <div className="">
                <div>Logo</div>
                <div>
                    <a>
                        Carina Eye Care | Clinic Management & Booking System
                    </a>
                </div>
            </div>
            {/* Work place and role */}
            <div>
                {/* logo */}
                <div></div>
                <div>Jung Talents | Full-Stack Engineer</div>
            </div>

            <div className="flex flex-col">
                {/* Image and detail */}
                <div className="flex flex-col">
                    {/* Image and detail */}

                    <div>
                        <h1>Frontend:</h1>
                        <div>Next.js, TypeScript, Tailwind CSS</div>
                    </div>
                    <div>
                        <h1>Backend:</h1>
                        <div>.NET Core, SQL Server, Docker, Redis</div>
                    </div>
                    <div>
                        <h1>Team Size:</h1>
                        <p>3</p>
                    </div>
                </div>
                <div>
                    {/* requirement  */}
                    <div>
                        <h1>Project requirement</h1>
                        <ul>
                            <li>Digitize the clinic’s appointment booking system, reducing manual administrative workload.</li>
                            <li>Implement a CMS that allows staff to easily update clinic services and content.</li>
                            <li>Optimize cost vs. performance, ensuring quick page loads while using a cost-effective hosting solution.</li>
                        </ul>
                    </div>

                    {/* Stakeholder Interest */}
                    <div>
                        <h1>Stakeholder Interests</h1>
                        <ul>
                            <li>Clinic Owners: Automate appointment scheduling and increase patient retention.</li>
                            <li>Patients: Ensure a seamless, mobile-friendly appointment system.</li>
                            <li>Marketing Team: Optimize SEO for local visibility and increased appointment bookings.</li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <h1>Achievements & Trade-offs:</h1>
                        <ul>
                            <li>Reduced no-show rates by 15% through automated appointment reminders</li>
                            <li> Optimized SQL Server indexing, reducing query execution time by 50%.</li>
                            <li>Migrated to Next.js, improving page load speed by 50%, while requiring server-side rendering (SSR) adjustments.</li>
                            <li> Cut content update time by 70% through a user-friendly CMS, increasing staff efficiency.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarinaEyeCare;
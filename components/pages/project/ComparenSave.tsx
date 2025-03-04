"use client"

let CompareNSave = () => {
    return (
        <div>
            <div className="">
                <div>Logo</div>
                <div>
                    <a>
                        Compare n Save | Loan Comparison Platform
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
                        <div>React.js, GraphQL, Storyblok CMS, Tailwind CSS</div>
                    </div>
                    <div>
                        <h1>Backend:</h1>
                        <div>.NET Core, PostgreSQL, Redis, Docker</div>
                    </div>
                    <div>
                        <h1>Team Size:</h1>
                        <p>4</p>
                    </div>
                </div>
                <div>
                    {/* requirement  */}
                    <div>
                        <h1>Project requirement</h1>
                        <ul>
                            <li>Build a fast, responsive loan comparison platform for users to compare financial products in real-time.</li>
                            <li>Shift from monolithic REST API to GraphQL, reducing over-fetching and optimizing API performance.</li>
                            <li>Maintain instantaneous query results while keeping operational costs within budget.</li>
                        </ul>
                    </div>

                    {/* Stakeholder Interest */}
                    <div>
                        <h1>Stakeholder Interests</h1>
                        <ul>
                            <li>Customers: Provide a seamless user experience with real-time loan comparisons.</li>
                            <li>Lenders & Financial Partners: Increase customer conversions through optimized search & filtering.</li>
                            <li>Marketing Team: Implement SEO-driven content management for greater organic reach.</li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <h1>Achievements & Trade-offs:</h1>
                        <ul>
                            <li>Migrated to GraphQL, reducing over-fetching by 60% but requiring retraining for the development team.</li>
                            <li> Implemented Redis caching, cutting API response time by 40%, at an increasing in memory usage.</li>
                            <li>Optimized UI rendering, decreasing FCP time by 45%, but requiring additional front-end refactoring.</li>
                            <li> Integrated Storyblok CMS, allowing non-technical staff to update content, but requiring custom API integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareNSave;
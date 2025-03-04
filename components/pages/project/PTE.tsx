"use client"

let PTE = () => {
    return (
        <div>
            <div className="">
                <div>Logo</div>
                <div>
                    <a>PTE Platform | AI-Powered Learning System</a>
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

                <div>
                    <h1>Frontend:</h1>
                    <div>Next.js, TypeScript, Tailwind CSS, Framer Motion</div>
                </div>
                <div>
                    <h1>Backend:</h1>
                    <div>.NET Core, Docker, PostgreSQL, AWS, CI/CD, Microservices Architecture</div>
                </div>
                <div>
                    <h1>Team Size:</h1>
                    <p>5</p>
                </div>
            </div>
            <div>
                {/* requirement  */}
                <div>
                    <h1>Project requirement</h1>
                    <ul>
                        <li>Develop a highly scalable AI-powered learning platform for thousands of concurrent users preparing for PTE exams.</li>
                        <li>Integrate NLP-based speech and text analysis to provide automated real-time feedback</li>
                        <li>Ensure low latency and high availability, balancing cost-efficient cloud deployment with performance optimization.</li>
                    </ul>
                </div>

                {/* Stakeholder Interest */}
                <div>
                    <h1>Stakeholder Interests</h1>
                    <ul>
                        <li>Investors & Business Owners: Reduce costs by automating assessments instead of relying on human graders.</li>
                        <li>Students & Users: Provide real-time AI-driven feedback to improve learning outcomes.</li>
                        <li>System Administrators: Ensure 99.99% uptime with scalable cloud-based deployments.</li>
                    </ul>
                </div>

                {/* Solution */}
                <div>
                    <h1>Achievements & Trade-offs:</h1>
                    <ul>
                        <li>Built a .NET Core Microservices API, reducing server load by 50% while maintaining modular scalability.</li>
                        <li>Optimized PostgreSQL queries, reducing response times by 35% at the cost of additional initial indexing overhead.</li>
                        <li>Implemented CI/CD Pipelines using GitLab, cutting deployment time by 40%, but requiring an increased DevOps learning curve.</li>
                        <li>Reduced cloud infrastructure costs by 25% by optimizing compute resource allocation in AWS without sacrificing performance.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PTE;
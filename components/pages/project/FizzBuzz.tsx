"use client"

let FizzBuzz = () => {
    return (
        <div>
            <div className="">
                <div>Logo</div>
                <div>
                    <a>
                        FizzBuzz Real-Time Multiplayer Game
                    </a>
                </div>
            </div>
            {/* Work place and role */}
            <div>
                {/* logo */}
                <div></div>
                <div>Personal Project</div>
            </div>

            <div className="flex flex-col">
                {/* Image and detail */}
                <div className="flex flex-col">
                    {/* Image and detail */}

                    <div>
                        <h1>Frontend:</h1>
                        <div>Next.js v14+, TypeScript, Tailwind CSS, Framer Motion, SignalR, Auth0, Jest</div>
                    </div>
                    <div>
                        <h1>Backend:</h1>
                        <div>.NET Core, SignalR, Entity Framework Core, Serilog, xUnit</div>
                    </div>
                    <div>
                        <h1>Team Size:</h1>
                        <p>Solo Developer</p>
                    </div>
                </div>
                <div>
                    {/* requirement  */}
                    <div>
                        <h1>Project requirement</h1>
                        <ul>
                            <li>Create a real-time multiplayer version of the classic FizzBuzz game, allowing players to compete in a low-latency, WebSocket-driven environment.</li>
                            <li>Implement secure user authentication using Auth0 to support guest and registered users.</li>
                            <li>Design a scalable event-driven backend that can handle thousands of simultaneous game sessions.</li>
                            <li>Provide a seamless cross-platform experience, supporting both mobile and desktop users.</li>
                        </ul>
                    </div>

                    {/* Stakeholder Interest */}
                    <div>
                        <h1>Stakeholder Interests</h1>
                        <ul>
                            <li>Developers & Code Reviewers: Want a clean, maintainable codebase following best practices like TDD (Test-Driven Development) and SOLID principles.</li>
                            <li>Expect low-latency gameplay with optimized data synchronization between frontend and backend.</li>
                            <li>Need a simple and intuitive UI to quickly join games without complex onboarding.</li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <h1>Achievements & Trade-offs:</h1>
                        <ul>
                            <li>Developed a fully responsive UI, ensuring seamless gameplay across all devices, requiring additional performance tuning for mobile browsers.</li>
                            <li> Implemented structured logging with Serilog, improving debugging efficiency for real-time game events, requiring additional log parsing considerations.</li>
                            <li>Built a highly optimized SignalR WebSocket communication layer, reducing network latency by 30%.</li>
                            <li> Implemented JWT authentication with Auth0.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FizzBuzz;
import { useState } from "react";

const Terminal = () => {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");

    const handleCommand = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            switch (command.toLowerCase()) {
                case "about_me":
                    setOutput("Hello! I'm a Full Stack Engineer skilled in .NET & Next.js...");
                    break;
                case "projects":
                    setOutput("1. PTE Platform | 2. Carina Eye Care | 3. Jung Talents...");
                    break;
                default:
                    setOutput("Command not found. Try: about_me, projects, skills.");
            }
            setCommand("");
        }
    };

    return (
        <div className="bg-black text-white font-mono p-4">
            <label htmlFor="terminal"> Ask me anything</label>
            <input
                id="terminal"
                className="bg-transparent outline-none w-full"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                autoFocus
            />
            <p>{output}</p>
        </div>
    );
};


export default Terminal;
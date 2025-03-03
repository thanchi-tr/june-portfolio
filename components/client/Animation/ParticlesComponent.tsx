"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Optimized tsParticles bundle
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Load the tsparticles slim version
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            className="absolute top-0 left-0 w-full h-full -z-0"
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#3e3a37", // Dark background
                },
                fpsLimit: 30,
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            area: 600,
                        },
                    },
                    color: {
                        value: "#ad9547",
                    },
                    shape: {
                        type: "char",
                        character: {
                            value: ["💎", "🔥", "⚡"], // Emoji particles
                            fontStyle: "bold",
                        }
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.8 },
                        random: false,
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "inside",
                        random: false,
                        straight: false,
                        outModes: { default: "out" },
                        trail: { enable: false },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: false },
                            onClick: { enable: false },
                        },
                    },
                    shadow: { enable: false }, // No shadows
                    stroke: { width: 0 }, // No outlines

                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent;

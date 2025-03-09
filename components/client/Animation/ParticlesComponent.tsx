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
                    color: "transparent",
                },

                fpsLimit: 0,
                particles: {
                    number: {
                        value: 156,
                        density: {
                            enable: true,
                            area: 2200,
                        },

                    },
                    life: {
                        duration: 2, // Each particle lasts for 3 seconds
                        count: 0,
                    },
                    color: {
                        value: ["#000000"],

                    },
                    shape: { type: "circle" },
                    links: {
                        enable: true,
                        distance: 150, // Maximum distance to connect
                        color: "#000000",
                        opacity: 0.32,
                        width: 1,
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.8 },
                        random: false,
                    },
                    size: {
                        value: { min: 0.1, max: 9 },
                        random: true,
                    },
                    move: {
                        enable: false,
                        speed: 1,
                        direction: "inside",
                        random: false,
                        straight: false,
                        outModes: { default: "out" },
                        trail: { enable: false },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: false,

                            },
                            onClick: {
                                enable: false,
                            },
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

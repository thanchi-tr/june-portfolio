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
                        value: ["#ad9547", "#cca62e", "#70587c", "#482a41"],

                    },
                    shape: { type: "circle" },
                    links: {
                        enable: true,
                        distance: 150, // Maximum distance to connect
                        color: "#ad9547",
                        opacity: 0.24,
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
                        enable: true,
                        speed: 0.3,
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                        trail: { enable: false },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",

                            },
                            onClick: {
                                enable: false,
                            },
                        },
                    },
                    shadow: { enable: true }, // No shadows
                    stroke: { width: 0 }, // No outlines

                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent;

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
            className="absolute-0 w-full h-full -z-0"
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
                            area: 1200,
                        },

                    },
                    color: {
                        value: ["#ad9547", "#cca62e", "#70587c", "#482a41"],

                    },
                    shape: { type: "circle" },
                    links: {
                        enable: true,
                        distance: 185, // Maximum distance to connect
                        color: "#ad9547",
                        opacity: 0.25,
                        width: 1,

                    },
                    opacity: {
                        value: { min: 0.2, max: 0.8 },
                        random: false,
                    },
                    size: {
                        value: { min: 0.1, max: 8 },
                        random: true,
                        anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
                        random: true,
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
                    shadow: { enable: true }, // No shadows
                    stroke: { width: 0 }, // No outlines

                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent;

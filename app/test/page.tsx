//Scroll base animation to impress
"use client";
import ParticlesComponent from "@/components/client/Animation/ParticlesComponent";
import Introduction from "@/components/pages/Segment/Introduction";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const PAGE_WIDTH = 1000;
let ScrollPage = () => {
    const { scrollYProgress } = useScroll();
    const [AnimationProgress, setAnimationProgress] = useState(0);

    // Update the animation progress, where we can read later on
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            setAnimationProgress(latest)
        });

        return () => unsubscribe(); // Cleanup subscription
    }, [scrollY]);

    useEffect(() => {
        console.log(AnimationProgress * 1);
    }, [AnimationProgress]);

    const desRef = useRef<HTMLDivElement>(null);
    return <>
        <div className={"relative h-[" + PAGE_WIDTH + "vh] w-full bg-background"}>
            <motion.div
                className="absolute top-0 h-full w-full hidden lg:block "
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                <ParticlesComponent />
            </motion.div>
            {/* First segment of the animation where the  */}

            <motion.div
                className={`
                ${AnimationProgress * PAGE_WIDTH > 200 ? "" : "sticky top-0"}
                h-screen w-full
                `}
                ref={desRef}
                animate={{ transform: AnimationProgress * PAGE_WIDTH > 100 ? `translateX(${((AnimationProgress * PAGE_WIDTH) - 100)}vw)` : "0" }}
            >

                <div
                    className={`
                    relative overflow-y-auto
                    transition-all duration-150
                    h-auto max-full 
                    bg-background
                    ${AnimationProgress * PAGE_WIDTH > 100 ? "overflow-clip" : "overflow-clip"}
                `}
                    ref={desRef}
                >

                    <Introduction />

                </div>

            </motion.div >
        </div >

    </>
}

export default ScrollPage;
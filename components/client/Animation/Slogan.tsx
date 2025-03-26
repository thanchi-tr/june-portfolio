'use client';
import { motion } from "framer-motion";
const Slogan = () => {
    return (
        <div className="relative-screen items-end z-[120]">
            <div className="
                    absolute bottom-[-22%] -right-[10%] translate-y-[15vh]
                    z-110 group cursor-pointer
                    2xl:visible invisible text-white/60
                    text-shadow-lg shadow-black "
            >
                <motion.div initial={{ opacity: 0, transform: "translateY(30vh)" }} whileInView={{ opacity: 0.3, transform: "translateY(0vh)" }} viewport={{ once: true }}
                    transition={
                        { opacity: { duration: 1, delay: 0.5 } }
                    } className="absolute-0 gradient-bg to-white opacity-50 2xl:opacity-30 " />
                <h6>Team-player</h6>
                <h6 className="mt-5">Problem-solver</h6>
                <p className="gradient-text opacity-0 group-hover:opacity-100">Click for CV</p>
            </div>

            <div className="
                    absolute-0 z-[300] group hover:cursor-pointer
                    text-background  md:text-shadow-lg shadow-black
                    "
            >
                <motion.div initial={{ opacity: 0, transform: "translateY(30vh)" }} whileInView={{ opacity: 0.25, transform: "translateY(0vh)" }} viewport={{ once: true }}
                    transition={
                        { opacity: { duration: 1, delay: 0.5 } }
                    } className="absolute-0 gradient-bg " />
                <h5 className="text-start uppercase text-gray-400">AVAILABLE FOR HIRING</h5>
                <h2 className="text-primary"> FULLSTACK ENGINEER</h2>
                <h5 className="text-gray-400 ">
                    DOTNET | ANGULAR | NEXT.JS
                </h5>
                <h5 className="gradient-text" >Let&#39;s Build The Experience</h5>
            </div>
        </div >
    )
}

export default Slogan;
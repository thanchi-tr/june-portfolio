"use client";
import { motion } from "framer-motion";
const Page = () => {
    return (
        <div className="bg-black relative-screen h-[100vh] flex justify-evenly pt-[30vh]">
            <div
                className="relative scale-[200%] flex justify-evenly h-[85px] w-[50px] rounded-full bg-white overflow-clip"
            >
                {/* this is the arrow */}
                <motion.div className=" w-[40px] h-[40px] will-change-transform border-t-4 rounded"
                    animate={{ transform: ["translateY(5px)", "translateY(40px)", "translateY(5px)"] }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                >
                    <span className="absolute right-0 -translate-x-[77%] translate-y-[20px] rotate-45 w-[20px] h-[5px] bg-black rounded-full" />
                    <span className="absolute-0 translate-x-[77%] translate-y-[20px] -rotate-45 w-[20px] h-[5px] bg-black rounded-full " />

                </motion.div>
            </div>
        </div>
    )
}

export default Page;
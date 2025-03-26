"use client";
import { motion } from "framer-motion";
const ScrollHint = () => {
    return (
        <motion.div
            className="hint relative opacity-45 flex justify-evenly h-[68px] w-[40px] rounded-full bg-white overflow-clip will-change-contents"
            animate={{ opacity: [0, 0.3] }}
            transition={{ duration: 1.2, delay: 0.3 }}
        >
            {/* this is the arrow */}
            <motion.div className=" w-[40px] h-[40px] will-change-transform border-b-2 border-primary rounded"
                animate={{ transform: ["translateY(-38px)", "translateY(77px)"] }}
                transition={{ duration: 2.5, ease: "easeIn", repeat: Infinity }}
            >
                <span className="absolute right-0 -translate-x-[77%] translate-y-[20px] rotate-45 w-[20px] h-[5px] bg-black rounded-full" />
                <span className="absolute-0 translate-x-[77%] translate-y-[20px] -rotate-45 w-[20px] h-[5px] bg-black rounded-full " />

            </motion.div>
        </motion.div>
    )
}

export default ScrollHint;
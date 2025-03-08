'use client';

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface PopUpProps {
    children: ReactNode,
    img: string
}
const PopUp = ({ children, img }: PopUpProps) => {

    return (
        <div className={`
                relative h-full w-full 
                group cursor-pointer bg-transparent
        `}

        >
            <motion.div className="relative h-auto w-full aspect-square overflow-clip rounded-full"
                whileTap={{ scale: 0.9 }}
            >
                <Image
                    src={img}
                    alt={"Clickable Image"} fill
                    className="object-contain aspect-square"
                    quality={50}
                />
            </motion.div>
            <div className={`
                absolute top-0 flex flex-wrap 
                h-auto w-full -translate-y-[90%] 
                text-sm md:text-md font-bold text-center
                group-hover:opacity-100
                opacity-0
            `}

            >
                <div className="text-center w-full"> {children}</div>

            </div>
        </div>

    )
}

export default PopUp;
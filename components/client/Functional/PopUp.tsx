'use client';

import { useState, ReactNode } from "react";
import Image from "next/image";
interface PopUpProps {
    children: ReactNode,
    img: string
}
const PopUp = ({ children, img }: PopUpProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`
                relative h-full w-full 
                group cursor-pointer bg-transparent
        `}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <div className="relative h-auto w-full aspect-square overflow-clip rounded-full">
                <Image src={img} alt={""} fill className="object-contain aspect-square"></Image>
            </div>
            <div className={`
                absolute top-0 flex flex-wrap 
                h-auto w-full -translate-y-[90%] 
                text-sm md:text-md font-bold text-center
                group-hover:opacity-100
                ${isOpen ? "opacity-100" : "opacity-0"}
            `}

            >
                <div className="text-center w-full"> {children}</div>

            </div>
        </div>

    )
}

export default PopUp;
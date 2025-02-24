"use client";

import { ReactNode, useState } from "react";

interface CollapsibleGalleryConfig {
    cards: ReactNode[]
}
const CollapsibleGallery = ({ cards }: CollapsibleGalleryConfig) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className={`
            relative z-[80]
            flex flex-row justify-evenly
            h-full w-full 
        `}>
            {cards.map(
                (card, index) => (
                    <div
                        key={`cGallery-${index}`}
                        style={{ width: ((index != selectedIndex) ? "4%" : `${Math.floor(97 - (cards.length - 1) * 4)}%`) }}
                        className={`
                            inline overflow-clip
                            h-full relative 
                            ${index == selectedIndex ? "shadow-xl shadow-foregound rounded-xl border-[1px] border-b-white/15" : "rounded-md"}
                            ${index == selectedIndex ? "bg-gray-300 pointer-events-none" : "bg-primary hover:cursor-pointer "}
                            transition-all duration-[1.5s] ease-out
                            `}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {
                            <div
                                className={`
                                    transition-all   ease-in-out ${index != selectedIndex ? "duration-75 opacity-0" : "duration-[390ms] delay-1000 opacity-100"}
                                `}>
                                {card}
                            </div>
                        }
                        <div className={`
                            h-full w-full 
                            transition-all duration-[0.32s] ease-in-out
                            ${index == selectedIndex ? "rounded-xl" : "rounded-md backdrop-blur-2xl hover:bg-background"}
                            z-[100] `} />
                        {/* The index display*/}

                    </div>
                )
            )}
            <div className={`
                absolute flex justify-evenly
                w-full h-[30px] 
                bottom-2`}>
                <div
                    className={`flex flex-row justify-between`}
                    style={{ width: `${6 * cards.length}%` }}
                >
                    {cards.map(
                        (_, i) => <div key={"cG-" + i}
                            className={`
                                relative rounded-full aspect-square h-full bg-white
                                border-2 border-shadow/30
                                ${i == selectedIndex ? "" : "hover:cursor-pointer"}
                                `
                            }
                            onClick={() => setSelectedIndex(i)}
                        >
                            {i != selectedIndex
                                ? <></>
                                : <p className={`m-[10%] bg-background z-50 h-[80%] w-auto aspect-square rounded-full`} />
                            }
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}


export default CollapsibleGallery;
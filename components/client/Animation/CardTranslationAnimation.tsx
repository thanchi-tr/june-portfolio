'use client';

import useMouseDisplacementTracker, { LEFT, RIGHT, STATION } from "@/hooks/useMouseDisplacementTracker";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useReducer, useRef, useState } from "react";

interface CardDisplacement {
    currentX: number;
    nextX: number;
}

const CardTranslationAnimation = (
    { displayBlock, totalCount, contents = Array.from({ length: totalCount }, (_, index) => <div>{index}</div>) }: { displayBlock: number, totalCount: number, contents: ReactNode[] }

) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const sliderWidth = Math.floor(100 / displayBlock) * totalCount;
    const cardWidth = Math.floor(100 / displayBlock)
    const { coordDetail } = useMouseDisplacementTracker(imageRef);
    useEffect(
        () => {
            console.log(
                `3 card width:${cardWidth * 3}, cardWidth: ${cardWidth}`
            )
        }
        , []
    )
    const initializeCards = (): CardDisplacement[] =>
        Array.from({ length: totalCount }).map(() => ({ currentX: 0, nextX: 0 }));

    const reducer = (state: CardDisplacement[], action: { type: string, payload: number }) => {
        let newState = state.slice();

        switch (action.type) {
            case `toLeft`: {
                newState = newState.map(
                    (xCoords, index) => (
                        {
                            currentX: xCoords.nextX
                            ,
                            nextX: (xCoords.nextX + action.payload + (index + 0.5) * 100 > (totalCount + 1) * 100)
                                ? -(index) * 100
                                : xCoords.nextX + action.payload
                        }
                    )
                )
                return newState
            }
            case `toRight`: {
                newState = newState.map(
                    (xCoords, index) => {
                        if (!(xCoords.currentX - action.payload > -((index + 1) * 100))) {
                            console.log(`cardWidth: ${cardWidth}`)
                            console.log(`updated location: ${((totalCount - index) * 100)}`)
                        }
                        return (
                            {
                                currentX: xCoords.nextX
                                ,
                                nextX: (xCoords.currentX - action.payload > -((index + 1) * 100))
                                    ? xCoords.nextX - action.payload
                                    : ((totalCount - index) * 100)

                            }
                        )
                    }
                )
                return newState
            }
            default: return state;
        }
    }

    const [cardsDisplacement, dispatch] = useReducer(reducer, [], initializeCards);
    /**debug */
    useEffect(
        () => {
            if (coordDetail.direction != STATION) {
                dispatch({
                    type: (coordDetail.direction == LEFT) ? 'toLeft' : 'toRight',
                    payload: coordDetail.displacement
                })
            }
        }
        , [coordDetail]
    )
    /**debug */
    useEffect(

        () => {
            let scheduler = setInterval(
                () => {
                    // dispatch({ type: "toLeft", payload: 1 })
                    // dispatch({ type: "toRight", payload: 1 })
                    // dispatch({ type: "toLeft", payload: 2 })
                },
                10
            )
            return () => clearInterval(scheduler);
        }, []
    );

    const getVariant = (index: number) => {
        let coord = cardsDisplacement[index]

        if (coord.nextX < -(index + 0.2) * 100) {
            return {
                translateX: [`${coord.currentX}%`, `${coord.nextX}%`],
                opacity: [1, 0]
            }
        }
        return {
            translateX: [`${coord.currentX}%`, `${coord.nextX}%`],
            opacity: 1
        }
    }
    return (
        <div
            className={`relative h-full w-full overflow-clip z-10 `} //display port

            ref={imageRef}
        >
            {/* actual slider */}
            <div className={` relative
                h-full z-10
                flex flex-row grow-0 shrink-0 
                bg-foreground border-4 border-black pl-[2.5%] overflow-clip`}
                style={{
                    width: `${sliderWidth}%`,
                }}
            >
                {/* actual card card */}
                {
                    Array.from({ length: totalCount }).map((_, index) => (
                        <motion.div
                            key={index}
                            className={`
                                 h-full border-2
                                 pointer-events-none
                                 select-none border-blue-500
                                 bg-black/30
                                
                                 
                                 `}

                            style={{
                                width: `${cardWidth}%`,
                                x: `-${100}%`

                            }}
                            animate={getVariant(index)}
                            transition={{ duration: 1 }}
                        >
                            {contents[index]}
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}

export default CardTranslationAnimation;
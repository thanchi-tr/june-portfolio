'use client';

import useMouseDisplacementTracker, { LEFT, STATION } from "@/hooks/useMouseDisplacementTracker";
import { numberToGreekNumeral } from "@/utils/numeralHelper";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useReducer, useRef } from "react";

interface CardDisplacement {
    currentX: number;
    nextX: number;
}

const CardTranslationAnimation = (
    { displayBlock, totalCount, contents = Array.from({ length: totalCount }, (_, index) => <div key={"block" + index}>{index}</div>) }: { displayBlock: number, totalCount: number, contents?: ReactNode[] }

) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const sliderWidth = Math.floor(100 / displayBlock) * totalCount;
    const cardWidth = Math.floor(100 / displayBlock)
    const { coordDetail, isTracking } = useMouseDisplacementTracker(imageRef);

    const initializeCards = (): CardDisplacement[] =>
        Array.from({ length: totalCount }).map(() => ({ currentX: 0, nextX: 0 }));

    const reducer = (state: CardDisplacement[], action: { type: string, payload: number }) => {
        let newState = state.slice();

        switch (action.type) {
            case `toLeft`: {
                newState = newState.map(
                    (xCoords, index) => (
                        {
                            currentX: xCoords.currentX + action.payload + index * 100 < (totalCount) * 100
                                ? xCoords.nextX
                                : -((index) * 100)
                            ,
                            nextX:
                                xCoords.currentX + action.payload + index * 100 < (totalCount) * 100
                                    ? xCoords.nextX + action.payload
                                    : -((index) * 100) + action.payload
                        }
                    )
                )
                return newState
            }
            case `toRight`: {
                newState = newState.map(
                    (xCoords, index) => {

                        return (
                            {
                                currentX: (xCoords.nextX - action.payload > -((index + 1) * 100))
                                    ? xCoords.nextX
                                    : (totalCount - 1 - index) * 100 + action.payload
                                ,
                                // nextX: xCoords.nextX - action.payload < -(totalCount) * 100
                                //     ? (totalCount - 1 - index) * 100 // Reset to the front of the queue
                                //     : xCoords.nextX - action.payload,
                                nextX: (xCoords.nextX - action.payload > -((index + 1) * 100))
                                    ? xCoords.nextX - action.payload
                                    : (totalCount - 1 - index) * 100

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
    // useEffect(
    //     () => {
    //         let timer = setInterval(() => dispatch({ type: `toRight`, payload: 0.1 })

    //             , 10)
    //         setTimeout(() => clearInterval(timer), 1500);
    //     }
    //     , []
    // )
    useEffect(
        () => {
            if (isTracking == false) {

                // let target = Math.abs(cardsDisplacement[1].nextX % 100);
                // if (target > 50) {
                //     let timer = setInterval(() => dispatch({ type: `toLeft`, payload: 0.1 })

                //         , 10)
                //     setTimeout(() => clearInterval(timer), (100 - target) * 100);
                //     dispatch({ type: 'toLeft', payload: 100 - target })
                // }
                // else {
                //     dispatch({ type: 'toRight', payload: target })
                //     let timer = setInterval(() => dispatch({ type: `toRight`, payload: 0.1 })

                //         , 10)
                //     setTimeout(() => clearInterval(timer), target * 100);
                // }
            }

            if (coordDetail.direction != STATION) {

                dispatch({
                    type: (coordDetail.direction != LEFT) ? 'toLeft' : 'toRight',
                    payload: coordDetail.displacement
                })
            }
        }
        , [coordDetail]
    )


    const getVariant = (index: number) => {

        const coord = cardsDisplacement[index]

        if (isTracking == false) {
            //determine if we want to
            // console.log(coord)
            // if (index == 0 &&
            //     coord.nextX > totalCount * 100
            // ) {
            //     console.log("salfgkahsjkghasljkhsal=====")
            // }
        }
        if (coord.nextX < -(index + 0.1) * 100) {
            return {
                translateX: [`${coord.currentX}%`, `${coord.nextX}%`],
                opacity: (isTracking) ? 1 : [1, 0]
            }
        }
        if (coord.currentX > totalCount * 100) {
            return {
                translateX: [`${coord.currentX}%`, `${coord.nextX}%`],
                opacity: (isTracking) ? 1 : [1, 0]
            }
        }
        return {
            translateX: [`${coord.currentX}%`, `${coord.nextX}%`],
            opacity: 1
        }
    }

    return (
        <div
            className={`
                relative h-full w-full 
                z-[80] 
                hover:cursor-pointer group
                
                `} //display port
            style={{
                width: `${displayBlock * cardWidth}%`,
            }}
            ref={imageRef}
        >
            {/* actual slider */}
            <div className={` relative
                h-full z-10
                flex flex-row grow-0 shrink-0 
                bg-foreground border-black`}
                style={{
                    width: `${sliderWidth}%`,
                }}
            >
                {/* actual card card */}
                {
                    contents.map((node, index) => {

                        return (
                            <motion.div
                                key={index}
                                className={` overflow-clip
                                 h-full box-border border-x-8 border-transparent
                                 select-none pointer-events-none
                                bg-transparent rounded-sm
                                 `}

                                style={{
                                    width: `${cardWidth}%`,
                                    x: `-${100}%`

                                }}
                                animate={getVariant(index)}
                                transition={{ duration: 0.5 }}
                            >
                                {node}
                            </motion.div>
                        )
                    })
                }
                <div className={`absolute 
                    opacity-0
                    group-hover:opacity-100
                   bottom-0 pointer-events-none
                   left-[25vw] lg:left-[30vw]
                    w-[45vw] lg:w-[30vw]
                    h-[10vw] sm:h-[7vw] md:h-[6vw] lg:h-[5.5vw]  xl:h-[4.5vw] 2xl:h-[60px]                
                    `}>
                    <div className={`h-full w-full flex flex-row shrink-0 flex-grow justify-center z-50 rounded-sm 
                        
                     `}>
                        {contents.map(
                            (content, index) => {

                                return (
                                    <div key={`s-${index}`} className={`h-full  text-gray-500 bg-foreground text-center 
                                        font-bold
                                        tracking-[0.15rem]`}
                                        style={{
                                            width: `${40 / (totalCount - 1)}%`
                                        }}
                                    >
                                        {numberToGreekNumeral(index + 1)}
                                    </div>
                                )
                            }
                        )}
                        <div className={`absolute 
                            h-[0.8vw] 2xl:h-[70px] 
                            w-[45vw] lg:w-[30vw] xl:
                            pointer-events-none
                            scale-x-110 md:scale-x-100`}

                        >
                            <motion.p
                                className={`relative 
                                    h-[6vw] sm:h-[4vw] lg:h-[3vw] 2xl:h-[40px]
                                    border-2 border-background -scale-full rounded-2xl`}
                                style={{
                                    width: `${40 / (totalCount - 1)}%`,
                                    x: `100%`
                                }}
                                animate={getVariant(0)}
                            >

                            </motion.p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CardTranslationAnimation;
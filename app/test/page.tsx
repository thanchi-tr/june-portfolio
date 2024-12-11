'use client';

import CardTranslationAnimation from "@/components/client/Animation/CardTranslationAnimation";
import SliderCard from "@/components/client/Functional/SliderCard";


const Test = () => {
    return (
        <div
            className={`relative h-screen w-screen bg-background`}

        >
            <div className={`w-full h-[200px] bg-white`}>

                <CardTranslationAnimation displayBlock={1} totalCount={5} />
            </div>

        </div>
    )
}

export default Test;
'use client';

import CardTranslationAnimation from "@/components/client/Animation/CardTranslationAnimation";
import CollapsibleGallery from "@/components/client/Animation/CollapsibleGallery";
import ToggleButton from "@/components/client/Animation/ToggleButton";
import SliderCard from "@/components/client/Functional/SliderCard";

import { useState } from "react";

const Test = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div
            className={`relative h-screen w-screen bg-[gray] `}

        >
            <div className="relative pt-10 pl-10">
                <ToggleButton
                    onClick={() => setIsOn(prev => !prev)}
                    isOn={isOn}
                />

            </div>
        </div>
    )
}

export default Test;
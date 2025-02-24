'use client';
import Image from "next/image";


let Avata = () => {
    return (
        <div className="relative flex h-full w-full items-end">
            <div className="absolute bg-gray-400/10 h-3/5 w-[95%]  rounded-full scale-y-105"></div>
            <div className="absolute bg-secondary h-3/5 w-[70%] rounded-full left-[12%]"></div>
            {/*Picture */}
            <div className="
                    absolute scale-[85%] 
                    right-0 top-0 
                    h-full aspect-square  
                    rounded-full overflow-clip
                    -translate-y-[12%] translate-x-[5%]
                    ">
                <Image
                    src={"/ava.png"}
                    alt={"Portrait picture of June in black suit, black tie"}
                    fill
                    className="object-contain"
                />

            </div>

            <div className="absolute bottom-[4rem] right-[4rem] rotate-12 text-6xl text-primary">June</div>
            <div className="absolute bottom-0 right-0 text-6xl text-white">Trinh</div>
        </div>
    )
}

export default Avata;
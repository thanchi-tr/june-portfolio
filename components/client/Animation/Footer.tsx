"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const Footer = () => {
    const [email, setEmail] = useState<string | null>(null);
    useEffect(() => {
        setEmail(process.env.NEXT_EMAIL || "dev.xuan.trinh@outlook.com");
    }, []);
    return (
        <div className="relative h-full w-full z-20">
            <div className="lg:absolute flex flex-col h-[80%] translate-y-[-35%] w-full bottom-0 text-end z-20 text-black justify-between">
                <div />
                <div className=" font-secondaryfont font-extrabold shadow-md shadow-black bg-secondary">
                    <div className="flex flex-row justify-evenly text-xs md:text-sm lg:text-lg 2xl:text-xl uppercase gradient-text will-change-[transform,opacity]"

                    >
                        <a href="tel:+61432002486"  >
                            <div className="h-auto flex">
                                <div className="relative h-[1.5em] w-auto aspect-square rounded-full overflow-clip opacity-70 hover:opacity-100 mr-1">
                                    <Image src="/icons/phone.jpg" className="object-contain" alt="Phone" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <span>(+61)432 002 486</span>
                            </div>
                        </a>

                        <a href={`mailto:${email}?subject=${encodeURIComponent("Hiring Inquiry - Full Stack Developer")}&body=${"Hello June, ...."}`}>
                            <div className="h-auto flex">
                                <div className="relative h-[1.5em] w-auto aspect-square rounded-full overflow-clip opacity-70 hover:opacity-100 mr-1">
                                    <Image src="/icons/email.jpg" className="object-contain" alt="Email" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <span>{email}</span>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <svg className="h-full w-full z-10 hidden lg:block" viewBox="0 0 5576 1284" fill="none" xmlns="http://www.w3.org/2000/svg">

                <motion.path d="M0.5 400.75L47.5 339.25L97 286.25L140 244.25L181 209.75L216 181.25L240.5 160.75L266 145.25L296.5 126.25L321.5 112.75L355.5 95.75L376.5 86.25L397.5 76.75L442 57.75L487 43.25L535.5 26.75L559.5 18.75L582.5 13.75L621.5 5L662 0.25H690H730L778 3.25L825.5 5L873 6.75L922 12.25L970.5 19.75L1021 27.75L1077.5 39.25L1123 51.75L1169 65.75L1191 73.75L1201 77.25L1214.5 81.75L1237.5 88.75L1260 95.75L1296.5 109.25L1335.5 126.25L1381 144.25L1435 167.432L1494.5 197.25L1557 231.75L1617.5 269.75L1677 306.25L1741 345.75L1802 385.75L1844 411.25L1881 430.25L1909 442.75L1945 456.75L1981 467.25L2017 477.5L2054 485.75L2086.5 492.25L2115.5 496.25L2147.5 501.75L2179 504.25L2210 507.25L2240.5 510.75L2274 514.25L2291 516.25H2309H2340.5H2372.5L2402 514.25L2429 512.25L2481.5 507.25L2508.5 504.25L2526 501.75L2544.5 496.25L2574.5 485.75L2638.5 454.25L2708 417.75L2782.5 386.25L2855 362.25L2921 341.75L2988 320.25L3059.5 303.784L3141.5 290.75L3221.5 286.25H3280.5L3343 290.75L3436 303.784L3549.5 323.25L3670.5 343.25L3789 371.25L3877 398.75L3977 419.75L4066.5 434.25L4143.5 444.25L4204 447.75H4234.5L4260.5 444.25L4300 437.75L4340.5 419.75L4382 398.75L4420.5 371.25L4468.5 337.25L4524 304.25L4583 274.75L4643 251.25L4722.5 226.25L4799.5 207.75L4883 194.75L4952.5 191.25L5019.5 194.75L5108 207.75L5160.5 222.25L5215 236.368L5268 246L5312 251.25L5344.5 255L5375.5 258.5L5398 255L5424.5 246L5444 232L5474 204.5L5509.5 174.5L5546 160.5L5575.5 150.993V1283.25H0.5V400.75Z"
                    fill="#ad9547"
                    style={{ filter: "brightness(1.2) drop-shadow(0px 0px 10px rgba(255,255,255,0.5))" }}
                    className={"z-20 will-change-transform"}
                    animate={{
                        translateY: ["-10px", "10px", "0px", "-8px"], // Wave up and down
                        rotate: [0, "0.2deg", "0.3deg", "-0.4deg", 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

            </svg>

        </div >

    )
}

export default Footer;
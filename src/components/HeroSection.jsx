import React from "react";
import logo from "../assets/Mask group.png";

export default function HeroSection() {
    return (
        <div className="relative w-full h-[800px] md:h-[600px]">
            <img
                alt="Hero"
                src={logo}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-end">
                <div className="relative z-[3] flex flex-col items-start w-[40%] p-8 md:w-full md:p-5">
                    <text className="text-white tracking-[5.04px]">
                        BAZE UNIVERSITY ABUJA
                    </text>
                    <text className="mt-[22px] text-white !font-capitolium text-[48px] leading-[73px]">
                        <>
                        Get a Degree with 
                        <br /> 
                        Baze University
                        </>
                    </text>
                    <text className="mt-3.5 text-white leading-[150%] font-rethink">
                        Baze University delivers quality by having experienced International<br/> staff, superb teaching equipment,
                        overseas
                    </text>
                    <div className="mt-12 flex gap-3">
                        <button className="bg-gray-200 font-rethink text-black rounded hover:bg-[#d8d7d7] px-4 py-2 min-w-[130px]">
                            Apply Now
                        </button>
                        <button className="bg-transparent border border-gray-200 font-rethink hover:bg-[#111111] text-gray-200 rounded px-4 py-2 min-w-[154px]">
                            View Courses
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

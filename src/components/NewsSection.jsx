import React from "react";
import news01 from "../assets/Placeholder 1-1.png";
import { Slider } from "./Slider";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function NewsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-14 md:p-5 sm:gap-7">
        <p className="font-capitolium text-black-900 font-bold text-6xl">Baze News</p>
        <div className="mx-auto flex w-full gap-10 self-stretch px-2 md:mx-0 md:flex-col">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 3 } }}
            disabledDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => setSliderState(e?.item)}
            ref={sliderRef}
            items={[...Array(9).keys()].map((index) => (
              <div className="px-5" key={index}>
                <div className="flex flex-col gap-[18px]">
                  <img src={news01} alt="slidimage" className="h-[222px] object-cover" />
                  <div className="mx-[22px] flex flex-col items-center gap-3">
                    <p className="text-blue_gray-400">BAZE UNIVERSITY</p>
                    <h2 className="text-center capitalize leading-[23px]">
                      3rd Baze University Professional Inaugural Lecture
                    </h2>
                    <div className="flex items-center gap-1">
                      <a href="/">
                        <p className="text-blue_gray-400 text-md">Read more</p>
                      </a>
                      <FaArrowAltCircleRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
        <div className="flex w-[5%] justify-center gap-2.5 md:w-full">
          <div className="h-[6px] w-[6px] rounded-[3px] bg-blue_gray-100" />
          <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-600_01" />
          <div className="h-[6px] w-[6px] rounded-[3px] bg-blue_gray-100" />
          <div className="h-[6px] w-[6px] rounded-[3px] bg-blue_gray-100" />
        </div>
      </div>
    </div>
  );
}

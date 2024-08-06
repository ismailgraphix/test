import React from "react";

import { FaArrowAltCircleRight, FaFile } from "react-icons/fa";

export default function ProgrammesOverview({
  userImage = "",
  programmesCountText = "10 Programmes",
  facultyName = "Faculty of Computing and Applied Sciences",
  facultyDescription = "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
  applyNowText = "Apply Now",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-7 border border-solid border-black-900_19 bg-white-a700`}
    >
      <img src={userImage} alt="ProgramsImage"  />
      <div className="mx-5 mb-[34px] flex flex-col gap-3 self-stretch">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <FaFile className="h-[18px] w-[18px]" />
            <span>{programmesCountText}</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1.5">
            <h3 className="text-gray-900 font-rethink font-bold">{facultyName}</h3>
            <p className="w-full leading-[150%] font-rethink">{facultyDescription}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-600_02 font-rethink cursor-pointer">{applyNowText}</span>
          <FaArrowAltCircleRight className="h-[14px] w-[14px]" />
        </div>
      </div>
    </div>
  );
}

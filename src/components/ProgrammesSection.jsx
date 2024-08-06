import { Suspense } from "react";

import imag01 from "../assets/Rectangle 8.png";
import imag02 from "../assets/Rectangle 8-10.png";
import imag03 from "../assets/Rectangle 8-11.png";
import imag04 from "../assets/Rectangle 8-7.png";
import imag05 from "../assets/Rectangle 8-13.png";
import imag06 from "../assets/Rectangle 8-1.png";
import imag07 from "../assets/Rectangle 8-4.png";
import imag08 from "../assets/Rectangle 8-6.png";
import ProgrammesOverview from "./ProgrammesOverview";

const facultyProgramsGrid = [
  {
    userImage: imag01,
    programmesCountText: "10 Programmes",
    facultyName: "Faculty of Engineering",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag06,
    programmesCountText: "5 Programmes",
    facultyName: "Faculty of Management and Social sciences",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag02,
    programmesCountText: "8 Programmes",
    facultyName: "Faculty of Environmental Sciences",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag03,
    programmesCountText: "10 Programmes",
    facultyName: "Faculty of Law",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag07,
    programmesCountText: "10 Programmes",
    facultyName: "Faculty of Basic Medical Sciences",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag05,
    programmesCountText: "10 Programmes",
    facultyName: "Faculty of Computing and Applied Sciences",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag08,
    programmesCountText: "10 Programmes",
    facultyName: "Postgraduate School",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
  {
    userImage: imag04,
    programmesCountText: "10 Programmes",
    facultyName: "Faculty for Foundation and Interdisciplinary Studies",
    facultyDescription:
      "Offers innovative programs in various engineering disciplines, equipping students with the practical skills available",
    applyNowText: "Apply Now",
  },
];

export default function ProgrammesSection() {
  return (
    <div className="mt-[86px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col items-start md:p-5">
        <h2 className="ml-2 text-gray-500 md:ml-0">OUR PROGRAMMES</h2>
        <div className="mt-[30px] grid grid-cols-1 gap-10 self-stretch px-2 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<div>Loading feed....</div>}>
            {facultyProgramsGrid.map((d, index) => (
              <ProgrammesOverview {...d} key={"facultiesGrid" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

import React, { Suspense } from "react";
import PreDegreeApplication from "../components/PreDegreeApplication";

// Data for admission info list
const admissionInfoList = [
  {
    preDegreeTitle: "Pre Degree Admission",
    descriptionText: (
      <>
        Fill the online Application Form <br />
        Await a confirmation email of approval
      </>
    ),
    applyNowText: "Apply Now",
  },
  {
    preDegreeTitle: "Undergraduate Admission",
    descriptionText: (
      <>
        Obtain Jamb Form and meet the cut-off point
        <br />
        Must have at least 5 credit in O'level (WAEC/NECO/NABTEB)
      </>
    ),
    applyNowText: "Apply Now",
  },
  {
    preDegreeTitle: "Postgraduate Admission",
    descriptionText: (
      <>
        Fill the online Application form <br />
        Await a confirmation email of approval
      </>
    ),
    applyNowText: "Apply Now",
  },
];

export default function AdmissionAndInfo() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-white-a700">
        {/* Admission Info List */}
        <div className="container-xs mt-[118px] md:p-5">
          <div className="flex flex-wrap justify-center gap-6 px-2">
            <Suspense fallback={<div>Loading feed...</div>}>
              {admissionInfoList.map((d, index) => (
                <PreDegreeApplication {...d} key={"predegreeList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

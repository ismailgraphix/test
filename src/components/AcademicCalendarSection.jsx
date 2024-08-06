import React, { Suspense } from "react";
import SemesterInfo from "./SemesterInfo";

const semesterGrid = [
  {
    semesterTitle: "Semester 23C",
    admissionAdvice: "Candidates are advised to apply for admission for their respective courses before the close of the admission session.",
    importantDates: (
      <>
        Application Deadline: 03 January, 2023
        <br />
        Semester Start Date: 05 September, 2022
      </>
    ),
  },
  {
    semesterTitle: "Semester 24A",
    admissionAdvice: "Candidates are advised to apply for admission for their respective courses before the close of the admission session.",
    importantDates: (
      <>
        Application Deadline: 03 January, 2023
        <br />
        Semester Start Date: 05 September, 2022
      </>
    ),
  },
  {
    semesterTitle: "Semester 24B",
    admissionAdvice: "Candidates are advised to apply for admission for their respective courses before the close of the admission session.",
    importantDates: (
      <>
        Application Deadline: 03 January, 2023
        <br />
        Semester Start Date: 05 September, 2022
      </>
    ),
  },
  {
    semesterTitle: "Semester 24C",
    admissionAdvice: "Candidates are advised to apply for admission for their respective courses before the close of the admission session.",
    importantDates: (
      <>
        Application Deadline: 03 January, 2023
        <br />
        Semester Start Date: 05 September, 2022
      </>
    ),
  },
];

export default function AcademicCalendarSection() {
  return (
    <div className="mt-24 flex flex-col items-center gap-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-rethink">BAZE UNIVERSITY</p>
          <h2 className="mt-2 text-4xl font-capitolium font-bold text-gray-900">Academic Calendar</h2>
          <p className="mt-2 text-center font-rethink">The University Runs 2 Semesters And 1 Summer Session</p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Suspense fallback={<div>Loading...</div>}>
              {semesterGrid.map((d, index) => (
                <SemesterInfo {...d} key={"semestersGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-300" />
    </div>
  );
}

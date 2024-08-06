import React from "react";

export default function SemesterInfo({ semesterTitle, admissionAdvice, importantDates }) {
  return (
    <div className="flex flex-col items-start w-full px-6 py-5 border border-gray-300 shadow-sm">
      <h4 className="font-semibold text-gray-800">{semesterTitle}</h4>
      <p className="mt-2 text-gray-600">{admissionAdvice}</p>
      <p className="mt-4 text-gray-600">
        <span className="font-semibold text-gray-800">Application Deadline:</span>
        <span className="text-gray-800"> 03 January, 2023</span>
        <br />
        <span className="font-semibold text-gray-800">Semester Start Date:</span>
        <span className="text-gray-800"> 05 September, 2022</span>
      </p>
    </div>
  );
}

import { Suspense } from "react";
import image03 from "../assets/admission2 1.png";
import UserProfile from "./UserProfile";
import image02 from "../assets/Group 23.svg";
import image04 from "../assets/Group 25.svg";
import image05 from "../assets/Group 26.svg";

const applicationProcessList = [
    {
        userImage: image02,
        headingText: "Apply for a Programme",
        descriptionText: "Visit the admission portal at portal.bazeuniversity.edu.ng/admission/, create an account and submit your application requirements depending on your course of study.",
    },
    {
        userImage: image04,
        headingText: "Gain Admission",
        descriptionText: "Wait for Admission approval. Note: it will be sent via your application e-mail.",
    },
    {
        userImage: image05,
        headingText: "Resume Semester",
        descriptionText: "Proceed to the Registry for collection of admission letter and registration.",
    },
];

export default function HowToApplySection() {
    return (
        <div className="flex flex-col md:flex-row items-start bg-gray-100 py-[76px] md:py-5">
            {/* Left Side */}
            <div className="md:w-1/2 px-4 md:px-8">
                <p className="text-gray-500 uppercase mb-4">
                    How to Apply
                </p>
                <h2 className="text-gray-900 text-4xl font-bold leading-tight mb-6">
                    Gain Admission into Baze University
                </h2>
                <div className="flex flex-col gap-6">
                    <Suspense fallback={<div>Loading...</div>}>
                        {applicationProcessList.map((d, index) => (
                            <UserProfile {...d} key={"applicationList" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src={image03}
                    alt="AdmissionImage"
                    className="w-full max-w-[600px] object-contain"
                />
            </div>
        </div>
    );
}

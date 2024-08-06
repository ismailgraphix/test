import { FaCircleArrowRight } from "react-icons/fa6";

export default function PreDegreeApplication({
    preDegreeTitle = "Pre Degree Admission",
    descriptionText = (
        <>
            Fill the online Application Form 
            <br />
            Await a confirmation email of approval 
        </>
    ),
    applyNowText = "Apply Now",
    ...props
}) {
    return (
        <div 
            {...props} 
            className={`${props.className} 
                flex flex-col justify-between 
                w-[100%] max-w-[350px] p-8
                bg-white border border-gray-300 
                shadow-lg transition-transform transform hover:scale-105 
                hover:shadow-xl`}
        >
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-capitolium font-capitolium text-gray-900 text-xl font-bold">
                    {preDegreeTitle}
                </h2>
                <p className="text-gray-700 font-rethink text-base leading-6">
                    {descriptionText}
                </p>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-gray-800 font-rethink text-lg font-medium">
                    {applyNowText}
                </span>
                <FaCircleArrowRight className="ml-2 text-gray-800"/>
            </div>
        </div>
    )
}

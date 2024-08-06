import image02 from "../assets/Group 23.svg";


export default function UserProfile({
  userImage = image02,
  headingText = "Apply for a Programme",
  descriptionText = "Visit the admission portal at portal.bazeuniversity.edu.ng/admission/, create an account and submit your application",
  ...props
}) {

    
  return (
    <div
      {...props}
      className={`${props.className} flex items-start gap-4 md:p-5`}
    >
      <img
        src={userImage}
        alt="Icon"
        className="h-[42px] w-[42px] object-contain"
      />
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold font-rethink text-gray-800">{headingText}</h4>
        <p className="text-gray-600 font-rethink leading-relaxed">
          {descriptionText}
        </p>
      </div>
    </div>
  );
}

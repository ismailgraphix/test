import EventImg from "../assets/Rectangle 57.png";
import EventDetails from "./EventDetails";
import eventImg01 from "../assets/Rectangle 59.png"; // Replace with actual image path
import eventImg02 from "../assets/Rectangle 61.png"; // Replace with actual image path

export default function EventsSection() {
  return (
    <div className="mt-[106px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col items-center md:p-5">
        <h2 className="font-bold text-gray-900 text-4xl font-capitolium">Events</h2>
        <div className="mt-[54px] flex flex-col lg:flex-row gap-10 self-stretch px-2">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-7">
              <div className="relative flex flex-col items-start">
                <img src={EventImg} alt="events" className="h-[314px] w-full object-cover md:h-auto" />
                <button className="absolute bottom-0 font-rethink left-0 mb-2 ml-2 bg-black bg-opacity-60 text-white p-2">
                  JUNE 3, 2024
                </button>
              </div>
              <div className="flex flex-col items-start gap-3">
                <a href="https://bazeuniversity.edu.ng/event" className="leading-8">
                  <h2 className="text-2xl font-bold font-rethink">3RD BAZE UNIVERSITY PROFESSORIAL INAUGURAL LECTURE</h2>
                </a>
                <h4 className="text-gray-500 font-rethink">3:30PM - 5:00PM | BAZE UNIVERSITY ABUJA</h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-[42px]">
            <EventDetails
              eventImg={eventImg01}
              eventDateButton="JUNE 9-11, 2024"
              eventTitle="FUTURE AFRICA SUMMIT"
              eventDetails="3:30PM - 5:00PM | BAZE UNIVERSITY ABUJA"
            />
            <EventDetails
              eventImg={eventImg02}
              eventDateButton="JUNE 3, 2024"
              eventTitle="ABUJA EDUCATORS CONFERENCE (CEBAR)"
              eventDetails="3:30PM - 5:00PM | BAZE UNIVERSITY ABUJA"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-gray-800 text-white rounded">View more Events</button>
        </div>
      </div>
    </div>
  );
}

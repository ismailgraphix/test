import React from 'react';

export default function EventDetails({
  eventImg,
  eventDateButton,
  eventTitle,
  eventDetails,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col lg:flex-row items-start lg:items-center`}>
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="relative">
          <img src={eventImg} alt="event" className="h-[202px] w-full object-cover" />
          <button className="absolute bottom-0 left-0 mb-2 ml-2 bg-black bg-opacity-60 font-rethink text-white p-2">
            {eventDateButton}
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-3.5 lg:mt-0 lg:ml-4 flex flex-col items-start gap-3.5">
        <h2 className="text-xl font-bold font-rethink">{eventTitle}</h2>
        <p className="leading-[150%] text-gray-500 font-rethink">{eventDetails}</p>
      </div>
    </div>
  );
}

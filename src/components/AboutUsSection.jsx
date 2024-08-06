
import logo01 from "../assets/Placeholder 2-1.png"
import logo from "../assets/Placeholder 1-1.png";

export default function AboutUsSection() {
  return (
    <>
    <div className="mt-[116px] flex flex-col items-center gap-[114px] self-stretch md:gap-[85px] sm:gap-[57px]">
      <div className="container-xs md:p-5">
        <div className="flex flex-col lg:flex-row items-start gap-[38px] px-2">
          <img
            src={logo}
            alt="about img"
            className="h-[422px] w-full lg:w-1/2 object-cover"
          />
          <div className="flex flex-1 flex-col gap-[30px] lg:pl-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[#999999]">DISCOVER BAZE UNIVERSITY</h3>
              <h2 className="font-capitolium text-gray-900 text-4xl lg:text-6xl">
                Why We Stand Out
              </h2>
            </div>
            <p className="leading-[150%] text-gray-700 font-rethink">
              Baze University delivers quality by having experienced international staff, superb teaching equipment, overseas external examiners, and first-rate buildings to guarantee standards.
              <br />
              <br />
              Baze aims to provide university education to international standards in Nigeria at about half the cost of sending a student to study abroad.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="min-w-[130px] bg-gray-800 text-white py-2 px-4 rounded transition-transform transform hover:scale-105">
                Read more
              </button>
              <button className="min-w-[116px] bg-gray-800 text-white py-2 px-4 rounded transition-transform transform hover:scale-105">
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-[116px] flex flex-col items-center gap-[114px] self-stretch md:gap-[85px] sm:gap-[57px]">
      <div className="container-xs md:p-5">
        <div className="flex flex-col lg:flex-row items-start gap-[38px] px-2">
          <div className="flex flex-1 flex-col gap-[30px] lg:pr-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[#999999] font-rethink">BAZE UNIVERSITY</h3>
              <h2 className="font-capitolium text-gray-900 text-4xl lg:text-5xl">
                Pro-Chancellor
              </h2>
            </div>
            <p className="leading-[150%] font-rethink text-gray-700">
              Our university offers a comprehensive and dynamic curriculum that Baze University delivers quality by having experienced international staff, superb teaching equipment, overseas external examiners, and first-rate buildings to guarantee standards.
              <br />
              <br />
              Baze aims to provide university education to international standards in Nigeria at about half the cost of sending a student to study abroad.
              <br />
              <br />
              Baze University delivers quality by having experienced international staff, superb teaching equipment, overseas external examiners, and first-rate buildings to guarantee standards.
              <br />
              <br />
              Baze aims to provide university education to international standards in Nigeria at about half the cost of sending a student to study abroad.
            </p>
            <p className="font-sacramento leading-[51px] text-gray-900 text-2xl mt-4">
              Sen. Baba Ahmed-Datti
            </p>
          </div>
          <img
            src={logo01}
            alt="Pro-Chancellor"
            className="h-[514px] w-full lg:w-1/2 object-cover"
          />
        </div>
      </div>
      <div className="h-px w-full bg-black-900_19" />
    </div>
    </>
  );
}

import pic01 from "../assets/Placeholder 4.png";
import pic02 from "../assets/Ellipse 18.png";

export default function TestimonialsSection() {
    return (
        <>
            <div className="mt-[102px] flex flex-col items-center gap-[136px] self-stretch md:gap-[102px] sm:gap-[68px]">
                <div className="container-xs px-1 md:p-5">
                    <div className="ml-1.5 flex flex-col items-center gap-[46px] md:ml-0">
                        <div className="flex w-[48%] flex-col items-center gap-1.5 md:w-full">
                            <div className="flex flex-col items-center">
                                <h2 className="font-capitolium font-bold text-4xl">Student and Alumni Stories</h2>
                            </div>
                            <div className="self-stretch">
                                <div className="flex flex-col items-center">
                                    <h4 className="relative mt-[-80px] !font-rethink text-3xl !text-gray-500">TESTIMONIALS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-[42px]">
                    <div className="relative h-[392px] w-full content-center md:h-auto">
                        <img src={pic01} alt="imag" className="mx-auto h-[552px] w-full flex-1 object-cover" />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-9 border border-solid border-gray-300 p-8">
                        <p className="self-stretch text-center font-rethink leading-[150%]">
                            My experience at Baze university introduced me to so many new concepts that changed my view of education and the world at large. The depth and detail of what I learned are far beyond my day-to-day experiences. I am proud to say I went through Baze University. 
                            - Rabi Bello Mohammed, Trade and Exchange Department (TED) at Central Bank of Nigeria (CBN)
                        </p>
                        <div className="flex w-full justify-end gap-3">
                            <div className="flex items-center gap-3">
                                <img src={pic02} alt="hii" className="h-[70px] w-[70px] rounded-full object-cover" />
                                <div className="flex flex-col items-start font-rethink">
                                    <h1>Rabi Bello Mohammed</h1>
                                    <p className="!text-gray-500">Baze Alumni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full self-stretch bg-gray-300" />
        </>
    );
}

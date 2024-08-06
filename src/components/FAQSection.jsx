import { 
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    Accordion,
    //AccordionItemState
} from "react-accessible-accordion";
import { FaCirclePlus } from "react-icons/fa6";

import 'primeicons/primeicons.css';

export default function FAQSection() {
    return (
        <>
            <div className="mb-3.5 mt-[72px] self-stretch">
                <div className="flex justify-center bg-gray-100 py-[76px] md:py-5">
                    <div className="container-xs mt-[30px] flex justify-between px-2 md:flex-col md:p-5">
                        <div className="flex w-[40%] flex-col items-start gap-2.5 md:w-full md:items-start">
                            <p className="text-gray-500">
                                FAQ
                            </p>
                            <p className="font-capitolium text-4xl leading-[110%] text-gray-900">
                                Frequently Asked Questions
                            </p>
                            <p className="font-rethink leading-[31px] text-gray-600">
                                Here's common frequently asked questions about Baze University
                            </p>
                        </div>
                        <div className="flex w-[55%] flex-col gap-4 md:w-full md:mt-8">
                            <Accordion className="flex flex-col gap-4">
                                {[...Array(6)].map((_, i) => (
                                    <AccordionItem uuid={i} key={`Expandable List${i}`}>
                                        <AccordionItemHeading className="w-full">
                                            <AccordionItemButton className="flex justify-between items-center py-4 border-b border-gray-300">
                                                <p className="text-lg text-gray-900">
                                                    What are the requirements to study at Baze University
                                                </p>
                                                <FaCirclePlus className="h-[18px] w-[18px] text-gray-900"/>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="py-4 text-gray-700">
                                                Baze University delivers quality by having experienced International staff, superb teaching equipment, overseas external examiners, and first-rate buildings to guarantee standards.
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

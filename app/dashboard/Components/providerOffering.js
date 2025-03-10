'use client'
import { useState } from "react";

const data = [
    {
        title: "Get your baby to sleep (Video Course - 3 hours)",
        price: "$100",
        description: "This course provides step-by-step guidance on how to improve your baby's sleep pattern.",
    },
    {
        title: "Newborn Sleep Training (Comprehensive Guide - 5 hours)",
        price: "$150",
        description: "Learn proven sleep training methods for newborns to help them sleep peacefully.",
    },
    {
        title: "Personalized Baby Sleep Consultation (1-on-1 Session)",
        price: "$200",
        description: "Get expert advice and personalized sleep plans tailored for your baby’s needs.",
    }
];

const ProviderOffering = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-y-4 bg-white border-2 rounded-lg p-4">
            <h1 className="text-xl font-semibold">My Offerings</h1>

            {data.map((item, index) => (
                <div key={index} className="border rounded-lg">

                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full text-lg font-medium  p-3 rounded-md"
                    >
                        {item.title}
                        <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>


                    {openIndex === index && (
                        <div className="p-3">
                            <p className="text-gray-700">{item.description}</p>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-semibold text-green-600">{item.price}</p>
                                <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Buy
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProviderOffering;
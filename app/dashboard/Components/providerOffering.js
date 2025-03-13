'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getValidImageUrl } from "@/utils/client/imageUrlProcess";
import { BuyingDetailsInBuyingTable } from "@/hooks/insertByingDeltailsInSupable";
const ProviderOffering = ({ offering, userId }) => {
    const router = useRouter();
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = async (item) => {



        await BuyingDetailsInBuyingTable(item, userId)
        router.push("/dashboard")
    }
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-y-4 bg-white border-2 rounded-lg p-4">
            <h1 className="text-xl font-semibold">My Offerings</h1>
            {offering.map((item, index) => (
                <div key={index} className="border rounded-lg">

                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full text-lg font-medium  p-3 rounded-md"
                    >   <Image
                            src={getValidImageUrl(item.item_thumbnail)}
                            width={40}
                            height={40}
                            className=" border-4 border-white"
                            alt="Provider"
                        />
                        <span>{item.title}</span>
                        <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>


                    {openIndex === index && (
                        <div className="p-3">
                            <p className="text-gray-700">{item.description}</p>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-semibold text-green-600">${item.price}</p>
                                <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => handleClick(item)}>
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
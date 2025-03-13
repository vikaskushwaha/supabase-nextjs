// "use client"
// import Image from "next/image";
// import providerImg from '../../../public/resources/images/janeImg.svg';
// import { useEffect } from "react";
// import { useUser } from "@/app/context/context";
// import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
// import ProviderInfo from "../providersInfo/page";
// import ProviderInfoData from "@/hooks/fetchProviderInfoBubble";
// import { getValidImageUrl } from "@/utils/client/imageUrlProcess";


// export default function ProfileHeader({ infoData }) {
//     // const { user } = useUser();
//     // const providerId = useProviderId(user?.id);
//     // const providerData = ProviderInfoData(providerId)

//     return (
//         <div className="w-full border-2 rounded-lg bg-white overflow-hidden relative">
//             <div className="absolute top-0 left-0 w-full h-20 bg-gray-100"></div>
//             <div className="relative flex flex-col md:flex-row items-center md:items-start p-6 space-y-4 md:space-y-0 md:space-x-6">
//                 <div className="flex flex-col items-center z-10 md:w-1/3">
//                     <Image
//                         src={getValidImageUrl(infoData[0]?.image)}
//                         width={144}
//                         height={144}
//                         className="h-36 w-36 rounded-full border-4 border-white"
//                         alt="Provider"
//                     />
//                     <h2 className="text-xl font-bold mt-3 text-center">{infoData[0]?.name}</h2>
//                     <p className="text-gray-600 text-center">{infoData[0]?.title}</p>
//                     <p className="text-gray-500 italic text-sm text-center">
//                         {infoData[0]?.certifications}
//                     </p>
//                 </div>


//                 <div className="md:w-2/3 w-full flex items-center justify-center px-6 z-10">
//                     <p className="text-lg font-medium text-gray-800 text-center md:text-left">
//                         Empathetic and experienced healthcare provider dedicated to personalized patient care.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import Image from "next/image";
import { useUser } from "@/app/context/context";
import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
import ProviderInfoData from "@/hooks/fetchProviderInfoBubble";
import { getValidImageUrl } from "@/utils/client/imageUrlProcess";

export default function ProfileHeader({ infoData }) {
    return (
        <div className="w-full rounded-lg bg-white overflow-hidden shadow-lg relative">
            {/* Background Header */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-gray-200 to-gray-100"></div>

            {/* Profile Content */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start p-8 space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image & Info */}
                <div className="flex flex-col items-center md:items-start z-10 text-center md:text-left">
                    <Image
                        src={getValidImageUrl(infoData[0]?.image)}
                        width={144}
                        height={144}
                        className="h-36 w-36 rounded-full border-4 border-white shadow-md"
                        alt="Provider"
                    />
                    <h2 className="text-2xl font-bold mt-4 text-gray-900">{infoData[0]?.name}</h2>
                    <p className="text-gray-600 text-lg">{infoData[0]?.title}</p>
                    <p className="text-gray-500 italic text-sm">{infoData[0]?.certifications}</p>
                </div>

                {/* Bio Section */}
                <div className="md:w-2/3 w-full text-center md:text-left">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Empathetic and experienced healthcare provider dedicated to personalized patient care.
                    </p>
                </div>
            </div>
        </div>
    );
}


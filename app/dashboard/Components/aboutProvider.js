// "use client"

// const parseText = (text) => {
//     const sections = [];
//     const regex = /\[b\](.*?)\[\/b\]\s*([\s\S]*?)(?=(\[b\]|$))/g;

//     let match;
//     while ((match = regex.exec(text)) !== null) {
//         sections.push({
//             title: match[1].trim(),
//             content: match[2].trim(),
//         });
//     }

//     return sections;
// };

// import { useUser } from "@/app/context/context";
// import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
// import ProfessionalInfo from "@/hooks/fetchProfessionalInfo";
// const AboutProvider = ({ rawText }) => {
//     const parsedData = parseText(rawText)
//     return (
//         <div className="p-6 bg-white max-w-3xl flex flex-col gap-4 rounded-lg ">
//             <h1 className="text-xl">About Me</h1>
//             {parsedData.map((section, index) => (
//                 <div key={index} className="mb-6">
//                     <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
//                         {section.title}
//                     </h2>
//                     <p className="text-gray-700 text-sm md:text-base">{section.content}</p>
//                 </div>
//             ))}
//         </div>
//     );


// }


// export default AboutProvider;

"use client";

const parseText = (text) => {
    const sections = [];
    const regex = /\[b\](.*?)\[\/b\]\s*([\s\S]*?)(?=(\[b\]|$))/g;

    let match;
    while ((match = regex.exec(text)) !== null) {
        sections.push({
            title: match[1].trim(),
            content: match[2].trim(),
        });
    }

    return sections;
};

import { useUser } from "@/app/context/context";
import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
import ProfessionalInfo from "@/hooks/fetchProfessionalInfo";

const AboutProvider = ({ rawText }) => {
    const parsedData = parseText(rawText);

    return (
        <div className="p-8 bg-white max-w-3xl mx-auto rounded-2xl shadow-lg">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
                About Me
            </h1>
            <div className="space-y-6">
                {parsedData.map((section, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                            {section.title}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutProvider;
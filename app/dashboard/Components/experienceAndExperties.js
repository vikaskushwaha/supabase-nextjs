// import Image from "next/image";

// // const experiences = [
// //     {
// //         title: "Educating first-time parents on common sleep issues",
// //         description:
// //             "As a first-time parent, ensuring your child gets a good night's sleep is essential for their overall health and development. However, sleep problems are a common issue faced by many children and can significantly impact their physical health and emotional, cognitive, and social development.",

// //     },
// //     {
// //         title: "Targeting first-time parents in their 20s",
// //         description:
// //             "Being a new parent is both exciting and challenging. If you are a first-time parent in your 20s, this journey involves learning how best to cater to your little one's needs.",

// //     },
// //     {
// //         title: "Target new moms with potentially autistic conditions",
// //         description:
// //             "Sleep is an essential component of overall health and well-being, yet it often presents substantial challenges for young autistic children. Understanding potential sleep-related issues is crucial for early intervention and support.",

// //     },
// //     {
// //         title: "Target new dads with potentially autistic children",
// //         description:
// //             "Parenting is a journey filled with countless uncertainties, and for new dads of potentially autistic children, these uncertainties can be particularly challenging. One significant issue that often arises is sleep problems in autistic children.",
// //     },
// // ];

// const ClinicalExperience = ({ allBlog }) => {



//     return (
//         <div className="w-full bg-white px-4 sm:px-6 md:px-16 py-8">

//             <h2 className="text-2xl font-bold text-gray-900 mb-4">My Clinical Experience and Expertise</h2>
//             <hr className="border-gray-300 mb-4" />

//             {/* Mobile View (Image Left, Text Right with Individual Horizontal Scroll) */}
//             <div className="block sm:hidden space-y-4">
//                 {allBlog.length > 0 && allBlog.map((exp, index) => (
//                     <div
//                         key={index}
//                         className="flex items-start border-b pb-4 overflow-x-auto space-x-4 scrollbar-hide"
//                         style={{ whiteSpace: "nowrap" }} // Enables horizontal scrolling
//                     >

//                         {/* <div className="w-16 h-16 flex-shrink-0">
//                             <Image src={exp.image} alt={exp.title} width={64} height={64} className="rounded-md object-cover" />
//                         </div> */}


//                         <div className="flex-1 min-w-[200px]"> {/* Ensures scrollable area */}
//                             <h3 className="text-lg font-semibold text-gray-900">{exp.purpose}</h3>
//                             <p className="text-gray-600 text-sm mt-1 line-clamp-2">{exp.draft}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="hidden sm:block">
//                 {allBlog.length > 0 && allBlog.map((exp, index) => (
//                     <div key={index} className="flex items-center space-x-4 border-b py-4">

//                         {/* <div className="w-16 h-16 flex-shrink-0">
//                             <Image src={exp.image} alt={exp.title} width={64} height={64} className="rounded-md object-cover" />
//                         </div> */}


//                         <div className="w-full">
//                             <h3 className="text-lg font-semibold text-gray-900">{exp.purpose}</h3>
//                             <p className="text-gray-600 text-sm line-clamp-2">{exp.draft}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ClinicalExperience;

import Image from "next/image";

const ClinicalExperience = ({ allBlog }) => {
    // Function to extract heading and clean content
    const extractHeadingAndContent = (text) => {
        const headingRegex = /\[b\](.*?)\[\/b\]/;
        const match = text.match(headingRegex);
        let heading = match ? match[1] : "";
        let content = text.replace(headingRegex, "").trim();
        heading = heading.replace(/[^a-zA-Z0-9\s]/g, "");
        content = content.replace(/[^a-zA-Z0-9\s]/g, "");
        return { heading, content };
    };

    return (
        <div className="w-full bg-white px-4 sm:px-6 md:px-16 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Clinical Experience and Expertise</h2>
            <hr className="border-gray-300 mb-4" />

            {/* Mobile View */}
            <div className="block sm:hidden space-y-4">
                {allBlog.length > 0 && allBlog.map((exp, index) => {
                    const { heading, content } = extractHeadingAndContent(exp.draft);
                    return (
                        <div key={index} className="flex items-start border-b pb-4 overflow-x-auto space-x-4 scrollbar-hide">
                            <div className="flex-1 min-w-[200px]">
                                <h4 className="text-md font-medium text-gray-700">{exp.purpose}</h4>
                                <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>

                                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block">
                {allBlog.length > 0 && allBlog.map((exp, index) => {
                    const { heading, content } = extractHeadingAndContent(exp.draft);
                    return (
                        <div key={index} className="flex items-center space-x-4 border-b py-4">
                            <div className="w-full">
                                <h4 className="text-md font-medium text-gray-700">{exp.purpose}</h4>
                                <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>

                                <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ClinicalExperience;
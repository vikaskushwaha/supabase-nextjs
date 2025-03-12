'use client'
import ProviderServicesOffering from "@/hooks/fetchOfferings";
import AboutProvider from "../Components/aboutProvider"
import CommonIssueThatProviderCanHelp from "../Components/commonIssueProviderHelp";
import ClinicalExperience from "../Components/experienceAndExperties";
import ProviderOffering from "../Components/providerOffering"
import ProfileHeader from "../Components/providerProfileHeader"
import SocialSite from "../Components/socialSite";

import { useUser } from "@/app/context/context";
import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
import ProfessionalInfo from "@/hooks/fetchProfessionalInfo";
import ProvidersBlog from "@/hooks/blogsOfProvider";
import ProviderInfoData from "@/hooks/fetchProviderInfoBubble";
// const ProviderInfo = () => {

//     const { user } = useUser();
//     const providerId = useProviderId(user?.id);
//     const professionalInfo = ProfessionalInfo(providerId)
//     const helpwith = professionalInfo?.[4]?.seokeywords || [];
//     console.log("helpwith", (helpwith[0]));



//     return (
//         <div className="w-full bg-[#f0fdf0] flex flex-col gap-y-4 px-4 sm:px-8 md:px-6 lg:px-32">
//             <div className="w-full py-6">
//                 <ProfileHeader />
//             </div>

//             <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-x-4">

//                 <div className="w-full md:w-2/3">
//                     <AboutProvider />
//                 </div>
//                 <div className="w-full md:w-1/3 flex flex-col gap-6 min-h-[300px]">
//                     <ProviderOffering />
//                     <CommonIssueThatProviderCanHelp seokeywords={helpwith[0]} />
//                 </div>
//             </div>
//             <div>
//                 <SocialSite />
//             </div>
//             <div>
//                 {/* <ClinicalExperience /> */}
//             </div>
//         </div>
//     );
// };

// export default ProviderInfo;

const ProviderInfo = () => {
    const { user } = useUser();
    const providerId = useProviderId(user?.id);
    const providerData = ProviderInfoData(providerId)
    const infoData = providerData || []
    const professionalInfo = ProfessionalInfo(providerId);
    const rawText = professionalInfo?.[4]?.aboutme || "";
    const offering = ProviderServicesOffering(providerId)
    const helpwith = professionalInfo?.[4]?.seokeywords || [];
    const seoKeywordsString = Array.isArray(helpwith) ? helpwith.join("\n") : "";
    const blog = ProvidersBlog(providerId);
    const allBlog = blog || [];
    return (
        <div className="w-full bg-[#f0fdf0] flex flex-col gap-y-4 px-4 sm:px-8 md:px-6 lg:px-32">
            <div className="w-full py-6">
                <ProfileHeader infoData={infoData} />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-x-4">
                <div className="w-full md:w-2/3">
                    {rawText && (<AboutProvider rawText={rawText} />)}

                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-6 min-h-[300px]">
                    {offering && (<ProviderOffering offering={offering} />)}

                    {seoKeywordsString && (
                        <CommonIssueThatProviderCanHelp seokeywords={seoKeywordsString} />
                    )}
                </div>
            </div>
            <div>
                <SocialSite />
            </div>
            <div>
                {allBlog && (<ClinicalExperience allBlog={allBlog} />)}

            </div>
        </div>
    );
};

export default ProviderInfo;
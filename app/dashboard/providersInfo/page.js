import AboutProvider from "../Components/aboutProvider"
import CommonIssueThatProviderCanHelp from "../Components/commonIssueProviderHelp";
import ClinicalExperience from "../Components/experienceAndExperties";
import ProviderOffering from "../Components/providerOffering"
import ProfileHeader from "../Components/providerProfileHeader"
import SocialSite from "../Components/socialSite";

// const ProviderInfo = () => {
//     return (
//         <div className="w-full bg-[#f0fdf0]  flex flex-col gap-y-1 px-32 ">
//             <div className="  w-full py-6 ">
//                 <ProfileHeader />
//             </div>
//             <div className="flex flex-row  gap-6 ">
//                 <AboutProvider />
//                 <div className="flex flex-col gap">
//                     <ProviderOffering />
//                     <ProviderOffering />
//                 </div>
//             </div>


//         </div>

//     )

// }
// export default ProviderInfo

// import AboutProvider from "../Components/aboutProvider";
// import ProviderOffering from "../Components/providerOffering";
// import ProfileHeader from "../Components/providerProfileHeader";

const ProviderInfo = () => {
    return (
        <div className="w-full bg-[#f0fdf0] flex flex-col gap-y-4 px-4 sm:px-8 md:px-6 lg:px-32">
            <div className="w-full py-6">
                <ProfileHeader />
            </div>


            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-x-4">

                <div className="w-full md:w-2/3">
                    <AboutProvider />
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-6 min-h-[300px]">
                    <ProviderOffering />
                    <CommonIssueThatProviderCanHelp />
                </div>
            </div>
            <div>
                <SocialSite />
            </div>
            <div>
                <ClinicalExperience />
            </div>
        </div>
    );
};

export default ProviderInfo;






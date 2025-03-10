
import Image from "next/image";
import youtube from "../../../public/resources/images/youtube.svg";
import insta from "../../../public/resources/images/inta.svg";
import tiktok from "../../../public/resources/images/tiktok-icon.jpg";

const SocialSite = () => {
    return (
        <div className="w-full bg-gray-100 border rounded-lg p-6 flex flex-col lg:flex-row items-center text-center lg:text-left">

            <div className="w-full lg:w-auto mb-4 lg:mb-0">
                <h2 className="text-lg font-semibold text-gray-900">Find Me On</h2>
            </div>


            <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-4 lg:gap-12 flex-1">
                <Image src={insta} alt="Instagram" width={50} height={50} className="w-12 h-12 md:w-16 md:h-16" />
                <Image src={youtube} alt="YouTube" width={50} height={50} className="w-12 h-12 md:w-16 md:h-16" />
                <Image src={tiktok} alt="TikTok" width={50} height={50} className="w-12 h-12 md:w-16 md:h-16" />
                <div className="flex flex-col items-center text-gray-700 text-sm lg:ml-12 mt-4 lg:mt-0">
                    <span className="text-xl font-semibold">+</span>
                    <p className="text-center">Add more channels</p>
                </div>

            </div>
        </div>
    );
};

export default SocialSite;


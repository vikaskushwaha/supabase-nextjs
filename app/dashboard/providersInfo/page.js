import AboutProvider from "../Components/aboutProvider"
import ProviderOffering from "../Components/providerOffering"
import ProfileHeader from "../Components/providerProfileHeader"

const ProviderInfo = () => {
    return (
        <div className="w-full bg-[#f0fdf0]  flex flex-col gap-y-1 px-20 ">
            <div className="  w-full py-6 ">
                <ProfileHeader />
            </div>
            <div className="flex flex-row justify-between¸">
                <AboutProvider />
                <div className="flex flex-col">
                    <ProviderOffering />
                </div>
            </div>


        </div>

    )

}
export default ProviderInfo

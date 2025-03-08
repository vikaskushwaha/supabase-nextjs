
import Image from "next/image";
import providerImg from '../../../public/resources/images/janeImg.svg';

export default function ProfileHeader() {
    return (
        <div className="w-full border-2 rounded-lg bg-white overflow-hidden relative">
            {/* Grey Background Strip (Fixed Height) */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gray-100"></div>

            {/* Main Content (Side by Side) */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start p-6 space-y-4 md:space-y-0 md:space-x-6">

                {/* Profile Image */}
                <div className="flex flex-col items-center z-10 md:w-1/3">
                    <Image
                        src={providerImg}
                        className="h-36 w-36 rounded-full border-4 border-white"
                        alt="Provider"
                    />
                    <h2 className="text-xl font-bold mt-3 text-center">Jane Smith</h2>
                    <p className="text-gray-600 text-center">Pediatric Sleep Therapist, Registered Nurse</p>
                    <p className="text-gray-500 italic text-sm text-center">
                        International Board Certified Sleep Consultant
                    </p>
                </div>

                {/* Text on the Grey Strip (On the Right) */}
                <div className="md:w-2/3 w-full flex items-center justify-center px-6 z-10">
                    <p className="text-lg font-medium text-gray-800 text-center md:text-left">
                        Empathetic and experienced healthcare provider dedicated to personalized patient care.
                    </p>
                </div>
            </div>
        </div>
    );
}


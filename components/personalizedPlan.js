import { useState } from 'react';
import Image from 'next/image';
import pdfpicture from '../public/resources/images/pdfPicture.svg';
import voiceIcon from '../public/resources/images/voiceIcon.svg';
import axios from 'axios';

const PersonalizedPlan = () => {

    const [challenges, setChallenges] = useState('');
    const [goals, setGoals] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ goals, challenges });

        const response = await axios.post('/api/proxy', {
            challenges,
            goals
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-[#f0fdf0]">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <h6 className="font-semibold text-xl tracking-wide">The 6-12 Month Baby Sleep Guide: By Jane Smith</h6>
                    <div className="w-8 h-8">
                        <Image src={pdfpicture} alt="pdf" height={40} width={40} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <h6 className="font-normal text-sm">Patient Challenges</h6>
                    <div className="w-full p-2 flex flex-row gap-x-3">
                        <textarea
                            className="w-full bg-white p-2"
                            placeholder="Type your challenges..."
                            rows="4"
                            value={challenges}
                            onChange={(e) => setChallenges(e.target.value)}
                        />
                        <div className="w-8 h-8">
                            <Image src={voiceIcon} alt="voiceIcon" height={40} width={40} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <h6 className="font-normal text-sm">Goal</h6>
                    <div className="w-full p-2 flex flex-row gap-x-3">
                        <textarea
                            className="w-full bg-white p-2"
                            placeholder="Type your goals..."
                            rows="3"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                        />
                        <div className="w-8 h-8">
                            <Image src={voiceIcon} alt="voiceIcon" height={40} width={40} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="mb-8 bg-[#3c4e3d] align-middle text-center p-3 w-fit rounded-lg">
                    <p className="text-white font-semibold text-lg">Personalize My Guide</p>
                </button>
            </div>
        </form>
    );
};

// const convertBlobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(blob);
//         reader.onloadend = () => resolve(reader.result.split(',')[1]); // Extract base64 part
//         reader.onerror = reject;
//     });
// };
export default PersonalizedPlan;
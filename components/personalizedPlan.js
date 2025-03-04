import { useEffect, useState } from 'react';
import Image from 'next/image';
import pdfpicture from '../public/resources/images/pdfPicture.svg';
import voiceIcon from '../public/resources/images/voiceIcon.svg';
import axios from 'axios';
import { GetPdfData } from '@/hooks/fetchPdfFromsupabase';
import { useUser } from '@/app/context/context';
import { UpdatedPersonalizePlanSupabase } from '@/hooks/updatedPersonalizePlanInSupabse';
const PersonalizedPlan = () => {
    const { personalizedPlan, updatedId, setUpdatedId } = useUser();
    const [challenges, setChallenges] = useState('');
    const [goals, setGoals] = useState('');
    // console.log("#### ", updatedId);

    const handleSubmit = async (e) => {
        const patient_name = personalizedPlan?.[0]?.patient_name;
        const patinet_age = personalizedPlan?.[0]?.patient_age_year + " " + "years " + "and" + personalizedPlan?.[0]?.patient_age_months + " months"
        e.preventDefault();
        personalizedPlan[0].challenges = challenges
        const data = await GetPdfData();
        const file = new File([data], "ebook.pdf", { type: "application/pdf" });
        const formData = new FormData();
        formData.append("files", file);
        formData.append("context", "Follow these instructions **precisely** and do not generate any information that is not explicitly mentioned in the extracted content")
        formData.append("instruction", `**Context:**\n For patient or client's name, age, challenges, and goals shared below:
You are assisting in creating a **personalized daily checklist** for a patient based on their challenges, goals, and an extracted medical guide.  
The **extracted content** from the file is the only acceptable source of information. 
**Do not infer new information or add recommendations that are not explicitly mentioned.** 
Use **direct quotes or reword in simpler language (8th grade level) without losing meaning.**
Maintain **postive and encouraging** tone of writing.  
Organize each task, reminder, or checklist item in a group under a section heading with bolded bbcode. 
Put a delimiter [#]  before each section's bbcode.
Each task, reminder, or checklist item must be a few words, personalized for personal connection, and start with a delimiter [*].\n challenges: ${challenges}\n golas: ${goals} \n patient_name: ${patient_name}\n patient_age: ${patinet_age} \n Do not include other characters, like asterisks, braces, etc., anywhere in your output.\n You must ensure the right bbcodes.
**Output must strictly follow the extracted guidebook content.**  
Do not introduce new medical or healthcare advice, lifestyle recommendations, or assumptions.  `)
        // formData.forEach((value, key) => {
        //     console.log(key, value);
        // });

        const response = await axios.post('/api/proxy', formData, {
            headers: {
                'Content-Type': 'mulipart/from-data'
            }
        });
        console.log(response);
        const new_plan = response.data.response
        const IdOfNewPlan = await UpdatedPersonalizePlanSupabase(personalizedPlan[0], new_plan)
        // console.log("idofnewaone 1", IdOfNewPlan);
        if (IdOfNewPlan) {
            // console.log("idofnewaone", IdOfNewPlan);
            setUpdatedId(IdOfNewPlan)
            console.log("setupdate is got updated");

        }

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
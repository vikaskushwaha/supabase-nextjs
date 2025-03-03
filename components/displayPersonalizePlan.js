
import { useUser } from "@/app/context/context";
import { PatientChallenges } from "./patientChallengesCard";
import { PersonalizedCard } from "./personalizedCard";
import { useEffect, useState } from "react";
import { GetPdfData } from "@/hooks/fetchPdfFromsupabase";
import axios from "axios";
import { UpdatedPersonalizePlanSupabase } from "@/hooks/updatedPersonalizePlanInSupabse";
export const DisplayPersonalizePlan = () => {
    const [feedback, setFeedBack] = useState("")
    const { personalizedPlan, setUpdatedId } = useUser();
    // console.log("newPlan", personalizedPlan);

    const pdfUrl = personalizedPlan?.[0]?.hcare_resource_file || ""
    const fixUrl = (url) => (url.startsWith("//") ? `https:${url}` : url);
    const fixedUrl = fixUrl(pdfUrl)

    const updatePlan = async () => {

        const challenges = personalizedPlan?.[0]?.challenges
        const goals = personalizedPlan?.[0]?.goals;
        let personalized_plan = personalizedPlan?.[0]?.personalized_plan
        const data = await GetPdfData()
        const file = new File([data], "ebook.pdf", { type: "application/pdf" });
        const formData = new FormData();
        formData.append("files", file)
        formData.append("context", "Use the extracted content for your response, be very precise");
        formData.append("instruction", `Follow each instruction 100% precisely \n Starting with the previous_day's_plan, patient feedback, patient challenges, and goals shared below:
First, create a personalized list of tasks, reminders, and checklists for today for the patient's following challenges and goals \n Organize each task, reminder, or checklist item in a group under a section heading with bolded bbcode. 
Put a delimiter [#]  before each section's bbcode.\n Each task, reminder, or checklist item must be a few words, personalized for personal connection, and start with a delimiter [*].\n challenges: ${challenges}. goals :${goals} Minimize interactionsprevious_day's_plan: ${personalized_plan}\n Follow these tailored steps to help ${personalizedPlan?.[0]?.name} gradually adjust and promote better sleep habits! patient_feedback: ${feedback}\nIf the patient_feedback is not empty and only If the patient_feedback is consistent with the rest of the details, address it directly through the tasks and reminders. Otherwise, just output the previous_day's_plan again`)
        const response = await axios.post('/api/proxy', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        const new_plan = response.data.response
        // console.log(new_plan);
        const IdOfNewPlan = await UpdatedPersonalizePlanSupabase(personalizedPlan[0], new_plan)
        setUpdatedId(IdOfNewPlan)

    }

    return (

        <div className="p-6 bg-[#f0fdf0]">
            <div className="flex flex-col gap-y-6">
                <h5>Patient Challenges</h5>
                <div className="">
                    <PatientChallenges />
                </div>
                <h5>Goals</h5>
                <p className="text-blue-600">{personalizedPlan?.[0]?.goals || "No goals available"}</p>
                <h4 className="text-blue-800 text-lg" > My Personalized Plan</h4>
                <PersonalizedCard />
                <textarea
                    className="w-full bg-white p-4"
                    placeholder="Type your feedback "
                    rows="3"
                    value={feedback}
                    onChange={(e) => setFeedBack(e.target.value)}
                />
                <div className="flex flex-row justify-between">
                    <button className="bg-green-600 rounded-md">
                        <p className="p-4">Share with my provider</p>
                    </button>

                    <button onClick={updatePlan}>
                        <p className="">Update my plan  </p>
                    </button>

                </div>

                <div className="w-full h-screen">
                    <iframe
                        src={fixedUrl}
                        className="w-full h-full"
                        style={{ border: "none" }}
                    />

                </div>
            </div>

        </div >
    )
}


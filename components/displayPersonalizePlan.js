
import { useUser } from "@/app/context/context";
import { PatientChallenges } from "./patientChallengesCard";
import { PersonalizedCard } from "./personalizedCard";
import { useEffect, useState } from "react";
import PDFViewer from "./pdfdisplay";
export const DisplayPersonalizePlan = () => {
    const [feedback, setFeedBack] = useState("")
    const pdfUrl = personalizedPlan?.[0]?.hcare_resource_file || ""
    const fixUrl = (url) => (url.startsWith("//") ? `https:${url}` : url);
    const fixedUrl = fixUrl(pdfUrl)


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

                    <button>
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


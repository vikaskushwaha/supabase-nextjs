
import { useUser } from "@/app/context/context";
import { useEffect } from "react";
export const PatientChallenges = () => {
    const { personalizedPlan } = useUser();

    let patientChallenges;
    if (personalizedPlan) {
        patientChallenges = personalizedPlan[0].challenges
    }

    return (
        <div className="flex-col gap-y-3">
            {patientChallenges ? (
                <ul className="flex flex-col gap-3">
                    {patientChallenges.split("\n").map((line, index) => {
                        return (<div key={index} className="text-blue-600">{line}</div>)
                    })}
                </ul>
            ) : (
                <p>No challenges found.</p>
            )}
        </div>
    );


}


import { useState, useEffect } from "react";
import { useUser } from "@/app/context/context"
export const PersonalizedCard = () => {
    const { personalizedPlan } = useUser();
    let personalizedPlanOfClient
    if (personalizedPlan) {
        personalizedPlanOfClient = personalizedPlan[0].personalized_plan
    }
    const [checkedStates, setCheckedStates] = useState([]);

    // Reset checkboxes whenever the plan changes
    useEffect(() => {
        setCheckedStates([]); // Resets the state, making all checkboxes unticked
    }, [personalizedPlanOfClient]);

    const handleCheckboxChange = (index) => {
        setCheckedStates((prev) => {
            const newStates = [...prev];
            newStates[index] = !newStates[index]; // Toggle the checkbox state
            return newStates;
        });
    };
    return (

        // <div className=" rounded-lg ">

        //     {personalizedPlanOfClient ? (
        //         <div className="space-y-6">
        //             {personalizedPlanOfClient.split("\n").map((line, index) => {
        //                 if (line.startsWith("[#][b]")) {
        //                     // Extract title inside [b]...[/b]
        //                     const title = line.replace("[#][b]", "").replace("[/b]", "").trim();
        //                     return <h3 key={index} className="font-semibold text-lg text-gray-800 mt-4">{title}</h3>;
        //                 } else if (line.startsWith("[*]")) {
        //                     return (
        //                         <div key={index} className="flex items-start space-x-3">
        //                             <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded" />
        //                             <p className="text-gray-700">{line.replace("[*] ", "").trim()}</p>
        //                         </div>
        //                     );
        //                 }
        //                 return null;
        //             })}
        //         </div>
        //     ) : (
        //         <p className="text-gray-500">No challenges found.</p>
        //     )}
        // </div>
        <div className="rounded-lg">
            {personalizedPlanOfClient ? (
                <div className="space-y-6">
                    {personalizedPlanOfClient.split("\n").map((line, index) => {
                        if (line.startsWith("[#][b]")) {
                            // Extract title inside [b]...[/b]
                            const title = line.replace("[#][b]", "").replace("[/b]", "").trim();
                            return <h3 key={index} className="font-semibold text-lg text-gray-800 mt-4">{title}</h3>;
                        } else if (line.startsWith("[*]")) {
                            return (
                                <div key={index} className="flex items-start space-x-3">
                                    <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded"
                                        checked={checkedStates[index] || false} // Controlled checkbox
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <p className="text-gray-700">{line.replace("[*] ", "").trim()}</p>
                                </div>
                            );
                        } else if (line.trim() !== "") {
                            // Render standalone text (e.g., final paragraph)
                            return <p key={index} className="text-gray-700">{line.trim()}</p>;
                        }
                        return null;
                    })}
                </div>
            ) : (
                <p className="text-gray-500">No challenges found.</p>
            )}
        </div>
    )
}
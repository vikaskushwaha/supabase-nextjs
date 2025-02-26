
'use server';
import axios from 'axios';
import searchAndInsertInsupabsePersonalizedPlan from './insertPersonalizedPlanInSupabse'; // Ensure this is also server-compatible

export async function fetchPersonalizedPlanOfUser(patient_idFromBubble, email) {
    try {
        const response = await axios.get(
            "https://early-invite-q324.vybri.ai/version-test/api/1.1/obj/Personalized Plans",
            {
                headers: {
                    Authorization: `Bearer 0e7dfb1050c9dffb8861016fa1e4aaaa`,
                },
            }
        );

        await searchAndInsertInsupabsePersonalizedPlan(patient_idFromBubble, email, response.data.response.results);


        return response.data.response.results;
    } catch (error) {
        console.error("Error fetching data from Bubble:", error.message);
        throw new Error("Error fetching data from Bubble");
    }
}

export default fetchPersonalizedPlanOfUser


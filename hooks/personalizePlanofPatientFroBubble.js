
// 'use server';
// import axios from 'axios';
// import searchAndInsertInsupabsePersonalizedPlan from './insertPersonalizedPlanInSupabse';

// export async function fetchPersonalizedPlanOfUser(patient_idFromBubble, email) {
//     try {
//         const response = await axios.get(
//             "https://early-invite-q324.vybri.ai/api/1.1/obj/Personalized Plans",
//             {
//                 headers: {

//                     Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUBBLE_API_KEY}`,
//                 },
//             }
//         );
//         console.log(response);

//         await searchAndInsertInsupabsePersonalizedPlan(patient_idFromBubble, email, response.data.response.results);


//         return response.data.response.results;
//     } catch (error) {
//         console.error("Error fetching data from Bubble:", error.message);
//         throw new Error("Error fetching data from Bubble");
//     }
// }

// export default fetchPersonalizedPlanOfUser

'use server';
import axios from 'axios';
import searchAndInsertInsupabsePersonalizedPlan from './insertPersonalizedPlanInSupabse';

export async function fetchPersonalizedPlanOfUser(patient_idFromBubble, email) {
    try {
        let allResults = [];
        let cursor = 0; // Start from the first page
        let hasMore = true;
        console.log(email);

        while (hasMore) {
            const response = await axios.get(
                "https://early-invite-q324.vybri.ai/api/1.1/obj/Personalized Plans",
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUBBLE_API_KEY}`,
                    },
                    params: {
                        limit: 100, // Fetch 100 records per request
                        cursor, // Bubble might use `cursor` or `offset`
                    },
                }
            );

            if (response.data.response && response.data.response.results.length > 0) {
                allResults = [...allResults, ...response.data.response.results];
                cursor += response.data.response.results.length; // Move to the next set
            } else {
                hasMore = false; // No more data, stop fetching
            }
        }
        console.log("Total Plans Fetched:", allResults.length);
        await searchAndInsertInsupabsePersonalizedPlan(patient_idFromBubble, email, allResults);

        return allResults;
    } catch (error) {
        console.error("Error fetching data from Bubble:", error.message);
        throw new Error("Error fetching data from Bubble");
    }
}

export default fetchPersonalizedPlanOfUser;


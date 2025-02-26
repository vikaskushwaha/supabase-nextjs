// import axios from 'axios';
// const VerifyAndGetDataFromBubble = async (email) => {
//     try {
//         const constraints = JSON.stringify([
//             {
//                 key: "email",
//                 constraint_type: "equals",
//                 value: email,
//             },
//         ]);

//         const patientInfo = await axios.get(
//             `https://early-invite-q324.vybri.ai/version-test/api/1.1/obj/Patient info?constraints=${encodeURIComponent(constraints)}`
//         );
//         return patientInfo;

//     } catch (error) {
//         console.error("Error fetching data from Bubble:", error);
//         return null;
//     }
// };

// export default VerifyAndGetDataFromBubble;
// utils/verifyAndGetDataFromBubble.js
export default async function verifyAndGetDataFromBubble(email) {
    console.log("hi");

    try {
        const constraints = JSON.stringify([
            {
                key: "email",
                constraint_type: "equals",
                value: email,
            },
        ]);

        const response = await fetch(
            `https://early-invite-q324.vybri.ai/version-test/api/1.1/obj/Patient info?constraints=${encodeURIComponent(constraints)}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Return the parsed JSON response
    } catch (error) {
        console.error('Error fetching data from Bubble:', error);
        return null;
    }
}
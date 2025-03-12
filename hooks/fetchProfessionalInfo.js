

"use client"
import { createClient } from "@/utils/supabse/client";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfessionalInfo = (providerId) => {
    const [professionalInfo, setProfessionalInfo] = useState("");
    useEffect(() => {
        async function fetch() {
            const res = await axios.get('https://early-invite-q324.vybri.ai/api/1.1/obj/Professional profile',
                {
                    headers: {

                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUBBLE_API_KEY}`,
                    },
                }
            )

            if (res.data.response.results) {
                const professionalData = res.data.response.results;
                const professional = professionalData.filter(professionalData => professionalData["Created By"] === providerId)
                console.log(professional);

                setProfessionalInfo(professional)

            }
        }
        fetch();
    }, [providerId])
    return professionalInfo;
}

export default ProfessionalInfo;
"use client"
import { createClient } from "@/utils/supabse/client";
import axios from "axios";
import { useEffect, useState } from "react";

const ProviderInfoData = (providerId) => {
    const [providerInfo, setProviderInfo] = useState("");
    useEffect(() => {
        async function fetch() {
            const res = await axios.get('https://early-invite-q324.vybri.ai/api/1.1/obj/Provider Info',
                {
                    headers: {

                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUBBLE_API_KEY}`,
                    },
                }
            )
            // console.log("datafromUseeffect", res.data.response.results);

            if (res.data.response.results) {
                const providersData = res.data.response.results;
                const provider = providersData.filter(providersData => providersData["Created By"] === providerId)
                setProviderInfo(provider)
            }
        }
        fetch();
    }, [providerId])
    return providerInfo;
}

export default ProviderInfoData;

"use client"
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabse/client";

const useProviderId = (userId) => {

    const [providerId, setProviderId] = useState(null);
    useEffect(() => {
        if (!userId) {
            return;
        }
        const fetchProviderId = async () => {
            const supabase = createClient();
            try {
                const { data, error } = await supabase
                    .from("Patient_info")
                    .select("provider")
                    .eq("id", userId)

                // console.log("datafrom", data[0].provider);

                if (error) throw error;

                setProviderId(data[0].provider);
            } catch (err) {
                console.log(err);


            }

        };

        fetchProviderId();
    }, [userId]);
    // console.log(providerId);

    return providerId;
};

export default useProviderId;
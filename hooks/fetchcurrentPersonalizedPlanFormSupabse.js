'use server'
import { createClient } from '@/utils/supabse/server'

const fetchPersonalizedPlanOfUserFromsupabase = async (id) => {
    console.log("id", id);

    const supabase = await createClient()
    const { data: patientInfo, error: patientError } = await supabase
        .from("Patient_info")
        .select("_id")
        .eq("id", id)
        .single();

    console.log(patientInfo._id);
    const patient_id = patientInfo._id;
    const { data, error } = await supabase
        .from("Personalized_Plans")
        .select("*")
        .eq("patient_id", patient_id)
        // .order("plan_number", { ascending: false })
        .eq("plan_number", 2)
        .limit(1);

    console.log(data);

    return data
}

export default fetchPersonalizedPlanOfUserFromsupabase;
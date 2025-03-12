import { createClient } from '@/utils/supabse/server'

const InsertPatientInfoInSupabase = async (patientId, patientInfo) => {
    const supabase = await createClient()


    try {
        const jsonData = typeof patientInfo.json === "function" ? await patientInfo.json() : patientInfo;
        const patients = jsonData.response.results.map(patient => ({
            id: patientId,
            Modified_Date: patient["Modified Date"],
            Created_Date: patient["Created Date"],
            Created_By: patient["Created By"],
            age_years: patient["age-years"],
            provider: patient.provider,
            email: patient.email,
            name: patient.name,
            phone: patient.phone,
            relationship: patient.relationship,
            caretaker_name: patient.caretaker_name,
            gender: patient.gender,
            image: patient.image,
            status: patient.status,
            _id: patient._id,
            age_months: patient["age-months"],
            engagement_type: patient.engagement_type
        }));
        const { data, error } = await supabase
            .from('Patient_info')
            .insert(patients)
            .select();
        console.log("from insertModule", data);

        if (error) {
            console.error("Supabase Insert Error:", error);
        } else {
            console.log("Inserted Data:", data);
        }
    } catch (err) {
        console.error("Error inserting patient info:", err);
    }
};
export default InsertPatientInfoInSupabase
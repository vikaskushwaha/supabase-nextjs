'use server'
import { createClient } from "@/utils/supabse/server";
export const UpdatedPersonalizePlanSupabase = async (pervious_plan, newPersonalizedPlan) => {
    const supabase = await createClient();
    try {
        const { id, ...updatedPlan } = pervious_plan;
        // console.log("previousPlanswith uupdate_plan ", updatedPlan);
        updatedPlan.plan_number = updatedPlan.plan_number + 1;
        updatedPlan.personalized_plan = newPersonalizedPlan;
        updatedPlan.type = "Patient Updated"
        updatedPlan.Created_date = new Date().toISOString().split("T")[0];
        const { data, error } = await supabase.from('Personalized_Plans').insert(updatedPlan).select();

        if (error) {
            throw new Error(`Supabase Insert Error: ${error.message}`);
        }

        // console.log("ofsubabse", data[0].id);

        return data[0].id

    } catch (error) {
        console.error("An error occurred:", error.message || error);
        return null;

    }

}
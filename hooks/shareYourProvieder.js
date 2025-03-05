'use server'
import { createClient } from "@/utils/supabse/server"
export const ShareYourFeedToProvider = async (personalizedPlan) => {
    const supabase = await createClient();
    try {
        const { id, ...updatedPlan } = personalizedPlan;
        updatedPlan.type = "Provider review"
        updatedPlan.Created_date = new Date().toISOString().split("T")[0];
        updatedPlan.plan_number = updatedPlan.plan_number + 1;
        console.log("updatedPlan", updatedPlan);

        const { data, error } = await supabase.from('Personalized_Plans').insert(updatedPlan).select();

        if (error) {
            throw new Error(`Supabase Insert Error: ${error.message}`);
        }
        console.log(data[0].id);
        return data[0].id

    } catch (error) {
        console.error("An error occurred:", error.message || error);
        return null;
    }
}
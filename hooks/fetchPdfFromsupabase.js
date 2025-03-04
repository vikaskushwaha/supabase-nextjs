'use server'
import { createClient } from "@/utils/supabse/server";

export const GetPdfData = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from('guide_data').download('pdf_guidebooks/Demo Data_ 2-3 Years Old Sleep Guide .pdf')
    return data;

}

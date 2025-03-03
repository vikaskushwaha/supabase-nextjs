'use server'
import { createClient } from "@/utils/supabse/server";

export const GetPdfData = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from('guide_data').download('pdf_guidebooks/6-12 months ebook demo - Jane Smith.pdf')
    return data;

}

'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabse/server'
import VerifyAndGetDataFromBubble from '@/hooks/verifyDataFrombubble'
import InsertPatientInfoInSupabase from '@/hooks/insertPatientInfoInsupabase'
import fetchPersonalizedPlanOfUser from '@/hooks/personalizePlanofPatientFroBubble'

export async function signup(fullName, email, password) {
    const supabase = await createClient()
    const patientInfo = await VerifyAndGetDataFromBubble(email)
    console.log(patientInfo.response.count);
    if (patientInfo && patientInfo.response.count > 0) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })
        if (error) {
            redirect('/error')
        }
        const patientId = data.user.id
        const patient_idFromBubble = patientInfo.response.results[0]._id
        await InsertPatientInfoInSupabase(patientId, patientInfo)
        await fetchPersonalizedPlanOfUser(patient_idFromBubble, email)

        revalidatePath('/', 'layout')
        return redirect('/dashboard')
    }

}

export async function loginWithPassword(email, password) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        redirect('/')
    }
    return data
}
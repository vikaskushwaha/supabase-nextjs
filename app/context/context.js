
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabse/client";
import { loginWithPassword } from "../login/actions";
import fetchPersonalizedPlanOfUser from "@/hooks/personalizePlanofPatientFroBubble";
import fetchPersonalizedPlanOfUserFromsupabase from "@/hooks/fetchcurrentPersonalizedPlanFormSupabse";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [personalizedPlan, setPersonalizedPlan] = useState(null);
    const [updatedId, setUpdatedId] = useState("")
    const supabase = createClient();
    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.auth.getSession()
            if (data && data.session) {
                setUser(data.session.user)
                const plan = await fetchPersonalizedPlanOfUserFromsupabase(data.session.user.id)
                if (plan) {
                    setPersonalizedPlan(plan)

                }
            }
        }
        fetchData()
    }, [updatedId])
    const login = async (email, password) => {
        try {
            const res = await loginWithPassword(email, password)
            console.log(res.user);

            if (res.user) {
                setUser(res.user);
            }
            if (res.user.id) {
                const plan = await fetchPersonalizedPlanOfUserFromsupabase(res.user.id);
                if (plan) {
                    setPersonalizedPlan(plan);
                    console.log("plan has been set");

                }
            }
        } catch (error) {
            console.error("Login failed", error);
            return { error };
        }
    };
    const logOut = async () => {
        const res = await supabase.auth.signOut();
        setPersonalizedPlan(null)
        setUser(null)
        setUpdatedId(null)
        console.log("userLogOut");

    }

    return (
        <UserContext.Provider value={{ user, login, personalizedPlan, updatedId, setUpdatedId, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

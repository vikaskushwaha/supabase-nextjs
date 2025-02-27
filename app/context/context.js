
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
    const supabase = createClient();

    useEffect(() => {
        console.log("hi");
        async function fetchData() {
            const { data, error } = await supabase.auth.getSession()


            console.log(data.session.user.id);
            if (data.session.user.id) {
                const plan = await fetchPersonalizedPlanOfUserFromsupabase(data.session.user.id)
                if (plan) {
                    setPersonalizedPlan(plan)
                }
            }
        }
        fetchData()
    }, [])
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


    return (
        <UserContext.Provider value={{ user, login, personalizedPlan }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

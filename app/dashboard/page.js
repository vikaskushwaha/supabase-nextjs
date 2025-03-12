
'use client'

import Cards from "@/components/cards";
import GoalsAndChallenges from "@/components/golsAndChallenge";
import PersonalizedPlan from "@/components/personalizedPlan";

import { useEffect, useState } from "react";
import { useUser } from "../context/context";
import { DisplayPersonalizePlan } from "@/components/displayPersonalizePlan";
import { LoaderScreen } from "@/components/loaderScreen";
import { useRouter } from "next/navigation";

const Home = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { personalizedPlan } = useUser();
    // console.log("personalizeplan", personalizedPlan);
    let type;
    let name;
    if (personalizedPlan) {
        type = personalizedPlan[0].type


        name = personalizedPlan[0].patient_name
    }

    const handleMyProvider = () => {

        router.push('/dashboard/providersInfo')
    }
    return (

        <div className="w-full relative">
            {loading && (
                <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-white bg-opacity-40 z-50">
                    <LoaderScreen />
                    <h1 className="text-lg text-black font-semibold tracking-wider ">Creating New Plan </h1>
                </div>
            )}
            <div className="flex flex-col my-6 mx-4 md:mx-10 gap-y-8 py-6">
                <div className="flex flex-col gap-y-3 mb-6">
                    <div className="flex justify-start">
                        <p className="text-xl md:text-2xl font-extrabold tracking-widest">Welcome, {name}</p>
                    </div>
                </div>

                {/* Grid with all cards on the same row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Cards
                        heading="Subscriptions and Purchases"
                        title="The 6-12 Month Baby Sleep Guide"
                        subtitle="By Jane Smith"
                        bgColor="bg-green-100"
                    />
                    <Cards
                        heading="My Health Topics"
                        title="Expert Articles and Opinions"
                        subtitle="100+ articles in the last 3 months"
                        bgColor="bg-yellow-100"
                    />
                    <Cards
                        heading="My Healthcare Solutions"
                        title="Child Sleep Solutions"
                        bgColor="bg-red-100"
                    />
                    <Cards
                        heading="My Providers"
                        title="Go To Your Expert Team"
                        bgColor="bg-blue-100"
                        onClick={handleMyProvider}
                    />
                </div>

                {type === "consultation" || type === "Patient Updated" || type === "Provider review" ? (
                    <DisplayPersonalizePlan setLoading={setLoading} />

                ) : (
                    <PersonalizedPlan />
                )}
                {/* <GoalsAndChallenges /> */}

            </div>
        </div>

    );
};

export default Home;

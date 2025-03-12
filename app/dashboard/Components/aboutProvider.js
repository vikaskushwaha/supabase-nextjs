"use client"
// const rawText = `"[b]Connecting with Families Through Personal Experience and Passion[/b]

// Jane Smith's journey into the world of child sleep therapy is deeply rooted in her experiences as both a pediatric nurse and a mother. Her firsthand understanding of the emotional and practical struggles that parents face when managing their children's sleep issues has fueled her dedication to helping families find peace and rest. Jane's personal philosophy revolves around the belief that healthy sleep routines are essential for the overall well-being of children and their parents, and she is driven by the desire to make a positive impact on the lives of those she helps.

// [b]Professional Accomplishments and Expertise[/b]

// With years spent working as a pediatric nurse, Jane has developed a wealth of knowledge in navigating sleep-related challenges in children. Her expertise extends to establishing bedtime routines, addressing sleep regressions, and managing specific sleep disorders. Jane's individualized approach is science-backed and tailored to meet the unique needs of each family, ensuring that parents are equipped with the necessary tools and support for achieving long-lasting, successful outcomes.

// [b]Educational Background and Clinical Philosophy[/b]
// Jane's extensive education and professional experiences underpin her approach to child sleep therapy. She is committed to providing personalized and compassionate care that empowers parents to foster healthy sleep habits for their children. Her holistic, evidence-based methods not only tackle the child's sleep issues but also prioritize the emotional and mental health of the entire family. Jane blends practical advice with empathy, ensuring that every family she works with feels supported and understood throughout the process."
// `


const parseText = (text) => {
    const sections = [];
    const regex = /\[b\](.*?)\[\/b\]\s*([\s\S]*?)(?=(\[b\]|$))/g;

    let match;
    while ((match = regex.exec(text)) !== null) {
        sections.push({
            title: match[1].trim(),
            content: match[2].trim(),
        });
    }

    return sections;
};

import { useUser } from "@/app/context/context";
import useProviderId from "@/hooks/fetchPatientInfoFromsupabae";
import ProfessionalInfo from "@/hooks/fetchProfessionalInfo";
const AboutProvider = ({ rawText }) => {
    const parsedData = parseText(rawText)
    return (
        <div className="p-6 bg-white max-w-3xl flex flex-col gap-4 rounded-lg ">
            <h1 className="text-xl">About Me</h1>
            {parsedData.map((section, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {section.title}
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base">{section.content}</p>
                </div>
            ))}
        </div>
    );


}


export default AboutProvider;
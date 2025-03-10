const rawText = `Infant sleep training,
Child sleep coach,
How to get baby to sleep,
Help with toddler sleep problems,
Baby sleep schedule tips,
Personalized sleep solutions for babies,
Gentle sleep training methods,
Overcoming baby sleep issues,
Postpartum sleep support`;

const CommonIssueThatProviderCanHelp = () => {
    // Splitting text into an array
    const issues = rawText.split(",\n");

    return (
        <div className="flex flex-col gap-y-4 bg-white border-2 p-6 rounded-lg">
            <h1 className="text-xl font-semibold">Common Issues i Can Help With</h1>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {issues.map((issue, index) => (
                    <div key={index}>{issue}</div>
                ))}
            </ul>
        </div>
    );
};

export default CommonIssueThatProviderCanHelp;
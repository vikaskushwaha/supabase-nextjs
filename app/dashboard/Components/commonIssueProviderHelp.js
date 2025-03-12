
const CommonIssueThatProviderCanHelp = ({ seokeywords = [] }) => {
    const issues = seokeywords ? seokeywords.split("\n") : [];

    return (
        <div className="flex flex-col gap-y-4 bg-white border-2 p-6 rounded-lg">
            <h1 className="text-xl font-semibold">Common Issues I Can Help With</h1>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {issues.map((issue, index) => (
                    <div key={index}>{issue}</div>
                ))}
            </ul>
        </div>
    );
};

export default CommonIssueThatProviderCanHelp;

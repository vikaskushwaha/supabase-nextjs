
const data = [
    {
        "title": "Get your baby to sleep (Video Course - 3 hours)",
        "price": "$100",

    },
    {
        "title": "Get your baby to sleep (Video Course - 3 hours",
        "price": "$100",
    },
    {
        "title": "Get your baby to sleep (Video Course - 3 hours",
        "price": "$100",
    }

]


const ProviderOffering = () => {
    return (
        <div className="flex flex-col gap-y-8 bg-white border-2 pb-7">
            <h1 className="text-xl">My Offerings</h1>
            <div className="flex flex-col bg-green-200 border-2 ">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between rounded-lg flex-row p-2 bg-teal-100 border-2">
                        <p className="text-gray-700">{item.title}</p>
                        <p className="font-semibold text-green-600">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )


}

export default ProviderOffering;
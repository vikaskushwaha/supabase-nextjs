const { Spinner } = require("react-spinner-toolkit")

export const LoaderScreen = () => {

    return (
        <Spinner shape="bouncingBalls" color="#90EE90" loading speed={2} size={200} transition={true} />
    )
}
import { useEffect, useState } from "react";

export default function Loading() {
    const [loadingTooLong, isLoadingTooLong] = useState(false);
    useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            isLoadingTooLong(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
                <p>Loading...</p>
                {loadingTooLong && <TooLongLoading />}
            </div>
        </div>
    );
}

export function TooLongLoading() {
    return(
        <p>
            It looks like it takes longer to load. <br />
            Possible problems: <br />
            - Server overload on our side <br />
            - Bad internet connection <br />
        </p>
    );
}
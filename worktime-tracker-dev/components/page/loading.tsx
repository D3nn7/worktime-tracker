export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
                <p>Loading...</p>
            </div>
        </div>
    );
}
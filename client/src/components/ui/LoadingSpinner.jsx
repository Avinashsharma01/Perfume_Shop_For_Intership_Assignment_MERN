// Loading spinner component
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default LoadingSpinner;

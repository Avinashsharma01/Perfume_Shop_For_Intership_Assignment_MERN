// 404 Not Found Page
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16">
            <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;

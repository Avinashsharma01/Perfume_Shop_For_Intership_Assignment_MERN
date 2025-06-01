// Review list component for product details page
import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

// Star rating component
const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-5 w-5 ${
                        i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const ReviewList = ({
    reviews: initialReviews = [],
    productId,
    onReviewAdded,
}) => {
    const [showForm, setShowForm] = useState(false);
    const [reviews, setReviews] = useState(initialReviews);

    // Update reviews when initialReviews changes
    useEffect(() => {
        setReviews(initialReviews);
    }, [initialReviews]);

    const handleReviewSubmitted = () => {
        // If an onReviewAdded callback was provided, call it to refresh the reviews
        if (onReviewAdded) {
            onReviewAdded();
        }
    };

    if (!reviews || reviews.length === 0) {
        return (
            <div className="py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Write a Review
                    </button>
                </div>

                <div className="text-center py-10">
                    <p className="text-gray-500">
                        This product has no reviews yet. Be the first to leave
                        one!
                    </p>
                    {showForm && (
                        <ReviewForm
                            productId={productId}
                            onCancel={() => setShowForm(false)}
                            onReviewSubmitted={handleReviewSubmitted}
                        />
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                    Reviews ({reviews.length})
                </h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                    {showForm ? "Cancel" : "Write a Review"}
                </button>
            </div>

            {showForm && (
                <ReviewForm
                    productId={productId}
                    onCancel={() => setShowForm(false)}
                    onReviewSubmitted={handleReviewSubmitted}
                />
            )}

            <div className="space-y-6">
                {reviews.map((review) => (
                    <div
                        key={review._id}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <div className="flex items-start">
                            <div className="flex-1">
                                <div className="flex items-center mb-1">
                                    <StarRating rating={review.rating} />
                                    <span className="ml-2 text-sm text-gray-500">
                                        {new Date(
                                            review.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {review.name}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;

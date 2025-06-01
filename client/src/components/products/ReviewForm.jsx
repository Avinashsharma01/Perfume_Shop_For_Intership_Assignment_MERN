// Review form component
import { useState } from "react";
import { createProductReview } from "../../api/reviewService";

const ReviewForm = ({ productId, onCancel, onReviewSubmitted }) => {
    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        comment: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "rating" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name.trim()) {
            setError("Please enter your name");
            return;
        }

        if (!formData.comment.trim()) {
            setError("Please enter your review");
            return;
        }

        try {
            setIsSubmitting(true);
            await createProductReview(productId, formData);
            setSuccess(true);
            setFormData({ name: "", rating: 5, comment: "" });

            // If a callback was provided for when a review is submitted, call it
            if (onReviewSubmitted) {
                onReviewSubmitted();
            }

            // Hide form after successful submission
            setTimeout(() => {
                onCancel();
            }, 2000);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    "Failed to submit review. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
                Write a Review
            </h3>

            {success ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-5 w-5 text-green-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-green-700">
                                Your review has been submitted successfully!
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-red-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">
                                        {error}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <span className="block text-sm font-medium text-gray-700 mb-1">
                            Rating
                        </span>
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <label key={star} className="mr-2">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={star}
                                        checked={formData.rating === star}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <svg
                                        className={`h-8 w-8 cursor-pointer ${
                                            formData.rating >= star
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="comment"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Review
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows="4"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-purple-800 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Review"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ReviewForm;

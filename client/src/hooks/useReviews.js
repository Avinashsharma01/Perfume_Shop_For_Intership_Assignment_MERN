// Custom hook for handling product reviews
import { useState, useEffect } from 'react';
import { fetchProductReviews, createProductReview } from '../api/reviewService';

export const useProductReviews = (productId) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const getReviews = async () => {
        if (!productId) return;

        try {
            setLoading(true);
            const data = await fetchProductReviews(productId);
            setReviews(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch reviews. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReviews();
    }, [productId]);

    const submitReview = async (reviewData) => {
        try {
            setLoading(true);
            await createProductReview(productId, reviewData);
            setSuccess(true);
            // Refresh reviews after submission
            await getReviews();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to submit review. Please try again.');
            setSuccess(false);
        } finally {
            setLoading(false);
            // Reset success after 3 seconds
            if (success) {
                setTimeout(() => setSuccess(false), 3000);
            }
        }
    };

    return { reviews, loading, error, success, submitReview };
};

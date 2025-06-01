// Review API service
import api from './index';

export const fetchProductReviews = async (productId) => {
    try {
        const { data } = await api.get(`/reviews/product/${productId}`);
        return data;
    } catch (error) {
        console.error(`Error fetching reviews for product ${productId}:`, error);
        throw error;
    }
};

export const createProductReview = async (productId, reviewData) => {
    try {
        const { data } = await api.post(`/reviews/product/${productId}`, reviewData);
        return data;
    } catch (error) {
        console.error(`Error creating review for product ${productId}:`, error);
        throw error;
    }
};

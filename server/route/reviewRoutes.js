// Routes for review-related endpoints
import express from 'express';
import {
    getReviews,
    getProductReviews,
    createReview,
    deleteReview
} from '../controller/reviewController.js';

const router = express.Router();

// GET all reviews
router.get('/', getReviews);

// GET reviews for a specific product
router.get('/product/:productId', getProductReviews);

// POST a new review for a product
router.post('/product/:productId', createReview);

// DELETE a review
router.delete('/:id', deleteReview);

export default router;

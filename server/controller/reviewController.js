// Review controller containing methods to handle review-related operations
import Review from '../model/reviewModel.js';
import Product from '../model/productModel.js';

// Get all reviews
export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reviews for a specific product
export const getProductReviews = async (req, res) => {
    try {
        const productId = req.params.productId;
        const reviews = await Review.find({ product: productId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a review to a product
export const createReview = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, rating, comment } = req.body;

        // Check if product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if user already reviewed this product
        const alreadyReviewed = await Review.findOne({ product: productId, name });

        if (alreadyReviewed) {
            return res.status(400).json({ message: 'Product already reviewed by you' });
        }

        // Create the review
        const review = new Review({
            name,
            rating: Number(rating),
            comment,
            product: productId,
        });

        const createdReview = await review.save();
        res.status(201).json(createdReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a review
export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (review) {
            await review.remove();
            res.status(200).json({ message: 'Review removed' });
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

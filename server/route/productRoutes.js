// Routes for product-related endpoints
import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getFeaturedProducts,
    getProductsByCategory
} from '../controller/productController.js';

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET featured products
router.get('/featured', getFeaturedProducts);

// GET products by category
router.get('/category/:category', getProductsByCategory);

// GET a single product by ID
router.get('/:id', getProductById);

// POST a new product
router.post('/', createProduct);

// PUT/update a product
router.put('/:id', updateProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

export default router;

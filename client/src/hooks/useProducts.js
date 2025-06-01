// Custom hook for fetching products
import { useState, useEffect } from 'react';
import { fetchProducts, fetchFeaturedProducts, fetchProductById, fetchProductsByCategory } from '../api/productService';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchProducts();
                setProducts(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return { products, loading, error };
};

export const useFeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchFeaturedProducts();
                setFeaturedProducts(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch featured products. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getFeaturedProducts();
    }, []);

    return { featuredProducts, loading, error };
};

export const useProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            if (!productId) return;

            try {
                setLoading(true);
                const data = await fetchProductById(productId);
                setProduct(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch product details. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [productId]);

    return { product, loading, error };
};

export const useCategoryProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCategoryProducts = async () => {
            if (!category) return;

            try {
                setLoading(true);
                const data = await fetchProductsByCategory(category);
                setProducts(data);
                setError(null);
            } catch (err) {
                setError(`Failed to fetch ${category} products. Please try again later.`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getCategoryProducts();
    }, [category]);

    return { products, loading, error };
};

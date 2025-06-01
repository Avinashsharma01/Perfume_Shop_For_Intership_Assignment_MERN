// Product API service
import api from './index';

export const fetchProducts = async () => {
    try {
        const { data } = await api.get('/products');
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchFeaturedProducts = async () => {
    try {
        const { data } = await api.get('/products/featured');
        return data;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const { data } = await api.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};

export const fetchProductsByCategory = async (category) => {
    try {
        const { data } = await api.get(`/products/category/${category}`);
        return data;
    } catch (error) {
        console.error(`Error fetching products in category ${category}:`, error);
        throw error;
    }
};

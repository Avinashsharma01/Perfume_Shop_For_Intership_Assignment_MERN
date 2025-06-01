import React from "react";
import { useCategoryProducts } from "../hooks/useProducts";
import ProductCard from "../components/products/ProductCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import { useEffect } from "react";

const Man = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { products, loading, error } = useCategoryProducts("Men");

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">
                    Men's Perfumes
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Bold and distinctive scents crafted for men
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center">
                    <LoadingSpinner />
                </div>
            ) : error ? (
                <ErrorMessage message={error} />
            ) : products.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">
                        No men's perfumes found. Please check back later.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Man;

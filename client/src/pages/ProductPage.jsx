// Product detail page component
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import { useProductReviews } from "../hooks/useReviews";
import ImageGallery from "../components/products/ImageGallery";
import ProductInfo from "../components/products/ProductInfo";
import ReviewList from "../components/products/ReviewList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";

const ProductPage = () => {
    const { id } = useParams();
    const {
        product,
        loading: productLoading,
        error: productError,
    } = useProduct(id);
    const {
        reviews,
        loading: reviewsLoading,
        getReviews,
    } = useProductReviews(id);

    if (productLoading) {
        return (
            <div className="py-16">
                <LoadingSpinner />
            </div>
        );
    }

    if (productError) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ErrorMessage message={productError} />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ErrorMessage message="Product not found" />
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Breadcrumb */}
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <a
                                href="/"
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-500 mx-2">/</span>
                            <a
                                href="/#categories"
                                className="text-gray-500 hover:text-gray-700"
                            >
                                {product.category}
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-500 mx-2">/</span>
                            <span className="text-gray-900">
                                {product.name}
                            </span>
                        </li>
                    </ol>
                </nav>
                {/* Product */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Product images */}
                    <div>
                        <ImageGallery images={product.images} />
                    </div>

                    {/* Product info */}
                    <ProductInfo product={product} />
                </div>{" "}
                {/* Reviews */}
                <div className="mt-16 border-t border-gray-200 pt-8">
                    <ReviewList
                        reviews={reviews}
                        productId={id}
                        loading={reviewsLoading}
                        onReviewAdded={getReviews}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

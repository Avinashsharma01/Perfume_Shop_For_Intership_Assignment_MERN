// Product information component for product details page
import { useState } from "react";

const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

    if (!product) return null;

    const { name, description, price, sizes, inStock, category } = product;

    // Social media sharing
    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Check out this amazing fragrance: ${name}`;

        let shareURL;

        switch (platform) {
            case "facebook":
                shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                )}`;
                break;
            case "twitter":
                shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    url
                )}&text=${encodeURIComponent(text)}`;
                break;
            case "pinterest":
                shareURL = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    url
                )}&description=${encodeURIComponent(text)}`;
                break;
            default:
                return;
        }

        window.open(shareURL, "_blank", "width=600,height=400");
    };

    return (
        <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>

            {/* Category badge */}
            <div className="mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {category}
                </span>
            </div>

            {/* Product name */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-2xl text-gray-900">₹{price.toFixed(2)}</p>

            {/* Description */}
            <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-2">
                    <p>{description}</p>
                </div>
            </div>

            {/* Availability */}
            <div className="mt-6">
                <p className="text-sm text-gray-500">
                    Availability:{" "}
                    <span
                        className={`font-medium ${
                            inStock ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {inStock ? "In Stock" : "Out of Stock"}
                    </span>
                </p>
            </div>

            {/* Size selector */}
            <div className="mt-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 text-sm font-medium rounded-md border ${
                                selectedSize === size
                                    ? "bg-purple-800 text-white border-purple-800"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Add to cart button */}
            <div className="mt-8">
                <button
                    type="button"
                    disabled={!inStock}
                    className={`w-full px-6 py-3 rounded-md text-base font-medium text-white shadow-sm ${
                        inStock
                            ? "bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    {inStock ? "Add to Bag" : "Out of Stock"}
                </button>
            </div>

            {/* Social media sharing */}
            <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Share</h3>
                <div className="mt-2 flex space-x-4">
                    <button
                        onClick={() => handleShare("facebook")}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="sr-only">Share on Facebook</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleShare("twitter")}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="sr-only">Share on Twitter</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleShare("pinterest")}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="sr-only">Share on Pinterest</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;

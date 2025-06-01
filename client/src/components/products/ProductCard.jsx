// Product card component for displaying product information
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, name, shortDescription, price, images } = product;

    return (
        <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            {/* Product image with hover effect */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                    src={images[0]}
                    alt={name}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Product details */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {shortDescription}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-purple-800 font-bold">
                        ₹{price.toFixed(2)}
                    </span>
                    <Link
                        to={`/product/${_id}`}
                        className="inline-flex items-center px-4 py-2 bg-purple-800 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-300"
                    >
                        View Details
                        <svg
                            className="ml-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

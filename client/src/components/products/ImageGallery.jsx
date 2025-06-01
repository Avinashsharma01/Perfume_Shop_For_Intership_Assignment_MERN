// Image gallery component for product details page
import { useState } from "react";

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="bg-gray-200 rounded-lg flex items-center justify-center h-96">
                <p className="text-gray-500">No image available</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {/* Main large image */}
            <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={images[selectedImage]}
                    alt="Product image"
                    className="h-96 w-full object-cover object-center"
                />
            </div>

            {/* Thumbnail images */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`overflow-hidden rounded-md bg-gray-100 ${
                                selectedImage === index
                                    ? "ring-2 ring-purple-800"
                                    : ""
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Product thumbnail ${index + 1}`}
                                className="h-20 w-full object-cover object-center"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;

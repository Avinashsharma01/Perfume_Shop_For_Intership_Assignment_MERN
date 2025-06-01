// Categories section
import { Link } from "react-router-dom";

const Categories = () => {
    // Category data
    const categories = [
        {
            id: "women",
            name: "Women",
            description:
                "Elegant and sophisticated fragrances designed for women",
            image: "https://images.unsplash.com/photo-1652768787394-b7bca615acb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjAlMjBwZXJmdW1lfGVufDB8fDB8fHww", // Woman with perfume
        },
        {
            id: "men",
            name: "Men",
            description: "Bold and distinctive scents crafted for men",
            image: "https://plus.unsplash.com/premium_photo-1661715666452-52a70bdf5de2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D", // Man in suit applying perfume
        },
        {
            id: "unisex",
            name: "Unisex",
            description: "Universal fragrances designed to be worn by anyone",
            image: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    return (
        <section id="categories" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Shop by Category
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Find your perfect fragrance match from our curated
                        collections.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-lg shadow-md"
                        >
                            {/* Category image */}
                            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>
                            </div>

                            {/* Category content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-sm mb-4">
                                    {category.description}
                                </p>{" "}
                                <Link
                                    to={`/category/${category.id}`}
                                    className="inline-flex items-center text-sm font-medium text-white hover:text-purple-300"
                                >
                                    Explore Collection
                                    <svg
                                        className="ml-2 h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;

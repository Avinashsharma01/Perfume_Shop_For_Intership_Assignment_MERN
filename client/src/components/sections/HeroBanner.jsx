// Hero banner component with call-to-action
import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1592945403716-b3e6d962fc0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                }}
            ></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 ">
                <div className="max-w-lg md:max-w-xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block">Discover Your</span>
                        <span className="block text-purple-300">
                            Signature Scent
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-100">
                        Explore our collection of luxury fragrances, crafted to
                        evoke emotion and create lasting impressions.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/#featured"
                            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 md:text-lg transition duration-300"
                        >
                            Shop Featured
                        </Link>
                        <Link
                            to="/#new-arrivals"
                            className="inline-block px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:text-lg transition duration-300"
                        >
                            New Arrivals
                        </Link>
                    </div>
                </div>
                {/* Decorative elements */}
                {/* <div className="right">
                    <h1 className="text-6xl font-bold text-white">Hello</h1>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default HeroBanner;

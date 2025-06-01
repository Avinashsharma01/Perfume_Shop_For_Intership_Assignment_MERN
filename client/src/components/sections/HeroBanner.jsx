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
                        "url('https://theperfumeshop.co.in/cdn/shop/files/Main_banner.jpg?v=1743674139')",
                }}
            ></div>{" "}
            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {" "}
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
                            <span className="block">Discover Your</span>
                            <span className="block text-purple-300 italic">
                                Signature Scent
                            </span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 font-body font-light leading-relaxed">
                            Explore our collection of luxury fragrances, crafted
                            to evoke emotion and create lasting impressions.
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
                    </div>{" "}
                    {/* Hero image */}
                    <div className="hidden md:flex justify-end">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1615446251839-54da98f54826?q=80&w=800"
                                alt="Luxury Perfume"
                                className="rounded-lg shadow-2xl object-cover h-[400px] transform transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-purple-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                                <div className="text-center">
                                    <span className="block text-3xl font-heading italic font-bold">
                                        25%
                                    </span>
                                    <span className="text-sm font-body tracking-wider">
                                        OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;

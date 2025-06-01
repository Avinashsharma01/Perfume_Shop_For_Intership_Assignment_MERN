// Navbar component
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <span className="text-2xl font-bold text-purple-800">
                                PerfumeShop
                            </span>
                        </Link>
                    </div>{" "}
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        >
                            Home
                        </Link>
                        <Link
                            to="/#featured"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        >
                            Featured
                        </Link>
                        <Link
                            to="/#categories"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        >
                            Categories
                        </Link>
                        <Link
                            to="/#newsletter"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        >
                            Newsletter
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-800 hover:bg-purple-50"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${
                                    isMenuOpen ? "hidden" : "block"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${
                                    isMenuOpen ? "block" : "hidden"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
                id="mobile-menu"
            >
                {" "}
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/#featured"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Featured
                    </Link>
                    <Link
                        to="/#categories"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Categories
                    </Link>
                    <Link
                        to="/#newsletter"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-800 hover:bg-purple-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Newsletter
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

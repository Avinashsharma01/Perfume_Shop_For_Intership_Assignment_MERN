// Root layout component with header and footer
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import useScrollToSection from "../../hooks/useScrollToSection";
import { useEffect } from "react";

const RootLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Use the custom hook to handle scrolling to sections
    useScrollToSection();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default RootLayout;

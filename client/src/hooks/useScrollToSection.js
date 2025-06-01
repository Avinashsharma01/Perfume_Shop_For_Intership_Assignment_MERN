// Custom hook for smooth scrolling to page sections by ID
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        // If there's a hash and we're on the homepage
        if (hash && pathname === '/') {
            // Remove the # from the hash to get the target element's id
            const elementId = hash.replace('#', '');

            // Wait a bit for the DOM to fully render
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    // Scroll to the element
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (!hash && pathname === '/') {
            // If navigating to just '/' with no hash, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);
};

export default useScrollToSection;

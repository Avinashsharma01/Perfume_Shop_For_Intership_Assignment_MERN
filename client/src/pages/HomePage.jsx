// Home page component
import HeroBanner from "../components/sections/HeroBanner";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Categories from "../components/sections/Categories";
import Newsletter from "../components/sections/Newsletter";

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <FeaturedProducts />
            <Categories />
            <Newsletter />
        </>
    );
};

export default HomePage;

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Unisex from "./pages/Unisex";
// Layout
import RootLayout from "./components/layouts/RootLayout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="category/men" element={<Man />} />
                    <Route path="category/women" element={<Woman />} />
                    <Route path="category/unisex" element={<Unisex />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

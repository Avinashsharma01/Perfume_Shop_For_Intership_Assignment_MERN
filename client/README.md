# Perfume Shop Frontend

This is the frontend for the Perfume Shop e-commerce application, built with React, Vite, and Tailwind CSS. It provides an elegant and responsive user interface for browsing perfume products, viewing product details, and interacting with customer reviews.

## Table of Contents

-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
-   [Component Architecture](#component-architecture)
-   [Routing](#routing)
-   [State Management](#state-management)
-   [Custom Hooks](#custom-hooks)
-   [API Integration](#api-integration)
-   [Styling](#styling)
-   [Performance Optimization](#performance-optimization)

## Features

-   **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop devices
-   **Dynamic Product Listings**: Interactive product cards with hover effects
-   **Category Navigation**: Dedicated pages for men's, women's, and unisex perfumes
-   **Product Details**: Comprehensive product pages with:
    -   Image galleries
    -   Product information
    -   Size and pricing options
    -   Customer reviews and ratings
    -   Review submission form
    -   Social media sharing
-   **UI Components**:
    -   Loading spinners
    -   Error messages
    -   Scroll-to-top button
    -   Newsletter subscription form

## Project Structure

The frontend project follows a modular architecture:

```
client/
├── public/              # Static assets
│   └── vite.svg         # Vite logo
├── src/                 # Source code
│   ├── api/             # API services
│   │   ├── index.js     # Axios configuration
│   │   ├── productService.js  # Product-related API calls
│   │   └── reviewService.js   # Review-related API calls
│   │
│   ├── assets/          # Static assets like images
│   │
│   ├── components/      # React components
│   │   ├── layouts/     # Page layout components
│   │   │   └── RootLayout.jsx  # Main application layout
│   │   │
│   │   ├── navigation/  # Navigation components
│   │   │   ├── Footer.jsx      # Site footer
│   │   │   └── Navbar.jsx      # Navigation bar
│   │   │
│   │   ├── products/    # Product-related components
│   │   │   ├── ImageGallery.jsx  # Product image gallery
│   │   │   ├── ProductCard.jsx   # Product list item
│   │   │   ├── ProductInfo.jsx   # Product details
│   │   │   ├── ReviewForm.jsx    # Review submission form
│   │   │   └── ReviewList.jsx    # Product reviews display
│   │   │
│   │   ├── sections/    # Page section components
│   │   │   ├── Categories.jsx     # Category display
│   │   │   ├── FeaturedProducts.jsx  # Featured products
│   │   │   ├── HeroBanner.jsx     # Hero banner
│   │   │   └── Newsletter.jsx     # Newsletter form
│   │   │
│   │   └── ui/          # Generic UI components
│   │       ├── ErrorMessage.jsx   # Error display
│   │       ├── LoadingSpinner.jsx # Loading indicator
│   │       └── ScrollToTopButton.jsx # Scroll button
│   │
│   ├── hooks/           # Custom React hooks
│   │   ├── useProducts.js    # Product data management
│   │   ├── useReviews.js     # Review data management
│   │   └── useScrollToSection.js # Scroll functionality
│   │
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx      # Main landing page
│   │   ├── Man.jsx          # Men's perfume page
│   │   ├── NotFoundPage.jsx  # 404 page
│   │   ├── ProductPage.jsx   # Product details page
│   │   ├── Unisex.jsx       # Unisex perfume page
│   │   └── Woman.jsx        # Women's perfume page
│   │
│   ├── App.css          # Global CSS
│   ├── App.jsx          # Main application component
│   ├── config.js        # Global configuration
│   ├── index.css        # CSS entry point
│   └── main.jsx         # Application entry point
│
├── .env                 # Environment variables
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── README.md            # This documentation
└── vite.config.js       # Vite configuration
```

## Getting Started

### Prerequisites

-   Node.js (v16.0.0 or higher)
-   npm (v8.0.0 or higher) or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Configuration

Create a `.env` file in the client directory with the following variables:

```
VITE_API_URL=http://localhost:5000/api
```

## Component Architecture

The application follows a component-based architecture with:

-   **Page Components**: Full pages that represent routes
-   **Section Components**: Major sections of pages
-   **UI Components**: Reusable UI elements
-   **Layout Components**: Wrappers that provide consistent structure

Each component follows these principles:

-   Single responsibility
-   Props for configuration
-   Internal state when needed
-   Clear separation of concerns

## Routing

Routing is implemented using React Router v7:

```jsx
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
```

## State Management

State is managed using React's built-in hooks:

-   **useState**: For component-level state
-   **useEffect**: For side effects and data fetching
-   **useParams/useNavigate**: For routing-related state

## Custom Hooks

The application uses several custom hooks to encapsulate logic:

-   **useProducts**: Fetches and manages product data

    ```jsx
    const { products, loading, error } = useProducts();
    const { featuredProducts } = useFeaturedProducts();
    const { product } = useProduct(productId);
    const { products: categoryProducts } = useCategoryProducts("men");
    ```

-   **useReviews**: Handles review data and submissions

    ```jsx
    const { reviews, submitReview } = useProductReviews(productId);
    ```

-   **useScrollToSection**: Manages smooth scrolling to page sections
    ```jsx
    const scrollToSection = useScrollToSection();
    scrollToSection("featured");
    ```

## API Integration

API calls are implemented using Axios and organized by domain:

-   **productService.js**: Handles product-related API calls
-   **reviewService.js**: Manages review-related requests

Example:

```jsx
// Fetching products
const fetchProducts = async () => {
    const { data } = await api.get("/products");
    return data;
};

// Fetching products by category
const fetchProductsByCategory = async (category) => {
    const { data } = await api.get(`/products/category/${category}`);
    return data;
};
```

## Styling

The application uses Tailwind CSS for styling with:

-   Responsive design using Tailwind's responsive prefixes
-   Custom color themes matching the brand identity
-   Consistent spacing and typography

## Performance Optimization

Performance optimizations include:

-   Component memoization where appropriate
-   Lazy loading of images
-   Efficient state management
-   Responsive image sizing
-   Interactive UI with hover effects and animations

## Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

## Getting Started

1. Clone the repository
2. Navigate to the client directory
3. Install dependencies:

```bash
npm install
# or
yarn
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

-   `src/api` - API service functions
-   `src/components` - Reusable UI components
-   `src/hooks` - Custom React hooks
-   `src/pages` - Page components
-   `src/assets` - Static assets (images, etc.)

## Technologies Used

-   React 19
-   React Router 7
-   Tailwind CSS 4
-   Axios for API requests
-   Vite for build tooling

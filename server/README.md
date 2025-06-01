# Perfume Shop Backend

This is the backend API for the Perfume Shop web application. It provides endpoints for managing products and reviews.

## Technologies Used

-   Node.js
-   Express
-   MongoDB
-   Mongoose

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (local installation or MongoDB Atlas account)

### Installation

1. Install dependencies:

```
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

3. Seed the database with initial data:

```
npm run seed
```

### Running the Server

Development mode (with auto-reload):

```
npm run dev
```

Production mode:

```
npm start
```

### API Endpoints

#### Products

-   `GET /api/products` - Get all products
-   `GET /api/products/featured` - Get featured products
-   `GET /api/products/category/:category` - Get products by category
-   `GET /api/products/:id` - Get a single product by ID
-   `POST /api/products` - Create a new product
-   `PUT /api/products/:id` - Update a product
-   `DELETE /api/products/:id` - Delete a product

#### Reviews

-   `GET /api/reviews` - Get all reviews
-   `GET /api/reviews/product/:productId` - Get reviews for a specific product
-   `POST /api/reviews/product/:productId` - Add a review to a product
-   `DELETE /api/reviews/:id` - Delete a review

## Database Models

### Product

-   `name`: String (required)
-   `description`: String (required)
-   `shortDescription`: String (required)
-   `price`: Number (required)
-   `images`: [String] (required)
-   `sizes`: [String]
-   `inStock`: Boolean
-   `category`: String (enum: 'Men', 'Women', 'Unisex')
-   `featured`: Boolean

### Review

-   `name`: String (required)
-   `rating`: Number (required, 1-5)
-   `comment`: String (required)
-   `product`: ObjectId (reference to Product)

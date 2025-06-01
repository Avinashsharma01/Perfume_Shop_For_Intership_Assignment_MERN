# Perfume Shop Backend

This is the backend API for the Perfume Shop e-commerce application. It provides a RESTful API for managing products, categories, and customer reviews.

## Table of Contents

-   [Architecture](#architecture)
-   [Setup and Installation](#setup-and-installation)
-   [Environment Variables](#environment-variables)
-   [Database](#database)
-   [API Endpoints](#api-endpoints)
-   [Middleware](#middleware)
-   [Error Handling](#error-handling)
-   [Data Seeding](#data-seeding)

## Architecture

The server follows the MVC (Model-View-Controller) architecture pattern:

-   **Models**: Define the database schema and handle data validation
-   **Controllers**: Handle the business logic and process requests
-   **Routes**: Define the API endpoints and connect them to controllers

## Setup and Installation

### Prerequisites

-   Node.js (v16.0.0 or higher)
-   MongoDB (local installation or MongoDB Atlas account)

### Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/perfume_shop
```

## Database

### MongoDB Connection

The server connects to MongoDB using Mongoose. The connection is managed in the `config/db.js` file.

### Models

#### Product Model (`model/productModel.js`)

Defines the schema for perfume products including name, brand, price, category, images, and more.

#### Review Model (`model/reviewModel.js`)

Defines the schema for product reviews with fields for reviewer name, rating, comment, and product reference.

## API Endpoints

### Product Endpoints

| Method | Endpoint                     | Description                | Controller                              |
| ------ | ---------------------------- | -------------------------- | --------------------------------------- |
| GET    | /api/products                | Get all products           | productController.getProducts           |
| GET    | /api/products/:id            | Get a single product by ID | productController.getProductById        |
| GET    | /api/products/featured       | Get featured products      | productController.getFeaturedProducts   |
| GET    | /api/products/category/:name | Get products by category   | productController.getProductsByCategory |

### Review Endpoints

| Method | Endpoint                 | Description                        | Controller                           |
| ------ | ------------------------ | ---------------------------------- | ------------------------------------ |
| GET    | /api/reviews/product/:id | Get reviews for a specific product | reviewController.getProductReviews   |
| POST   | /api/reviews/product/:id | Create a new review for a product  | reviewController.createProductReview |

## Middleware

### Error Middleware (`middleware/errorMiddleware.js`)

Handles errors and provides consistent error responses:

-   **notFound**: Handles 404 errors for routes that don't exist
-   **errorHandler**: Processes all other errors and formats appropriate responses

## Error Handling

The application uses a centralized error handling approach that returns standardized error responses to the client:

```javascript
// Example error response
{
  "message": "Resource not found",
  "stack": "Error stack trace (only in development mode)"
}
```

## Data Seeding

The `seeder.js` script allows you to quickly populate your database with sample data:

```bash
# Import data
node seeder.js

# To destroy all data (with the -d flag)
node seeder.js -d
```

The seeding script adds sample products and reviews to the database for testing and development purposes.

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

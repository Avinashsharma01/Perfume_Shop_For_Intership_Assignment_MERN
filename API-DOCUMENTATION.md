# Perfume Shop API Documentation

This document provides detailed information about the REST API endpoints available in the Perfume Shop application.

## Base URL

All API endpoints are relative to the base URL:

```
http://localhost:5000/api
```

For production, replace with your domain.

## Authentication

The current version of the API does not require authentication. This is intended for demonstration purposes only. In a production environment, proper authentication should be implemented.

## Response Format

### Success Response

All successful responses follow this format:

```json
{
    "data": [
        // Response data here
    ]
}
```

Or for single items:

```json
{
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Product name"
    // Other fields
}
```

### Error Response

Error responses follow this format:

```json
{
    "message": "Error description here"
}
```

In development mode, errors also include a stack trace:

```json
{
    "message": "Error description",
    "stack": "Error stack trace..."
}
```

## Products API

### Get All Products

Retrieves a list of all available products.

-   **URL:** `/products`
-   **Method:** `GET`
-   **Query Parameters:**
    -   `limit` (optional): Number of products to return (default: 20)
    -   `page` (optional): Page number for pagination (default: 1)

#### Success Response

-   **Code:** 200 OK
-   **Content:**
    ```json
    [
        {
            "_id": "60d21b4667d0d8992e610c85",
            "name": "Chanel No. 5",
            "brand": "Chanel",
            "category": "women",
            "price": 108.99,
            "description": "A classic floral fragrance...",
            "sizes": [
                {
                    "value": "30",
                    "unit": "ml",
                    "price": 108.99
                },
                {
                    "value": "50",
                    "unit": "ml",
                    "price": 138.99
                }
            ],
            "images": ["image_url_1.jpg", "image_url_2.jpg"],
            "featured": true,
            "inStock": true,
            "rating": 4.5,
            "numReviews": 12,
            "createdAt": "2023-05-15T09:12:45.622Z"
        }
        // More products...
    ]
    ```

#### Error Response

-   **Code:** 500 Internal Server Error
-   **Content:** `{ "message": "Server error" }`

### Get Product by ID

Retrieves detailed information about a specific product.

-   **URL:** `/products/:id`
-   **Method:** `GET`
-   **URL Parameters:**
    -   `id`: MongoDB ObjectId of the product

#### Success Response

-   **Code:** 200 OK
-   **Content:**
    ```json
    {
        "_id": "60d21b4667d0d8992e610c85",
        "name": "Chanel No. 5",
        "brand": "Chanel",
        "category": "women",
        "price": 108.99,
        "description": "A classic floral fragrance...",
        "sizes": [
            {
                "value": "30",
                "unit": "ml",
                "price": 108.99
            },
            {
                "value": "50",
                "unit": "ml",
                "price": 138.99
            }
        ],
        "images": ["image_url_1.jpg", "image_url_2.jpg"],
        "featured": true,
        "inStock": true,
        "rating": 4.5,
        "numReviews": 12,
        "createdAt": "2023-05-15T09:12:45.622Z"
    }
    ```

#### Error Response

-   **Code:** 404 Not Found
-   **Content:** `{ "message": "Product not found" }`

### Get Featured Products

Retrieves a list of featured products.

-   **URL:** `/products/featured`
-   **Method:** `GET`
-   **Query Parameters:**
    -   `limit` (optional): Number of products to return (default: 8)

#### Success Response

-   **Code:** 200 OK
-   **Content:** Array of product objects (see Get All Products)

### Get Products by Category

Retrieves products filtered by category.

-   **URL:** `/products/category/:name`
-   **Method:** `GET`
-   **URL Parameters:**
    -   `name`: Category name (men, women, or unisex)

#### Success Response

-   **Code:** 200 OK
-   **Content:** Array of product objects (see Get All Products)

#### Error Response

-   **Code:** 404 Not Found
-   **Content:** `{ "message": "No products found in this category" }`

## Reviews API

### Get Product Reviews

Retrieves all reviews for a specific product.

-   **URL:** `/reviews/product/:id`
-   **Method:** `GET`
-   **URL Parameters:**
    -   `id`: MongoDB ObjectId of the product

#### Success Response

-   **Code:** 200 OK
-   **Content:**
    ```json
    [
        {
            "_id": "61d21b4667d0d8992e610d95",
            "name": "Jane Smith",
            "rating": 5,
            "comment": "Absolutely love this fragrance!",
            "product": "60d21b4667d0d8992e610c85",
            "createdAt": "2023-06-10T14:22:11.622Z"
        }
        // More reviews...
    ]
    ```

#### Error Response

-   **Code:** 404 Not Found
-   **Content:** `{ "message": "Product not found" }`

### Create Product Review

Creates a new review for a specific product.

-   **URL:** `/reviews/product/:id`
-   **Method:** `POST`
-   **URL Parameters:**
    -   `id`: MongoDB ObjectId of the product
-   **Request Body:**
    ```json
    {
        "name": "Jane Smith",
        "rating": 5,
        "comment": "Absolutely love this fragrance!"
    }
    ```

#### Success Response

-   **Code:** 201 Created
-   **Content:**
    ```json
    {
        "_id": "61d21b4667d0d8992e610d95",
        "name": "Jane Smith",
        "rating": 5,
        "comment": "Absolutely love this fragrance!",
        "product": "60d21b4667d0d8992e610c85",
        "createdAt": "2023-06-10T14:22:11.622Z"
    }
    ```

#### Error Response

-   **Code:** 400 Bad Request
-   **Content:** `{ "message": "Please provide all required fields" }`

-   **Code:** 404 Not Found
-   **Content:** `{ "message": "Product not found" }`

## Development Notes

### Testing the API

You can test the API using tools like:

-   Postman
-   curl
-   Thunder Client (VS Code extension)

### Example curl Commands

1. Get all products:

```bash
curl -X GET http://localhost:5000/api/products
```

2. Get a specific product:

```bash
curl -X GET http://localhost:5000/api/products/60d21b4667d0d8992e610c85
```

3. Create a review:

```bash
curl -X POST http://localhost:5000/api/reviews/product/60d21b4667d0d8992e610c85 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Smith", "rating": 5, "comment": "Absolutely love this fragrance!"}'
```

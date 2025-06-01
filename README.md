# Perfume Shop

A full-stack e-commerce application for selling perfumes, built with React, Node.js, Express, and MongoDB.

## Project Overview

This project is a complete e-commerce solution for a perfume store, featuring:

-   Responsive front-end built with React and Tailwind CSS
-   RESTful API backend using Node.js and Express
-   MongoDB database for data storage
-   User-friendly product browsing and detailed product pages
-   Reviews and ratings system

## Project Structure

The project is organized into two main directories:

-   `client/` - React front-end application
-   `server/` - Node.js/Express back-end API

## Prerequisites

-   Node.js (v16 or higher)
-   MongoDB (local installation or MongoDB Atlas account)
-   npm or yarn package manager

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
npm run install-all
```

### Set Up Environment Variables

1. In the `server/` directory, update the `.env` file with your MongoDB connection string and other variables.
2. In the `client/` directory, ensure the `.env` file has the correct API URL.

### Seed the Database

To populate your database with initial product and review data:

```bash
npm run seed
```

### Running the Application

Run both the client and server concurrently:

```bash
npm run dev
```

Or run them separately:

-   Server only: `npm run server`
-   Client only: `npm run client`

## Features

### Homepage

-   Responsive navigation bar
-   Call to action banner
-   Featured product display
-   Category browsing
-   Newsletter signup

### Product Page

-   Detailed product information
-   Image gallery
-   Size selection
-   Customer reviews and ratings
-   Social media sharing buttons

## Technologies Used

### Frontend

-   React (v19)
-   React Router (v7)
-   Tailwind CSS (v4)
-   Axios for API requests

### Backend

-   Node.js
-   Express
-   MongoDB & Mongoose
-   JWT for authentication

## License

This project is for demonstration purposes only.

## Acknowledgments

-   Images sourced from Unsplash
-   Icons from Heroicons

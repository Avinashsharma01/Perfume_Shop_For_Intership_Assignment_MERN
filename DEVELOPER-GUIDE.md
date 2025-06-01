# Perfume Shop Developer Guide

This guide is designed to help new developers quickly get started with the Perfume Shop project.

## Quick Start

### Prerequisites

Make sure you have the following installed on your system:

-   Node.js (v16 or higher)
-   npm (v8 or higher)
-   MongoDB (local installation or access to MongoDB Atlas)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Perfume_Shop
```

### Step 2: Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Step 3: Set Up Environment Variables

#### Server (.env file in server directory)

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/perfume_shop
```

#### Client (.env file in client directory)

```
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Seed the Database

```bash
cd server
node seeder.js
```

### Step 5: Run the Application

#### Development Mode (Both Client and Server)

```bash
# From the root directory
npm run dev
```

#### Development Mode (Server Only)

```bash
# From the root directory
npm run server
```

#### Development Mode (Client Only)

```bash
# From the root directory
npm run client
```

## Project Architecture

### Frontend (React + Vite + Tailwind CSS)

The frontend follows a component-based architecture:

-   **Pages**: Full page components
-   **Layouts**: Page structure components
-   **Sections**: Major page sections
-   **Navigation**: Header and footer components
-   **UI Components**: Reusable interface elements

### Backend (Node.js + Express + MongoDB)

The backend follows an MVC-like architecture:

-   **Models**: Database schemas (MongoDB/Mongoose)
-   **Controllers**: Business logic
-   **Routes**: API endpoints
-   **Middleware**: Request processing functions

## Development Workflow

### Git Workflow

1. Create a feature branch from `main`

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. Make your changes and commit them

    ```bash
    git add .
    git commit -m "Description of your changes"
    ```

3. Push your changes to the remote repository

    ```bash
    git push origin feature/your-feature-name
    ```

4. Create a pull request to merge your changes into the main branch

### Adding a New Feature

#### Frontend

1. Identify the appropriate component(s) to modify or create new ones
2. Update the relevant state using React hooks
3. Add API integration if needed
4. Style components using Tailwind CSS
5. Test across different screen sizes for responsiveness

#### Backend

1. Update or create models if needed
2. Implement controller functions
3. Define routes to expose the functionality
4. Test the API endpoints

## Common Tasks

### Adding a New Page

1. Create a new page component in `client/src/pages/`
2. Add the route in `client/src/App.jsx`
3. Implement the page content and functionality

### Adding a New API Endpoint

1. Create controller function in appropriate controller file
2. Add route in the relevant route file
3. Document the endpoint in API documentation

### Adding a New Component

1. Create component file in appropriate directory under `client/src/components/`
2. Import and use the component where needed
3. Ensure proper prop validation and documentation

## Testing

### Frontend Testing

Currently, the project does not have automated tests for the frontend. You can manually test by:

1. Running the application in development mode
2. Testing functionality across different browsers
3. Testing responsiveness using browser dev tools

### Backend Testing

Manually test API endpoints using:

1. Postman or similar API testing tool
2. curl commands from the terminal
3. Frontend integration

## Deployment

### Building for Production

```bash
# Build the client
cd client
npm run build

# The build output will be in the dist/ directory
```

### Starting Production Server

```bash
cd server
npm start
```

## Troubleshooting

### Common Issues

#### MongoDB Connection Errors

1. Ensure MongoDB is running locally or check your Atlas connection string
2. Verify network connectivity if using Atlas
3. Check the MONGO_URI in your .env file

#### API Errors

1. Check server logs for detailed error messages
2. Verify that your API endpoints match the expected format
3. Ensure your request includes required parameters and body data

#### Frontend Build Issues

1. Check for dependency conflicts
2. Verify environment variables are set correctly
3. Check console errors in the browser

## Resources

-   [React Documentation](https://reactjs.org/docs/getting-started.html)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [Express Documentation](https://expressjs.com/)
-   [MongoDB Documentation](https://docs.mongodb.com/)
-   [Mongoose Documentation](https://mongoosejs.com/docs/)

// Main server file for the Perfume Shop backend
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './route/productRoutes.js';
import reviewRoutes from './route/reviewRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

// Base API route
app.get('/api', (req, res) => {
    res.send('Perfume Shop API is running...');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    const clientBuildPath = path.resolve(__dirname, '../client/dist');

    app.use(express.static(clientBuildPath));

    // Any route not handled by API will be handled by React
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(clientBuildPath, 'index.html'));
    });
}

// Error middleware
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/perfume-shop')
    .then(() => {
        console.log('Connected to MongoDB');
        // Start server after successful connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

export default app;
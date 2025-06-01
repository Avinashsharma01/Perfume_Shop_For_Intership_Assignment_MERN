// Script to seed the database with mock data
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './model/productModel.js';
import Review from './model/reviewModel.js';
import connectDB from './config/db.js';

dotenv.config();

// Mock product data
const products = [
    {
        name: 'Midnight Bloom',
        description: 'A luxurious fragrance that combines floral notes with a hint of musk. Perfect for evening occasions, this perfume lingers gently on the skin, leaving a memorable trail of sophisticated scent. The blend includes top notes of jasmine and rose, with heart notes of vanilla and base notes of amber and sandalwood.',
        shortDescription: 'Luxurious floral fragrance with musk undertones',
        price: 89.99,
        images: [
            'https://images.unsplash.com/photo-1617897903246-719242758050',
            'https://images.unsplash.com/photo-1557170334-a9086d21c777',
            'https://images.unsplash.com/photo-1592945403716-b3e6d962fc0a'
        ],
        sizes: ['30ml', '50ml', '100ml'],
        inStock: true,
        category: 'Women',
        featured: true,
    },
    {
        name: 'Ocean Breeze',
        description: 'A refreshing aquatic fragrance that captures the essence of the sea. The lively top notes of citrus and mint give way to a heart of aquatic accords and marine notes. The base includes sandalwood and light musk, creating a clean, refreshing scent perfect for daily wear or warm summer days.',
        shortDescription: 'Fresh aquatic scent with citrus notes',
        price: 75.50,
        images: [
            'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc',
            'https://images.unsplash.com/photo-1595425970377-c9705d20ad1e',
            'https://images.unsplash.com/photo-1587017539504-67cfbddac569'
        ],
        sizes: ['50ml', '100ml'],
        inStock: true,
        category: 'Men',
        featured: true,
    },
    {
        name: 'Amber Whisper',
        description: 'A warm, sensual fragrance built around rich amber and precious woods. This oriental perfume opens with spicy notes of cardamom and pepper, evolves with a heart of amber and vanilla, and finishes with a lingering base of sandalwood and patchouli. Ideal for creating a memorable impression on special occasions.',
        shortDescription: 'Warm amber fragrance with woody undertones',
        price: 120.00,
        images: [
            'https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3',
            'https://images.unsplash.com/photo-1594035910387-fea47794261f',
            'https://images.unsplash.com/photo-1608528577891-eb055944f2e7'
        ],
        sizes: ['30ml', '50ml', '75ml'],
        inStock: true,
        category: 'Unisex',
        featured: false,
    },
    {
        name: 'Citrus Paradise',
        description: 'An invigorating blend of citrus fruits creates this energizing and uplifting fragrance. The top notes burst with lemon, bergamot, and grapefruit, while the heart includes orange blossom and a hint of jasmine. The base notes of light musk and vetiver provide a clean finish. Perfect for daytime wear and adding a boost of freshness.',
        shortDescription: 'Energizing blend of fresh citrus notes',
        price: 65.00,
        images: [
            'https://images.unsplash.com/photo-1541643600914-78b084683601',
            'https://images.unsplash.com/photo-1562887250-9a52d844ad30',
            'https://images.unsplash.com/photo-1572511854958-fd8a1f2c9f1e'
        ],
        sizes: ['30ml', '50ml', '100ml'],
        inStock: true,
        category: 'Unisex',
        featured: true,
    },
    {
        name: 'Velvet Rose',
        description: 'A sophisticated floral fragrance centered around the timeless elegance of roses. This perfume opens with fresh green notes and a hint of pepper, revealing a heart of Bulgarian rose, peony, and lily of the valley. The base includes patchouli, amber, and musk for a lasting impression. This luxurious scent evokes the feeling of walking through a blooming rose garden.',
        shortDescription: 'Elegant rose-centered fragrance with depth',
        price: 95.00,
        images: [
            'https://images.unsplash.com/photo-1528890215826-3971dd5ca816',
            'https://images.unsplash.com/photo-1588405748880-12d1d2a59af1',
            'https://images.unsplash.com/photo-1596740926834-d317b665cab1'
        ],
        sizes: ['50ml', '75ml'],
        inStock: true,
        category: 'Women',
        featured: false,
    },
    {
        name: 'Mountain Pine',
        description: 'A crisp, aromatic fragrance that captures the essence of a forest after rainfall. Top notes of pine needles and juniper berries blend with heart notes of cypress and cedar. Base notes of earthy vetiver and moss create a grounding effect. This outdoorsy scent is perfect for the adventurous spirit and nature lovers.',
        shortDescription: 'Fresh forest-inspired aromatic fragrance',
        price: 80.00,
        images: [
            'https://images.unsplash.com/photo-1601295863707-65331a1d1254',
            'https://images.unsplash.com/photo-1619424583806-caaf0c475805',
            'https://images.unsplash.com/photo-1563244429-95c7f8b9083f'
        ],
        sizes: ['30ml', '50ml', '100ml'],
        inStock: true,
        category: 'Men',
        featured: true,
    }
];

// Mock review data - will be linked to products during seeding
const reviews = [
    {
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely love this fragrance! It lasts all day and I constantly get compliments.',
    },
    {
        name: 'Michael Chen',
        rating: 4,
        comment: 'Great scent that evolves nicely throughout the day. Would buy again.',
    },
    {
        name: 'Emily Rodriguez',
        rating: 5,
        comment: 'This has become my signature scent. Perfect for both work and evenings out.',
    },
    {
        name: 'James Wilson',
        rating: 3,
        comment: 'Nice fragrance but doesn\'t last as long as I\'d hoped. Still enjoy using it.',
    },
    {
        name: 'Amanda Taylor',
        rating: 5,
        comment: 'Bought this as a gift for my sister and she absolutely adores it!',
    },
    {
        name: 'David Kim',
        rating: 4,
        comment: 'Sophisticated scent that isn\'t overwhelming. Perfect for daily use.',
    },
    {
        name: 'Lisa Patel',
        rating: 5,
        comment: 'Worth every penny! The complexity of this fragrance is impressive.',
    },
    {
        name: 'John Smith',
        rating: 4,
        comment: 'Very masculine without being overpowering. My wife loves it on me.',
    }
];

// Function to seed database
const seedDatabase = async () => {
    try {
        // Connect to database
        await connectDB();

        // Check if we want to destroy data only
        const destroyData = process.argv.includes('-d');

        // Clear existing data
        await Product.deleteMany();
        await Review.deleteMany();

        console.log('Database cleared');

        if (destroyData) {
            console.log('Data destroyed successfully!');
            process.exit(0);
            return;
        }

        // Insert products
        const createdProducts = await Product.insertMany(products);
        console.log(`${createdProducts.length} products added`);

        // Add reviews - distribute them among products
        const reviewPromises = [];

        reviews.forEach((review, index) => {
            // Distribute reviews among products
            const productIndex = index % createdProducts.length;
            const newReview = new Review({
                ...review,
                product: createdProducts[productIndex]._id,
            });
            reviewPromises.push(newReview.save());
        });

        await Promise.all(reviewPromises);
        console.log(`${reviews.length} reviews added`);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error(`Error seeding database: ${error.message}`);
        process.exit(1);
    }
};

// Run the seeder
seedDatabase();

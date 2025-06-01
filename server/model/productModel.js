// Product model for the perfume shop
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    images: {
        type: [String],
        required: true,
        validate: {
            validator: function (array) {
                return array.length > 0;
            },
            message: 'At least one image is required',
        }
    },
    sizes: {
        type: [String],
        default: ['30ml', '50ml', '100ml'],
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Men', 'Women', 'Unisex'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Virtual for reviews
productSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product',
    justOne: false,
});

const Product = mongoose.model('Product', productSchema);

export default Product;

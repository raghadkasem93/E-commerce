
const mongoose = require('mongoose');
const schema = mongoose.Schema

const ProductSchema = new schema({
    //product module
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        // required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category', // Verweist auf das Category-Modell
    },
    discount: {
        type: Number,
    },
    mainImage: {
        type: String,
    },
    images: {
        type: [String],
    },
    stock: {
        type: Number,
    }
},    
)


const Prouct = mongoose.model('Product', ProductSchema);
module.exports = Prouct;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  products: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the Product model
    quantity: { type: Number, required: true }
  }],
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending', required: true },
  payment: { type: Schema.Types.ObjectId, ref: 'Payment', required: true } // Reference to Payment schema
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Checkout', checkoutSchema);

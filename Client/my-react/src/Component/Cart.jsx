import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, loading, error, updateCartItem, removeFromCart } = useCart();

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateCartItem(productId, newQuantity);
  };

  const handleRemoveItem = async (productId) => {
    await removeFromCart(productId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error max-w-md mx-auto mt-8">
        <span>{error}</span>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Ihr Warenkorb ist leer</h2>
        <p className="text-gray-600 mb-8">Fügen Sie einige Produkte hinzu, um loszulegen!</p>
        <Link to="/product" className="btn bg-emerald-600 hover:bg-emerald-700 text-white">
          Produkte ansehen
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Warenkorb</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.product._id} className="card bg-base-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex gap-4">
               
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.product.images?.[0] || '/placeholder.svg'}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-emerald-600 font-bold">{item.product.price}€</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="btn btn-sm btn-circle btn-outline"
                          onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-circle btn-outline"
                          onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total & Remove */}
                    <div className="text-right">
                      <p className="font-bold text-lg">{item.price.toFixed(2)}€</p>
                      <button
                        className="btn btn-sm btn-error btn-outline mt-2"
                        onClick={() => handleRemoveItem(item.product._id)}
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-sm sticky top-4">
            <div className="card-body">
              <h2 className="card-title">Bestellübersicht</h2>
              
              <div className="divider"></div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Zwischensumme:</span>
                  <span>{cart.totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Versand:</span>
                  <span>Kostenlos</span>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="flex justify-between text-lg font-bold">
                <span>Gesamt:</span>
                <span>{cart.totalPrice.toFixed(2)}€</span>
              </div>
              
              <div className="card-actions justify-end mt-4">
                <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Zur Kasse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
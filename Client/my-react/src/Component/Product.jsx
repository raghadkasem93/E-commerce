"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useOutletContext } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Product = () => {
  const { search } = useOutletContext()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart, loading: cartLoading } = useCart()
  const [addingToCart, setAddingToCart] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = search ? `http://localhost:5000/api/products/${search}` : `http://localhost:5000/api/products`
        console.log("Fetching products from:", endpoint)
        const response = await axios.get(endpoint)
        console.log("Received products:", response.data.length)
        setProducts(response.data)
      } catch (error) {
        console.error("Fehler beim Abrufen der Produkte:", error)
        setError("Fehler beim Laden der Produkte. Bitte versuche es später erneut.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [search])

  const handleAddToCart = async (productId) => {
    setAddingToCart(prev => ({ ...prev, [productId]: true }))
    
    const result = await addToCart(productId, 1)
    
    if (result.success) {
      // Optional: Toast-Nachricht anzeigen
      console.log("Produkt erfolgreich zum Warenkorb hinzugefügt!")
    } else {
      // Optional: Fehler-Toast anzeigen
      console.error("Fehler beim Hinzufügen:", result.error)
    }
    
    setAddingToCart(prev => ({ ...prev, [productId]: false }))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-error max-w-md mx-auto mt-8">
        <span>{error}</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 max-w-screen-lg md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 py-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <figure className="h-64 overflow-hidden">
            <img
              src={product.mainImage || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </figure>
          <div className="card-body p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="card-title text-lg font-semibold">{product.name}</h2>
              <h3 className="font-bold text-emerald-600">{product.price}€</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="card-actions justify-end">
              <button 
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-5 disabled:opacity-50"
                onClick={() => handleAddToCart(product._id)}
                disabled={addingToCart[product._id] || cartLoading}
              >
                {addingToCart[product._id] ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
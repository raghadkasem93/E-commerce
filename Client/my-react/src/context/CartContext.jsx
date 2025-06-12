"use client"

import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"
import { useAuth } from "./AuthContext"

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }) => {
  const { getUserId, isLoggedIn } = useAuth()
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Cart laden
  const fetchCart = async () => {
    const userId = getUserId()
    if (!userId) return

    try {
      setLoading(true)
      const response = await axios.get(`http://localhost:5000/api/cart/${userId}`)
      setCart(response.data)
      setError(null)
    } catch (error) {
      if (error.response?.status === 404) {
        setCart({ items: [], totalPrice: 0 })
      } else {
        setError("Fehler beim Laden des Warenkorbs")
        console.error("Error fetching cart:", error)
      }
    } finally {
      setLoading(false)
    }
  }

  // Item zum Cart hinzufügen
  const addToCart = async (productId, quantity = 1) => {
    const userId = getUserId()
    if (!userId) {
      setError("Bitte loggen Sie sich ein, um Produkte hinzuzufügen")
      return { success: false, error: "Not logged in" }
    }

    try {
      setLoading(true)
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId,
        productId,
        quantity,
      })
      setCart(response.data)
      setError(null)
      return { success: true }
    } catch (error) {
      setError(error.response?.data?.message || "Fehler beim Hinzufügen zum Warenkorb")
      console.error("Error adding to cart:", error)
      return { success: false, error: error.response?.data?.message }
    } finally {
      setLoading(false)
    }
  }

  // Cart Item aktualisieren
  const updateCartItem = async (productId, newQuantity) => {
    const userId = getUserId()
    if (!userId) return { success: false }

    try {
      setLoading(true)
      const response = await axios.put("http://localhost:5000/api/cart/update", {
        userId,
        productId,
        change: newQuantity,
      })
      setCart(response.data.cart)
      setError(null)
      return { success: true }
    } catch (error) {
      setError(error.response?.data?.message || "Fehler beim Aktualisieren")
      console.error("Error updating cart:", error)
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  // Item aus Cart entfernen
  const removeFromCart = async (productId) => {
    const userId = getUserId()
    if (!userId) return { success: false }

    try {
      setLoading(true)
      const response = await axios.delete("http://localhost:5000/api/cart/remove", {
        data: { userId, productId },
      })
      setCart(response.data)
      setError(null)
      return { success: true }
    } catch (error) {
      setError(error.response?.data?.message || "Fehler beim Entfernen")
      console.error("Error removing from cart:", error)
      return { success: false }
    } finally {
      setLoading(false)
    }
  }

  // Cart laden wenn User sich einloggt
  useEffect(() => {
    fetchCart()
  }, [isLoggedIn])

  const value = {
    cart,
    loading,
    error,
    addToCart,
    updateCartItem,
    removeFromCart,
    fetchCart,
    cartItemCount: cart?.items?.length || 0,
    cartTotal: cart?.totalPrice || 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

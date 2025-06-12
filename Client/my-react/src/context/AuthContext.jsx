

import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on app start
  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (token && userData) {
      setUser(JSON.parse(userData))
      setIsLoggedIn(true)
      // Set default authorization header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    setLoading(false)
  }, [])

  const register = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/register", userData)
      return { success: true, message: response.data.message }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registrierung fehlgeschlagen",
      }
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      })

      const { user: userData, token } = response.data

      // Store in localStorage
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(userData))

      // Set default authorization header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

      // Update state
      setUser(userData)
      setIsLoggedIn(true)

      return { success: true, message: response.data.message }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login fehlgeschlagen",
      }
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
    setIsLoggedIn(false)
  }

  // Get userId from JWT token
  const getUserId = () => {
    if (isLoggedIn && user) {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]))
          return payload.userId
        } catch (e) {
          console.error("Error parsing token:", e)
        }
      }
    }
    // Fallback für nicht eingeloggte Benutzer
    return "507f1f77bcf86cd799439011"
  }

  const value = {
    user,
    isLoggedIn,
    loading,
    register,
    login,
    logout,
    getUserId,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

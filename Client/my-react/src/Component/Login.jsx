"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [user, SetUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  function getUserdata(e) {
    const myuser = { ...user }
    myuser[e.target.name] = e.target.value
    SetUser(myuser)
  }

  async function SubmitLogin(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess("")

    const result = await login(user.email, user.password)

    if (result.success) {
      setSuccess(result.message)
      setTimeout(() => {
        navigate("/product")
      }, 1000)
    } else {
      setError(result.message)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-800">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-emerald-800">
          Noch keinen Account?{" "}
          <Link to="/register" className="font-medium text-emerald-800 hover:underline">
            Jetzt registrieren
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          {error && <div className="text-red-600 text-sm text-center mb-2 p-2 bg-red-50 rounded">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center mb-2 p-2 bg-green-50 rounded">{success}</div>}

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
            <form onSubmit={SubmitLogin} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={getUserdata}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={getUserdata}
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

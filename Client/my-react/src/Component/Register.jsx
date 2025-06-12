
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Register = () => {
  const navigate = useNavigate()
  const [user, SetUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  function getUserdata(e) {
    const myuser = { ...user }
    myuser[e.target.name] = e.target.value
    console.log(myuser)
    SetUser(myuser)
  }

  function SubmitRegister(e) {
    e.preventDefault()
    SendToApi()
  }

  async function SendToApi() {
    setIsSubmitting(true)
    setError("")
    setSuccess("")

    try {
      const { data } = await axios.post("http://localhost:5000/api/user/register", user)

    
      setSuccess(data.message)
      setTimeout(() => {
        navigate("/login")
      },0)
    }catch (error) {
  if (error.response && error.response.data?.message) {
    setError(error.response.data.message)
  } else {
    setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.")
  }
} finally {
  setIsSubmitting(false)
}
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-800">Create your account</h2>
        <p className="mt-2 text-center text-sm text-emerald-800">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-emerald-800 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          {error && <div className="text-red-600 text-sm text-center mb-2 p-2 bg-red-50 rounded">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center mb-2 p-2 bg-green-50 rounded">{success}</div>}

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
            <form onSubmit={SubmitRegister} className="space-y-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={user.firstName}
                  onChange={getUserdata}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={user.lastName}
                  onChange={getUserdata}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

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
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={getUserdata}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={user.role}
                  required
                  onChange={getUserdata}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                >
                  <option value="">Select a role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register

"use client"
import Logo1 from "../assets/bilde.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

const Navbar2 = ({ search, setSearch }) => {
  const navigate = useNavigate()
  const { cartItemCount, cartTotal } = useCart()
  const { user, isLoggedIn, logout, loading } = useAuth()

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleAvatarClick = () => {
    navigate("/register") // Genau wie in deinem ursprünglichen Code
  }

  const handleCartClick = () => {
    navigate("/cart")
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  // Show loading state while auth is loading
  if (loading) {
    return (
      <div className="navbar shadow-sm w-[95%] sm:w-[90%] mx-auto px-2 sm:px-4 flex flex-wrap justify-between items-center bg-white py-2">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-9 h-9 sm:w-11 sm:h-11 relative rounded-full border-2 border-emerald-600 overflow-hidden">
            <img src={Logo1 || "/placeholder.svg"} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="loading loading-spinner loading-sm"></div>
      </div>
    )
  }

  return (
    <div className="navbar shadow-sm w-[95%] sm:w-[90%] mx-auto px-2 sm:px-4 flex flex-wrap justify-between items-center bg-white py-2">
      {/* LEFT: Logo + Burger Icon */}
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-9 h-9 sm:w-11 sm:h-11 relative rounded-full border-2 border-emerald-600 overflow-hidden">
          <img src={Logo1 || "/placeholder.svg"} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Whats New</a>
            </li>
            <li>
              <a>AboutUs</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li>
            <Link to="/product" className="font-medium">
              Product
            </Link>
          </li>
          <li>
            <a className="font-medium">Whats New</a>
          </li>
          <li>
            <Link to="/aboutus" className="font-medium">
              About Us
            </Link>
          </li>
          <li>
            <a className="font-medium">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <div className="form-control">
          <div className="input-group input-group-xs">
            <input
              type="text"
              placeholder="Search"
              className="input input-xs sm:input-sm input-bordered w-16 sm:w-24 md:w-auto"
              value={search}
              onChange={handleSearchChange}
            />
            <button className="btn btn-xs sm:btn-sm btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Dropdown mit echten Daten */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs sm:btn-sm btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="badge badge-xs sm:badge-sm indicator-item bg-emerald-600 text-white border-none">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cartItemCount} Items</span>
              <span className="text-emerald-600">Subtotal: {cartTotal.toFixed(2)}€</span>
              <div className="card-actions">
                <button
                  className="btn btn-block bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                  onClick={handleCartClick}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Avatar mit onClick zum Register navigieren - GENAU WIE URSPRÜNGLICH */}
        <div className="btn btn-ghost btn-xs sm:btn-sm btn-circle avatar">
          <div className="w-8 sm:w-10 rounded-full overflow-hidden">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="cursor-pointer"
              onClick={handleAvatarClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2

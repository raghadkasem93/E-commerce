
import { useState } from "react"
import react from 'react'
import {Link } from 'react-router-dom'
const Navbar = () => {
  const [language, setLanguage] = useState("English")
  const [location, setLocation] = useState("Berlin")

  return (
    <div className="w-full bg-emerald-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
      
          <div className="flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+491548796321</span>
          </div>

          {/* Promotion text */}
          <div className="text-center text-xs md:text-sm font-medium">
            <span>Get 50% Off on Selected Items</span>
            <span className="mx-2 hidden sm:inline">|</span>
         <Link >Shop</Link>
          </div>

          {/* Language and location selectors */}
          <div className="flex items-center gap-4">
            {/* Language Modal */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">{language}</span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a onClick={() => setLanguage("English")}>English</a>
                </li>
                <li>
                  <a onClick={() => setLanguage("Arabic")}>Arabic</a>
                </li>
                <li>
                  <a onClick={() => setLanguage("German")}>German</a>
                </li>
              </ul>
            </div>

            {/* Location Modal */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-medium">{location}</span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li className="menu-title">Popular</li>
                <li>
                  <a onClick={() => setLocation("Berlin")}>Berlin</a>
                </li>
                <li>
                  <a onClick={() => setLocation("Munich")}>Munich</a>
                </li>
                <li className="menu-title pt-2">All Locations</li>
                <li>
                  <a onClick={() => setLocation("Frankfurt")}>Frankfurt</a>
                </li>
                <li>
                  <a onClick={() => setLocation("Hamburg")}>Hamburg</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

"use client"

import Logo from "../assets/shope.jpg"
import Product from "./Product.jsx"

const InMittel = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-12">
        <div className="hero w-[90%] mx-auto px-4">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-x-12 gap-y-8">
           <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
  <div className="absolute inset-0 bg-emerald-200 rounded-full opacity-20 z-0"></div>
  <img
    src={Logo}
    className="w-full h-full object-cover rounded-full relative z-10 drop-shadow-lg"
    alt="Fashion Collection"
  />
</div>

            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 leading-tight mb-4">
                Grab Upto <span className="text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">50% Off</span> On
                Selected Clothing
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Entdecke unsere neueste Kollektion mit nachhaltiger Mode und zeitlosen Designs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn py-4 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border-none text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Jetzt shoppen
                </button>
                <button className="btn py-4 px-8 rounded-full bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 text-lg font-medium">
                  Kollektion ansehen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nachhaltige Mode</h3>
              <p className="text-gray-600">100% umweltfreundliche Materialien</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Schnelle Lieferung</h3>
              <p className="text-gray-600">Kostenloser Versand ab 50€</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Beste Qualität</h3>
              <p className="text-gray-600">30 Tage Rückgaberecht</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Unsere Bestseller</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Entdecke die beliebtesten Artikel aus unserer aktuellen Kollektion
            </p>
          </div>
          <Product />
        </div>
      </div>
    </>
  )
}

export default InMittel

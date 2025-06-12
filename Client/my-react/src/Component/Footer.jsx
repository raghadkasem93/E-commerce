import React from  'react'

import { ArrowRight, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {




  return (
    

<div className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Kontaktiere uns</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Hast du Fragen oder Anregungen? Wir freuen uns, von dir zu hören!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Adresse</h3>
              <p>
                Modestraße 123
                <br />
                10115 Berlin
                <br />
                Deutschland
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">E-Mail</h3>
              <p>
                info@deinmodeshop.de
                <br />
                support@deinmodeshop.de
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Telefon</h3>
              <p>
                +49 30 1234567
                <br />
                Mo-Fr: 9:00 - 18:00 Uhr
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12 space-x-6">
            <a href="#" className="text-white hover:text-emerald-200">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-emerald-200">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-emerald-200">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
           <div className="mt-8 w-full border-t border-emerald-500 pt-6 text-center">
    <p className="text-sm opacity-80">© 2025 Your Company. All rights reserved.</p>
  </div> 
        </div>

  </div>


  )
}

export default Footer

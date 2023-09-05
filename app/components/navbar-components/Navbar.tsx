'use client'
import { useState } from 'react'
import navbardata from '@/app/mockdata/navbar-mockdata'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-row justify-between px-2 py-6 md:px-20 md:py-6 bg-[#3D3F3C]">
      <div className="flex items-center cursor-pointer">
        <a href="/"></a>
        <div className="relative w-8 h-8 bg-[#FF6000] rounded-full flex items-center justify-center">
          <p className="text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">S</p>
        </div>
        <div className="font-bold px-2 md:px-2 text-white">Sudhakar</div>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-[#FF6000] rounded-md mr-2" fill="none" viewBox="0 0 24 24" stroke="#000">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Menu */}
      <div className={`md:flex md:space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'} max-md:w-full max-md:absolute max-md:right-0 max-md:py-4 max-md:top-14 bg-[#3D3F3C]`}>
        {navbardata.map((item) => (
          <div key={item.id} className={`px-6 text-white font-normal cursor-pointer`}>
            {item.name}
          </div>
        ))}
      </div>
      <button className="rounded-3xl md:px-6 md:py-2 px-4 py-1 text-xs md:text-md bg-[#FF6000] items-center text-white font-medium md:block hidden">Contact Us</button>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'

export default function Footer() {
  return (
    <footer className="bg-[#3d3f3c] rounded-t-3xl md:px-20 md:pt-10">
      <div className="justify-center items-center">
        <div className="flex flex-row py-8 justify-center items-center">
          <div className=" text-white font-semibold font-timesnew">
            <div className=" space-x-3 text-3xl md:text-5xl">
              Let&apos;s <span className="text-[#FF6000]">Connect</span> there
            </div>
          </div>
          <div className="md:flex-grow"></div>
          <div className="space-x-8  hidden md:block flex-row relative">
            <div className="flex items-center pl-2">
              <button className="bg-[#f1f2f1] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6 z-10"></button>
              <Image src={arrow} alt={''} className="md:w-8 w-10 flex justify-center items-center z-20" />
              <button className="rounded-3xl bg-[#FF6000] relative ml-4 justify-end z-10">
                <div className="text-white font-medium px-4 py-4 md:py-3 text-xs md:text-xs">View My Portfolio</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white body-font">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <div className="relative w-8 h-8 bg-[#FF6000] rounded-full flex items-center justify-center">
                    <p className="text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">S</p>
                  </div>
                  <span className="ml-3  text-xl py-4 md:py-0">Sudhakar</span>
                </a>
                <p className="mt-2 text-sm text-white pb-4 md:py-0">Air plant banjo lyft occupy retro adaptogen indego</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center justify-center">
              <h2 className="title-font font-medium text-[#ff6000] tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center justify-center">
              <h2 className="title-font font-medium text-[#ff6000] tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FF6000] tracking-widest text-sm mb-3">CONTACT US</h2>
              <div className="flex flex-col md:flex-row justify-center items-center max-md:space-y-4">
                {' '}
                {/* Updated this line */}
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Email us"
                    className="w-full bg-white rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="justify-center item-center flex">
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#FF6000] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#FF6000] rounded">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#f1f1f1]"></a>
          <p className="text-md text-[#f1f1f1] sm:ml-3 sm:mt-0 mt-4">
            <span className="text-md">Copyright</span>© 2023 —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-[#f1f1f1] ml-1" target="_blank">
              <span className="text-[#ff6000]">Sudhakar.</span> All Rights Reserved.
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="text-md">
              <span>User Terms & Conditions | Privacy Policy.</span>
            </div>
          </span>
        </div>
      </div>
    </footer>
  )
}

import Image from 'next/image'
import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import footerarrow from '@/app/assets/contact-assets/images/fast-forward-double-right-arrows.png'
import ButtonComponent from '../reusable-components/ButtonComponent'

export default function Footer() {
  return (
    <footer className="bg-[#3d3f3c] rounded-t-3xl md:px-20 md:pt-10">
      <div className="justify-center items-center">
        <div className="flex flex-col md:flex-row py-8 justify-center items-center">
          <div className=" text-white font-semibold font-timesnew">
            <div className=" space-x-3 text-3xl md:text-5xl">
              Let&apos;s <span className="text-[#FF6000]">Connect</span> there
            </div>
          </div>
          <div className="md:flex-grow"></div>
          <div className="space-x-8  mt-10 flex-row ">
            <ButtonComponent imageSrc={arrow} buttonText="View all my Work" isbgWhite />
          </div>
        </div>
      </div>
      <div className=" border bg-[#3d3f3c] my-4"></div>

      <div className="text-white body-font">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-left">
                <a className="flex title-font font-medium items-center justify-start  text-white">
                  <div className="relative w-8 h-8 bg-[#FF6000] rounded-full flex items-center justify-center">
                    <p className="text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">S</p>
                  </div>
                  <span className="ml-3  text-xl py-4 md:py-0">Sudhakar</span>
                </a>
                <p className="mt-2 text-sm text-white pb-4 md:py-0">Air plant banjo lyft occupy retro adaptogen indego</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start justify-center text-left">
              <h2 className="title-font font-medium text-[#ff6000] tracking-widest text-sm md:text-xl mb-3">
                Navigation
                <nav className="list-none mb-10 space-y-4 text-sm md:text-base mt-6">
                  <li>
                    <a className="text-white hover:text-[#ff6000]">Home</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">About</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">Service</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">Resume</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">Projects</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">Contact Us</a>
                  </li>
                </nav>
              </h2>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start justify-start text-left">
              <h2 className="title-font font-medium text-[#ff6000] tracking-widest text-sm md:text-xl mb-3">
                Contact
                <nav className="list-none mb-10 space-y-4 text-sm md:text-base mt-6">
                  <li>
                    <a className="text-white hover:text-[#ff6000]">+9080663333</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">www.example.com</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">example@gmail.com</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-[#ff6000]">
                      Sathuvachari, <br />
                      Vellore
                    </a>
                  </li>
                </nav>
              </h2>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 relative">
              <h2 className="title-font font-medium text-[#FF6000] tracking-widest text-sm md:text-xl mb-3">Get the Latest Information</h2>
              <div className="flex flex-col md:flex-row justify-center items-center max-md:space-y-4 md:mt-6">
                <div className="relative flex flex-row ">
                  <input
                    type="text"
                    id="email-field"
                    name="email-field"
                    placeholder="Email address"
                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <div className=" h-full  flex items-center justify-center">
                    <button className="  flex-shrink-0 inline-flex text-white bg-[#FF6000] border-2 border-[#ff6000] py-2 px-2 focus:outline-none  rounded items-center justify-center">
                      <Image src={footerarrow} alt="contact-icons" className="w-6 h-6 justify-center items-center " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border bg-[#3d3f3c] my-4"></div>

        <div className="container px-5 max-md:pb-6 max-md:pt-0 py-6 mx-auto flex items-center sm:flex-row flex-col">
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

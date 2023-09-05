'use client'
import React, { useEffect, useRef } from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import testimonialmockdata from '@/app/mockdata/testimonials-mockdata'
import Image from 'next/image'
export default function Testimonials() {
  const sliderRef = useRef(null)

  useEffect(() => {
    // Initialize Keen Slider when the component mounts
    if (sliderRef.current) {
      const keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1,
              spacing: 40,
            },
          },
        },
      })

      // Add event listeners for previous and next buttons
      const keenSliderPrevious = document.getElementById('keen-slider-previous')
      const keenSliderNext = document.getElementById('keen-slider-next')

      keenSliderPrevious?.addEventListener('click', () => keenSlider.prev())
      keenSliderNext?.addEventListener('click', () => keenSlider.next())
    }
  }, [])

  return (
    <main className="px-4 md:px-40 py-4">
      <div className="text-center font-semibold flex-wrap md:flex-nowrap">
        <div className="text-2xl md:text-5xl text-black font-semibold font-timesnew">
          Testimonials that
          <br />
          <span>Speak to </span> <span className="text-[#FF6000]">My Results</span>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider text-center py-8 px-auto ">
        {testimonialmockdata.map((testimonial) => (
          <div key={testimonial.id} className="keen-slider__slide  rounded-3xl">
            <blockquote className="flex h-full flex-col text-center items-center justify-center bg-[#f1f1f1] p-6 shadow-sm sm:p-8 lg:p-12">
              <div>
                <div className="mt-4">
                  <p className="mt-4 leading-relaxed text-gray-700 ">{testimonial.content}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-4">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200">
                    <Image src={testimonial.imgurl} alt="image" className="w-12 h-12 rounded-full object-center object-fill" />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <footer className="text-sm font-medium text-gray-700 mt-2 sm:mt-0">{testimonial.author}</footer>
                  <div className="text-sm font-medium text-gray-700">{testimonial.designation}</div>
                </div>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="text-center justify-center">
        <button
          aria-label="Next slide"
          id="keen-slider-previous"
          className="mx-4 rounded-full cursor-pointer border border-[#50524f] bg-[#50524f] p-2 text-white transition hover:bg-[#ff6000] hover:border-[#ff6000] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-move-left"
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full cursor-pointer border border-[#50524f] bg-[#50524f] p-2 text-white transition hover:bg-[#ff6000] hover:border-[#ff6000] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
      </div>
    </main>
  )
}

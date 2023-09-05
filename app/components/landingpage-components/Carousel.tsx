'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Carousel = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1))
  }

  const currentItem = data[currentIndex]

  return (
    <div className="flex flex-col">
      <div className=" flex-row flex  items-center justify-center  ">
        <Image src={currentItem.image1} alt="Image 1" fill className="object-cover rounded-xl" />
        <Image src={currentItem.image2} alt="Image 2" fill className="object-cover rounded-xl" />
      </div>

      <div className="carousel-content">
        <h2>{currentItem.title}</h2>
        <p>{currentItem.content}</p>
        <p>Tags: {currentItem.tags}</p>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevClick}>&lt; Prev</button>
        <button onClick={handleNextClick}>Next &gt;</button>
      </div>
    </div>
  )
}

export default Carousel

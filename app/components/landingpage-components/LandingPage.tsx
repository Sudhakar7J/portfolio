import Image from 'next/image'
import landingimage from '../../assets/landingpage-assets/images/image-removebg-preview.png'
import overlay from '../../assets/landingpage-assets/images/circular.png'
import img1 from '../../assets/testimonials-assets/images/pexels-anna-tarazevich-4927361.jpg'
import img2 from '../../assets/testimonials-assets/images/pexels-cottonbro-studio-5119214.jpg'
import img3 from '../../assets/testimonials-assets/images/pexels-masha-raymers-2853198.jpg'
import img4 from '../../assets/testimonials-assets/images/pexels-anna-tarazevich-4927361.jpg'
import play from '@/app/assets/landingpage-assets/images/play-button.png'

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:w-1/2  md:pl-40 text-center md:text-start md:px-20 ">
        <button className="border-2 border-[#8E8F8E] rounded-3xl px-6 py-3 font-medium mt-10">Hello!</button>
        <div className="md:mt-10 mt-4">
          <div className="md:text-6xl text-3xl font-semibold flex flex-col md:space-y-2 space-y-2 font-timesnew">
            <span className="text-[#FF6000]">I&apos;m Sudhakar,</span>
            <span>Frontend Developer</span>
            <span>Based in India.</span>
          </div>
          <div className="md:text-lg text-sm md:mt-4 mt-4 font-sans font-medium text-[#50524f] max-md:px-4">
            <span>
              I have extensive experience in frontend development, specializing in React, Next.js, and Tailwind CSS. I&apos;ve built interactive and responsive web applications, optimized for
              performance and user experience.
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-row max-md:justify-between md:space-x-4 relative max-md:mx-2">
          {/* First Child */}
          <div className="flex items-center pl-2">
            <button className="bg-[#3D3F3C] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6 z-10"></button>
            <Image src={play} alt={''} className="md:w-8 w-10 flex justify-center items-center z-20" />
            <button className="rounded-3xl bg-[#FF6000] relative ml-4 justify-end z-10">
              <div className="text-white font-medium px-4 py-4 md:py-3 text-xs md:text-xs">View My Portfolio</div>
            </button>
          </div>

          {/* Second Child */}
          <button className="border-2 border-[#8E8F8E] rounded-3xl font-medium px-4 py-2 text-xs lg:text-xs z-10">Hire Me</button>
        </div>

        <div className="flex flex-row pt-10 items-center ">
          <div className="flex flex-row relative items-center justify-between rounded-full border-4 border-white ">
            <Image src={img1} alt={''} className="rounded-full border-4 border-white object-cover object-center h-12 w-12" style={{ marginRight: '-14px' }} />
            <Image src={img2} alt={''} className="rounded-full border-4 border-white object-cover object-center h-12 w-12" style={{ marginRight: '-14px' }} />
            <Image src={img3} alt={''} className="rounded-full border-4 border-white object-cover object-center h-12 w-12" style={{ marginRight: '-14px' }} />
            <Image src={img4} alt={''} className="rounded-full border-4 border-white object-cover object-center h-12 w-12" style={{ marginRight: '-14px' }} />

            <div className="rounded-full border-4 border-white w-12 h-12 flex items-center justify-center bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-6 text-[#ff6000] object-cover object-center">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 flex-grow px-4 justify-center font-timesnew font-semibold">
            <span className="text-xl">450+ </span>
            <span className="text-base capitalize">Happy clients</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 md:pr-40 flex items-center order-last md:order-last">
        <div className="relative">
          <div className="md:w-96 md:h-72 h-48 w-48 bg-[#FF6000] absolute rounded-t-full top-2/3 md:top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
            <div className="absolute rounded-full top-4 md:top-12 left-40 md:left-80 w-max   md:h-full z-10 ">
              <Image src={overlay} alt={'overlay'} className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full  border-8 border-white bg-white" />
            </div>
          </div>
          <Image src={landingimage} alt={'landingimage'} width={500} height={600} className="max-h-100 md:max-h-400 object-cover relative" />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import landingimage from '../../assets/landingpage-assets/images/image-removebg-preview.png'
import overlay from '../../assets/landingpage-assets/images/circular.png'
import img1 from '../../assets/testimonials-assets/images/pexels-anna-tarazevich-4927361.jpg'
import img2 from '../../assets/testimonials-assets/images/pexels-cottonbro-studio-5119214.jpg'
import img3 from '../../assets/testimonials-assets/images/pexels-masha-raymers-2853198.jpg'
import img4 from '../../assets/testimonials-assets/images/pexels-anna-tarazevich-4927361.jpg'
import world from '@/app/assets/landingpage-assets/images/paper-plane.png'
import play from '@/app/assets/landingpage-assets/images/play-button.png'
import ButtonComponent from '../reusable-components/ButtonComponent'

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row h-full md:mt-12">
      {/* Left Panel */}
      <div className="md:w-1/2 md:pl-40 text-center md:text-start md:px-20 relative ">
        <button className="border-2 border-[#8E8F8E] rounded-[40px] px-5 py-3 font-medium mt-10  relative bg-white text-xl">Hello!</button>

        <button className="absolute top-6  flex-shrink-0 inline-flex text-white  py-2 px-2 focus:outline-none  rounded items-center justify-center">
          <Image src={world} alt="contact-icons" className="w-5 h-5  " />
        </button>
        <div className="md:mt-10 mt-4">
          <div className="md:text-6xl text-3xl  flex flex-col md:space-y-3 space-y-2 font-timesnew" style={{ fontWeight: 600 }}>
            <span className="text-[#FF6000]">I&apos;m Sudhakar,</span>
            <span>Frontend Developer</span>
            <span>based in India.</span>
          </div>
          <div className="md:text-lg text-sm md:mt-4 mt-4 font-sans font-medium text-[#9e9b9b] max-md:px-4">
            <span>
              I have extensive experience in frontend development, specializing in React, Next.js, and Tailwind CSS. I&apos;ve built interactive and responsive web applications, optimized for
              performance and user experience.
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-row max-md:justify-between md:space-x-4 relative max-md:mx-2">
          {/* First Child */}
          <ButtonComponent imageSrc={play} buttonText="View my Portfolio" />

          {/* Second Child */}
          <button className="border-2 border-[#8E8F8E] rounded-[40px] font-semibold px-4 py-2 text-xs lg:text-[16px] ">Hire Me</button>
        </div>
        <div className="flex flex-row pt-10 items-center mb-10 max-md:px-3">
          <div className="flex flex-row relative items-center justify-between rounded-full border-4 border-white ">
            <Image src={img1} alt={''} className="rounded-full border-4 border-white object-cover object-center md:h-14 md:w-14 h-10 w-10 " style={{ marginRight: '-14px' }} />
            <Image src={img2} alt={''} className="rounded-full border-4 border-white object-cover object-center md:h-14 md:w-14 h-10 w-10" style={{ marginRight: '-14px' }} />
            <Image src={img3} alt={''} className="rounded-full border-4 border-white object-cover object-center md:h-14 md:w-14 h-10 w-10" style={{ marginRight: '-14px' }} />
            <Image src={img4} alt={''} className="rounded-full border-4 border-white object-cover object-center md:h-14 md:w-14 h-10 w-10" style={{ marginRight: '-14px' }} />

            <div className="rounded-full border-4 border-white md:h-14 md:w-14 h-10 w-10   flex items-center justify-center bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-6 text-[#ff6000] object-cover object-center">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-1 flex-grow px-4 justify-center items-start font-timesnew font-semibold">
            <span className="text-2xl font-bold">450+ </span>
            <span className="text-base capitalize">Happy clients</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 md:pr-40 flex items-end order-last md:order-last">
        <div className="relative">
          <div className="md:w-96 md:h-72 h-32 w-48 bg-[#FF6000] absolute rounded-t-full top-3/4 md:top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
            <div className="absolute rounded-full top-4 md:top-12 left-40 md:left-80 w-max   md:h-full  ">
              <Image src={overlay} alt={'overlay'} className="w-12 h-12 md:w-28 md:h-28 object-cover rounded-full  border-8 border-white bg-white" />
            </div>
          </div>
          <Image src={landingimage} alt={'landingimage'} width={500} height={600} className="max-h-100 md:max-h-400 px-20 md:px-0 object-cover relative" />
        </div>
      </div>
    </div>
  )
}

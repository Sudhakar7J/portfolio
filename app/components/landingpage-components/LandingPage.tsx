import Image from 'next/image'
import landingimage from '../../assets/landingpage-assets/images/image-removebg-preview.png'

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:w-1/2 md:p-8 p-3 md:pl-40 text-center md:text-start">
        <div className="">
          <button className="border-2 border-[#8E8F8E] rounded-3xl px-4 py-2">Hello!</button>
        </div>
        <div className="md:mt-10 mt-4">
          <div className="md:text-3xl text-2xl font-semibold flex flex-col md:space-y-4 space-y-2">
            <span className="text-[#FF6000]">I&apos;m Sudhakar,</span>
            <span>Frontend Developer</span>
            <span>Based in India.</span>
          </div>
          <div className="md:text-md text-sm md:mt-10 mt-4">
            <span>
              I have extensive experience in frontend development, specializing in React, Next.js, and Tailwind CSS. I&apos;ve built interactive and responsive web applications, optimized for
              performance and user experience.
            </span>
          </div>
        </div>
        <div className="space-x-8  mt-10 flex flex-row ">
          <div className="relative">
            <button className="bg-[#3D3F3C] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6"></button>
            <button className="rounded-3xl bg-[#FF6000] relative ml-8 justify-end">
              <div className="text-white font-medium px-4 py-4  md:py-3 text-xs md:text-xs ">View My Portfolio</div>
            </button>
          </div>
          <button className="border-2 border-[#8E8F8E] rounded-3xl px-4 py-2 text-xs lg:text-xs">Hire Me</button>
        </div>

        <div>
          <div className="flex flex-col mt-10 space-y-2">
            <span className="text-xl">450+ </span>
            <span className="text-base">Happy clients</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 p-8 md:pr-40 flex items-center order-last md:order-last">
        <div className="relative">
          <div className="md:w-72 md:h-72  h-48 w-48 bg-[#FF6000] absolute rounded-full top-2/3 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3"></div>
          <Image src={landingimage} alt={'landingimage'} width={400} height={400} className=" max-h-100 md:max-h-400 object-cover relative rounded-b-xl" />
        </div>
      </div>
    </div>
  )
}

import experiencemockdata from '@/app/mockdata/experience-mockdata'
import Image from 'next/image'
import landingimage from '../../assets/landingpage-assets/images/image-removebg-preview.png'
import workingprocessmockdata from '@/app/mockdata/workingprocess-mockdata'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import ButtonComponent from '../reusable-components/ButtonComponent'
import rightarrow from '@/app/assets/workexperience-assets/images/right-arrow.png'

export default function WorkExperience() {
  return (
    <section>
      <div className="flex flex-col px-4 md:px-40 py-8 md:pb-20">
        <div className="flex text-black text-3xl md:text-[54px] font-semibold text-center justify-center space-x-3 md:py-20 flex-wrap md:flex-nowrap font-timesnew">
          <span>My</span>
          <span className="text-[#FF6000]">Education</span>
          <span>&</span>
          <span className="text-[#FF6000]">Work Experience</span>
        </div>
        <div className="flex md:flex-row flex-wrap md:flex-nowrap md:pb-10">
          {experiencemockdata.map((item, index) => (
            <div className="md:w-1/2 py-4 md:py-0 md:px-8  flex flex-col flex-grow " key={index}>
              <div className="text-[#FF6000] text-3xl md:text-[38px] font-semibold capitalize font-timesnew">{item.category}</div>
              <div className=" border bg-[#3d3f3c] my-4"></div>

              {item.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="flex md:flex-row justify-between py-4">
                  <div className=" px-auto space-y-3 max-md:w-1/2">
                    <div className="text-black  text-xl md:text-3xl capitalize font-semibold ">{subcategory.name}</div>
                    <div className="text-[#3d3f3c]  text-sm md:text-2xl capitalize">{subcategory.location}</div>
                  </div>
                  <div className="px-2 md:ml-auto max-md:w-1/2">
                    <div className="border-0 md:px-6 px-2 py-2 md:py-3 text-sm md:text-xl text-center flex font-medium bg-[#f1f1f1] rounded-xl items-center justify-center">{subcategory.year}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="md:pt-48 rounded-3xl bg-[#f6f6f6]">
        <div className=" px-4 md:px-40 flex flex-row ">
          <div className="md:w-1/2 relative hidden md:block ">
            <div className=" md:pr-40 flex items-end justify-center order-last md:order-last">
              <div className="relative">
                <div className="md:w-72 md:h-72  h-48 w-48 bg-[#FF6000] absolute rounded-full top-2/3 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3"></div>
                <Image src={landingimage} alt={'landingimage'} width={400} height={400} className=" max-h-100 md:max-h-400 object-cover relative rounded-b-xl" />
              </div>
              <div className="absolute top-0 right-0 ">
                <div className="bg-white w-16 h-16 rounded-full absolute top-34 right-[520px] shadow-xl flex items-center justify-center">
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
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div className="bg-white w-16 h-16 rounded-full absolute top-48 right-32 shadow-xl flex items-center justify-center">
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
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div className="bg-white w-16 h-16 rounded-full absolute top-10 right-40 shadow-xl flex items-center justify-center">
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
                    className="lucide lucide-palette"
                  >
                    <circle cx="13.5" cy="6.5" r=".5" />
                    <circle cx="17.5" cy="10.5" r=".5" />
                    <circle cx="8.5" cy="7.5" r=".5" />
                    <circle cx="6.5" cy="12.5" r=".5" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                  </svg>
                </div>
                <div className="bg-white w-16 h-16 rounded-full absolute -top-16 right-80 shadow-xl flex items-center justify-center">
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
                    className="lucide lucide-blocks"
                  >
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  flex-col ">
            <div className="py-4">
              <span className="text-3xl md:text-[56px] font-semibold font-timesnew" style={{ fontWeight: 550 }}>
                Why you <span className="text-[#ff6000] ">Hire me</span> for your next projects?
              </span>
            </div>
            <div className="font-normal text-[#50524f] md:py-4 md:pr-20 ">
              As someone who is a scientist who studies crows, I am telling you, specifically, in science, no one calls jackdaws crows. If you want to be &quot;specific&quot; like you said, then you
              shouldn&apos;t either. They&apos;re not the same thing.
            </div>
            <div className="flex flex-row justify-between py-4 md:pr-40 ">
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-timesnew ">600+</span>
                <span className="text-sm md:text-xl capitalize text-[#50524f]">project completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-timesnew">5+</span>
                <span className="text-sm md:text-xl capitalize text-[#50524f]">industry covered</span>
              </div>
            </div>
            <div className=" my-8 ">
              <ButtonComponent imageSrc={arrow} buttonText="Hire me now!" />
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 md:px-40 md:py-24 py-10 mt-4">
        <div className="text-3xl md:text-[54px] text-center font-semibold flex-wrap md:flex-nowrap font-timesnew">
          My Working <span className="text-[#ff6000]">Process</span>
        </div>
        <div className="flex text-center flex-wrap md:flex-nowrap md:mt-10">
          {workingprocessmockdata.map((content, index) => (
            <div key={index} className="flex flex-row">
              <div className="flex flex-col justify-center items-center py-4 md:py-8 px-4 text-center">
                <div className="rounded-full bg-[#50524f] h-20 w-20 flex items-center justify-center  text-white">
                  <Image src={content.svg} alt={'svg'} className="text-white fill-white object-cover w-10 h-10"></Image>
                </div>
                <div className="py-4 font-semibold text-2xl">{content.title}</div>
                <div className=" font-normal text-md text-[#50524f]">{content.content}</div>
              </div>
              {index !== workingprocessmockdata.length - 1 && (
                <div className="md:py-10 items-center justify-center flex-wrap md:block hidden">
                  <Image src={rightarrow} alt={'svg'} className="text-white bg-white  "></Image>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

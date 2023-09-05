import blogmockdata from '@/app/mockdata/blog-mockdata'
import Image from 'next/image'
import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import ButtonComponent from '../reusable-components/ButtonComponent'

export default function BlogSection() {
  return (
    <div>
      <div className="rounded-3xl bg-[#f6f6f6] px-4 md:px-40 py-10">
        <div className="flex flex-row py-4">
          <div className="text-2xl md:text-5xl text-black font-semibold font-timesnew">
            <div className=" space-x-3">
              From
              <span className="text-[#FF6000] ml-2">
                my <br />
                Blog Posts
              </span>
            </div>
          </div>
          <div className="md:flex-grow"></div>
          <div className="space-x-8  mt-10 flex-row relative ">
            <ButtonComponent imageSrc={arrow} buttonText="See more posts" />
          </div>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container  py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {blogmockdata.map((blog) => (
                <div key={blog.id} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                    <Image className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer  " src={blog.imgurl} alt="blog" />
                    <div className="md:p-6 p-4">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 cursor-pointer px-auto w-28">
                        <div className="border w-min rounded-3xl px-4 py-1 bg-white text-black">{blog.tags}</div>
                      </h2>
                      <h1 className="title-font text-lg  text-gray-900 mb-3 cursor-pointer font-timesnew font-semibold">{blog.title}</h1>
                      <div className="flex items-center flex-wrap justify-between">
                        <div className="text-[#ff6000] inline-flex items-center md:mb-2 lg:mb-0 cursor-default">{blog.author}</div>
                        <div className="text-[#ff6000] inline-flex items-center md:mb-2 lg:mb-0 cursor-default">{blog.Date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  )
}

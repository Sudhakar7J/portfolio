import blogmockdata from '@/app/mockdata/blog-mockdata'
import Image from 'next/image'
import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import ButtonComponent from '../reusable-components/ButtonComponent'
import record from '@/app/assets/contact-assets/images/record.png'

export default function BlogSection() {
  return (
    <div>
      <div className="rounded-3xl bg-[#f6f6f6] px-4 md:px-40 py-6">
        <div className="flex flex-row py-10 max-md:text-center justify-center">
          <div className="text-2xl md:text-6xl text-black font-semibold font-timesnew">
            <div className=" md:space-x-3 md:block hidden">
              From
              <span className="text-[#FF6000] ml-2">
                My <br />
                Blog{' '}
              </span>
              Posts
            </div>
            <div className=" md:space-x-3 max-md:block hidden">
              From
              <span className="text-[#FF6000] ml-2">
                My Blog<span> Posts</span>
              </span>
            </div>
          </div>
          <div className="md:flex-grow"></div>
          <div className="space-x-8  mt-10 flex-row  md:block hidden ">
            <ButtonComponent imageSrc={arrow} buttonText="View all Blogs" />
          </div>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container  py-4 mx-auto md:mb-32">
            <div className="flex flex-wrap -m-4">
              {blogmockdata.map((blog) => (
                <div key={blog.id} className="p-4 md:w-1/3 px-auto py-auto max-md:border-2 max-md:rounded-xl max-md:py-10 max-md:hover:bg-[#dadbda]">
                  <div className="h-full border-0 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-center  ">
                    <Image className="md:h-56 w-full object-cover object-center cursor-pointer rounded-3xl  " src={blog.imgurl} alt="blog" />
                    <div className="md:py-4 py-4 ">
                      <div className=" text-xs title-font  font-medium text-gray-400 mb-1 cursor-pointer px-auto w-28">
                        <div className="border w-min  rounded-3xl px-4 py-1 bg-white text-[#50524f] text-md">{blog.tags}</div>
                      </div>
                    </div>
                    <h1
                      className="title-font  text-lg md:text-2xl text-gray-900 mb-3 cursor-pointer font-timesnew font-bold text-ellipsis hover:line-clamp-none line-clamp-2"
                      style={{ fontWeight: '800' }}
                    >
                      {blog.title}
                    </h1>
                    <div className="flex items-center flex-wrap justify-between text-sm md:text-xl">
                      <div className="flex items-center space-x-2">
                        <Image src={record} alt="contact-icons" className="w-3 h-3 justify-center items-center " />
                        <div className="text-black inline-flex items-center md:mb-2 lg:mb-0 cursor-default">{blog.author}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image src={record} alt="contact-icons" className="w-3 h-3 justify-center items-center " />
                        <div className="text-black inline-flex items-center md:mb-2 lg:mb-0 cursor-default">{blog.Date}</div>
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

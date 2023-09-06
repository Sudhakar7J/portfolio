import React from 'react'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'
import Image from 'next/image'
import ButtonComponent from '../reusable-components/ButtonComponent'
import InputField from '../reusable-components/InputField'
import contactmockdata from '@/app/mockdata/contact-mockdata'

export default function ContactSection() {
  return (
    <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto text-gray-900 rounded-lg">
      <div className="flex flex-col justify-center">
        <div className=" md:px-10">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight font-timesnew">
            Let&apos;s <span className="text-[#ff6000] mr-2">Connect</span>& <br />
            <span className="text-[#ff6000]">Collaborate</span>
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an{' '}
            <a className="underline" href="mailto:someone@gmail.com">
              email
            </a>{' '}
            instead.
          </div>
          <div className="mt-8">
            {contactmockdata.map((contact) => (
              <div key={contact.id} className="flex items-center mt-8 flex-row space-x-4">
                <div className="rounded-full bg-[#e5e5e5] h-12 w-12 flex items-center justify-center  text-white">
                  <Image src={contact.imgurl} alt="contact-icons" className="w-5 h-5 justify-center items-center " />
                </div>
                <div className="text-base text-[#50524f]">{contact.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:mt-12 text-center"></div>
      </div>
      <form className="bg-[#f1f1f1] px-2 md:px-10  py-8 rounded-[40px] ">
        <div className="px-auto md:space-x-4 ">
          <InputField type="text" placeholder="First Name*" required />
          <InputField type="text" placeholder="Last Name*" required />
        </div>
        <div className="px-auto md:space-x-4">
          <InputField type="email" placeholder="Email*" required />
          <InputField type="password" placeholder="Password*" required />
        </div>
        <div className="mt-8 ">
          <InputField type="text" placeholder="Subject*" required isFullWidth />
        </div>

        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold"></span>
          <textarea
            className="w-full h-40 bg-white font-semibold text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Message"
            required
          ></textarea>
        </div>
        <div className="mt-8 ">
          <div className="mt-10">
            <ButtonComponent imageSrc={arrow} buttonText="Send Message" />
          </div>
        </div>
      </form>
    </div>
  )
}

import servicesmockdata from '@/app/mockdata/services-mockdata'
import Image from 'next/image'

export default function Services() {
  return (
    <main className="rounded-3xl bg-[#3d3f3c] px-4 md:px-20 py-10">
      <div className="flex flex-col flex-wrap">
        <div className="text-2xl md:text-4xl text-white">
          <span className="text-white">My </span>
          <span className="text-[#FF6000]">Services</span>
        </div>
        <div className="border bg-[#3d3f3c] mt-4"></div>

        <div className="flex flex-row py-4 md:py-8 flex-wrap md:flex-nowrap ">
          {servicesmockdata.map((content) => (
            <div key={content.id} className="flex md:px-4 py-4 md:py-0 hover:text-white">
              <div className={content?.className}>
                <div className="text-xl  lg:text-2xl md:text-3xl text-white hover:text-white  py-4 px-8 ">{content.title}</div>
                <div className="border bg-[#3d3f3c]"></div>
                <div className="text-sm py-4">{content.content}</div>
                <div className="flex justify-center mt-2 mx-auto">
                  <Image src={content.imageurl} alt={'services image'} width={300} className="object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

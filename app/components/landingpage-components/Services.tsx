import servicesmockdata from '@/app/mockdata/services-mockdata'
import Image from 'next/image'
import overlay from '../../assets/landingpage-assets/images/circular.png'
import arrow from '@/app/assets/landingpage-assets/images/arrow.png'

export default function Services() {
  return (
    <main className="rounded-3xl bg-[#3d3f3c] px-4 md:px-40 py-10 md:py-24  z-10">
      <div className="flex flex-col flex-wrap">
        <div className="text-2xl md:text-[54px] text-white font-timesnew md:py-4">
          <span className="text-white">My </span>
          <span className="text-[#FF6000]">Services</span>
        </div>
        <div className="border bg-[#3d3f3c] mt-4"></div>

        <div className="flex flex-row py-4 md:mt-12 flex-wrap md:flex-nowrap ">
          {servicesmockdata.map((content, index) => (
            <div key={content.id} className="flex md:px-4 py-4 md:py-0 hover:text-white">
              <div className={content?.className}>
                <div className="text-xl  lg:text-2xl md:text-3xl text-white hover:text-white   md:py-4 md:px-8 py-4 px-4 font-timesnew flex flex-row justify-between items-center">
                  <div className="font-bold text-2xl md:text-4xl md:py-4">{content.title}</div>
                  <Image src={arrow} alt={''} className="md:w-14 w-12 flex justify-center items-center z-20 " />
                </div>

                <div className="border bg-[#3d3f3c]"></div>
                <div className="text-base py-4 md:py-6 px-4 relative ">
                  {content.content}
                  {index === 1 && (
                    <div className=" absolute rounded-full top-52 md:top-48 -left-4 md:-left-4 w-max md:w-full md:h-full z-10">
                      <Image src={overlay} alt={'overlay'} className="w-24 h-24 md:w-32 md:h-32  object-cover rounded-full  border-[10px] border-[#3d3f3c] bg-white" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center mt-2 mx-auto w-full h-48">
                  <Image src={content.imageurl} alt={'services image'} className={`object-cover rounded-2xl ${index === 1 ? 'clipradimage' : ''} `} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

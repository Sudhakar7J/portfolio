import portfoliomockdata from '@/app/mockdata/portfolio-mockdata'
import Carousel from './Carousel'

export default function Portfolio() {
  return (
    <main className="rounded-3xl bg-[#3d3f3c] px-4 md:px-20 py-10">
      <div className="flex flex-row">
        <div className="text-4xl text-white font-semibold">
          Let&apos;s have a look at
          <br /> <span className="text-[#FF6000]">my Portfolio</span>
        </div>
        <div className="flex-grow"></div>
        <div className="space-x-8  mt-10 flex flex-row">
          <div className="relative">
            <button className="bg-[#ffffff] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6"></button>
            <button className="rounded-3xl bg-[#FF6000] relative ml-8 justify-end w-full">
              <div className="text-white font-medium px-4 py-4  md:py-3 text-xs md:text-xs ">View all my work</div>
            </button>
          </div>
        </div>
      </div>
      {/* carousel */}
      <div>
        <Carousel data={portfoliomockdata} />
      </div>
    </main>
  )
}

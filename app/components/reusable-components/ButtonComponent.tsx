import Image from 'next/image'

export default function ButtonComponent({ imageSrc, buttonText }: any) {
  return (
    <div className="space-x-8 flex flex-row relative">
      <div className="flex items-center flex-row  pl-1 ">
        <button className="bg-[#3D3F3C] absolute left-0 top-0 px-20 rounded-[40px] md:pb-4 py-6 md:py-10 z-10"></button>
        <Image src={imageSrc} alt={''} className="md:w-12 w-10 flex justify-center items-center z-20" />
        <button className="rounded-[40px] bg-[#FF6000] relative ml-2 justify-end z-10 px-auto px-6 ">
          <div className="text-white font-medium  py-4 md:py-5 text-xs md:text-[16px]">{buttonText}</div>
        </button>
      </div>
    </div>
  )
}

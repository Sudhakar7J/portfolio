import Image from 'next/image'

export default function ButtonComponent({ imageSrc, buttonText }: any) {
  return (
    <div className="space-x-8 flex flex-row relative">
      <div className="flex items-center  pl-2">
        <button className="bg-[#3D3F3C] absolute left-0 top-0 px-20 rounded-3xl md:pb-4 py-6 z-10"></button>
        <Image src={imageSrc} alt={''} className="md:w-8 w-10 flex justify-center items-center z-20" />
        <button className="rounded-3xl bg-[#FF6000] relative ml-4 justify-end z-10 ">
          <div className="text-white font-medium px-4 py-4 md:py-3 text-xs md:text-xs">{buttonText}</div>
        </button>
      </div>
    </div>
  )
}

"use client"

import Image, { StaticImageData } from "next/image"
import GuidanceDownwards from "./GuidanceDownwards"

interface ITech{
    Technologies:{img:StaticImageData,name:string}[]
    
}
const Technology=({Technologies}:ITech)=> {
  return (
    <div className="flex flex-col gap-40">
      <div className="w-full flex flex-col gap-4 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <div className="flex flex-col gap-12">
      <p className="text-white text-4xl font-semibold">Technologies</p>
      <div className="w-full grid grid-cols-12 gap-20 px-6">
        {Technologies.map((item,index)=>(
            <div key={index} className="flex flex-col items-center gap-3">
                <div className="size-16"><Image src={item.img} alt="" width={64} height={64} className="rounded-md"/></div>
                <span className="text-white text-base font-medium">{item.name}</span>
            </div>
        ))}
      </div>
      </div>
    </div>
    <GuidanceDownwards/>
    </div>
  )
}

export default Technology
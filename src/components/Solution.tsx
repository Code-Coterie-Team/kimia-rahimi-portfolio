"use client"
import GuidanceDownwards from "./GuidanceDownwards"

const Solution=()=> {
  return (
    <div className="flex flex-col gap-40">
      <div className="w-full flex flex-col gap-4 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <p className="text-white text-4xl font-semibold">Solution</p>
    </div>
    <GuidanceDownwards/>
    </div>

  )
}

export default Solution
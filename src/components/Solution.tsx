"use client"
import GuidanceDownwards from "./GuidanceDownwards";
interface ISolution{
  solution:{desc:string}[]
}
const Solution = ({solution}:ISolution )=> {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full flex flex-col gap-4 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <p className="text-white text-4xl font-semibold">Solution</p>
    </div>
    <div className="flex flex-col gap-6 px-10">
      {solution.map((item,index)=>(
        <div key={index} className="flex gap-2 items-center">
          <div className="size-2 rounded-full bg-gray-400"></div>
          <p className="text-gray-400 text-lg">{item.desc}</p>
        </div>
      ))}
    </div>
    <GuidanceDownwards/>
    </div>
  );
};

export default Solution;
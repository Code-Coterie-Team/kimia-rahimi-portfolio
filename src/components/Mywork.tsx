/* eslint-disable react/no-unescaped-entities */
import ArrowIcon from "@/icons/ArrowIcon"
import WorksIcon from "@/icons/WorksIcon"
import invoices from "@/assets/invoices.png"
import Image from "next/image"
import estate from "@/assets/estate.png"


const Mywork = ()=> {
  return (
    <div className="w-full flex flex-col gap-8 px-10">
    <div className="flex gap-2 w-full py-7 ">
      <div className="border-b border-b-white w-6"></div>
      <div className="border-b border-b-gray-400/40 w-full"></div>
    </div>
    <div className="relative flex items-center gap-10">
      <div className=" bg-yellow-200 blur-lg size-7 "></div>
      <WorksIcon className="text-white absolute"/>
      <span className="text-2xl text-white">My Work</span>
    </div>
    <div className="text-5xl pt-5 pb-7 leading-tight">
      <span className="text-white">
        Some of <span className="text-yellow-200"> my work</span>
        <span className="text-white"> as a <span className="text-yellow-200"> Front-End</span><br />
          <span className="text-white"> developer.</span>
        </span>{" "}
      </span>
    </div>
    <div className="grid grid-row-2 gap-10 w-11/12 justify-center">
       <div className=" border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-yellow-200 grid grid-cols-2">
        <div className="p-12 text-3xl flex flex-col gap-20">
          <div><span className="text-yellow-200">The "Invoices" <span className="text-white"> program is an efficient tool for managing quotes.</span></span></div>
          <div className="text-white flex items-center gap-2">
            <button className="text-2xl font-semibold">Learn more</button>
            <ArrowIcon className="text-4xl"/>
          </div>
        </div>
        <div>
          <Image src={invoices} alt="invoices" className="h-full rounded-tr-2xl rounded-br-2xl"/>
        </div>

      </div>
      <div className=" border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-yellow-200 grid grid-cols-2">
        <div className="p-12 text-3xl flex flex-col gap-20">
          <div><span className="text-yellow-200">The "Estate-landing-page" <span className="text-white"> that allows users to easily view information about estate.</span></span></div>
          <div className="text-white flex items-center gap-2">
            <button className="text-2xl font-semibold">Learn more</button>
            <ArrowIcon className="text-4xl"/>
          </div>
        </div>
        <div>
          <Image src={estate} alt="invoices" className="h-full rounded-tr-2xl rounded-br-2xl"/>
        </div>

      </div>
    </div>
    </div>
  )
}
export default Mywork
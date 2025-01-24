import ArrowIcon from "@/icons/ArrowIcon"
import Image, { StaticImageData } from "next/image"

interface IProject{
  title:string,
  description:string,
  image:StaticImageData,
}

const Myproject = ({title,description,image}:IProject)=> {
  return (
    <div className=" border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-yellow-200 grid grid-cols-2">
    <div className="p-12 text-3xl flex flex-col gap-20">
      <div><span className="text-yellow-200">{title} <span className="text-white">{description}</span></span></div>
      <div className="text-white flex items-center gap-2">
        <button className="text-2xl font-semibold">Learn more</button>
        <ArrowIcon className="text-4xl"/>
      </div>
    </div>
    <div>
      <Image src={image} alt="" className="h-full rounded-tr-2xl rounded-br-2xl"/>
    </div>
    </div>
  )
}

export default Myproject

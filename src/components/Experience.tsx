import Image, { StaticImageData } from "next/image";

interface IDetails{
    date:string;
    imageSrc: StaticImageData;
    company: string;
    position:string;
    description:string[];
}
const Experience = ({date,imageSrc,company,position,description}:IDetails)=> {
  return (
    <div className='border-l border-gray-400 grid grid-cols-experience px-3'>
        <div className="flex flex-col gap-3 px-3">
          <span className="text-white text-sm">{date}</span>
          <Image src={imageSrc}
           alt="Experience" width={100} height={100}/>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-red-300 text-lg">{company} | {position}</span>
          <div className="flex flex-col gap-3 content-center">
                                {description.map((item,index)=>(
                                    <div className="flex gap-1 items-center"  key={index}>
                                      <div className="size-1 rounded-full bg-gray-400" ></div>
                                       <p className="text-gray-400">{item}</p>
                                    </div>
                                ))}
                            <div className="flex gap-2 w-full py-7 ">
                                            <div className="border-b border-b-white w-6"></div>
                                            <div className="border-b border-b-gray-400/40 w-full"></div>
                                        </div> 
                            </div>

        </div>
    </div>
  )
}

export default Experience
import Image, { StaticImageData } from "next/image"

/* eslint-disable @next/next/no-img-element */
interface ISkills{
   title:string,
   languages:{img:StaticImageData,name:string}[]

}

const Myskills =({title,languages}:ISkills)=> {
// const animatSkills = {
//   hidden:{opacity:0},
//   visible:{
//     opacity:1,
//     duration:{}
//   }
// }
  return (
    <div className="flex flex-col gap-14">
        <div><span className="text-3xl font-semibold text-white">{title}</span></div>
        <div className="grid grid-cols-5 gap-10">
            {languages.map((items,index:number)=>(
                <div className="flex flex-col gap-3 items-center" key={index}>
                    <Image src={items.img} alt="" className="size-14 rounded-md"/>
                    <span className="text-blue-700 px-3 text-sm bg-white rounded-full" key={index}>{items.name}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Myskills
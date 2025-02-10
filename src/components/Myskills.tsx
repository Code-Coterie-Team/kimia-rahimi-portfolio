import Image, { StaticImageData } from "next/image"
import {motion} from "framer-motion"

/* eslint-disable @next/next/no-img-element */
interface ISkills{
   title:string,
   languages:{img:StaticImageData,name:string}[]

}

const Myskills =({title,languages}:ISkills)=> {
const animatSkills = {
  hidden:{opacity:0.2},
  visible:{
    opacity:1,
    transition:{staggerChildren:0.1}
  }
}

const itemMotion = {
  hidden:{opacity:0.2},
  visible:{opacity:1,transition:{duration:0.1}}
}
  return (
    <div className="flex flex-col gap-14">
        <div><span className="text-3xl font-semibold text-white">{title}</span></div>
        <motion.div className="grid grid-cols-5 gap-10" variants={animatSkills} initial="hidden" animate="visible">
            {languages.map((items,index:number)=>(
                <motion.div className="flex flex-col gap-3 items-center" key={index} variants={itemMotion}>
                    <Image src={items.img} alt="" className="size-14 rounded-md"/>
                    <span className="text-blue-700 px-3 text-sm bg-white rounded-full" key={index}>{items.name}</span>
                </motion.div>
            ))}
        </motion.div>
        
    </div>
  )
}

export default Myskills
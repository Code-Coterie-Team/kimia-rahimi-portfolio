import AboutIcon from "@/icons/AboutIcon"
import ContactIcon from "@/icons/ContactIcon"
import MyWorkIcon from "@/icons/MyWorkIcon"
import SkillsIcon from "@/icons/SkillsIcon"
import StarIcon from "@/icons/StarIcon"
import WorkIcon from "@/icons/WorkIcon"

const Publicitems = ()=> {
  return (
    <div className="flex flex-col w-full text-base">
           <div>
           <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8 bg-gray-600/40">
            <StarIcon/>
            <span className="text-gray-400">about_me.ts</span>
          </button>
           </div>
          <div>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <AboutIcon/>
            <span className="text-gray-400">About Me</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <WorkIcon/>
            <span className="text-gray-400">Work Experience</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <SkillsIcon/>
            <span className="text-gray-400">Skills</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <MyWorkIcon/>
            <span className="text-gray-400">My Work</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <ContactIcon/>
            <span className="text-gray-400">Contact Me</span>
          </button>
          </div>
    </div>
  )
}

export default Publicitems
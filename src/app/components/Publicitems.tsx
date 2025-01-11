import { AbouticonSvg, ContactSvg, MyworkSvg, SkillsSvg, Star, WorkexperienceSvg } from "@/icons"

const Publicitems = ()=> {
  return (
    <div className="flex flex-col w-full text-base">
           <div>
           <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8 bg-gray-600/40">
            <Star/>
            <span className="text-gray-400">about_me.ts</span>
          </button>
           </div>
          <div>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <AbouticonSvg/>
            <span className="text-gray-400">About Me</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <WorkexperienceSvg/>
            <span className="text-gray-400">Work Experience</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <SkillsSvg/>
            <span className="text-gray-400">Skills</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <MyworkSvg/>
            <span className="text-gray-400">My Work</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-14">
            <ContactSvg/>
            <span className="text-gray-400">Contact Me</span>
          </button>
          </div>
    </div>
  )
}

export default Publicitems
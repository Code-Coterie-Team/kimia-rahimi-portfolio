import AboutProjectIcon from "@/icons/AboutProjectIcon"
import ChallengeIcon from "@/icons/ChallengeIcon"
import SolutionIcon from "@/icons/SolutionIcon"
import TechIcon from "@/icons/TechIcon"
import Link from "next/link"

const Projctdetails=()=> {

const projectdetail = [
  {
    title: "About",
    link: "#about",
    icon: <AboutProjectIcon />,
  },
  {
    title: "Challenge",
    link: " #challenge",
    icon: <ChallengeIcon />,
  },
  {
    title: "Solution",
    link: "#solution",
    icon: <SolutionIcon />,
  },
  {
    title: "Technologies",
    link: "#technologies",
    icon: <TechIcon />,
  },

]
  return (
    <div className="flex flex-col w-full text-base">
      {projectdetail.map((item,index)=>(
        <div key={index}>
            <Link href={item.link} className=" flex gap-1 py-1 hover:bg-dark_border w-full px-12"  >
              {item.icon}
              <span className="text-gray-400">{item.title}</span>
            </Link>
        </div>

      ))}
    </div>
  )
}

export default Projctdetails
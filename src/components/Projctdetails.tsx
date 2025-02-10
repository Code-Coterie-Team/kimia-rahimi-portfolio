import AboutProjectIcon from "@/icons/AboutProjectIcon"
import ChallengeIcon from "@/icons/ChallengeIcon"
import SolutionIcon from "@/icons/SolutionIcon"
import TechIcon from "@/icons/TechIcon"
import Link from "next/link"
import {motion} from "framer-motion"

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

const projectMotion = {
  hidden:{opacity:0},
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemsMotion = {
  hidden:{opacity:0,y:20},
  visible:{opacity:1,y:0,transition:{ duration: 0.2}}
}


  return (
    <motion.div className="flex flex-col w-full text-base" variants={projectMotion} initial="hidden" animate="visible">
      {projectdetail.map((item,index)=>(
        <motion.div key={index} variants={itemsMotion}>
            <Link href={item.link} className=" flex gap-1 py-1 hover:bg-dark_border w-full px-12"   >
              {item.icon}
              <span className="text-gray-400">{item.title}</span>
            </Link>
        </motion.div>

      ))}
    </motion.div>
  )
}

export default Projctdetails
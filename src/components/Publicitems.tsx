import AboutIcon from "@/icons/AboutIcon";
import ContactIcon from "@/icons/ContactIcon";
import MyWorkIcon from "@/icons/MyWorkIcon";
import SkillsIcon from "@/icons/SkillsIcon";
import StarIcon from "@/icons/StarIcon";
import WorkIcon from "@/icons/WorkIcon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useStore } from "../../store/useSection";



const Publicitems = () => {
  const [showAboutItems, setShowAboutItems] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pathName, setPathName] = useState<string>("/#aboutme");
  const {addLink} = useStore();
const {links} = useStore();
const {setActiveLink} = useStore();

const handelAddLink = (name:string,href:string)=>{
  const existlink=links.some((l)=>l.href===href);
  if(!existlink){
      addLink({ name, href });
      setActiveLink(href);
  }
}

  const items = [
    {
      title: "About Me",
      link: "/#aboutme",
      icon: <AboutIcon />,
    },
    {
      title: "Work Experience",
      link: " /#work-experience",
      icon: <WorkIcon />,
    },
    {
      title: "Skills",
      link: "/#skills",
      icon: <SkillsIcon />,
    },
    {
      title: "My Work",
      link: "/#my-work",
      icon: <MyWorkIcon />,
    },
    {
      title: "Contact Me",
      link: "/#contact",
      icon: <ContactIcon />,
    },
  ];

  useEffect(() => {
    const HandelHashChange = () => {
      setPathName(window.location.hash || "#aboutme");
    };
    window.addEventListener("hashchange", HandelHashChange);
    setPathName(window.location.hash);
    return () => {
      window.removeEventListener("hashchange", HandelHashChange);
    };
  }, []);

  const toggleState = () => {
    setShowAboutItems((currentState) => !currentState);
  };

  const sidebarMotion = {
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
    <div className="flex flex-col w-full text-base" >
      <div>
        <Link
          className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8 bg-gray-600/40"
          onClick={()=>{toggleState();handelAddLink("About Me" , "/")}}
          href={"/#aboutme"}
        >
          <StarIcon />
          <span className="text-gray-400">about_me.ts</span>
        </Link>
      </div>
      {showAboutItems && (
        <motion.div variants={sidebarMotion} initial="hidden" animate="visible">
          {items.map((item, index) => {
            return (
              <motion.div key={index} variants={itemsMotion}>
                <Link
                  href={item.link}
                  className="flex gap-1 py-1 hover:bg-dark_border w-full px-14"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Publicitems;

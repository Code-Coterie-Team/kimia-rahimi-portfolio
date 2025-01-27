import AboutIcon from "@/icons/AboutIcon";
import ContactIcon from "@/icons/ContactIcon";
import MyWorkIcon from "@/icons/MyWorkIcon";
import SkillsIcon from "@/icons/SkillsIcon";
import StarIcon from "@/icons/StarIcon";
import WorkIcon from "@/icons/WorkIcon";
import { useEffect, useState } from "react";
import Link from "next/link";

const Publicitems = () => {
  const [showAboutItems, setShowAboutItems] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pathName, setPathName] = useState<string>("/#aboutme");
  console.log(pathName);
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


  const toggleState=()=>{
    setShowAboutItems((currentState)=>!currentState)
  }

 

  return (
    <div className="flex flex-col w-full text-base">
      <div>
        <button
          className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8 bg-gray-600/40"
          onClick={toggleState}
        >
          <StarIcon />
          <span className="text-gray-400">about_me.ts</span>
        </button>
      </div>
      {showAboutItems && (
        <div>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="flex gap-1 py-1 hover:bg-dark_border w-full px-14"
              >
                {item.icon}
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Publicitems;

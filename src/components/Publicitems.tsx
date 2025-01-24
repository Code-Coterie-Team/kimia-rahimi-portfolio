import AboutIcon from "@/icons/AboutIcon";
import ContactIcon from "@/icons/ContactIcon";
import MyWorkIcon from "@/icons/MyWorkIcon";
import SkillsIcon from "@/icons/SkillsIcon";
import StarIcon from "@/icons/StarIcon";
import WorkIcon from "@/icons/WorkIcon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "../../store/useSection";

const Publicitems = () => {
  const { stylePublic, changeStyle } = useStore();
  const [showAboutItems, setShowAboutItems] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pathName, setPathName] = useState<string>("/#aboutme");
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

  useEffect(() => {
    setTimeout(() => {
      changeStyle();
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col w-full text-base">
      <div>
        <button
          className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8 bg-gray-600/40"
          onClick={() => setShowAboutItems(true)}
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
                style={stylePublic}
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

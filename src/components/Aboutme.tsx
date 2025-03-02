"use client";
import styles from "./Aboutme.module.css";
import GithubIcon from "@/icons/GithubIcon";
import GoIcon from "@/icons/GoIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import { useEffect, useState } from "react";
import GuidanceDownwards from "./GuidanceDownwards";

/* eslint-disable react/no-unescaped-entities */
const Aboutme: React.FC = () => {
  const fullText: string = "Front-End Developer";
  const textArray: string[] = fullText.split("");
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (index > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
            setIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex(0);
          }
        } else {
          if (index < textArray.length) {
            setDisplayText((prev) => prev + textArray[index]);
            setIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, textArray]);

  return (
    <div className="h-full w-full pt-20 flex flex-col gap-20">
      <div className="flex flex-col gap-5 text-white px-7 pb-20">
        <div>
          <h1 className="text-6xl font-medium">
            Kimia Rahimi<span className={styles.waveHand}>👋</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <span>Looking for a Job</span>
          <div className="bg-red-600 rounded-full size-2"></div>
          <span>
            / <span className="text-blue-400">{displayText}</span>
          </span>
        </div>
        <div>
          <span className="">
            I'm a software support with a bachelor's degree in computer science
            who just started <br /> Front-End development.
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/kimia-rahimi/" target="blank">
            <button>
              <LinkedinIcon width={24} height={24} />
            </button>
          </a>
          <a href="https://github.com/kimiaRahimi" target="blank">
            <button>
              <GithubIcon width={24} height={24} className="text-white" />
            </button>
          </a>
          <a
            href={"/#contact"}
            className="flex gap-1 bg-zinc-100 py-1 px-3 text-zinc-900 items-center rounded-full text-sm shadow-lg hover:shadow-white/20"
          >
            <span className="font-medium">Contact Me</span>
            <GoIcon className="size-5" />
          </a>
        </div>

      </div>
      <GuidanceDownwards/>
    </div>
  );
};

export default Aboutme;

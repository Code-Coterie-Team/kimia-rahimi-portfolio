/* eslint-disable react/no-unescaped-entities */
import ProfileIcon from "@/icons/ProfileIcon";
import kimiarahimi from "@/assets/kimiaRahimi.jpg";
import Image from "next/image";
import LinkedinIcon from "@/icons/LinkedinIcon";
import GithubIcon from "@/icons/GithubIcon";
import GoIcon from "@/icons/GoIcon";
import university from "@/assets/university.jpg"

const Aboutme_details = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <div className="relative flex items-center gap-10">
        <div className=" bg-profile_color blur-lg size-7 "></div>
        <ProfileIcon className=" absolute text-white" />
        <span className="text-2xl text-white">About Me</span>
      </div>
      <div className="text-5xl pt-5 pb-7">
        <span className="text-white">
          {" "}
          I'm a <span className="text-profile_color">
          software developer
          </span>{" "}
          specialized <br /> on 
          <span className="text-profile_color"> Web Applications</span>
        </span>
      </div>
      <div className="flex gap-44">
        <div className="flex flex-col gap-2 max-w-[35rem]">
          <div className="flex flex-col gap-1">
            <span className="text-white font-semibold text-lg">
              Kimia Rahimi
            </span>
            <span className="text-profile_color text-base">
              {" "}
              Front-End Developer
            </span>
          </div>
          <span className="text-gray-400">
            I am a junior front-end developer who has been in this industry for
            about a year, and I am very passionate about this field.
          </span>
        </div>
        <Image
          src={kimiarahimi}
          alt=""
          className="rounded-full"
          height={200}
          width={200}
        />
      </div>
      <div className="flex gap-36">
        <div className="flex flex-col gap-4 w-80">
          <p className="text-profile_color border-b border-gray-400/40 pb-3 w-full">
            | Languages
          </p>
          <div className="flex gap-3 text-white font-bold text-lg border-b border-gray-400/40 pb-3">
            <span>
              Persian<span className="text-gray-400">-Native</span>
            </span>
            <span>
              English<span className="text-gray-400">-Intermediate</span>
            </span>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/kimia-rahimi/" target="blank">
              <button>
                <LinkedinIcon className="text-white" width={24} height={24} />
              </button>
            </a>
            <a href="https://github.com/kimiaRahimi" target="blank">
              <button>
                <GithubIcon width={24} height={24} className="text-white" />
              </button>
            </a>
            <a href="">
              <button className="flex gap-1 bg-zinc-100 py-1 px-3 text-zinc-900 items-center rounded-full text-sm">
                <span className="font-medium">Contact Me</span>
                <GoIcon className="size-5" />
              </button>
            </a>
          </div>
        </div>
        <div className="p-12 border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-profile_color">
            <div className="flex gap-7">
              <Image src={university} alt="University" height={144} width={144} className="rounded-2xl"/>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-white">Bachelor of Computer Science </p>
                <p className="text-lg font-medium text-profile_color">Shahid Bahonar University of Kerman</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme_details;


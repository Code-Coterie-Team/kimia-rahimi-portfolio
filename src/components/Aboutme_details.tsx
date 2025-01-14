/* eslint-disable react/no-unescaped-entities */
import ProfileIcon from "@/icons/ProfileIcon"
import kimiarahimi from "@/assets/kimiaRahimi.jpg"
import Image from "next/image"



const Aboutme_details= ()=> {
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
           <span className="text-white"> I'm a junior <span className="text-profile_color">Front-End</span> Developer</span>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-2 max-w-[35rem]">
            <div className="flex flex-col gap-1">
            <span className="text-white font-semibold text-lg">Kimia Rahimi</span>
            <span className="text-profile_color text-base"> Front-End Developer</span>
            </div>
            <span className="text-gray-400">I am a junior front-end developer who has been in this industry for about a year, and I am very passionate about this field.</span>
          </div>
          <div className="size-36">
            {/* <img src={kimiarahimi} alt="" className="h-full w-full" /> */}
            <Image src={kimiarahimi} alt="" className="rounded-full"/>
      
          </div>
        </div>

        </div>
        
  )
}

export default Aboutme_details

// <div>
// <span>I am a junior front-end developer who has been in this industry for about a year, and I am very passionate about this field</span>
// </div>
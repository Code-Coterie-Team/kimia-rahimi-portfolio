/* eslint-disable react/no-unescaped-entities */
import MessageIcon from "@/icons/MessageIcon"

const ContactMe = ()=> {
  return (
    <div className="w-full flex flex-col gap-8 px-10">
    <div className="flex gap-2 w-full py-7 ">
      <div className="border-b border-b-white w-6"></div>
      <div className="border-b border-b-gray-400/40 w-full"></div>
    </div>
    <div className="relative flex items-center gap-10">
      <div className=" bg-blue-400 blur-lg size-7 "></div>
      <MessageIcon className="text-blue-100 absolute"/>
      <span className="text-2xl text-white">Contact Me</span>
    </div>
    <div className="text-5xl pt-5 pb-7 leading-tight">
      <span className="text-white">
        Get in <span className="text-blue-400"> contact</span>
        <span className="text-white"> and let's <span className="text-blue-400"> work <br /> together </span>
        </span>{" "}
      </span>
    </div>
    <div>
        <form className="py-10"></form>
    </div>
    </div>

  )
}

export default ContactMe

// Get in contact and let's work together
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
        <form className="w-11/12 py-10 flex flex-col rounded-xl text-white text-base">
        <div className=" flex flex-col border border-gray-400/40 rounded-tl-lg rounded-tr-lg p-4 focus-within:border-blue-400 focus-within:border-2 group">
            <label htmlFor="" className="relative group-focus-within:text-blue-400 group-focus-within:-top-2 group-focus-within:text-sm">Name</label>
            <input type="text" className="bg-transparent outline-none" />
        </div>
        <div className="flex flex-col border border-gray-400/40 p-4 focus-within:border-blue-400 focus-within:border-2 group">
            <label htmlFor="" className="relative group-focus-within:text-blue-400 group-focus-within:-top-2 group-focus-within:text-sm">Email</label>
            <input type="text" className="bg-transparent outline-none" />
        </div>
        <div className="flex flex-col border border-gray-400/40 p-4 focus-within:border-blue-400 focus-within:border-2 group">
            <label htmlFor="" className="relative group-focus-within:text-blue-400 group-focus-within:-top-2 group-focus-within:text-sm">Company</label>
            <input type="text" className="bg-transparent outline-none" />
        </div>
        <div className="flex flex-col border border-gray-400/40 rounded-bl-lg rounded-br-lg p-4 focus-within:border-blue-400 focus-within:border-2 group">
            <label htmlFor="" className="relative group-focus-within:text-blue-400 group-focus-within:-top-2 group-focus-within:text-sm">Message</label>
            <input type="text" className="bg-transparent outline-none" />
        </div>
        

        </form>
    </div>
    </div>

  )
}

export default ContactMe


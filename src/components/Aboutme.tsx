import { Linkedin } from "@/icons"

/* eslint-disable react/no-unescaped-entities */
const Aboutme = ()=> {
  return (

    <div className="flex flex-col gap-1 text-white">
      <div>
        <h1 className="text-6xl font-medium">
          Kimia Rahimi<span>👋</span>
        </h1>
      </div>
      <div className="flex items-center gap-1">
        <span>Looking for a Job</span>
        <div className="bg-red-600 rounded-full size-2"></div>
        <span>/ <span className="text-blue-400">Front-End Developer</span></span>
      </div>
      <div>
        <span className="">I'm a software support with a bachelor's degree in computer science who just started <br /> Front-End development.</span>
      </div>
      <div className="flex gap-3">
        <link href="https://www.linkedin.com/in/kimia-rahimi/"><Linkedin/></link>
      </div>
    </div>

  )
}

export default Aboutme
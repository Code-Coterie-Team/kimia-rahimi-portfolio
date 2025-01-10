import { Github, Go, Linkedin } from "@/icons"

/* eslint-disable react/no-unescaped-entities */
const Aboutme = ()=> {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="flex flex-col gap-1 text-white px-7">
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
      <div className="flex items-center gap-1">
        <a href="https://www.linkedin.com/in/kimia-rahimi-a38a891a5/" target="blank">
        <button><Linkedin/></button>
        </a>
        <a href="https://github.com/kimiaRahimi" target="blank">
        <button><Github/></button>
        </a>
        <a href=""><button className="flex gap-1 bg-zinc-100 py-1 px-3 text-zinc-900 items-center rounded-full text-sm">
          <span>Contact Me</span>
          <Go className="size-5"/>
          </button>
          </a>
      </div>
       </div>
    </div>



  )
}

export default Aboutme
/* eslint-disable react/no-unescaped-entities */
import WorksIcon from "@/icons/WorksIcon"
import invoices from "@/assets/invoices.png"
import estate from "@/assets/estate.png"
import Myproject from "./Myproject"


const Mywork = ()=> {
  return (
    <div className="w-full flex flex-col gap-8 px-10">
    <div className="flex gap-2 w-full py-7 ">
      <div className="border-b border-b-white w-6"></div>
      <div className="border-b border-b-gray-400/40 w-full"></div>
    </div>
    <div className="relative flex items-center gap-10">
      <div className=" bg-yellow-200 blur-lg size-7 "></div>
      <WorksIcon className="text-white absolute"/>
      <span className="text-2xl text-white">My Work</span>
    </div>
    <div className="text-5xl pt-5 pb-7 leading-tight">
      <span className="text-white">
        Some of <span className="text-yellow-200"> my work</span>
        <span className="text-white"> as a <span className="text-yellow-200"> Front-End</span><br />
          <span className="text-white"> developer.</span>
        </span>{" "}
      </span>
    </div>
    <div className="grid grid-row-2 gap-10 w-11/12 justify-center">
      <Myproject title="The Invoices" description="program is an efficient tool for managing quotes." image={invoices} href="/apps/invoices" name="Invoices App"/>
      <Myproject title="The 'Estate-landing-page'" description="that allows users to easily view information about estate." image={estate} href="/apps/estate" name="Estate"/>
    </div>
    </div>
  )
}
export default Mywork
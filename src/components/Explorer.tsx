const Explorer = ()=>{
    return(
        <div className="relative border-r-2 border-dark_border" >
            <div className="flex flex-col gap-2 relative text-gray-400 text-sm py-3">
            <div className=" flex justify-between items-center">
            <span>Explorer</span>
            </div>
            <div className="flex flex-col">
            <div className="border-b-2 border-dark_border py-1">
               <span className=" font-extrabold">Open Editors</span>
            </div>
            <div className="border-b-2 border-dark_border py-1">
               <span className=" font-extrabold">Portfolio</span>
            </div>
            <div className="border-b-2 border-dark_border py-1 ">
              <span className=" font-extrabold">Outline</span>
            </div>
            <div className="border-b-2 border-dark_border py-1">
            <span className=" font-extrabold">Timeline</span>
            </div>
            <div>
            <span className=" font-extrabold">Scripts</span>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Explorer; 
import { Changes, Close, More, Star, Verticalwindow } from "@/icons"

const Headercontent = ()=> {
  return (
    <div className="flex justify-between border-b-2 border-dark_border items-center w-full p-1 text-gray-400">
        <button className="flex items-center gap-1 p-1 border-r-2 border-dark_border focus:border-b-2 focus:border-b-blue-500">
          <Star/>
          <span>About Me</span>
          <button className="p-1 rounded-lg hover:bg-gray-300/10"><Close/></button>
        </button>
        <div className="flex items-center gap-3 p-1">
            <button className="p-1 rounded-lg hover:bg-gray-300/10"><Changes/></button>
            <button className="p-1 rounded-lg hover:bg-gray-300/10"><Verticalwindow/></button>
            <button className="p-1 rounded-lg hover:bg-gray-300/10"><More/></button>
        </div>
    </div>
  )
}

export default Headercontent
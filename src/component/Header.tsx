const Header = ()=>{
    return(
        <div className=" flex justify-between items-center text-gray-500 border-b-2 border-dark_border">
            <div className="flex justify-between p-1">
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">File</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Edit</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Selection</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">View</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Go</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Run</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Terminal</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300">Help</button>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Header;
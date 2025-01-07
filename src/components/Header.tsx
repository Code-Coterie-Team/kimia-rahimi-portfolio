const Header = ()=>{
    return(
        <div className=" flex justify-between items-center text-gray-400 border-b-2 border-dark_border p-1">
            <div className="flex justify-between p-1">
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">File</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Edit</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Selection</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">View</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Go</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Run</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Terminal</button>
              <button className="py-1 px-2 rounded-lg hover:bg-gray-300/10">Help</button>
            </div>
            <div>
                <span>Kimia Rahimi - Portfolio</span>
            </div>
            <div className="flex justify-between p-1"></div>
        </div>
    )
}

export default Header;


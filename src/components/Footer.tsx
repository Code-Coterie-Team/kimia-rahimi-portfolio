const Footer = ()=>{
    return(
        <div className=" flex justify-between items-center text-gray-400 border-t-2 border-dark_border">
            <div className="flex justify-between p-1">
                <div></div>
                <div className="hover:bg-gray-300/10 py-1 px-2">
                    <span>main</span>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="flex justify-between p-1 gap-3 text-sm" >
                <div className="hover:bg-gray-300/10 py-1 px-2">
                    <span>Space:2</span>
                </div>
                <div className="hover:bg-gray-300/10 py-1 px-2">
                <span>UTF-8</span>
                </div>
                <div className="hover:bg-gray-300/10 py-1 px-2">
                <span>CRLF</span>
                </div>
                <div className="hover:bg-gray-300/10 py-1 px-2">
                <span>TypeScript JSX</span>
                </div>
                <div className="hover:bg-gray-300/10 py-1 px-2">GO Live</div>
                <div className="hover:bg-gray-300/10 py-1 px-2"></div>
            </div>
        </div>
    )
}


export default Footer;
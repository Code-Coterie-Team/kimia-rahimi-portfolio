import ProjectIcon from "@/icons/ProjectIcon"
import { useStore } from "../../store/useSection"
import Projctdetails from "./Projctdetails";
import Link from "next/link";
import clsx from "clsx";



const WorkItems=()=> {
const {links} = useStore();
console.log(links);
const {addLink} = useStore();
const {openProject} = useStore();
const {setOpenProject} = useStore();
const {setActiveLink} = useStore();


const handleAddLink = (name: string, href: string) => {
    const existlink=links.some((l)=>l.href===href);
    if(!existlink){
        addLink({ name, href });
        setActiveLink(href);
    }
    setOpenProject(name)
}


const myWork = [{
    title : "Invoices App",
    path: "/apps/invoices"
},
{
    title:"Estate",
    path : "/apps/estate"
},
{
    title:"Filter App",
    path:"/apps/filterapp"
}
]
  return (

    <div className="flex flex-col w-full text-base">
        {myWork.map((items,index)=>(
            <div key={index}>
            <Link href={items.path}  className={clsx(" flex gap-1 py-1 hover:bg-dark_border w-full px-10",{
                "bg-gray-400/30" : openProject === items.title
            }
                
            )} onClick={()=>{
                handleAddLink(items.title,items.path)
            }}>
                <ProjectIcon/>
                <span className="text-gray-400">{items.title}</span>
            </Link>
            {openProject === items.title && <Projctdetails/>}
            </div>
            
        ))}
        

    </div>
  )
}

export default WorkItems
import ProjectIcon from "@/icons/ProjectIcon"
import Link from "next/link"

const WorkItems=()=> {
const myWork = [{
    title : "Invoices App",
    path: "@/app/apps/invoices"
},
{
    title:"Estate",
    path : "@/app/apps/estate"
}
]
  return (

    <div className="flex flex-col w-full text-base">
        {myWork.map((items,index)=>(
            <Link href={items.path} className=" flex gap-1 py-1 hover:bg-dark_border w-full px-10" key={index}>
                <ProjectIcon/>
                <span className="text-gray-400">{items.title}</span>
            </Link>
        ))}

    </div>
  )
}

export default WorkItems
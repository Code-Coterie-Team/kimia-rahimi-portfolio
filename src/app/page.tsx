import Explorer from "@/components/Explorer";
import Header from "@/components/Header";
import Toolsbar from "@/components/Toolsbar";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="grid grid-cols-custom grid-rows-custom h-screen ">
     <div className="col-span-3"><Header/></div>
     <div><Toolsbar/></div>
     <div><Explorer/></div> 
     <div></div>
     <div className="col-span-3"><Footer/></div>
    </div>
  );
}

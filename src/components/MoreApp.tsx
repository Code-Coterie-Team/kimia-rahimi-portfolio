import Otherapp from "./Otherapp";

interface IApp {
  apps:{title:string,link:string,date:string}[]
}

const MoreApp = ({ apps }: IApp) => {
  return (
    <div className="w-full flex flex-col gap-4 px-10 pb-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <p className="text-white text-4xl font-semibold">More Application</p>
      <div className="w-full px-2 grid grid-cols-2 gap-3">
        {apps.map((items,index)=>(
          <Otherapp key={index} title={items.title} link={items.link} date={items.date}/>
        ))}
      </div>
    </div>
  );
};

export default MoreApp;

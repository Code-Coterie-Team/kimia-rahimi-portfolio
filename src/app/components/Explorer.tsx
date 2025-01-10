import { Arrow, More } from "@/icons";

const Explorer = () => {
  const explorerItem = ["Open Editors", "Portfolio", "Outline", "Timeline"];
  return (
    <div className="border-r-2 border-dark_border relative ">
      <div className="flex flex-col gap-2 text-gray-400 text-sm pt-5 ">
        <div className=" flex justify-between px-3">
          <span className="text-xs">EXPLORER</span>
          <div className="p-1 rounded-lg hover:bg-gray-300/10">
            <More />
          </div>
        </div>
        <div className="flex flex-col">
          {explorerItem.map((items: string, index) => (
            <div
              className="border-b-2 border-dark_border flex gap-1 py-1"
              key={index}
            >
              <div>
                <Arrow />
              </div>
              <span className=" font-extrabold">{items}</span>
            </div>
          ))}
          <div className="flex gap-1">
            <Arrow />
            <span className=" font-extrabold">Scripts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;

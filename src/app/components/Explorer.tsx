import { Arrow, More } from "@/icons";

const Explorer = () => {
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
          <div className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Open Editors</span>
          </div>
          <div className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Portfolio</span>
          </div>
          <div className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Outline</span>
          </div>
          <div className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Timeline</span>
          </div>
          <div>
            <div className="flex gap-1">
              <Arrow />
              <span className=" font-extrabold">Scripts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;

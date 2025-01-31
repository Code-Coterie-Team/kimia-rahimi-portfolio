import ArrowIcon from "@/icons/ArrowIcon";
import Link from "next/link";

interface IApp {
  title: string;
  link: string;
}

const MoreApp = ({ title, link }: IApp) => {
  return (
    <div className="w-full flex flex-col gap-4 px-10 pb-10" id="solution">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <p className="text-white text-4xl font-semibold">More Application</p>
      <div className="w-6/12 px-3">
        <div className="p-12 border border-gray-500/20 bg-gray-900/20 rounded-2xl">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <div className="border-l border-l-white h-6"></div>
              <div className="border-l border-l-gray-400/40 h-full"></div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-white text-sm">November 2024</span>
                <span className="font-semibold text-base text-public_button">
                  {title}
                </span>
              </div>
              <div>
                <Link href={link}  className="text-white text-2xl font-semibold flex items-center gap-2">
                 <span>Learn more</span>
                 <ArrowIcon className="text-4xl"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MoreApp;

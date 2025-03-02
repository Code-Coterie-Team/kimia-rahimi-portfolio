"use client"
import Image, { StaticImageData } from "next/image";
import GuidanceDownwards from "./GuidanceDownwards";

interface IAbout {
  title: string;
  description: string;
  industry: string;
  year: number;
  service: string;
  image: StaticImageData;
}

const AboutProject = ({
  title,
  description,
  industry,
  year,
  service,
  image,
}: IAbout) => {
  return (
    <div className="h-full w-full flex flex-col gap-40">
      <div className="flex flex-col pt-14 justify-center items-center gap-32">
        <div className="flex flex-col gap-3 justify-center items-center pt-14">
          <span className="font-semibold text-base text-public_button">
            Case Study
          </span>
          <div className="flex flex-col gap-10 justify-center items-center">
          <span className="text-white font-semibold text-7xl">{title}</span>
          <span className="text-gray-400 text-lg">{description}</span>
          </div>

        </div>
        <div className="flex flex-col w-full border-t-[0.1px] border-gray-400/40">
          <div className="grid grid-cols-projects bg-dark_border">
            <div className=" px-6 py-4"></div>
            <div className="border-l-[0.1px] border-gray-400/40 px-4 py-3 flex flex-col gap-1">
              <span className="font-semibold text-sm text-public_button">
                Industry
              </span>
              <span className="text-base text-gray-400">{industry}</span>
            </div>
            <div className="border-l-[0.1px] border-gray-400/40 px-4 py-3 flex flex-col gap-1">
              <span className="font-semibold text-sm text-public_button">
                Year
              </span>
              <span className="text-base text-gray-400">{year}</span>
            </div>
            <div className="border-l-[0.1px] border-gray-400/40 px-4 py-3 flex flex-col gap-1">
              <span className="font-semibold text-sm text-public_button">
                Service
              </span>
              <span className="text-base text-gray-400">{service}</span>
            </div>
          </div>
          <div className="p-24 bg-gradiant_bg flex justify-center items-center">
            <Image src={image} alt="" className="w-10/12" />
          </div>
        </div>
      </div>
      <GuidanceDownwards/>
    </div>
  );
};

export default AboutProject;

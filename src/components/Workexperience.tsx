/* eslint-disable react/no-unescaped-entities */
import BagIcon from "@/icons/BagIcon";
import Experience from "./Experience";
import nosa from "@/assets/nosa.png"
import codecoterie from "@/assets/codecoterie.jpg"

const Workexperience = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <div className="relative flex items-center gap-10">
        <div className=" bg-red-500 blur-lg size-7 "></div>
        <BagIcon className=" absolute text-white" />
        <span className="text-2xl text-white">Work Experience</span>
      </div>
      <div className="text-5xl pt-5 pb-7 leading-tight">
        <span className="text-red-300">
          Junior Engineer <span className="text-white">with</span>
          <span className="text-red-300">
            {" "}
            1 year <br />
            <span className="text-white">
              of experience in the software industry
            </span>
          </span>{" "}
        </span>
      </div>
      <div className=" px-2">
      <Experience date='JUN 2023-PRESENT' imageSrc={nosa} company="CodeCoterie" position='Frontend Developer' description={['Developed and maintained React  components, screens','Developed front-end user interface using React,Tailwind and JavaScript for Web Apps','Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.'] } />
      <Experience date='JUN 2023-PRESENT' imageSrc={codecoterie} company="CodeCoterie" position='Frontend Developer' description={['Developed and maintained React Native components, screens, and features for the mobile app using TDD practices', 'Developed front-end user interface using React, React Native and JavaScript for Web Apps', 'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.']} />

      </div>
    </div>
  );
};

export default Workexperience;

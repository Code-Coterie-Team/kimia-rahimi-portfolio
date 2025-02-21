"use client";

import Portfolioitems from "./Portfolioitems";
import { useState } from "react";
import ArrowIcon from "@/icons/ArrowIcon";
import MoreIcon from "@/icons/MoreIcon";
import { useStore } from "../../store/useSection";
import clsx from "clsx";

const Explorer = () => {
  const showExplore = useStore((state) => state.showExplore);
  const [showPortfolioItems, setshowPortfolioItems] = useState(true);
  const [isArrowRotated, setIsArrowRotated] = useState<{
    [key: string]: boolean;
  }>({
    "Open Editors": false,
    Portfolio: true,
    Outline: false,
    Timeline: false,
    Scripts: false,
  });
  const toggleItems = (itemName: string) => {
    if (itemName === "Portfolio") {
      setshowPortfolioItems((currentState) => !currentState);
    }
    setIsArrowRotated((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const menu = ["Open Editors", "Portfolio", "Outline", "Timeline", "Scripts"];

  return (
    <div>
      <div
        className={clsx(
          "border-r-2 border-dark_border relative overflow-hidden h-full md:w-96",
          showExplore && "hidden"
        )}
      >
        <div className="flex flex-col gap-2 text-gray-400 text-sm pt-5 overflow-hidden h-full ">
          <>
            <div className=" flex justify-between px-3">
              <span className="text-xs">EXPLORER</span>
              <div className="p-1 rounded-lg hover:bg-gray-300/10">
                <MoreIcon />
              </div>
            </div>
            <div className="flex flex-col overflow-hidden h-full">
              {menu.map((item, index) => (
                <div
                  key={index}
                  className={clsx(item === "Portfolio" && "overflow-y-auto")}
                >
                  <button
                    className="border-b-2 border-dark_border w-full flex gap-1 py-1 "
                    onClick={() => toggleItems(item)}
                  >
                    <div
                      style={{
                        transform: isArrowRotated[item]
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <ArrowIcon />
                    </div>
                    <span className="font-extrabold">{item}</span>
                  </button>
                  {item === "Portfolio" && showPortfolioItems && (
                    <Portfolioitems />
                  )}
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Explorer;

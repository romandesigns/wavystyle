import React from "react";
import ToolkitCard from "./ToolkitCard";
import { professionalToolKit } from "./icons";
import Marquee from "@/components/magicui/marquee";

const firstRow = professionalToolKit.slice(0, professionalToolKit.length / 2);
const secondRow = professionalToolKit.slice(professionalToolKit.length / 2);

export const Toolkit = () => {
  return (
    <article className="bg-[#05060f] rounded-lg">
      <div className="relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-lg"></div>
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="relative flex py-10  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#13192e]/10 backdrop-filter text-white">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ToolkitCard key={review.technology} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ToolkitCard key={review.technology} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#05060f] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#05060f] dark:from-background"></div>
      </div>
    </article>
  );
};

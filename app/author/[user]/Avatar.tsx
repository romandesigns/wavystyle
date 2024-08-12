import React from "react";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { BsStars } from "react-icons/bs";

const Avatar = () => {
  return (
    <article className="relative bg-[#05060f] p-4 rounded-lg w-full max-sm:max-w-80 max-sm:mx-auto h-full flex items-end aspect-square order-1 md:order-2  overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#05060f]/50 z-[2]" />
      <div className="border-4 w-full h-full border-[#05060f] z-[3] rounded-md p-1 px-3 flex items-end justify-center">
        <BlurFade delay={0.3} duration={0.25} inView className="w-full">
          <div className="w-full relative z-[3] text-[.7rem] leading-relaxed text-white bg-[#0a0c20] p-2 rounded-md">
            <TypingAnimation
              className="text-sm font-bold text-neutral-300  text-left"
              text="Roman Feliz"
            />
            <p className="flex gap-1 items-center">
              <span>
                <HiLocationMarker />
              </span>
              <span>Boston</span>
              <span></span>
              <span>MA</span>
              <span></span>
              <span>USA</span>
            </p>
          </div>
        </BlurFade>
      </div>
      <Image
        src="/author-photograph.png"
        alt="Román Feliz"
        fill
        objectFit="cover"
      />
    </article>
  );
};

export default Avatar;

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import React from "react";
import { BsStars } from "react-icons/bs";

export const Disciplines = () => {
  return (
    <div>
      <AnimatedGradientText className="ml-0 lg:mb-10 my-4 max-sm:hidden">
        <BsStars className="text-brand-warm animate-wave-up-down" />
        <span
          className={cn(
            `block text-[.7rem] animate-gradient bg-gradient-to-r from-brand-warm via-brand-cool to-brand-warm bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Web Developer / Designer / Music Producer
        </span>
      </AnimatedGradientText>
    </div>
  );
};

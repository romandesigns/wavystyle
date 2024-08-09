import React, { ReactNode } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import { Canvas } from "../AnimatedCanvas";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

interface PageLayoutProps {
  children: ReactNode;
  showCanvas?: boolean;
  showAurora?: boolean;
}

const PageLayout = ({ children, showAurora, showCanvas }: PageLayoutProps) => {
  return (
    <>
      <MainNavigation />
      {showAurora && <AuroraBackground className="-z-[1]" />}
      {showCanvas && <Canvas />}

      {children}
      {/* <BlurFade
        delay={3}
        duration={2.8}
        inView
        className="animate-wave-up-down absolute top-0 left-0 z-[1] w-full h-full flex justify-start items-end"
      >
        <Image
          src={"/logo-dark.png"}
          height={700}
          width={700}
          alt="WavyStyle Logo"
          placeholder="blur"
          blurDataURL="/logo-dark.png"
          style={{ height: "auto" }}
        />
      </BlurFade> */}
    </>
  );
};

export default PageLayout;

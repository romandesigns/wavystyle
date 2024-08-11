import BlurFade from "@/components/magicui/blur-fade";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { ReactNode } from "react";
import { Canvas } from "../AnimatedCanvas";
import MainNavigation from "../Navigation/MainNavigation";

interface PageLayoutProps {
  children: ReactNode;
  showCanvas?: boolean;
  showAurora?: boolean;
  showFloatingLogo?: boolean;
}

const PageLayout = ({
  children,
  showAurora,
  showCanvas,
  showFloatingLogo,
}: PageLayoutProps) => {
  return (
    <>
      <MainNavigation />
      {showAurora && <AuroraBackground className="z-[0]" />}
      {showCanvas && <Canvas />}

      {children}
      {showFloatingLogo && (
        <BlurFade
          delay={3}
          duration={2.8}
          inView
          className="animate-wave-up-down absolute bottom-10 left-1/2 transform -translate-x-1/2 -z-[1]"
        >
          <Image
            className="opacity-65"
            src={"/logo-dark.png"}
            height={600}
            width={600}
            alt="WavyStyle Logo"
            placeholder="blur"
            blurDataURL="/logo-dark.png"
            style={{ height: "auto" }}
          />
        </BlurFade>
      )}
    </>
  );
};

export default PageLayout;

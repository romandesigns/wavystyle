import { Canvas } from "@/components/AnimatedCanvas";
import { fontHandWritting } from "@/components/FontFamily";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <div className="">
      <Canvas />
      <div className="flex flex-col items-center justify-center">
        <BlurFade
          delay={3}
          duration={2.8}
          inView
          className="animate-wave-up-down"
        >
          <Image
            src={"/logo-dark.png"}
            height={400}
            width={400}
            alt="WavyStyle Logo"
            placeholder="blur"
            blurDataURL="/logo-dark.png"
            style={{ height: "auto" }}
          />
        </BlurFade>
        <div className="flex flex-col  items-center justify-center gap-4 text-center -translate-y-24">
          <BlurFade delay={0.8} duration={2.8} inView>
            <h1 className={`${fontHandWritting.className} text-4xl text-white`}>
              WavyStyle
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} duration={2.8} inView>
            <TypingAnimation
              className="text-sm font-bold text-neutral-300 mb-8 px-6"
              text="A web developer and music production portfolio page."
            />
          </BlurFade>
          <div className="z-10 flex items-center justify-center">
            <BlurFade delay={0.9} duration={0.85} inView>
              <AnimatedGradientText>
                ⏰ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-brand-warm via-brand-cool to-brand-warm bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Coming Soon!
                </span>
              </AnimatedGradientText>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}

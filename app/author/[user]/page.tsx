import { Canvas } from "@/components/AnimatedCanvas";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Marquee from "@/components/magicui/marquee";
import MainNavigation from "@/components/Navigation/MainNavigation";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { professionalToolKit } from "./icons";
import ToolkitCard from "./ToolkitCard";
import BlurFade from "@/components/magicui/blur-fade";

const firstRow = professionalToolKit.slice(0, professionalToolKit.length / 2);
const secondRow = professionalToolKit.slice(professionalToolKit.length / 2);

export const metadata: Metadata = {
  title: "WavyStyle | Román Feliz - Full Stack Developer & Music Producer",
  description:
    "Explore WavyStyle by Román Feliz: a unique portfolio blending web development and music production. Discover innovative projects, tech trends, and creative compositions. Connect with a seasoned developer and music producer with over 8 years of experience.",
};

const Author = ({ params: user }: { params: string }) => {
  return (
    <>
      <Canvas />
      <AuroraBackground className="-z-[1]" />
      <MainNavigation />
      <main className="border relative">
        <div className="container">
          <section className="grid grid-cols-[1fr_35%] relative z-[2] gap-4">
            <article className="flex flex-col items-start bg-[#05060f]/50 p-6 rounded-md">
              <AnimatedGradientText className="ml-0 lg:mb-10 my-4">
                <BsStars className="text-brand-warm animate-wave-up-down" />
                <span
                  className={cn(
                    `block text-[.7rem] animate-gradient bg-gradient-to-r from-brand-warm via-brand-cool to-brand-warm bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Web Developer / Designer / Music Producer
                </span>
              </AnimatedGradientText>
              <h1
                className="text-xl sm:text-5xl text-white font-black"
                style={{ lineHeight: "1.2" }}
              >
                Experienced{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-warm to-brand-cool">
                  Full Stack Developer
                </span>{" "}
                with a Passion for User Experience and UI Design.
              </h1>
              <p className="text-neutral-400 italic my-12 text-[0.9rem] max-w-xl">
                Over 8 years of experience developing feature-rich applications
                for various international and well-established companies.
              </p>
              <button className="rounded-md bg-brand-cool">
                <a
                  href="mailto:roman@wavystyle.io&subject=Mail from Web visitor"
                  className="p-2 px-10 block text-sm text-white font-bold uppercase"
                >
                  Contact Roman
                </a>
              </button>
            </article>
            <article className=" bg-[#05060f]/50 p-6 rounded-md">
              <div className="h-full w-full rounded-md -z-[2]">
                <Image
                  src="/author-photograph.png"
                  alt="Román Feliz"
                  width={250}
                  height={250}
                />
              </div>
            </article>
          </section>

          <section className="mt-20 relative">
            <h2 className="uppercase font-black text-xs text-brand-warm lg:text-lg lg:mb-4">
              Proffesional Toolkit
            </h2>
            <article>
              <div className="relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-lg"></div>
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
              <div className="relative flex  py-10  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#13192e]/10 backdrop-filter text-white">
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
          </section>
        </div>
        <BlurFade
          delay={3}
          duration={2.8}
          inView
          className="animate-wave-up-down absolute bottom-1/4"
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
        </BlurFade>
      </main>
    </>
  );
};

export default Author;

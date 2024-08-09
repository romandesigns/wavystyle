import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

import PageLayout from "@/components/Layouts/PageLayout";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { Toolkit } from "./Toolkit";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "WavyStyle | Román Feliz - Full Stack Developer & Music Producer",
  description:
    "Explore WavyStyle by Román Feliz: a unique portfolio blending web development and music production. Discover innovative projects, tech trends, and creative compositions. Connect with a seasoned developer and music producer with over 8 years of experience.",
};

const Author = ({ params: user }: { params: string }) => {
  return (
    <PageLayout showAurora showCanvas showFloatingLogo>
      <main className="h-[calc(100vh-110px)] relative">
        <div className="container h-full grid grid-cols-1 grid-rows-1 items-center">
          <div>
            <section className="grid md:grid-cols-[1fr_35%] md:grid-rows-1 grid-rows-1 relative z-[2] gap-4">
              <article className="flex flex-col items-start bg-[#0a0c20] p-6 rounded-lg relative overflow-hidden order-2 md:order-1">
                <div className="z-[1]">
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
                    className="text-lg sm:text-4xl text-white font-black relative animate-gradient-border max-w-2xl"
                    style={{ lineHeight: "1.2" }}
                  >
                    Experienced{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-warm to-brand-cool animate-gradient-text bg-[length:200%_200%]">
                      Full Stack Developer
                    </span>{" "}
                    with a Passion for User Experience and UI Design.
                  </h1>
                  <p className="text-neutral-400 italic  my-10 text-[0.7rem] max-w-lg  leading-relaxed">
                    Over 8 years of experience developing feature-rich
                    applications for various international and well-established
                    companies.
                  </p>
                  <button className="rounded-md bg-brand-cool">
                    <a
                      href="mailto:roman@wavystyle.io&subject=Mail from Web visitor"
                      className="p-4 px-20 block text-sm text-white font-bold uppercase"
                    >
                      Contact
                    </a>
                  </button>
                </div>
                <BackgroundBeams />
              </article>
              <article className="relative overflow-hidden bg-[#05060f] p-6 rounded-lg w-full h-full flex items-end aspect-square order-1 md:order-2">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#05060f]/50 z-[2]" />
                <div className="border-4 w-full h-full border-[#05060f] z-[3] rounded-md p-1 flex items-end justify-center py-2">
                  <div className="w-full relative z-[3] text-[.7rem] leading-relaxed text-white bg-[#0a0c20] p-2 rounded-md">
                    <p className="text-lg font-black">Roman Feliz</p>
                    <p className="flex gap-1">
                      <span>Full Stack Developer</span>
                      <span>/</span>
                      <span>UX & UI Designer</span>
                      <span>/</span>
                      <span>Music Producer</span>
                    </p>
                    <p className="flex gap-1">
                      <span>Boston</span>
                      <span>/</span>
                      <span>MA</span>
                      <span>/</span>
                      <span>USA</span>
                    </p>
                  </div>
                </div>
                <Image
                  src="/author-photograph.png"
                  alt="Román Feliz"
                  fill
                  objectFit="cover"
                />
              </article>
            </section>

            <section className="mt-20 relative">
              <h2 className="uppercase font-black text-xs text-brand-warm lg:text-xl lg:mb-4">
                Proffesional Toolkit
              </h2>
              <Toolkit />
            </section>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Author;

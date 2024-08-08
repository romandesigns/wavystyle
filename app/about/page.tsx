import Meteors from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/lib/LottieAnimation";
import Image from "next/image";
import Link from "next/link";
import MainNavigation from "@/components/Navigation/MainNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WavyStyle | About Web Developer & Music Production Portfolio",
  description:
    "Catch the wave with Román Feliz's WavyStyle! Discover a unique blend of web development and music production, inspired by the rhythmic patterns of ocean waves. Explore innovative projects, emerging trends, and connect with like-minded enthusiasts.",
};

export default function About() {
  return (
    <>
      <MainNavigation />
      <main className="container flex items-center justify-center max-w-5xl">
        <div className="relative">
          <div className="absolute -top-10 sm:-top-20 sm:opacity-100 opacity-75 animate-wave-up-down z-[1] w-20 sm:w-48">
            <Image
              src="/astronaut.svg"
              width={500}
              height={500}
              alt="WavyStyle Logo"
            />
          </div>
          <div className="bg-transparent relative flex h-[500px] w-full flex-col items-start justify-center overflow-hidden rounded-lg">
            <Meteors number={30} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent">
              <div className="text-white [&_p]:mb-4  [&_p]:leading-relaxed [&_p]:font-normal [&_p]:text-xs text-left">
                <h3 className="font-black text-xl mb-6">
                  Catch the Wave with WavyStyle!
                </h3>
                <p>
                  Welcome to WavyStyle, a dynamic platform where the latest
                  trends in tech and entertainment converge.
                </p>
                <p>
                  Inspired by the rhythmic patterns of ocean waves, WavyStyle
                  showcases the unique and intricate nature of web development
                  and music production. Each project and composition, much like
                  every wave, holds its own distinct charm and innovation.
                </p>
                <p>
                  Authored by Román Feliz, this site captures emerging trends,
                  inviting like-minded enthusiasts and potential collaborators
                  to explore and connect. Dive in and discover the unique blend
                  of technology and creativity that defines WavyStyle.
                </p>
                <p>Let&apos;s ride the wave together! 🌊✨</p>
              </div>
            </span>
            <button className="my-4 rounded-md  bg-brand-warm">
              <Link
                href="/author/roman"
                className="p-2 px-4 block text-sm text-[#13192e] font-medium"
              >
                Author&apos;s Page
              </Link>
            </button>
          </div>
          <div className="absolute -bottom-0 -right-10 -z-[1] opacity-20 md:opacity-15 ">
            <div className="backdrop-blur-sm w-full h-full absolute z-[2] md:backdrop-blur-xs" />
            <LottieAnimation
              animationPath={"/flying-rocket.json"}
              className="w-40"
            />
          </div>
        </div>
      </main>
    </>
  );
}

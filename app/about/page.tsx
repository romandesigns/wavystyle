import Meteors from "@/components/magicui/meteors";
import LottieAnimation from "@/lib/LottieAnimation";
import Image from "next/image";

export default function About() {
  return (
    <div className="container flex items-center justify-center max-w-5xl">
      <div className="relative">
        <div className="absolute -top-10 sm:-top-14 sm:opacity-100 opacity-75 animate-wave-up-down z-[1] w-20 sm:w-48">
          <Image
            src="/astronaut.svg"
            width={500}
            height={500}
            alt="WavyStyle Logo"
          />
        </div>
        <div className="bg-transparent relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent">
            <div className="text-white [&_p]:mb-4  [&_p]:leading-relaxed [&_p]:font-normal [&_p]:text-xs text-left">
              <h3 className="font-black text-xl mb-6">
                Catch the Wave with WavyStyle!
              </h3>
              <p>
                Welcome to WavyStyle, a dynamic platform where the latest trends
                in tech and entertainment converge.
              </p>
              <p>
                Inspired by the rhythmic patterns of ocean waves, WavyStyle
                showcases the unique and intricate nature of web development and
                music production. Each project and composition, much like every
                wave, holds its own distinct charm and innovation.
              </p>
              <p>
                Authored by Román Feliz, this site captures emerging trends,
                inviting like-minded enthusiasts and potential collaborators to
                explore and connect. Dive in and discover the unique blend of
                technology and creativity that defines WavyStyle.
              </p>
              <p>Let&apos;s ride the wave together! 🌊✨</p>
            </div>
          </span>
        </div>
        <LottieAnimation
          animationPath={"/flying-rocket.json"}
          className="absolute -bottom-10 -right-10 w-20"
        />
      </div>
    </div>
  );
}

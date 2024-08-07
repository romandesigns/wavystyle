import { Canvas } from "@/components/AnimatedCanvas";
import React from "react";
import { useRouter } from "next/navigation";
import MainNavigation from "@/components/Navigation/MainNavigation";
import Link from "next/link";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RiNextjsFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { BiLogoNodejs } from "react-icons/bi";
import { IconType } from "react-icons";
import {
  SiPrisma,
  SiCss3,
  SiExpress,
  SiJavascript,
  SiDatagrip,
  SiMongodb,
  SiJira,
  SiConfluence,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiVisualstudio,
} from "react-icons/si";
import { FaHtml5, FaGithubAlt } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const reviews = [
  {
    technology: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    technology: "VS Code",
    Icon: SiVisualstudio,
  },
  {
    technology: "ShadcnUI",
    Icon: SiShadcnui,
  },
  {
    technology: "NextJs",
    Icon: RiNextjsFill,
  },
  {
    technology: "Confluence",
    Icon: SiConfluence,
  },
  {
    technology: "Jira",
    Icon: SiJira,
  },
  {
    technology: "GitHub",
    Icon: FaGithubAlt,
  },
  {
    technology: "Typescript",
    Icon: SiTypescript,
  },
  {
    technology: "ReactJs",
    Icon: GrReactjs,
  },
  {
    technology: "Redux",
    Icon: SiRedux,
  },
  {
    technology: "NodeJs",
    Icon: BiLogoNodejs,
  },
  {
    technology: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    technology: "ExpressJs",
    Icon: SiExpress,
  },
  {
    technology: "ExpressJs",
    Icon: SiExpress,
  },
  {
    technology: "HTML 5",
    Icon: FaHtml5,
  },
  {
    technology: "CSS",
    Icon: SiCss3,
  },
  {
    technology: "JavaScript",
    Icon: SiJavascript,
  },
  {
    technology: "Datagrip",
    Icon: SiDatagrip,
  },
  {
    technology: "PostgreSQL",
    Icon: BiLogoPostgresql,
  },
  {
    technology: "MongoDB",
    Icon: SiMongodb,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  technology,
  Icon,
}: {
  Icon: IconType;
  name: string;
  technology: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white/[.2] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-start items-center gap-4">
          <Icon />
          <figcaption className="text-sm font-medium dark:text-white">
            {technology}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const Author = ({ params: user }: { params: string }) => {
  return (
    <>
      <MainNavigation />
      <Canvas />
      <main>
        <div className="container">
          <section>
            <article className="max-w-4xl">
              <h1 className="text-5xl leading-tight text-white font-black">
                Experienced Full Stack Developer with a Passion for User
                Experience and UI Design.
              </h1>
              <p className="text-neutral-400 italic my-10">
                Over 8 years of experience developing feature-rich applications
                for various international and well-established companies.
              </p>
              <button className="my-4 rounded-md  bg-brand-cool">
                <a
                  href="mailto:roman@wavystyle.io&subject=Mail from Web visitor"
                  className="p-2 px-8 block text-sm text-white font-medium"
                >
                  Contact
                </a>
              </button>
            </article>
          </section>
          <hr className="opacity-10 mt-10" />
          <section>
            <div className="relative flex mt-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-[#0d1227]/10 backdrop-filter backdrop-blur-xs text-white">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.technology} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.technology} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#05060f] dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#05060f] dark:from-background"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Author;

import PageLayout from "@/components/Layouts/PageLayout";
import { Metadata } from "next";
import { Toolkit } from "./Toolkit";

import Avatar from "./Avatar";
import Description from "./Description";

export const metadata: Metadata = {
  title:
    "WavyStyle | Román Feliz - Full Stack Developer, Designer &  Music Producer",
  description:
    "Explore WavyStyle by Román Feliz: a unique portfolio blending web development and music production. Discover innovative projects, tech trends, and creative compositions. Connect with a seasoned developer and music producer with over 8 years of experience.",
};

const Author = ({ params: user }: { params: string }) => {
  return (
    <PageLayout showCanvas showFloatingLogo>
      <main className="relative h-full max-sm:py-10">
        <div className="container px-2 h-full grid grid-cols-1 grid-rows-1 items-center">
          <div>
            <section className="grid md:grid-cols-[1fr_35%] md:grid-rows-1 grid-rows-1 relative z-[2] gap-4">
              <Avatar />
              <Description />
            </section>

            <section className="mt-10 lg:mt-20 relative ">
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

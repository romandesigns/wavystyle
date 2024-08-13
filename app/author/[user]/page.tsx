import PageLayout from "@/components/Layouts/PageLayout";
import { Metadata } from "next";
import { Toolkit } from "./Toolkit";

import Avatar from "./Avatar";
import Description from "./Description";

export const metadata: Metadata = {
  title:
    "WavyStyle | Román Feliz - Full Stack Developer, Designer & Music Producer",
  description:
    "Step into the world of Román Feliz at WavyStyle. A versatile Full Stack Developer, Designer, and Music Producer with over 8 years of experience, blending innovative web development with creative music production. Discover projects, trends, and connect with a passionate creator.",
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
              <h2 className="uppercase font-black text-xs text-brand-warm lg:text-2xl lg:mb-3">
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

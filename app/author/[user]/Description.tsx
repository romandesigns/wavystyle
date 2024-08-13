import { BackgroundBeams } from "@/components/ui/background-beams";
import { Disciplines } from "./Disciplines";

const CopyWriting = () => {
  return (
    <article className="flex flex-col items-start sm:bg-[#070816] p-6 rounded-lg relative overflow-hidden order-2 md:order-1">
      <div className="z-[1] w-full">
        <Disciplines />
        <h1
          className="text-4xl sm:text-3xl text-white font-black relative animate-gradient-border max-w-3xl"
          style={{ lineHeight: 1.4 }}
        >
          Experienced{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-warm to-brand-cool animate-gradient-text bg-[length:200%_200%]">
            Full Stack Developer
          </span>{" "}
          with a passion for creating seamless{" "}
          <span className="underline-wavy">user experiences</span> and{" "}
          <span className="underline-wavy">intuitive UI</span> design.
        </h1>
        <p
          className="text-neutral-400 italic  my-10 text-[0.8rem] max-w-lg  leading-relaxed"
          style={{ lineHeight: 1.5 }}
        >
          I&apos;m always on the lookout for exciting projects and
          collaborations. Are you a like-minded enthusiast or a company in need
          of top-notch development skills? <br />
          <br />
          Let&apos;s connect—I&apos;d love to hear from you!
        </p>
        <button className="rounded-md bg-brand-cool w-full sm:w-2/6">
          <a
            href="mailto:roman@wavystyle.io&subject=Mail from Web visitor"
            className="py-4 block text-sm text-white font-bold uppercase"
          >
            Contact
          </a>
        </button>
      </div>
      <BackgroundBeams className="hidden sm:block" />
    </article>
  );
};

export default CopyWriting;

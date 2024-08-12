import { BackgroundBeams } from "@/components/ui/background-beams";
import { Disciplines } from "./Disciplines";

const CopyWriting = () => {
  return (
    <article className="flex flex-col items-start sm:bg-[#070816] p-6 rounded-lg relative overflow-hidden order-2 md:order-1">
      <div className="z-[1] w-full">
        <Disciplines />
        <h1 className="text-4xl sm:text-4xl text-white font-black relative animate-gradient-border max-w-2xl">
          Experienced{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-warm to-brand-cool animate-gradient-text bg-[length:200%_200%]">
            Full Stack Developer
          </span>{" "}
          with a Passion for User Experience and UI Design.
        </h1>
        <p className="text-neutral-400 italic  my-10 text-[0.8rem] max-w-lg  leading-relaxed">
          Over 8 years of experience developing feature-rich applications for
          various international and well-established companies.
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

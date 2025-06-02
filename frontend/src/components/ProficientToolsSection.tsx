import Image from "next/image";
import { localGotham } from "@/app/fonts";
import { localGeorgia } from "@/app/fonts";

export default function ProficientToolsSection() {
  return (
    <section className="w-full bg-[#f6f6f6] py-40">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-6xl md:text-6xl ${localGotham.className} mb-4 leading-tight text-black`}>
          I’m proficient using<br />these tools:
        </h2>
        <p className={`text-gray-600 ${localGeorgia.className} mb-8 text-lg`}>
          I’m a student who’s knowledgeable when it comes to these tools:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {/* Figma */}
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0e0b1a] flex items-center justify-center shadow-md h-90 w-full transition duration-300 hover:shadow-[0_0_40px_10px_rgba(124,181,255,0.5)] rounded-lg"
          >
            <Image src="/figma.png" alt="Figma" width={120} height={120} />
          </a>
          {/* Java */}
          <a
            href="https://www.java.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex items-center justify-center shadow-md h-90 w-full transition duration-300 hover:shadow-[0_0_40px_10px_rgba(255,193,7,0.3)] rounded-lg"
          >
            <Image src="/java.png" alt="Java" width={120} height={120} />
          </a>
          {/* Next.js */}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex items-center justify-center shadow-md h-90 w-full transition duration-300 hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.4)] rounded-lg"
          >
            <Image src="/next.png" alt="Next.js" width={120} height={120} />
          </a>
        </div>
      </div>
    </section>
  );
}
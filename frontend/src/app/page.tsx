import Image from "next/image";
import Navigation from "@/components/navigation"
import BodySection from "@/components/bodysection"
import VerticalTicker from "@/components/VerticalTicker";
import { localGeorgia } from "@/app/fonts";
import BottomArtSection from "@/components/BottomArtSection";
import Footer  from "@/components/Footer";
import ProficientToolsSection from "@/components/ProficientToolsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="fixed inset-0 pointer-events-none z-[10000]">
        <VerticalTicker className={localGeorgia.className} position="left">
          DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEVELOPER
        </VerticalTicker>
        <VerticalTicker className={localGeorgia.className} position="right">
          DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEVELOPER
        </VerticalTicker>
      </div>
      <main className="relative min-h-screen bg-[#F6F6F6] overflow-hidden">
        <div className="relative z-10">
          <BodySection />
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 flex justify-start">
            <BottomArtSection />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <ProficientToolsSection />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

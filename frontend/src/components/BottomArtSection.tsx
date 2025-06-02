import Image from "next/image";
import React from "react";

export default function BottomArtSection() {
  return (
    <div className="max-w-screen-2xl mx-auto pl-0 pr-0 flex justify-start items-center py-8">
      <div className="relative w-[380px] h-[530px] ml-[-100px]">
        {/* gray shapes */}
        <div className="absolute top-70 right-[-23px] w-45 h-45 bg-[#ACACAC] z-20 opacity-20"></div>
        <div className="absolute top-110 left-[105px] w-20 h-20 bg-[#ACACAC] z-20 opacity-20"></div>
        <div className="absolute top-41 left-78 w-28 h-28 bg-[#ACACAC] z-20 opacity-20"></div>
        <div className="absolute top-26 left-10 w-43 h-43 bg-[#D9D9D9] z-20 opacity-20"></div>
        <Image
          src="/clock-tower.png"
          alt="Clock tower illustration"
          width={380}
          height={530}
          className="object-contain drop-shadow-lg"
          priority
        />
        {/* Vertical line beside the image */}
        <div className="absolute right-[-100px] top-90 h-60 w-[3px] bg-black z-30"></div>
        {/* Black circles at the top of the vertical line */}
        <div className="absolute right-[-103px] top-85 w-2 h-2 bg-black rounded-full z-40"></div>
        <div className="absolute right-[-103px] top-160 w-2 h-2 bg-black rounded-full z-40"></div>
        <div className="absolute right-[-103px] top-165 w-2 h-2 bg-black rounded-full z-40"></div>
        {/* Another Vertical line beside the image */}
        <div className="absolute left-[-15px] top-45 h-60 w-[3px] bg-black z-30"></div>
        {/* Another Black circle at the top of the vertical line */}
        <div className="absolute left-[-17px] top-33 w-2 h-2 bg-black rounded-full z-40"></div>
        <div className="absolute left-[-17px] top-28 w-2 h-2 bg-black rounded-full z-40"></div>
        <div className="absolute left-[-17px] top-115 w-2 h-2 bg-black rounded-full z-40"></div>
      </div>
    </div>
  );
}
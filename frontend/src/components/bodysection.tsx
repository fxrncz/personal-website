"use client";

import { ChevronDown } from "lucide-react"
import { localGeorgia, localGotham } from "@/app/fonts"
import Link from "next/link"
import StyledImage from "./styled-image"
import React from "react"
import BackgroundLines from "@/components/BackgroundLines"

export default function BodySection() {
  // Scroll to bottom handler
  const handleScrollToBottom = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative bg-[#F6F6F6] py-24 px-4 sm:px-8 lg:px-16 overflow-hidden mt-36">
      <BackgroundLines />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0 relative z-10">
        {/* Left column - Text content */}
        <div className="md:max-w-[60%]">
          {/* Main heading */}
          <h1 className={`text-7xl font-bold mb-10 ${localGotham.className} animate-fade-in`}>
            Hello, Visitors
          </h1>

          {/* Divider and subtitle */}
          <div className="flex items-center gap-6 mb-10 animate-fade-in-delay-1">
            <div className="w-16 h-[1px] bg-[#262626] -mt-16 flex-shrink-0"></div>
            <p className={`text-3xl max-w-lg text-[#262626] font-medium ml-4 ${localGeorgia.className}`}>
              An aspiring Software Developer specializing in the Java Programming Language
            </p>
          </div>

          {/* Description paragraph */}
          <p className={`text-[#5D5D5D] text-lg max-w-lg mb-16 ${localGeorgia.className} animate-fade-in-delay-2`}>
            An IT student dedicated to applying all acquired knowledge and skills in Information Technology to help
            achieve the company's goals and contribute to system improvement.
          </p>

          {/* Scroll down button */}
          <div className="flex items-center gap-3 animate-fade-in-delay-3">
            <button
              onClick={handleScrollToBottom}
              className="bg-black p-4 hover:bg-white hover:outline hover:outline-black transition-colors duration-300 active:scale-90"
              aria-label="Scroll to bottom"
            >
              <ChevronDown className="h-6 w-10 text-white hover:text-black transition-colors duration-300" />
            </button>
            <span className={`text-[#999999] ml-4 ${localGeorgia.className}`}>Scroll down to see more</span>
          </div>
        </div>

        {/* Right column - Styled Image */}
        <div className="hidden md:block md:self-center mt-10 md:mt-0">
          <StyledImage
            src="/myprofile.jpeg"
            alt="Your profile photo"
            width={350}
            height={450}
          />
        </div>
      </div>
    </section>
  )
}



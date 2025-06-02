"use client"

import Image from "next/image"
import type { FC } from "react"
import { useState } from "react"

interface StyledImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
}

const galleryImages = [
  "/myprofile.jpeg",
  "/profile1.jpeg",
  "/profile2.jpeg",
  "/profile3.jpeg",
];

const ANIMATION_DURATION = 400; // ms

const StyledImage: FC<StyledImageProps> = ({ src, alt, width = 350, height = 450, className = "" }) => {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIdx, setNextIdx] = useState<number | null>(null);

  const tilt = hovered ? "rotateX(4deg) rotateY(-8deg)" : "none";

  // Handle image click to cycle gallery with slide-up-from-behind animation
  const handleImageClick = () => {
    if (isAnimating) return;
    const newIdx = (imgIdx + 1) % galleryImages.length;
    setNextIdx(newIdx);
    setIsAnimating(true);
    setTimeout(() => {
      setImgIdx(newIdx);
      setIsAnimating(false);
      setNextIdx(null);
    }, ANIMATION_DURATION);
  };

  return (
    <div
      className={`relative group perspective-1000 w-fit mx-auto ${className} animate-slide-in-left`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: width + 16, height: height + 16, overflow: "visible" }}
    >
      {/* Arrow pointing to image */}
      <div className="absolute -left-65 bottom-60 w-80 h-80 z-20 hidden lg:block xl:block">
        <Image
          src="/22.png"
          alt="Arrow pointing to image"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background rectangle (animates in sync with image, offset for shadow) */}
      <div
        className="absolute z-0 transition-transform duration-300"
        style={{
          width: width,
          height: height,
          left: 16,
          top: 16,
          background: "#C3C3C3",
          transform: tilt,
        }}
      />
      {/* Main image (3D animation on hover, gallery on click, slide up from behind) */}
      <div
        className="absolute z-10 shadow-md transition-transform duration-300 cursor-pointer overflow-hidden"
        style={{
          width: width,
          height: height,
          left: 0,
          top: 0,
          transform: tilt,
        }}
        onClick={handleImageClick}
      >
        {/* Current image */}
        <div
          className={`absolute w-full h-full top-0 left-0 transition-all duration-400 ${isAnimating ? "z-20" : "z-30"}`}
          style={{
            opacity: isAnimating ? 0 : 1,
            transition: `opacity ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
          }}
        >
          <Image
            key={imgIdx}
            src={galleryImages[imgIdx]}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        {/* Next image (slide up from behind) */}
        {nextIdx !== null && (
          <div
            className="absolute w-full h-full top-0 left-0 transition-all duration-400 z-10"
            style={{
              transform: isAnimating
                ? "translateY(0%)"
                : "translateY(100%)",
              opacity: isAnimating ? 1 : 0,
              transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1), opacity ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
            }}
          >
            <Image
              key={nextIdx}
              src={galleryImages[nextIdx]}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        )}
      </div>
      {/* Decorations - always above the image and never animated, but tilts on hover */}
      <div className="pointer-events-none" style={{
        width: width,
        height: height,
        left: 0,
        top: 0,
        position: "absolute",
        transform: tilt,
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        zIndex: 30,
      }}>
        <div className="absolute top-80 left-[-20px] w-10 h-10 rotate-60 bg-[#7DB1FF] z-20"></div>
        <div className="absolute top-80 left-[-26px] w-9 h-9 rotate-50 outline outline-black outline-2 z-20"></div>
        <div className="absolute top-20 right-[-12px] rounded-full w-9 h-9 bg-[#7D7D7D] z-20"></div>
        <div className="absolute top-18 right-[-16px] w-9 h-9 z-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="black"
              strokeWidth="10"
              strokeDasharray="270 90"
              strokeDashoffset="0"
              transform="rotate(-200, 50, 50)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default StyledImage

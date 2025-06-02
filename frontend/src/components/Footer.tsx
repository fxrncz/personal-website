import React, { useMemo } from "react";
import Image from "next/image";
import { localGeorgia } from "@/app/fonts";

const FOOTER_STAR_COUNT = 80;

function getFooterStarStyle() {
  const top = Math.random() * 100;
  const duration = 10 + Math.random() * 24; // 32s to 56s
  const delay = Math.random() * 12;
  const isGlowing = Math.random() < 0.2;

  return {
    top: `${top}%`,
    left: `100%`,
    animation: `footer-star-move ${duration}s linear ${delay}s infinite`,
    width: `${1 + Math.random() * 1.2}px`,
    height: `${1 + Math.random() * 1.2}px`,
    borderRadius: "50%",
    background: "#fff",
    opacity: 0.08 + Math.random() * 0.15,
    position: "absolute" as const,
    boxShadow: isGlowing ? "0 0 6px 2px rgba(255,255,255,0.18)" : undefined,
  };
}

function FooterStars() {
  const stars = useMemo(
    () => Array.from({ length: FOOTER_STAR_COUNT }).map(() => getFooterStarStyle()),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((style, i) => (
        <span key={i} style={style} />
      ))}
      <style>
        {`
          @keyframes footer-star-move {
            0% {
              left: 100%;
              opacity: 0.7;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              left: -5%;
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={`relative w-full mt-10 ${localGeorgia.className} py-3 bg-black flex flex-col items-center overflow-hidden`}>
      <FooterStars />
      <h5 className="text-xl font-semibold text-white z-10">Francis Sua Oliver</h5>
      <a
        href="/coffee"
        className="text-base underline cursor-pointer text-white hover:text-yellow-300 z-10"
      >
        Buy me a coffee
      </a>
      <div className="flex gap-6 mt-1 mb-2 z-10">
        <a href="https://www.facebook.com/fxrncz" target="_blank" rel="noopener noreferrer">
          <Image src="/fb_icon.png" alt="Facebook" width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/il.ahown" target="_blank" rel="noopener noreferrer">
          <Image src="/ig_icon.png" alt="Instagram" width={28} height={28} />
        </a>
        <a href="https://github.com/fxrncz" target="_blank" rel="noopener noreferrer">
          <Image src="/github_icon.png" alt="GitHub" width={28} height={28} />
        </a>
      </div>
    </footer>
  );
}
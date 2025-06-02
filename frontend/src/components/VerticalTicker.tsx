import React from "react";
import { localGeorgia } from "@/app/fonts";

interface VerticalTickerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // seconds for one full scroll
  position?: "left" | "right";
}

const VerticalTicker: React.FC<VerticalTickerProps> = ({
  children,
  className = "",
  speed = 7,
  position = "left",
}) => {
  const animationClass =
    position === "left"
      ? "animate-vertical-ticker-viewport rotate-180"
      : "animate-vertical-ticker-viewport-down";

  // Use Tailwind's responsive classes for offset
  const positionClass = position === "left"
    ? "left-0 xl:left-10"
    : "right-0 xl:right-10";

  return (
    <div
      className={`fixed ${positionClass} top-0 w-10 pointer-events-none z-[10000] ${className}`}
      style={{ writingMode: "vertical-rl", textOrientation: "mixed", height: "100vh" }}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 text-black text-lg tracking-widest ${animationClass}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalTicker;


"use client"

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const STAR_COUNT = 120;

function getRandomStarStyle() {
  const top = Math.random() * 100;
  const duration = 16 + Math.random() * 24; // 32s to 56s (slow)
  const delay = Math.random() * 12;
  const isGlowing = Math.random() < 0.2; // 20% chance to glow

  return {
    top: `${top}%`,
    left: `-5%`,
    animation: `star-move ${duration}s linear ${delay}s infinite`,
    width: `${1 + Math.random() * 1.2}px`,
    height: `${1 + Math.random() * 1.2}px`,
    borderRadius: "50%",
    background: "#fff",
    opacity: 0.08 + Math.random() * 0.15,
    position: "absolute" as const,
    boxShadow: isGlowing ? "0 0 6px 2px rgba(255,255,255,0.25)" : undefined, // subtle glow
  };
}

function Stars({ keyReset }: { keyReset: number }) {
  const stars = useMemo(
    () => Array.from({ length: STAR_COUNT }).map(() => getRandomStarStyle()),
    [keyReset]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((style, i) => (
        <span key={i} style={style} />
      ))}
      <style>
        {`
          @keyframes star-move {
            0% {
              left: -5%;
              opacity: 0.7;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [starKey, setStarKey] = useState(0);
  const prevScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Only reset stars when transitioning from not-scrolled to scrolled
      if (isScrolled && !prevScrolled.current) {
        setStarKey((prev) => prev + 1);
      }
      prevScrolled.current = isScrolled;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 w-full py-10 animate-slide-in-left transition-all duration-300 z-[9999] overflow-hidden",
        scrolled ? "bg-black shadow-lg" : "bg-[#F6F6F6]"
      )}
    >
      {/* Only show and reset stars when scrolled */}
      {scrolled && <Stars keyReset={starKey} />}
      <div className="w-full relative z-10">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left - Logo */}
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              scrolled ? "text-white" : "text-black"
            )}
          >
            Francis Oliver
          </Link>
          {/* Mobile menu toggle button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu
              className={cn(
                "h-6 w-6 transition-colors duration-300",
                scrolled ? "text-white" : "text-black"
              )}
            />
          </button>
          {/* Desktop Nav and CTA */}
          <div className="hidden items-center md:flex">
            <div className="flex items-center gap-16 mr-14">
              <NavLink href="/" active scrolled={scrolled}>
                Home
              </NavLink>
              <NavLink href="/about" scrolled={scrolled}>
                About me
              </NavLink>
              <NavLink href="/projects" scrolled={scrolled}>
                My Projects
              </NavLink>
            </div>
            <Link
              href="/coffee"
              className={cn(
                "bg-black px-5 py-5 min-w-[120px] text-center text-base hover:bg-[#f3ff5e] hover:text-black hover:border-2 hover:border-black transition-all",
                scrolled
                  ? "text-black bg-white border border-white hover:bg-[#f3ff5e] hover:text-black"
                  : "text-white"
              )}
            >
              Buy Me A Coffee
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 px-4 py-4 shadow-lg md:hidden transition-colors duration-300",
          scrolled ? "bg-black" : "bg-[#F6F6F6]",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-4 px-2">
          <NavLink href="/" active scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink href="/about" scrolled={scrolled}>
            About me
          </NavLink>
          <NavLink href="/projects" scrolled={scrolled}>
            My Projects
          </NavLink>
          <Link
            href="/coffee"
            className={cn(
              "mt-2 block px-5 py-3 min-w-[120px] text-center text-lg transition-colors",
              scrolled
                ? "bg-white text-black border border-white hover:bg-[#f3ff5e] hover:text-black"
                : "bg-black text-white hover:bg-[#f3ff5e] hover:text-black"
            )}
          >
            Buy Me A Coffee
          </Link>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  scrolled?: boolean;
}

function NavLink({ href, children, active = false, scrolled = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative text-base transition-colors duration-200",
        active
          ? scrolled
            ? "text-white font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-1/2 after:bg-white"
            : "text-black font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-1/2 after:bg-black"
          : scrolled
          ? "text-white hover:text-[#f3ff5e] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-1/2 after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
          : "text-[#202020] hover:text-black after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-1/2 after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
}

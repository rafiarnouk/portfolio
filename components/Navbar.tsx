"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="#top" className="transition-all duration-500 ease-out group-hover:scale-110 inline-flex items-center">
      <Image src="/ralogo.svg" alt="logo" width={32} height={32} />
    </Link>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
      <Link
        href={href}
        className="transition-all duration-200 hover:font-bold uppercase"
      >
      {children}
      </Link>
  );
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < prevScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        // Hide navbar when scrolling down past threshold
        setIsVisible(false);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav className={`fixed top-0 z-20 w-full px-8 py-4 flex items-center justify-between bg-background/70 backdrop-blur-md transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="flex items-center group">
        <Logo />
      </div>
      <div className="flex items-center gap-12 text-lg">
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}
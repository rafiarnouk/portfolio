"use client";

import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Image src="/ralogo.svg" alt="logo" width={32} height={32} className="transition-all duration-500 ease-out group-hover:scale-110"/>
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
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between">
      <div className="flex items-center group">
        <Logo />
      </div>

      <div className="flex items-center gap-12 text-lg">
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}
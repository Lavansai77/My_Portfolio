"use client";

import profile from "@/data/profile.json";
// Import modern fonts from Google via Next.js
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo with Space Grotesk Font */}
        <button
          onClick={() => scrollToSection("home")}
          className={`${spaceGrotesk.className} text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors`}
        >
          {profile.name.split(' ').map(n => n[0]).join('')}
          <span className="text-accent">.</span>
        </button>

        {/* Nav with Inter Font */}
        <nav className={`${inter.className} hidden gap-8 md:flex`}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="group relative text-[13px] font-medium tracking-wide text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* GitHub Button */}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={`${inter.className} hidden sm:block rounded-full border border-slate-700 bg-slate-900/50 px-5 py-2 text-xs font-bold text-white hover:border-accent hover:bg-slate-800 transition-all`}
        >
          GitHub
        </a>
      </div>
    </header>
  );
}